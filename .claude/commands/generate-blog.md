# generate-blog

Autonomously generates a non-commodity, trilingual SEO blog article that passes link equity to zipper pages and product catalog routes. Outputs a structured `BlogArticle` object with engineered content sourced exclusively from Crown Plastic Pipes & Fittings proprietary data matrices.

## Inputs

- `keyword` — The primary SEO keyword to target (e.g., "UPVC drainage pipes for Dubai high-rises")
- `target_category` — The product category ID to link to. Must be one of the valid Category IDs listed at the bottom of this document.

---

## Execution Steps

### Step 1 — Ingest Inputs and Validate

Read the `keyword` and `target_category` inputs. Validate that `target_category` is a valid CategoryId from `src/data/zipperContent.ts`. If invalid, STOP and report the error with the list of valid IDs.

### Step 2 — Read Proprietary Engineering Data

Read the following three data files and extract the entry matching `target_category`:

1. **`src/data/proprietary/climateMetrics.ts`** — Extract `CLIMATE_METRICS[target_category]`:
   - `ambientPeakDeratingFactor` (number, 0–1)
   - `groundTempVicatSofteningCelsius` (number, °C)
   - `expansionCoefficientMmPerMK` (number, mm/m·K)

2. **`src/data/proprietary/labTests.ts`** — Extract `LAB_TESTS[target_category]`:
   - `minimumBurstPressureMPa` (number, MPa)
   - `wallThicknessToleranceVarianceMm` (number, ±mm)
   - `complianceCertificationId` (string)

3. **`src/data/proprietary/projectReferences.ts`** — Call `getProjectsByCategory(target_category)` to get any matching `ProjectReference[]` entries with `projectName`, `tonnageSupplied`, and `applicationMetric`.

### Step 3 — Synthesize Blog Article Object

Generate a new `BlogArticle` object for `src/content/blogs.ts` with **exactly 5 sections**. Follow these **non-negotiable content rules**:

#### Content Rules

> **BRAND IDENTITY (ABSOLUTE CONSTRAINT)**
>
> - **NEVER** use the standalone word "Crown" or "crown" within generated text bodies.
> - **ALWAYS** use the full corporate identity: **"Crown Plastic Pipes & Fittings"** when naming the manufacturer.
> - This applies to ALL sections, headings, meta descriptions, FAQ answers, and CTA text.
> - The ONLY exception is inside fixed heading templates where the phrase would be unnaturally long (e.g., "Crown Lab Data" heading remains unchanged as it references an internal facility label, not the brand identity).

- **ZERO generic marketing phrases.** No "high quality", "durable solutions", "in today's fast-paced infrastructure", "trusted partner", "innovative solutions". Every sentence must contain at least one specific number, standard reference, or measurable claim.
- **"Pipes / Fittings" mandate**: Wherever the word "pipes" appears generically to describe the product category, use "Pipes / Fittings" (paired phrasing per brand rules).
- **Technical standards are LOCKED**: Never alter, abbreviate, or rephrase standards like BS EN 1452, ISO 4422-2:1996, DIN 8061/62, ASTM D 1785, SDR11, PN10, NEMA TC 2, etc. Use them exactly as written.
- **Certification IDs are LOCKED**: Never alter DM/ADSSC/Civil Defense certification numbers. Use them exactly as sourced from `labTests.complianceCertificationId`.
- **Brand claims are LOCKED**: "5000+ products", "30+ Years", "52+ Countries", "7 Production Units" must not be changed.
- **All engineering data MUST come from the proprietary data read in Step 2.** Do not invent numbers.

#### UI Layout & Breakpoint Enforcement

The blog page renderer (`src/app/[locale]/blogs/[slug]/page.tsx`) MUST render content with the following structural integrity rules matching the homepage and about-us page layout system:

```
HERO SECTION:
  - Full-width gradient background (from-slate-900 via-slate-800 to-slate-900)
  - Content container: mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none
  - Section padding: pt-[130px] pb-16 md:pb-24
  - H1: text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl

CONTENT SECTIONS:
  - Outer container: py-12 md:py-20 lg:py-24
  - Inner content column: max-w-3xl mx-auto px-4 sm:px-6 lg:px-8
  - Heading: text-xl md:text-2xl font-bold text-slate-900 mb-4
  - Body text: text-slate-600 leading-relaxed text-lg
  - Section spacing: space-y-12 between article blocks

CTA SECTION:
  - bg-slate-900 py-12 md:py-16
  - Text: text-2xl md:text-3xl font-bold text-white mb-4
```

These layout codes are **informational references** for the rendering engineer. The blog object's `sections` array does not encode CSS — it encodes content. But content MUST be structured to fit these constraints (e.g., paragraphs should be 2-4 sentences to prevent wall-of-text on `max-w-3xl`).

#### Section Structure

```
Section 1: "{keyword} — Engineering Context"
  - 3-4 paragraphs explaining the keyword from a technical engineering perspective
  - Must cite at least ONE specific standard (e.g., BS EN 1452, DIN 8077/78)
  - Must reference Gulf climate conditions (45°C–55°C ambient peak)
  - Opening paragraph MUST be an Atomic Answer (40-60 words) that directly states
    the technical conclusion, compliance standard, and core metric
  - Use "Crown Plastic Pipes & Fittings" (full name) on first mention

Section 2: "Crown Lab Data: Thermal & Pressure Performance"
  - 3-4 paragraphs with SPECIFIC numbers from climateMetrics + labTests
  - MUST include: derating factor, Vicat softening point, expansion coefficient
  - If burst pressure > 0: MUST include burst MPa value and test method (BS EN 921 / ISO 1167)
  - If burst pressure = 0: discuss ring stiffness or crush resistance instead
  - MUST include wall thickness tolerance (±X.X mm) and compare to commodity imports (±0.5–0.8mm)
  - Attribute data source: "Source: Crown Plastic Pipes & Fittings QC Laboratory,
    Umm Al Quwain Industrial City, UAE"

Section 3: "UAE Project Deployment Validation"
  - If project references exist: cite specific project names, tonnage, and application metrics
  - If no project references: write about Crown Plastic Pipes & Fittings general
    UAE/GCC deployment capability (30+ Years, 5000+ products, ISO 9001:2015,
    factory-direct delivery from Umm Al Quwain)
  - MUST mention Dubai, Abu Dhabi, and Sharjah by name

Section 4: "Specification & Procurement for UAE/GCC Contractors"
  - 3-4 paragraphs targeting procurement decision-makers
  - MUST include ALL of the following outbound cross-links in `relatedRoutes`
    and reference them naturally within the text body:
      - `/solutions/{target_category}/upvc-pipes-dubai`
      - `/solutions/{target_category}/upvc-pipes-abu-dhabi`
      - `/solutions/{target_category}/upvc-pipes-sharjah`
      - `/[locale]/products/{target_category}` (product catalog link)
  - Mention that Crown Plastic Pipes & Fittings provides trilingual technical
    datasheets (English, Arabic, French) for GCC and North African export markets
  - End with a CTA: "Contact the Crown Plastic Pipes & Fittings technical team
    for project-specific specifications and competitive bulk pricing."

Section 5 (MANDATORY AEO Section): "Frequently Asked Questions About {keyword}"
  - EXACTLY 4 question-answer pairs targeting MEP contractor AI queries
  - Each question MUST be a conversational, long-tail engineer search query:
    ✅ "What is the minimum burst pressure of UPVC pipes per BS EN 921 in UAE conditions?"
    ✅ "Which Dubai Municipality approval is required for UPVC drainage Pipes / Fittings?"
    ✅ "How does thermal derating affect PN16 pipe pressure ratings at 50°C ambient?"
    ✗ "What are UPVC pipes?" (too generic — NEVER use)
  - Each answer must be an Atomic Answer: 40-60 words, leading with the technical
    conclusion, compliance standard, and core metric
  - Questions MUST be distinct from the article's `aeoQuestion` field
  - Format each Q&A as a separate content[] string: "Q: {question} — A: {answer}"
  - The blog page renderer detects the "Q:" prefix and renders with FAQ structured formatting
```

#### Object Schema

Generate the object with these exact fields (matching `BlogArticle` type in `src/content/blogs.ts`):

```typescript
{
  slug: string,                    // kebab-case from keyword, max 60 chars
  title: string,                   // Title case, includes keyword naturally
                                   // Brand rule: use "Crown Plastic Pipes & Fittings" if brand is in title
  shortExcerpt: string,            // 1-2 sentences, max 160 chars, for meta description
  fullDescription: string,         // 2-3 sentences, max 300 chars, for OG description
  tag: string,                     // One of: 'Technical Guide' | 'Compliance' | 'Product Comparison' | 'Installation' | 'Project Insight'
  estimatedReadTime: string,       // Calculate from total word count: "X min read"
  publishedDate: string,           // Current month/year format: "Jun 2026"
  primaryKeyword: string,          // The input keyword
  secondaryKeywords: string[],     // 4-6 related long-tail keywords including UAE/GCC variants
  aeoQuestion: string,             // Natural language question the article answers (for AI answer engines)
  targetPersona: string,           // One of: 'MEP consultant' | 'Plumbing contractor' | 'Procurement manager' | 'QA/QC engineer' | 'Irrigation consultant'
  funnelStage: string,             // One of: 'awareness' | 'consideration' | 'decision'
  relatedRoutes: string[],         // MUST include ALL FOUR cross-link paths from Section 4 + one existing product/technical route
  sections: [                      // Exactly 5 sections as defined above
    { heading: string, content: string[] },  // Section 1: Engineering Context
    { heading: string, content: string[] },  // Section 2: Crown Lab Data
    { heading: string, content: string[] },  // Section 3: UAE Deployment
    { heading: string, content: string[] },  // Section 4: Procurement (with cross-links)
    { heading: string, content: string[] },  // Section 5: AEO FAQ (MANDATORY)
  ],

  // ── Trilingual Metadata Fields ────────────────────────────────────
  // Arabic parity
  titleAr: string,                 // Arabic translation of title; keep all standards verbatim
  shortExcerptAr: string,          // Arabic translation of shortExcerpt
  aeoQuestionAr: string,           // Arabic translation of aeoQuestion

  // French parity
  titleFr: string,                 // French translation of title; keep all standards verbatim
  shortExcerptFr: string,          // French translation of shortExcerpt
  aeoQuestionFr: string,           // French translation of aeoQuestion
}
```

### Step 4 — Generate Trilingual Translation Parity (En × Ar × Fr)

The blog article body text is rendered by the `[slug]/page.tsx` server component which does NOT currently have full i18n string extraction for blog content sections (sections render in English only from the `blogArticles` array). However, to maintain **trilingual SEO parity** across all three locales:

#### Arabic (Ar) Fields

1. Generate `titleAr` — Translate `title` to Arabic, preserving all technical standard numbers, engineering units, and product series codes exactly.
2. Generate `shortExcerptAr` — Translate `shortExcerpt` to Arabic.
3. Generate `aeoQuestionAr` — Translate `aeoQuestion` to Arabic.

#### French (Fr) Fields

1. Generate `titleFr` — Translate `title` to French, maintaining expert architectural phrasing (e.g., "Tuyaux / Raccords" for "Pipes / Fittings"). ALL of the following MUST remain un-translated in the French payload:
   - Engineering units: MPa, mm/m·K, DN, OD, °C, PN10, PN16, SDR11
   - International test codes: BS EN 1452, BS EN 921, ISO 4422-2:1996, ISO 1167, DIN 8077/78, ASTM D 1785, NEMA TC 2
   - Certification references: ISO 9001:2015, DM approval IDs
   - Product nomenclature: UPVC, PVC-U, PP-R, HDPE, PEX, SCH 40
2. Generate `shortExcerptFr` — Translate `shortExcerpt` to French with the same immutable-token rules.
3. Generate `aeoQuestionFr` — Translate `aeoQuestion` to French.

**Brand identity in translations**: Use "Crown Plastic Pipes & Fittings" verbatim in both Arabic and French — do NOT translate the brand name. The Arabic and French text should embed the English brand name as-is within the translated sentence.

### Step 5 — Append to Blog Array

Open `src/content/blogs.ts`. Locate the closing `];` of the `blogArticles` array. Insert the new blog object BEFORE the `];` with a clear comment separator:

```typescript
  // ── [Auto-generated] {slug} ──────────────────────────────────────
  {
    slug: '...',
    ...
    // Trilingual metadata
    titleAr: '...',
    shortExcerptAr: '...',
    aeoQuestionAr: '...',
    titleFr: '...',
    shortExcerptFr: '...',
    aeoQuestionFr: '...',
  },
];
```

Ensure trailing commas are correct. Do NOT modify any existing blog entries.

### Step 6 — Link Equity Verification

The internal linking engine at `src/lib/linkingEngine.ts` will automatically detect the product category + region keywords in the new article and inject "Regional Pipes / Fittings Solutions" CTA links in the blog page rendering. No manual linking injection into the rendering pipeline is needed — the engine handles it algorithmically.

Verify the new article's text corpus would be matched by the engine:
- Confirm the article body mentions the product category name (e.g., "UPVC drainage", "PPR", "HDPE")
- Confirm the article body mentions "Dubai", "Abu Dhabi", and "Sharjah" by name
- Confirm `relatedRoutes` contains all 4 cross-link paths (Dubai, Abu Dhabi, Sharjah zipper pages + product catalog route)
- If all conditions are met, the linking engine will auto-inject direct-match solution links

### Step 7 — Build Verification

Run the build command:

```bash
npm run build
```

Verify:
1. **Zero TypeScript errors** — the new object matches the `BlogArticle` type
2. **Static export succeeds** — all pages including the new blog slug are generated across all 3 locales (en, ar, fr)
3. **No hydration errors** — the blog page is a server component, no client-side hydration
4. **Sitemap inclusion** — the new blog slug appears in `sitemap.xml` output (the sitemap generator at `src/app/sitemap.ts` iterates `blogArticles` automatically)

Report the results: total page count, new blog URL path (all 3 locales), and number of auto-injected solution links.

---

## Architecture Reference

```
src/content/blogs.ts          ← Blog article data (append here)
src/lib/linkingEngine.ts       ← Auto-links blogs to /solutions/ zipper pages
src/data/proprietary/          ← Engineering data source (read-only)
  ├── climateMetrics.ts
  ├── labTests.ts
  ├── comparativeTable.ts      ← Crown vs Industry comparison data
  └── projectReferences.ts
src/data/zipperContent.ts      ← CategoryId + RegionSlug types (trilingual)
src/i18n/                      ← Translation dictionaries
  ├── en.ts
  ├── ar.ts
  └── fr.ts
src/app/[locale]/blogs/[slug]/ ← Blog rendering (server component)
src/app/sitemap.ts             ← Auto-includes blogArticles in sitemap
```

---

## Valid Category IDs

| ID | Product Line |
|---|---|
| `upvc-drainage-pipes` | UPVC Drainage Pipes / Fittings |
| `upvc-drainage-fittings` | UPVC Drainage Fittings |
| `pvc-high-pressure-pipes` | PVC High Pressure Pipes / Fittings |
| `pvc-high-pressure-fittings` | PVC High Pressure Fittings |
| `pvc-sch-40-fittings` | PVC SCH 40 Fittings |
| `pvc-duct-pipes` | PVC Duct Pipes / Fittings |
| `pvc-duct-fittings` | PVC Duct Fittings |
| `pvc-conduit-pipes` | PVC Conduit Pipes / Fittings |
| `ppr-pipes` | PP-R Pipes / Fittings |
| `hdpe-pipes` | HDPE Pipes / Fittings |
| `pex-pipes` | PEX Pipes / Fittings |
| `fabrications-accessories` | Fabrications & Accessories |
| `solvents` | PVC Solvents |

## Valid Region Slugs

| Slug | Region |
|---|---|
| `upvc-pipes-dubai` | Dubai |
| `upvc-pipes-abu-dhabi` | Abu Dhabi |
| `upvc-pipes-sharjah` | Sharjah |
| `upvc-pipes-saudi-arabia` | Saudi Arabia |
| `upvc-pipes-kuwait` | Kuwait |
| `upvc-pipes-qatar` | Qatar |
