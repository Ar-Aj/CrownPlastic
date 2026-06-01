import fs from 'fs';

const jsonPath = 'c:/crown/CrownPlastic/pushfit data table.json';
const tsPath = 'c:/crown/CrownPlastic/src/config/productDetails/upvcDrainageFittingsData.ts';

const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const fixedJson = '[' + jsonContent.replace(/}\s*{/g, '},{') + ']';
const jsonDataList = JSON.parse(fixedJson);
const allData = {};
jsonDataList.forEach(obj => {
  Object.assign(allData, obj);
});

// Name mapping for the missing ones, or exact match
const nameMap = {
  '30° SWEEP WITH SINGLE RUBBER SOCKETS': '30° ELBOW WITH SINGLE SOCKET RUBBER',
  'ELBOW 45°': '45° ELBOW WITH TWO RUBBER RINGS',
  'ELBOW 90° MALE/FEMALE': '90° ELBOW M/F',
  '90° SWEEP WITH DOUBLE SOCKET RINGS': '90° SWEEP WITH DOUBLE SOCKET RUBBER',
  '90° SWEEP WITH SINGLE SOCKET RINGS': '90° SWEEP WITH SINGLE SOCKET RUBBER',
  'PVC DOOR ELBOW': 'DOOR ELBOW WITH RUBBER',
  'REDUCING SKEW TEE MALE/FEMALE': 'REDUCING SKEW TEE M/F',
  'SKEW TEE WITH THREE RUBBER RINGS': 'SKEW TEE WITH THREE RUBBER RINGS',
  'COUPLING': 'COUPLING',
  'REDUCING COUPLER': 'REDUCING COUPLING M/F WITH RUBBER',
  'REDUCING TEE M/F': 'REDUCING TEE M/F',
  'SKEW TEE M/F': 'SKEW TEE M/F',
  'TEE M/F WITH GASKET': 'TEE M/F'
  // 90° SADDLE BRANCH, INSPECTION ELBOW M/F, INSPECTION PORT M/F, 
  // TEE WITH 3 SOCKET RUBBER (EQUAL TEE), DOOR TEE WITH RUBBER, INSPECTION MALE/FEMALE are missing
};

let tsContent = fs.readFileSync(tsPath, 'utf8');

const rowsToTsString = (rows, cols) => {
  return rows.map(r => {
    const props = cols.map(c => {
      let val = r[c.jsonKey];
      if (val === undefined || val === null) val = 'null';
      else val = `'${val.replace(/'/g, "\\'")}'`;
      return `${c.key}: ${val}`;
    });
    return `{ ${props.join(', ')} }`;
  }).join(',\n        ');
};

let matchCount = 0;

tsContent = tsContent.replace(/id:\s*'([^']+)',\s*name:\s*'([^']+)',([\s\S]*?)table:\s*{[\s\S]*?}/g, (match, id, name, middle) => {
  // Only target pushfit- IDs
  if (!id.startsWith('pushfit-')) return match;

  let mappedKey = nameMap[name] || name;
  let jsonRows = allData[mappedKey];
  
  if (!jsonRows) {
    console.log(`No data found for ${name} (mapped to ${mappedKey})`);
    return match;
  }
  
  console.log(`Hydrating ${name}...`);
  matchCount++;
  
  // Extract columns
  const firstRow = jsonRows[0] || {};
  const jsonKeys = Object.keys(firstRow);
  
  const cols = [];
  jsonKeys.forEach(k => {
    let key = k.toLowerCase().replace(/[^a-z0-9]/g, '_');
    if (k === 'D') key = 'd_upper';
    else if (k === 'd') key = 'd';
    else if (k === 'D1') key = 'd1_upper';
    else if (k === 'd1') key = 'd1';
    else if (k === 'D2') key = 'd2_upper';
    else if (k === 'd2') key = 'd2';
    else if (k === 'D3') key = 'd3_upper';
    else if (k === 'd3') key = 'd3';
    else if (k === 'D4') key = 'd4_upper';
    else if (k === 'd4') key = 'd4';

    if (k.toLowerCase().includes('nom size') || k.toLowerCase() === 'nom size') {
      cols.push({
        jsonKey: k,
        key: 'nominal_size',
        label: 'NOMINAL SIZE (mm)',
        groupLabel: undefined
      });
    } else {
      cols.push({
        jsonKey: k,
        key: key,
        label: k,
        groupLabel: 'products.tables.dimensions_mm'
      });
    }
  });
  
  // Make sure nominal_size is first
  cols.sort((a, b) => {
    if (a.key === 'nominal_size') return -1;
    if (b.key === 'nominal_size') return 1;
    return 0;
  });
  
  const titleMatch = match.match(/title:\s*'([^']+)'/);
  const title = titleMatch ? titleMatch[1] : name;
  
  let columnsStr = cols.map(c => {
    if (c.groupLabel) {
      return `{ key: '${c.key}', label: '${c.label}', groupLabel: '${c.groupLabel}' }`;
    }
    return `{ key: '${c.key}', label: '${c.label}' }`;
  }).join(',\n        ');
  
  let rowsStr = rowsToTsString(jsonRows, cols);
  
  let newTable = `table: { id: '${id}', title: '${title}', columns: [\n        ${columnsStr}\n      ], rows: [\n        ${rowsStr}\n      ] }`;
      
  return `id: '${id}',\n      name: '${name}',${middle}${newTable}`;
});

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log(`Updated ${matchCount} fittings.`);
