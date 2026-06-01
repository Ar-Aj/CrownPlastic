import re

path = 'c:/crown/CrownPlastic/src/config/productDetails/drainageData.ts'
with open(path, 'r', encoding='utf-8') as f:
    data = f.read()

targets = [
    'pushfit-reducing-skew-tee-m-f',
    'pushfit-skew-tee-m-f',
    'pushfit-tee-m-f-with-gasket',
    'pushfit-reducing-tee-m-f',
    'pushfit-90-saddle-branch',
    'pushfit-reducing-coupler'
]

if 'export const pushfitFittings: Fitting[] = [' in data:
    parts = data.split('export const pushfitFittings: Fitting[] = [')
    pushfit_str = parts[1]
    
    # Split objects by id: 'pushfit-
    objects = re.split(r"(?=\s*\{\s*id:\s*'pushfit-)", pushfit_str)
    
    new_objects = []
    for obj in objects:
        for t in targets:
            if f"id: '{t}'" in obj:
                # 1. Update Header
                obj = re.sub(
                    r"\{\s*key:\s*'nominal_size',\s*label:\s*'[^']+'\s*\}",
                    "{ key: 'nominal_size', label: 'Nominal Size (mm x mm)' }",
                    obj
                )
                
                # 2. Update sizes array and nominal_size in rows
                def clean_size(match):
                    prefix = match.group(1)
                    val = match.group(2)
                    
                    val = val.replace('mm', '').replace('\"', '')
                    if 'X' in val:
                        parts = [p.strip() for p in val.split('X')]
                        val = ' X '.join(parts)
                    
                    return f"{prefix}'{val}'"
                
                obj = re.sub(r"(sizeMm:\s*)'([^']+)'", clean_size, obj)
                obj = re.sub(r"(nominal_size:\s*)'([^']+)'", clean_size, obj)
                
                break
        new_objects.append(obj)
        
    new_data = parts[0] + 'export const pushfitFittings: Fitting[] = [' + "".join(new_objects)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_data)
    print('Updated formatting for target fittings.')
else:
    print('pushfitFittings not found.')
