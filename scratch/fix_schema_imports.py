"""
Replace next/script Script components with raw <script> tags
for JSON-LD server-side rendering.
"""
import re
import os

files = [
    r"src\components\schemas\OrganizationSchema.tsx",
    r"src\components\schemas\LocalBusinessSchema.tsx",
    r"src\components\schemas\ProductSchema.tsx",
    r"src\components\schemas\ProductFAQSchema.tsx",
    r"src\components\schemas\FAQPageSchema.tsx",
    r"src\components\schemas\ReviewSchema.tsx",
    r"src\components\schemas\QASchema.tsx",
    r"src\components\schemas\OfferSchema.tsx",
    r"src\components\schemas\HowToSchema.tsx",
    r"src\components\schemas\BreadcrumbSchema.tsx",
    r"src\components\schemas\ArticleSchema.tsx",
    r"src\app\[locale]\[slug]\ServiceAreaClient.tsx",
    r"src\app\[locale]\products\[category]\CategoryClient.tsx",
    r"src\app\[locale]\products\regional\[country]\upvc-pipes\RegionalProductCatalogClient.tsx",
    r"src\app\[locale]\market\[country]\products\upvc-pipes\RegionalProductCatalogClient.tsx",
]

base = r"c:\crown\CrownPlastic"

for rel in files:
    fpath = os.path.join(base, rel)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # Remove the import line
    content = re.sub(r"import Script from 'next/script';\r?\n", "", content)

    # Replace <Script with <script (JSX tag)
    content = re.sub(r"<Script(\s)", r"<script\1", content)
    content = re.sub(r"<Script>", "<script>", content)
    content = re.sub(r"</Script>", "</script>", content)

    if content != original:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[OK] Updated: {rel}")
    else:
        print(f"[SKIP]  No changes: {rel}")

print("\nDone!")
