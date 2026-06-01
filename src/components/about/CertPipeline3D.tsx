'use client';

import { Suspense, useRef, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { Text, Environment } from '@react-three/drei';
import * as THREE from 'three';
import type { Certification } from './about.types';

// ═══════════════════════════════════════════════════════════════════════════════
// 3D INTERACTIVE PIPELINE — Serpentine Logic & Transparent Canvas
// ═══════════════════════════════════════════════════════════════════════════════

// Layout config
const PIPE_LENGTH = 2.4;
const PIPE_RADIUS = 0.28;
const H_GAP = 0.1; 
const H_SPACING = PIPE_LENGTH + H_GAP;

const ELBOW_RADIUS = 0.4;
const V_GAP = 1.4;

const JOINT_RADIUS = PIPE_RADIUS + 0.04;
const JOINT_LENGTH = 0.5;

// Shared colors
const ORANGE_COLOR = new THREE.Color('#E06A1B');
const BLACK_COLOR = new THREE.Color('#1A1A1A');
const JOINT_COLOR = new THREE.Color('#333333');

// ─────────────────────────────────────────────────────────────────────────────
// PRE-COMPUTED MEMOIZED RESOURCES (Prevents repeated draw calls)
// ─────────────────────────────────────────────────────────────────────────────

const sharedPipeGeometry = new THREE.CylinderGeometry(PIPE_RADIUS, PIPE_RADIUS, PIPE_LENGTH, 32, 1, false);
const sharedJointGeometry = new THREE.CylinderGeometry(JOINT_RADIUS, JOINT_RADIUS, JOINT_LENGTH, 32, 1, false);
const sharedElbowGeometry = new THREE.TorusGeometry(ELBOW_RADIUS, PIPE_RADIUS, 16, 32, Math.PI / 2);
const sharedVerticalDropGeometry = new THREE.CylinderGeometry(PIPE_RADIUS, PIPE_RADIUS, V_GAP - 2 * ELBOW_RADIUS, 32, 1);

const sharedOrangeMaterial = new THREE.MeshStandardMaterial({
  color: ORANGE_COLOR,
  metalness: 0.0,
  roughness: 0.4,
  envMapIntensity: 0.6
});

const sharedBlackMaterial = new THREE.MeshStandardMaterial({
  color: BLACK_COLOR,
  metalness: 0.1,
  roughness: 0.35,
  envMapIntensity: 0.6
});

const sharedJointMaterial = new THREE.MeshStandardMaterial({
  color: JOINT_COLOR,
  metalness: 0.1,
  roughness: 0.4,
  envMapIntensity: 0.6
});

// ─────────────────────────────────────────────────────────────────────────────
// RESPONSIVE COLUMNS HOOK (Client-side window size)
// ─────────────────────────────────────────────────────────────────────────────

function useResponsiveColumns() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCols(2);
      else if (window.innerWidth < 1024) setCols(3);
      else if (window.innerWidth < 1280) setCols(4);
      else setCols(5);
    };
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return cols;
}

// ─────────────────────────────────────────────────────────────────────────────
// CAMERA RIG — Auto-frames the grid to take up 85-95% of canvas
// ─────────────────────────────────────────────────────────────────────────────

function CameraRig({ gridWidth, gridHeight }: { gridWidth: number, gridHeight: number }) {
  const { camera, size } = useThree();
  useEffect(() => {
    if (camera.type === 'PerspectiveCamera') {
      const pCam = camera as THREE.PerspectiveCamera;
      const aspect = size.width / size.height;
      const padding = window.innerWidth < 768 ? 1.4 : 1.15; // More padding on mobile
      
      const targetWidth = gridWidth * padding;
      const targetHeight = gridHeight * padding;
      
      const fovRad = (pCam.fov * Math.PI) / 180;
      const zForWidth = targetWidth / (2 * Math.tan(fovRad / 2) * aspect);
      const zForHeight = targetHeight / (2 * Math.tan(fovRad / 2));
      
      pCam.position.z = Math.max(zForWidth, zForHeight, 5);
      pCam.updateProjectionMatrix();
    }
  }, [gridWidth, gridHeight, size, camera]);
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// PIPE SEGMENT — Horizontal cylinder
// ─────────────────────────────────────────────────────────────────────────────

interface PipeSegmentProps {
  position: [number, number, number];
  label: string;
  isHighlighted: boolean;
  onClick: () => void;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
}

function PipeSegment({ position, label, isHighlighted, onClick, onPointerOver, onPointerOut }: PipeSegmentProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetZ = isHighlighted ? 0.3 : 0;
    const targetScale = isHighlighted ? 1.04 : 1;
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, delta * 8);
    const s = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, delta * 8);
    groupRef.current.scale.set(s, s, s);
  });

  return (
    <group position={position}>
      <group ref={groupRef}>
        <mesh
          rotation={[0, 0, Math.PI / 2]}
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          onPointerOver={(e) => { document.body.style.cursor = 'pointer'; onPointerOver(e); }}
          onPointerOut={(e) => { document.body.style.cursor = 'auto'; onPointerOut(e); }}
          castShadow
          geometry={sharedPipeGeometry}
          material={!isHighlighted ? sharedOrangeMaterial : sharedBlackMaterial}
        />

        <Text
          position={[0, 0, PIPE_RADIUS + 0.08]}
          fontSize={0.16}
          fontWeight="bold"
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.025}
          outlineColor="#000000"
          maxWidth={PIPE_LENGTH * 0.85}
          textAlign="center"
          characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-: ,."
        >
          {label}
        </Text>
      </group>
    </group>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STRAIGHT JOINT (COUPLER)
// ─────────────────────────────────────────────────────────────────────────────

function StraightJoint({ position }: { position: [number, number, number] }) {
  return (
    <mesh 
      position={position} 
      rotation={[0, 0, Math.PI / 2]} 
      castShadow
      geometry={sharedJointGeometry}
      material={sharedJointMaterial}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// U-TURN (ELBOWS + VERTICAL DROP)
// ─────────────────────────────────────────────────────────────────────────────

function UTurn({ position, isRight }: { position: [number, number, number], isRight: boolean }) {
  const [x, y, z] = position;
  const R = ELBOW_RADIUS;
  
  return (
    <group position={[x, y, z]}>
      {/* Top Elbow (quarter circle) */}
      <mesh 
        position={[0, -R, 0]} 
        rotation={[0, 0, isRight ? 0 : Math.PI / 2]} 
        castShadow
        geometry={sharedElbowGeometry}
        material={sharedJointMaterial}
      />

      {/* Vertical Connection */}
      <mesh 
        position={[isRight ? R : -R, -V_GAP / 2, 0]} 
        castShadow
        geometry={sharedVerticalDropGeometry}
        material={sharedJointMaterial}
      />

      {/* Bottom Elbow */}
      <mesh 
        position={[0, -V_GAP + R, 0]} 
        rotation={[0, 0, isRight ? -Math.PI / 2 : Math.PI]} 
        castShadow
        geometry={sharedElbowGeometry}
        material={sharedJointMaterial}
      />
    </group>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE SCENE
// ─────────────────────────────────────────────────────────────────────────────

interface PipelineSceneProps {
  certs: Certification[];
  activeCert: string | null;
  onCertClick: (id: string) => void;
}

function PipelineScene({ certs, activeCert, onCertClick }: PipelineSceneProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = certs.findIndex(c => c.id === activeCert);
  
  const cols = useResponsiveColumns();
  const totalRows = Math.ceil(certs.length / cols);

  // Group centering calculations
  const cx = ((cols - 1) * H_SPACING) / 2;
  const cy = -((totalRows - 1) * V_GAP) / 2;
  
  const gridWidth = (cols - 1) * H_SPACING + PIPE_LENGTH + ELBOW_RADIUS * 4;
  const gridHeight = (totalRows - 1) * V_GAP + PIPE_RADIUS * 2;

  return (
    <>
      <CameraRig gridWidth={gridWidth} gridHeight={gridHeight} />
      
      <group position={[-cx, -cy, 0]}>
        {/* Pipe Segments */}
        {certs.map((cert, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const isReversed = row % 2 === 1;
          const xPos = (isReversed ? (cols - 1 - col) : col) * H_SPACING;
          const yPos = -(row * V_GAP);
          const isHighlighted = activeIndex === index || hoveredIndex === index;
          
          return (
            <PipeSegment
              key={cert.id}
              position={[xPos, yPos, 0]}
              label={cert.code}
              isHighlighted={isHighlighted}
              onClick={() => onCertClick(cert.id)}
              onPointerOver={(e) => { e.stopPropagation(); setHoveredIndex(index); }}
              onPointerOut={() => setHoveredIndex(null)}
            />
          );
        })}

        {/* Straight Horizontal Couplings */}
        {certs.map((cert, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          // Don't place a joint at the end of the data array if it stops mid-row
          if (col < cols - 1 && index < certs.length - 1) {
            const isReversed = row % 2 === 1;
            // The coupling is halfway between `col` and `col+1`
            const xPos = (isReversed ? (cols - 1 - col - 0.5) : (col + 0.5)) * H_SPACING;
            const yPos = -(row * V_GAP);
            return <StraightJoint key={`joint-${index}`} position={[xPos, yPos, 0]} />;
          }
          return null;
        })}

        {/* End U-Turns and End Couplings */}
        {Array.from({ length: totalRows - 1 }).map((_, row) => {
          const isRight = row % 2 === 0;
          const xPos = isRight ? (cols - 1) * H_SPACING + PIPE_LENGTH / 2 : 0 - PIPE_LENGTH / 2;
          const yPos = -(row * V_GAP);

          return (
            <group key={`uturn-${row}`}>
              <StraightJoint position={[xPos, yPos, 0]} />
              <UTurn position={[xPos, yPos, 0]} isRight={isRight} />
              <StraightJoint position={[xPos, yPos - V_GAP, 0]} />
            </group>
          );
        })}
      </group>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORTED COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface CertPipeline3DProps {
  certs: Certification[];
  activeCert: string | null;
  onCertClick: (id: string) => void;
}

export default function CertPipeline3D({ certs, activeCert, onCertClick }: CertPipeline3DProps) {
  const handleClick = useCallback(
    (id: string) => onCertClick(id === activeCert ? '' : id),
    [activeCert, onCertClick]
  );

  return (
    // Removed dark background styling entirely, kept highly transparent
    <div className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] mb-8 relative z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Environment preset="warehouse" />

          {/* Adjust lights for a transparent setup (no floor reflections) */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 10]} intensity={1.2} />
          <directionalLight position={[-4, -2, 8]} intensity={0.6} color="#ffffff" />
          <pointLight position={[0, 0, 8]} intensity={0.4} color="#ffffff" />

          <PipelineScene
            certs={certs}
            activeCert={activeCert}
            onCertClick={handleClick}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
