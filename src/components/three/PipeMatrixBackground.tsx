'use client';

import { useEffect, useRef } from 'react';
import {
    WebGLRenderer,
    ACESFilmicToneMapping,
    Scene,
    Color,
    FogExp2,
    PerspectiveCamera,
    AmbientLight,
    DirectionalLight,
    MeshPhysicalMaterial,
    TorusGeometry,
    Group,
    Vector3,
    CylinderGeometry,
    Mesh,
    Matrix4,
} from 'three';

// ═══════════════════════════════════════════════════════════════
// ORTHOGONAL INDUSTRIAL MATRIX — Procedural 3D Pipe Grid
// ═══════════════════════════════════════════════════════════════
// Pure-white scene. Glossy Industrial-Orange UPVC pipes.
// Torus quarter-arc elbows at every 90° turn — no spheres.
// Canvas: position fixed, z-index -10, pointer-events none.
// ═══════════════════════════════════════════════════════════════

// ── Tuning ──
const GRID_SIZE = 14;
const PIPE_COUNT = 40;
const SEGMENTS_PER_PIPE = 7;
const PIPE_RADIUS = 0.14;
const ELBOW_RADIUS = 0.30;   // Bend radius for torus elbows
const GRID_SCALE = 2.0;

// ── Colors ──
const BG_COLOR = 0xffffff;
const FOG_COLOR = 0xffffff;
const INDUSTRIAL_ORANGE = 0xff5a00;

// ── Cardinal Directions ──
const DIRS = [
    new Vector3(1, 0, 0),
    new Vector3(-1, 0, 0),
    new Vector3(0, 1, 0),
    new Vector3(0, -1, 0),
    new Vector3(0, 0, 1),
    new Vector3(0, 0, -1),
];

export default function PipeMatrixBackground({
    className = '',
    style,
}: {
    className?: string;
    style?: React.CSSProperties;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // ── Renderer ──
        const renderer = new WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.toneMapping = ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.4;
        container.appendChild(renderer.domElement);

        // ── Scene ──
        const scene = new Scene();
        scene.background = new Color(BG_COLOR);
        scene.fog = new FogExp2(FOG_COLOR, 0.025);

        // ── Camera ──
        const camera = new PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            100,
        );
        camera.position.set(0, 0, 20);

        // ── Studio Lighting (bright white) ──
        const ambient = new AmbientLight(0xffffff, 0.6);
        scene.add(ambient);

        const keyLight = new DirectionalLight(0xffffff, 1.2);
        keyLight.position.set(10, 15, 10);
        scene.add(keyLight);

        const fillLight = new DirectionalLight(0xffffff, 0.6);
        fillLight.position.set(-10, 5, -5);
        scene.add(fillLight);

        const rimLight = new DirectionalLight(0xffeedd, 0.4);
        rimLight.position.set(0, -10, 10);
        scene.add(rimLight);

        // ── Material — Glossy Industrial Orange UPVC ──
        const pipeMat = new MeshPhysicalMaterial({
            color: INDUSTRIAL_ORANGE,
            roughness: 0.15,
            metalness: 0.05,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
            reflectivity: 1.0,
            specularIntensity: 1.0,
        });

        // ── Shared Geometries ──
        const elbowGeo = new TorusGeometry(
            ELBOW_RADIUS, PIPE_RADIUS, 16, 12, Math.PI / 2,
        );

        const gridGroup = new Group();
        scene.add(gridGroup);

        // ────────────────────────────────────────────────
        // Helper: create a cylinder pipe between two world-space points
        // ────────────────────────────────────────────────
        const yAxis = new Vector3(0, 1, 0);

        function addPipe(from: Vector3, to: Vector3) {
            const diff = to.clone().sub(from);
            const length = diff.length();
            if (length < 0.01) return;

            const geo = new CylinderGeometry(
                PIPE_RADIUS, PIPE_RADIUS, length, 16,
            );
            const mesh = new Mesh(geo, pipeMat);
            mesh.position.copy(from).add(to).multiplyScalar(0.5);

            const dir = diff.clone().normalize();
            mesh.quaternion.setFromUnitVectors(yAxis, dir);
            gridGroup.add(mesh);
        }

        // ────────────────────────────────────────────────
        // Helper: create a quarter-torus elbow at a junction
        //
        //  Rotation Math (CORRECTED)
        //  ─────────────────────────
        //  THREE.js TorusGeometry (arc = π/2) draws its arc
        //  from the +X axis toward the +Y axis.
        //
        //  For a turn from inDir → outDir at junction P:
        //    X-axis → start of arc  → -outDir
        //    Y-axis → end of arc    →  inDir
        //    Z-axis → plane normal  →  cross(-outDir, inDir)
        //
        //  makeBasis(-outDir, inDir, cross(-outDir, inDir))
        //
        //  Torus centre: C = P - R·inDir + R·outDir
        // ────────────────────────────────────────────────
        function addElbow(
            junctionWorld: Vector3,
            inDir: Vector3,
            outDir: Vector3,
        ) {
            const negOut = outDir.clone().negate();
            const basisX = negOut;
            const basisY = inDir.clone();
            const basisZ = new Vector3()
                .crossVectors(negOut, inDir)
                .normalize();

            const rotMat = new Matrix4().makeBasis(basisX, basisY, basisZ);

            const mesh = new Mesh(elbowGeo, pipeMat);
            mesh.quaternion.setFromRotationMatrix(rotMat);
            mesh.position
                .copy(junctionWorld)
                .addScaledVector(inDir, -ELBOW_RADIUS)
                .addScaledVector(outDir, ELBOW_RADIUS);

            gridGroup.add(mesh);
        }

        // ────────────────────────────────────────────────
        // Procedural pipe generation (two-pass)
        // ────────────────────────────────────────────────
        interface Seg {
            from: Vector3;
            to: Vector3;
            dir: Vector3;
        }

        for (let i = 0; i < PIPE_COUNT; i++) {
            const startGrid = new Vector3(
                Math.floor((Math.random() - 0.5) * GRID_SIZE),
                Math.floor((Math.random() - 0.5) * GRID_SIZE),
                Math.floor((Math.random() - 0.5) * GRID_SIZE / 2),
            );

            // Pass 1 — build path
            const segs: Seg[] = [];
            const pos = startGrid.clone();
            let prevDir: Vector3 | null = null;

            for (let s = 0; s < SEGMENTS_PER_PIPE; s++) {
                let dir: Vector3;
                let guard = 0;
                do {
                    dir = DIRS[Math.floor(Math.random() * DIRS.length)];
                    guard++;
                } while (
                    guard < 20 &&
                    prevDir != null &&
                    (dir.equals(prevDir) ||
                        dir.dot(prevDir) < -0.9)
                );

                const len = 1 + Math.floor(Math.random() * 2);
                const wFrom = pos.clone().multiplyScalar(GRID_SCALE);
                pos.addScaledVector(dir, len);
                const wTo = pos.clone().multiplyScalar(GRID_SCALE);

                segs.push({ from: wFrom, to: wTo, dir: dir.clone() });
                prevDir = dir.clone();
            }

            // Pass 2 — emit geometry
            for (let s = 0; s < segs.length; s++) {
                const seg = segs[s];
                const prev = s > 0 ? segs[s - 1] : null;
                const next = s < segs.length - 1 ? segs[s + 1] : null;

                const pipeStart = seg.from.clone();
                const pipeEnd = seg.to.clone();

                // Shorten start if elbow precedes
                const hasElbowAtStart =
                    prev != null && !prev.dir.equals(seg.dir);
                if (hasElbowAtStart) {
                    pipeStart.addScaledVector(seg.dir, ELBOW_RADIUS);
                }

                // Shorten end if elbow follows
                const hasElbowAtEnd =
                    next != null && !next.dir.equals(seg.dir);
                if (hasElbowAtEnd) {
                    pipeEnd.addScaledVector(seg.dir, -ELBOW_RADIUS);
                }

                addPipe(pipeStart, pipeEnd);

                // Emit elbow at the END of this segment
                if (hasElbowAtEnd && next) {
                    addElbow(seg.to, seg.dir, next.dir);
                }
            }
        }

        // ── Interaction ──
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            targetRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // ── Animation loop ──
        let raf: number;
        const animate = () => {
            raf = requestAnimationFrame(animate);

            mouseRef.current.x +=
                (targetRef.current.x - mouseRef.current.x) * 0.05;
            mouseRef.current.y +=
                (targetRef.current.y - mouseRef.current.y) * 0.05;

            camera.position.x = mouseRef.current.x * 2;
            camera.position.y = mouseRef.current.y * 2;
            camera.lookAt(0, 0, 0);

            gridGroup.rotation.x += 0.0005;
            gridGroup.rotation.y += 0.0008;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                ...style,
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                pointerEvents: 'none',
                background: '#ffffff',
            }}
        />
    );
}
