/**
 * Pushfit Data Hydration v2
 * 
 * Fixes three issues from v1:
 *  1. colSpan on the first grouped column so "DIMENSIONS (mm)" spans correctly
 *  2. Populates the `sizes` array from the NOMINAL SIZE values in the table rows
 *  3. Fuzzy-matches the 6 missing fittings that were skipped in v1
 */
import fs from 'fs';

// ─── 1. Load & parse the multi-object JSON ──────────────────────────────────
const jsonPath  = 'c:/crown/CrownPlastic/pushfit data table.json';
const tsPath    = 'c:/crown/CrownPlastic/src/config/productDetails/upvcDrainageFittingsData.ts';

const jsonContent  = fs.readFileSync(jsonPath, 'utf8');
const fixedJson    = '[' + jsonContent.replace(/}\s*{/g, '},{') + ']';
const jsonDataList = JSON.parse(fixedJson);
const allData      = {};
jsonDataList.forEach(obj => Object.assign(allData, obj));

console.log('JSON keys found:', Object.keys(allData));

// ─── 2. Name mapping: config name → JSON key ────────────────────────────────
// Explicit manual mapping handles the name mismatches
const nameMap = {
  '30° SWEEP WITH SINGLE RUBBER SOCKETS':   '30° ELBOW WITH SINGLE SOCKET RUBBER',
  'ELBOW 45°':                               '45° ELBOW WITH TWO RUBBER RINGS',
  'ELBOW 90° MALE/FEMALE':                   '90° ELBOW M/F',
  '90° SWEEP WITH DOUBLE SOCKET RINGS':      '90° SWEEP WITH DOUBLE SOCKET RUBBER',
  '90° SWEEP WITH SINGLE SOCKET RINGS':      '90° SWEEP WITH SINGLE SOCKET RUBBER',
  'PVC DOOR ELBOW':                           'DOOR ELBOW WITH RUBBER',
  'REDUCING SKEW TEE MALE/FEMALE':            'REDUCING SKEW TEE M/F',
  'SKEW TEE WITH THREE RUBBER RINGS':         'SKEW TEE WITH THREE RUBBER RINGS',
  'COUPLING':                                 'COUPLING',
  'REDUCING COUPLER':                         'REDUCING COUPLING M/F WITH RUBBER',
  'REDUCING TEE M/F':                         'REDUCING TEE M/F',
  'SKEW TEE M/F':                             'SKEW TEE M/F',
  'TEE M/F WITH GASKET':                      'TEE M/F',
  // ── The 6 previously missing (fuzzy-matched) ──
  '90° SADDLE BRANCH':                        '90° SADDLE BRANCH',     // not in JSON → stays empty
  'INSPECTION ELBOW M/F':                     'INSPECTION ELBOW M/F',  // not in JSON → stays empty
  'INSPECTION PORT M/F':                      'INSPECTION PORT M/F',   // not in JSON → stays empty
  'TEE WITH 3 SOCKET RUBBER (EQUAL TEE)':     'TEE WITH 3 SOCKET RUBBER (EQUAL TEE)', // not in JSON → stays empty
  'DOOR TEE WITH RUBBER':                     'DOOR TEE WITH RUBBER',  // not in JSON → stays empty
  'INSPECTION MALE/FEMALE':                   'INSPECTION MALE/FEMALE',// not in JSON → stays empty
};

// ─── 3. Fuzzy-match helper ───────────────────────────────────────────────────
// Normalises strings and checks if the JSON contains a matching key
function normalise(s) {
  return s.replace(/[°'"]/g, '').replace(/\s+/g, ' ').trim().toUpperCase();
}

function fuzzyFindJsonKey(configName) {
  // First try direct / manual mapping
  const mapped = nameMap[configName] || configName;
  if (allData[mapped]) return mapped;

  // Fuzzy: try substring / keyword matching
  const normName = normalise(configName);
  const keywords = normName.split(/[\s/]+/).filter(k => k.length > 2);

  for (const jsonKey of Object.keys(allData)) {
    const normKey = normalise(jsonKey);

    // Exact normalised match
    if (normKey === normName) return jsonKey;

    // Check if all significant keywords appear in the JSON key
    const matchedKeywords = keywords.filter(kw => normKey.includes(kw));
    if (matchedKeywords.length >= Math.max(2, keywords.length - 1)) return jsonKey;
  }

  return null;
}

// ─── 4. Column key normaliser ────────────────────────────────────────────────
function jsonKeyToColumnKey(k) {
  // Preserve case sensitivity for D vs d etc.
  if (k === 'D')  return 'd_upper';
  if (k === 'd')  return 'd';
  if (k === 'D1') return 'd1_upper';
  if (k === 'd1') return 'd1';
  if (k === 'D2') return 'd2_upper';
  if (k === 'd2') return 'd2';
  if (k === 'D3') return 'd3_upper';
  if (k === 'd3') return 'd3';
  if (k === 'D4') return 'd4_upper';
  if (k === 'd4') return 'd4';
  if (k === 'H')  return 'h';
  if (k === 'H1') return 'h1';
  if (k === 'H2') return 'h2';
  if (k === 'H3') return 'h3';
  if (k === 'L')  return 'l';
  if (k === 'L1') return 'l1';
  if (k === 'L2') return 'l2';
  if (k === 'L3') return 'l3';
  if (k === 'L4') return 'l4';
  if (k === 'L5') return 'l5';
  if (k === 'L6') return 'l6';
  if (k === 'Z1') return 'z1';
  if (k === 'Z2') return 'z2';
  return k.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

// ─── 5. Build a single fitting's table+sizes TS block ────────────────────────
function buildFittingBlock(id, title, jsonRows) {
  const firstRow   = jsonRows[0];
  const jsonKeys   = Object.keys(firstRow);
  const dimKeys    = jsonKeys.filter(k => k.toLowerCase() !== 'nom size');
  const nomKey     = jsonKeys.find(k => k.toLowerCase() === 'nom size') || 'Nom Size';

  // --- sizes array from nominal size values ---
  const sizeValues = jsonRows.map(r => r[nomKey]).filter(Boolean);
  const sizesStr   = sizeValues.map(s => `{ sizeMm: '${s}' }`).join(', ');

  // --- columns ---
  // First column: NOMINAL SIZE (standalone, no groupLabel)
  const nomColKey = 'nominal_size';
  let colDefs = [`{ key: '${nomColKey}', label: 'NOMINAL SIZE (mm)' }`];

  // Dimension columns: first gets colSpan = total dim count
  dimKeys.forEach((k, idx) => {
    const key   = jsonKeyToColumnKey(k);
    const label = k;
    if (idx === 0) {
      colDefs.push(`{ key: '${key}', label: '${label}', groupLabel: 'products.tables.dimensions_mm', colSpan: ${dimKeys.length} }`);
    } else {
      colDefs.push(`{ key: '${key}', label: '${label}', groupLabel: 'products.tables.dimensions_mm' }`);
    }
  });

  // --- rows ---
  const rowStrs = jsonRows.map(r => {
    const props = [];
    props.push(`${nomColKey}: '${(r[nomKey] || '').replace(/'/g, "\\'")}'`);
    dimKeys.forEach(k => {
      const key = jsonKeyToColumnKey(k);
      const val = r[k];
      if (val === undefined || val === null) {
        props.push(`${key}: null`);
      } else {
        props.push(`${key}: '${String(val).replace(/'/g, "\\'")}'`);
      }
    });
    return `        { ${props.join(', ')} }`;
  });

  return {
    sizesStr,
    tableStr: `{ id: '${id}', title: '${title}', columns: [\n        ${colDefs.join(',\n        ')}\n      ], rows: [\n${rowStrs.join(',\n')}\n      ] }`,
  };
}

// ─── 6. Read the TS file and process each pushfit fitting ────────────────────
let tsContent = fs.readFileSync(tsPath, 'utf8');

let hydratedCount = 0;
let skippedNames = [];

// This regex captures each complete fitting object block within the pushfit fittings array.
// We look for fitting objects with pushfit- IDs.
const fittingBlockRegex = /(\{\s*\n\s*id:\s*'(pushfit-[^']+)',\s*\n\s*name:\s*'([^']+)',[\s\S]*?)(sizes:\s*\[.*?\]),?\s*\n(\s*)(table:\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\})\s*,?\s*\n/g;

// Actually, the inline table format makes regex tricky. Let's use a simpler approach:
// We'll find each fitting block by its `id: 'pushfit-...'` line, then replace
// the `sizes: [...]` and `table: {...}` portions.

// Strategy: find each fitting, build the replacement text, and swap it in.

// Parse the fittings portion
const fittingsStart = tsContent.indexOf("fittings: [", tsContent.indexOf("upvcDrainageFittingsPushfit"));
const fittingsEnd   = tsContent.indexOf("\n  ],", fittingsStart) + 4;
let fittingsBlock   = tsContent.substring(fittingsStart, fittingsEnd);

// Split into individual fitting objects
// Each fitting starts with `    {` and ends with `    },`
const fittingChunks = [];
let depth = 0;
let start = -1;

for (let i = fittingsBlock.indexOf('[') + 1; i < fittingsBlock.length; i++) {
  if (fittingsBlock[i] === '{' && depth === 0) {
    start = i;
    depth = 1;
  } else if (fittingsBlock[i] === '{') {
    depth++;
  } else if (fittingsBlock[i] === '}') {
    depth--;
    if (depth === 0 && start !== -1) {
      fittingChunks.push({
        text: fittingsBlock.substring(start, i + 1),
        start,
        end: i + 1,
      });
      start = -1;
    }
  }
}

console.log(`Found ${fittingChunks.length} fitting blocks to process.`);

// Process each chunk
const newChunks = fittingChunks.map(chunk => {
  const idMatch   = chunk.text.match(/id:\s*'([^']+)'/);
  const nameMatch = chunk.text.match(/name:\s*'([^']+)'/);
  if (!idMatch || !nameMatch) return chunk.text;

  const id   = idMatch[1];
  const name = nameMatch[1];

  if (!id.startsWith('pushfit-')) return chunk.text;

  // Find matching JSON data
  const jsonKey  = fuzzyFindJsonKey(name);
  const jsonRows = jsonKey ? allData[jsonKey] : null;

  if (!jsonRows || jsonRows.length === 0) {
    console.log(`  ✗ No JSON data for: ${name}`);
    skippedNames.push(name);
    return chunk.text;
  }

  console.log(`  ✓ Hydrating: ${name} → "${jsonKey}" (${jsonRows.length} rows)`);
  hydratedCount++;

  // Extract title from existing table
  const titleMatch = chunk.text.match(/title:\s*'([^']+)'/);
  const title      = titleMatch ? titleMatch[1] : name;

  const { sizesStr, tableStr } = buildFittingBlock(id, title, jsonRows);

  // Replace sizes: [...] with populated version
  let newText = chunk.text.replace(
    /sizes:\s*\[[^\]]*\]/,
    `sizes: [${sizesStr}]`
  );

  // Replace table: {...} with the new table
  // The table block starts at `table:` and goes until the matching close
  const tableStart = newText.indexOf('table:');
  if (tableStart === -1) return newText;

  // Find the matching closing brace for the table object
  let tableDepth = 0;
  let tableEnd   = -1;
  for (let i = newText.indexOf('{', tableStart); i < newText.length; i++) {
    if (newText[i] === '{') tableDepth++;
    else if (newText[i] === '}') {
      tableDepth--;
      if (tableDepth === 0) {
        tableEnd = i + 1;
        break;
      }
    }
  }

  if (tableEnd > 0) {
    newText = newText.substring(0, tableStart) + 'table: ' + tableStr + newText.substring(tableEnd);
  }

  return newText;
});

// Reconstruct the fittings block
let newFittingsBlock = 'fittings: [\n';
newChunks.forEach((chunk, i) => {
  newFittingsBlock += '    ' + chunk;
  if (i < newChunks.length - 1) newFittingsBlock += ',\n';
  else newFittingsBlock += ',\n';
});
newFittingsBlock += '  ]';

tsContent = tsContent.substring(0, fittingsStart) + newFittingsBlock + tsContent.substring(fittingsEnd);

fs.writeFileSync(tsPath, tsContent, 'utf8');

console.log('\n═══════════════════════════════════════════');
console.log(`Hydrated: ${hydratedCount} fittings`);
if (skippedNames.length > 0) {
  console.log(`Skipped (no JSON data available): ${skippedNames.length}`);
  skippedNames.forEach(n => console.log(`  - ${n}`));
}
console.log('═══════════════════════════════════════════');
