/**
 * patch_all_images.mjs
 * Updates image paths across all 5 fitting categories:
 *  1. BS EN 1329  — fix parent folder + colorVariants
 *  2. BS EN 1401  — already correct paths (verify only)
 *  3. PushFit     — populate fittings[] in upvcDrainageFittingsData.ts
 *  4. ASTM D2466  — update placeholder images in pvcSch40FittingsData.ts
 *  5. Valves      — update placeholder images in pvcHighPressureFittingsData.ts
 */

import { readFileSync, writeFileSync } from 'fs';

// ─────────────────────────────────────────────────────────────────────────────
// 1) drainageData.ts  — BS EN 1329 path fix + BS EN 1401 path verify
// ─────────────────────────────────────────────────────────────────────────────
const drainagePath = './src/config/productDetails/drainageData.ts';
let drainage = readFileSync(drainagePath, 'utf8');

// Fix BS EN 1329: old prefix is wrong, missing 'UPVC DRAINAGE FITTINGS/' parent dir
drainage = drainage.replaceAll(
  "'/images/fittings/UPVC-DRAINAGE-FITTING-BS-EN-1329/",
  "'/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/"
);
// Also fix colorVariants occurrences (they use the same prefix inside the object)
drainage = drainage.replaceAll(
  '"/images/fittings/UPVC-DRAINAGE-FITTING-BS-EN-1329/',
  '"/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/'
);

// Fix the parapet floor drain filename: "parapetfloordrain.png" -> "parapet floordrain.png"
// (the actual file is "parapet floordrain.png" with a space)
drainage = drainage.replaceAll(
  'UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/parapetfloordrain.png',
  'UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/parapet floordrain.png'
);
drainage = drainage.replaceAll(
  'UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/parapetfloordrain.png',
  'UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/parapet floordrain.png'
);

// BS EN 1401 path fix: old paths already have 'UPVC Drainage Fittings BS EN 1401/orange/'
// But they're missing the parent 'UPVC DRAINAGE FITTINGS/'
drainage = drainage.replaceAll(
  "'/images/fittings/UPVC Drainage Fittings BS EN 1401/",
  "'/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/"
);

writeFileSync(drainagePath, drainage, 'utf8');
console.log('✅ drainageData.ts updated (BS EN 1329 + BS EN 1401 paths fixed)');

// ─────────────────────────────────────────────────────────────────────────────
// 2) upvcDrainageFittingsData.ts — add PushFit fittings[] array
// ─────────────────────────────────────────────────────────────────────────────
const pushfitPath = './src/config/productDetails/upvcDrainageFittingsData.ts';
let pushfit = readFileSync(pushfitPath, 'utf8');

const BASE_PUSHFIT = '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/';

const pushfitFittings = `[
    {
      id: 'pushfit-30-sweep-single-rubber',
      name: '30° SWEEP WITH SINGLE RUBBER SOCKETS',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}30sweepwithsinglerubbersockets.png',
      sizes: [],
      table: { id: 'pushfit-30-sweep-single-rubber', title: '30° Sweep With Single Rubber Sockets', columns: [], rows: [] },
    },
    {
      id: 'pushfit-elbow-45',
      name: 'ELBOW 45°',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}45elbow.png',
      sizes: [],
      table: { id: 'pushfit-elbow-45', title: 'Elbow 45°', columns: [], rows: [] },
    },
    {
      id: 'pushfit-elbow-90-mf',
      name: 'ELBOW 90° MALE/FEMALE',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}90elbowmf.png',
      sizes: [],
      table: { id: 'pushfit-elbow-90-mf', title: 'Elbow 90° Male/Female', columns: [], rows: [] },
    },
    {
      id: 'pushfit-90-saddle-branch',
      name: '90° SADDLE BRANCH',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}90saddlebranch.png',
      sizes: [],
      table: { id: 'pushfit-90-saddle-branch', title: '90° Saddle Branch', columns: [], rows: [] },
    },
    {
      id: 'pushfit-90-sweep-double-socket-rings',
      name: '90° SWEEP WITH DOUBLE SOCKET RINGS',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}90sweepwithdoublesocketrings.png',
      sizes: [],
      table: { id: 'pushfit-90-sweep-double-socket-rings', title: '90° Sweep With Double Socket Rings', columns: [], rows: [] },
    },
    {
      id: 'pushfit-90-sweep-single-socket-rings',
      name: '90° SWEEP WITH SINGLE SOCKET RINGS',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}90sweepwithsinglesocketrings.png',
      sizes: [],
      table: { id: 'pushfit-90-sweep-single-socket-rings', title: '90° Sweep With Single Socket Rings', columns: [], rows: [] },
    },
    {
      id: 'pushfit-inspection-elbow-mf',
      name: 'INSPECTION ELBOW M/F',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}Inspection_Elbow_M_F_202604110107.png',
      sizes: [],
      table: { id: 'pushfit-inspection-elbow-mf', title: 'Inspection Elbow M/F', columns: [], rows: [] },
    },
    {
      id: 'pushfit-inspection-port-mf',
      name: 'INSPECTION PORT M/F',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}Inspection_Port_M_F_202604110131.png',
      sizes: [],
      table: { id: 'pushfit-inspection-port-mf', title: 'Inspection Port M/F', columns: [], rows: [] },
    },
    {
      id: 'pushfit-door-elbow',
      name: 'PVC DOOR ELBOW',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}PVC_Door_Elbow_202604110104.png',
      sizes: [],
      table: { id: 'pushfit-door-elbow', title: 'PVC Door Elbow', columns: [], rows: [] },
    },
    {
      id: 'pushfit-reducing-skew-tee-mf',
      name: 'REDUCING SKEW TEE MALE/FEMALE',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}Reducing Skew Tee Malefemale.png',
      sizes: [],
      table: { id: 'pushfit-reducing-skew-tee-mf', title: 'Reducing Skew Tee Male/Female', columns: [], rows: [] },
    },
    {
      id: 'pushfit-skew-tee-three-rubber-rings',
      name: 'SKEW TEE WITH THREE RUBBER RINGS',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}Skew Tee with Three Rubber Rings.png',
      sizes: [],
      table: { id: 'pushfit-skew-tee-three-rubber-rings', title: 'Skew Tee with Three Rubber Rings', columns: [], rows: [] },
    },
    {
      id: 'pushfit-tee-3-socket-rubber-equal',
      name: 'TEE WITH 3 SOCKET RUBBER (EQUAL TEE)',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}Tee with 3 Socket Rubber (Equal Tee).png',
      sizes: [],
      table: { id: 'pushfit-tee-3-socket-rubber-equal', title: 'Tee with 3 Socket Rubber (Equal Tee)', columns: [], rows: [] },
    },
    {
      id: 'pushfit-coupling',
      name: 'COUPLING',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}coupling.png',
      sizes: [],
      table: { id: 'pushfit-coupling', title: 'Coupling', columns: [], rows: [] },
    },
    {
      id: 'pushfit-door-tee-rubber',
      name: 'DOOR TEE WITH RUBBER',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}doorteewithrubber.png',
      sizes: [],
      table: { id: 'pushfit-door-tee-rubber', title: 'Door Tee With Rubber', columns: [], rows: [] },
    },
    {
      id: 'pushfit-inspection-male-female',
      name: 'INSPECTION MALE/FEMALE',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}inspectionmalefemale.png',
      sizes: [],
      table: { id: 'pushfit-inspection-male-female', title: 'Inspection Male/Female', columns: [], rows: [] },
    },
    {
      id: 'pushfit-reducing-coupler',
      name: 'REDUCING COUPLER',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}reducingcoupler.png',
      sizes: [],
      table: { id: 'pushfit-reducing-coupler', title: 'Reducing Coupler', columns: [], rows: [] },
    },
    {
      id: 'pushfit-reducing-tee-mf',
      name: 'REDUCING TEE M/F',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}reducingteemf.png',
      sizes: [],
      table: { id: 'pushfit-reducing-tee-mf', title: 'Reducing Tee M/F', columns: [], rows: [] },
    },
    {
      id: 'pushfit-skew-tee-mf',
      name: 'SKEW TEE M/F',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}skew tee mf.png',
      sizes: [],
      table: { id: 'pushfit-skew-tee-mf', title: 'Skew Tee M/F', columns: [], rows: [] },
    },
    {
      id: 'pushfit-tee-mf-gasket',
      name: 'TEE M/F WITH GASKET',
      family: 'moulded' as const,
      image: '${BASE_PUSHFIT}tee mf with gasket.png',
      sizes: [],
      table: { id: 'pushfit-tee-mf-gasket', title: 'Tee M/F with Gasket', columns: [], rows: [] },
    },
  ]`;

// Replace the empty fittings array in the pushfit section
pushfit = pushfit.replace(
  /pipesTables: \[\],\r?\n  fittings: \[\],\r?\n\r?\n  dosDonts/,
  `pipesTables: [],\n  fittings: ${pushfitFittings},\n\n  dosDonts`
);

writeFileSync(pushfitPath, pushfit, 'utf8');
console.log('✅ upvcDrainageFittingsData.ts updated (PushFit fittings populated)');

// ─────────────────────────────────────────────────────────────────────────────
// 3) pvcSch40FittingsData.ts — ASTM D 2466 images
// ─────────────────────────────────────────────────────────────────────────────
const sch40Path = './src/config/productDetails/pvcSch40FittingsData.ts';
let sch40 = readFileSync(sch40Path, 'utf8');

const BASE_SCH40 = '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/';

// Map fitting IDs to their actual image filenames
const sch40ImageMap = {
  'astm-d-2466-elbow-90':                              'elbow907.png',
  'astm-d-2466-elbow-45':                              null, // no separate 45 image; use same elbow file
  'astm-d-2466-female-elbow-90':                       'femalethreadedadaptor.png',
  'astm-d-2466-socket-coupler':                        'Socket.png',
  'astm-d-2466-reducer-bush-socket':                   'reducer.png',
  'astm-d-2466-male-threaded-adaptor-socket-nipple-socket': 'Male_Threaded_Adaptor_Final.png',
  'astm-d-2466-female-threaded-adaptor-socket':        'femalethreadedadaptor.png',
  'astm-d-2466-equal-tee':                             'equaltee.png',
  'astm-d-2466-reducing-tee':                          'reducingtee.png',
  'astm-d-2466-female-threaded-reducing-tee':          'femalereducingtee.png',
  'astm-d-2466-female-threaded-equal-tee':             'femaleequaltee.png',
  'astm-d-2466-female-threaded-reducer-bush':          'femalereducerbush.png',
  'astm-d-2466-union':                                 'union.png',
  'astm-d-2466-flanges-with-stub':                     null,   // no specific flange image
  'astm-d-2466-hex-nipple':                            'hex nipple.png',
  'astm-d-2466-repair-socket-convertable-socket':      'Socket.png',
  'astm-d-2466-end-cap':                               null,   // no specific end-cap image
};

// Replace all placeholder images for known ASTM D2466 fittings
for (const [id, filename] of Object.entries(sch40ImageMap)) {
  if (!filename) continue;
  const newPath = `${BASE_SCH40}${filename}`;
  // Match the pattern: id: "astm-d-2466-xxx", ... image: '/images/products/placeholders/fitting-placeholder.jpg',
  const regex = new RegExp(
    `(id:\\s*"${id.replace(/-/g, '\\-')}",(?:[^}](?!image))*?\\n\\s*image:\\s*)'/images/products/placeholders/fitting-placeholder\\.jpg'`,
    's'
  );
  sch40 = sch40.replace(regex, `$1'${newPath}'`);
}

writeFileSync(sch40Path, sch40, 'utf8');
console.log('✅ pvcSch40FittingsData.ts updated (ASTM D 2466 images mapped)');

// ─────────────────────────────────────────────────────────────────────────────
// 4) pvcHighPressureFittingsData.ts — Valves images
// ─────────────────────────────────────────────────────────────────────────────
const valvesPath = './src/config/productDetails/pvcHighPressureFittingsData.ts';
let valves = readFileSync(valvesPath, 'utf8');

const BASE_VALVES = '/images/fittings/PVC High PRESSURE FITTINGS/Valves/';

const valveImageMap = {
  'pvc-high-pressure-union':             'High_Pressure_Union.png',
  'pvc-high-pressure-compact-ball-valve':'Compact_Ball_Valve.png',
  'pvc-high-pressure-true-union':        'True_Union_Ball.png',
  'pvc-high-pressure-single-union':      'Single_Union_Ball.png',
};

for (const [id, filename] of Object.entries(valveImageMap)) {
  const newPath = `${BASE_VALVES}${filename}`;
  const regex = new RegExp(
    `(id:\\s*"${id.replace(/-/g, '\\-')}",(?:[^}](?!image))*?\\n\\s*image:\\s*)'/images/products/placeholders/fitting-placeholder\\.jpg'`,
    's'
  );
  valves = valves.replace(regex, `$1'${newPath}'`);
}

writeFileSync(valvesPath, valves, 'utf8');
console.log('✅ pvcHighPressureFittingsData.ts updated (Valves images mapped)');

console.log('\n🎉 All image paths updated successfully!');
