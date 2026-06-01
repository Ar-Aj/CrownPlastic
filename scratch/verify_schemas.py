import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

html = open('out/en/upvc-pipes-dubai/index.html', 'r', encoding='utf-8').read()
schemas = re.findall(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', html, re.DOTALL)
print(f'{len(schemas)} schemas found\n')
for i, s in enumerate(schemas):
    data = json.loads(s)
    schema_type = data.get('@type', '?')
    schema_id = data.get('@id', '?')
    print(f'Schema {i+1}: @type={schema_type}  @id={schema_id}')
    if '@type' in data and data['@type'] == 'FAQPage':
        entities = data.get('mainEntity', [])
        print(f'  -> {len(entities)} FAQ entries')
        if entities:
            print(f'  -> Q1: {entities[0].get("name", "?")[:80]}')
