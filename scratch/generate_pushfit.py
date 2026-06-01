import json
import os
import re

json_files = ['c:/crown/CrownPlastic/pushfit data table.json', 'c:/crown/CrownPlastic/pushfit missing data.json']
all_data = {}

for fpath in json_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
        fixed_content = '[' + content.replace('}\n{', '},{').replace('}\\s*{', '},{') + ']'
        try:
            data = json.loads(fixed_content)
        except Exception:
            # simple fallback
            fixed_content = '[' + re.sub(r'}\s*{', '},{', content) + ']'
            data = json.loads(fixed_content)
        
        for d in data:
            all_data.update(d)

mapping = [
  {"json": '45° ELBOW WITH TWO RUBBER RINGS', "name": '45° ELBOW WITH TWO RUBBER RINGS', "base_img": '45elbow.png'},
  {"json": '90° ELBOW M/F', "name": '90° ELBOW M/F', "base_img": '90elbowmf.png'},
  {"json": 'REDUCING SKEW TEE M/F', "name": 'REDUCING SKEW TEE M/F', "base_img": 'Reducing Skew Tee Malefemale.png'},
  {"json": 'SKEW TEE M/F', "name": 'SKEW TEE M/F', "base_img": 'skew tee mf (2).png'},
  {"json": 'TEE M/F', "name": 'TEE M/F WITH GASKET', "base_img": 'tee mf with gasket.png'},
  {"json": 'REDUCING COUPLING M/F WITH RUBBER', "name": 'REDUCING COUPLER', "base_img": 'reducingcoupler.png'},
  {"json": 'COUPLING', "name": 'COUPLING', "base_img": 'coupling.png'},
  {"json": '30° ELBOW WITH SINGLE SOCKET RUBBER', "name": '30° SWEEP WITH SINGLE RUBBER SOCKETS', "base_img": '30sweepwithsinglerubbersockets.png'},
  {"json": '90° SWEEP WITH DOUBLE SOCKET RUBBER', "name": '90° SWEEP WITH DOUBLE SOCKET RINGS', "base_img": '90sweepwithdoublesocketrings.png'},
  {"json": '90° SWEEP WITH SINGLE SOCKET RUBBER', "name": '90° SWEEP WITH SINGLE SOCKET RINGS', "base_img": '90sweepwithsinglesocketrings.png'},
  {"json": 'REDUCING TEE M/F', "name": 'REDUCING TEE M/F', "base_img": 'reducingteemf.png'},
  {"json": '90° SADDLE BRANCH', "name": '90° SADDLE BRANCH', "base_img": '90saddlebranch.png'},
  {"json": 'INSPECTION ELBOW M/F', "name": 'INSPECTION ELBOW M/F', "base_img": 'Inspection_Elbow_M_F_202604110107.png'},
  {"json": 'INSPECTION PORT M/F', "name": 'INSPECTION PORT M/F', "base_img": 'Inspection_Port_M_F_202604110131.png'},
  {"json": 'TEE WITH 3 SOCKET RUBBER', "name": 'TEE WITH 3 SOCKET RUBBER (EQUAL TEE)', "base_img": 'Tee with 3 Socket Rubber (Equal Tee).png'},
  {"json": 'DOOR ELBOW WITH RUBBER', "name": 'PVC DOOR ELBOW', "base_img": 'PVC_Door_Elbow_202604110104.png'},
  {"json": 'DOOR TEE WITH RUBBER', "name": 'DOOR TEE WITH RUBBER', "base_img": 'doorteewithrubber.png'},
  {"json": 'INSPECTION MALE/FEMALE', "name": 'INSPECTION MALE/FEMALE', "base_img": 'inspectionmalefemale.png'},
  {"json": 'SKEW TEE WITH THREE RUBBER RINGS', "name": 'SKEW TEE WITH THREE RUBBER RINGS', "base_img": 'Skew Tee with Three Rubber Rings.png'},
]

ts_array = "export const pushfitFittings: Fitting[] = [\n"

base_path = '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit'

for item in mapping:
    json_key = item['json']
    name = item['name']
    base_img = item['base_img']
    id = "pushfit-" + re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    
    rows = all_data.get(json_key, [])
    if not rows:
        print(f"// WARNING: No data found for {json_key}")
        continue
    
    # Generate image paths
    default_img = f"{base_path}/{base_img}"
    
    # Olive image
    if base_img == 'skew tee mf (2).png':
        olive_img = f"{base_path}/olive/skew tee mf (3).png"
    else:
        olive_img = f"{base_path}/olive/{base_img.replace('.png', ' (2).png')}"
        
    # Light grey image
    if base_img == 'skew tee mf (2).png':
        light_grey_img = f"{base_path}/light%20grey/skew tee mf (1).png"
    else:
        light_grey_img = f"{base_path}/light%20grey/{base_img.replace('.png', ' (2).png')}"

    # Extract columns
    keys = list(rows[0].keys())
    
    cols = []
    for k in keys:
        if k.lower() == 'nom size':
            cols.append({'key': 'nominal_size', 'jsonKey': k, 'label': 'NOMINAL SIZE (mm)', 'groupLabel': 'null'})
        else:
            ts_key = k.lower().replace('/', '_')
            if ts_key == 'd': ts_key = 'd_upper' if k == 'D' else 'd'
            if ts_key == 'd1': ts_key = 'd1_upper' if k == 'D1' else 'd1'
            if ts_key == 'd2': ts_key = 'd2_upper' if k == 'D2' else 'd2'
            if ts_key == 'd3': ts_key = 'd3_upper' if k == 'D3' else 'd3'
            if ts_key == 'd4': ts_key = 'd4_upper' if k == 'D4' else 'd4'
            if ts_key == 'h1': ts_key = 'h1_upper' if k == 'H1' else 'h1'
            if ts_key == 'h2': ts_key = 'h2_upper' if k == 'H2' else 'h2'
            if ts_key == 'h3': ts_key = 'h3_upper' if k == 'H3' else 'h3'
            cols.append({'key': ts_key, 'jsonKey': k, 'label': k, 'groupLabel': "'products.tables.dimensions_mm'"})
    
    # Sort cols: nominal_size first
    cols.sort(key=lambda x: 0 if x['key'] == 'nominal_size' else 1)
    
    sizes = [r.get('Nom Size', '') for r in rows]
    sizes_str = ",\n      ".join([f"{{ sizeMm: '{s}' }}" for s in sizes])
    
    cols_str = ",\n        ".join([f"{{ key: '{c['key']}', label: '{c['label']}'" + (f", groupLabel: {c['groupLabel']}" if c['groupLabel'] != 'null' else "") + " }" for c in cols])
    
    rows_arr = []
    for r in rows:
        props = []
        for c in cols:
            val = r.get(c['jsonKey'])
            if val is None:
                props.append(f"{c['key']}: null")
            else:
                props.append(f"{c['key']}: '{str(val)}'")
        rows_arr.append("{ " + ", ".join(props) + " }")
    rows_str = ",\n        ".join(rows_arr)
    
    ts_array += f"""  {{
    id: '{id}',
    code: undefined,
    name: '{name}',
    family: 'pushfit',
    image: '{default_img}',
    colorVariants: {{
      grey: '{default_img}',
      olive: '{olive_img}',
      lightGrey: '{light_grey_img}'
    }},
    sizes: [
      {sizes_str}
    ],
    table: {{
      id: '{id}',
      title: '{name}',
      columns: [
        {cols_str}
      ],
      rows: [
        {rows_str}
      ]
    }}
  }},
"""
ts_array += "];\n"

with open('c:/crown/CrownPlastic/scratch/pushfit_out.ts', 'w', encoding='utf-8') as f:
    f.write(ts_array)
print("Done writing to scratch/pushfit_out.ts")
