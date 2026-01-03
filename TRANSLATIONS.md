# Translations Guide

This project supports **English (en)** and **Arabic (ar)** with a simple, structured i18n system using dot-notation for translation keys.

---

## 📁 File Structure

```
src/
├── i18n/
│   ├── en.ts          # English translations (organized by page/section)
│   ├── ar.ts          # Arabic translations (same structure as en.ts)
│   └── index.ts       # useT() helper function
└── context/
    └── LanguageContext.tsx  # Manages language state + RTL support
```

---

## ✏️ How to Add a New Translation

### Step 1: Identify the Section
Determine which page or section your text belongs to:
- `nav` – Navigation items
- `common` – Shared UI elements (buttons, labels)
- `footer` – Footer content
- `home` – Home page content
- `about` – About Us page
- `products` – Products page
- `contact` – Contact page
- `sustainability` – Sustainability page
- `innovation` – Innovation page
- `resources` – Resources page

### Step 2: Add Keys to Both Language Files
Open **both** `src/i18n/en.ts` and `src/i18n/ar.ts` and add your new key in the appropriate section.

**Example:**
```typescript
// src/i18n/en.ts
export const en = {
  nav: {
    home: 'Home',
    products: 'Products',
    new_page: 'New Page',  // ✅ Add here
  },
  // ...
}

// src/i18n/ar.ts
export const ar = {
  nav: {
    home: 'الرئيسية',
    products: 'المنتجات',
    new_page: 'صفحة جديدة',  // ✅ Add here (Arabic translation)
  },
  // ...
}
```

### Step 3: Use in Component
Import the `useT()` hook and access your translation using dot-notation:

```tsx
import { useT } from '@/i18n';

export default function MyComponent() {
  const t = useT();

  return (
    <div>
      <h1>{t('nav.new_page')}</h1>
      <p>{t('home.hero_title')}</p>
    </div>
  );
}
```

---

## 🔑 Key Naming Convention

Use clear, hierarchical dot-notation:

| Pattern | Example | Usage |
|---------|---------|-------|
| `nav.*` | `nav.products`, `nav.contact` | Navigation items |
| `common.*` | `common.get_a_quote`, `common.learn_more` | Shared buttons/UI elements |
| `home.*` | `home.hero_title`, `home.why_title` | Home page sections |
| `products.*` | `products.title`, `products.subtitle` | Products page content |
| `about.*` | `about.mission_title`, `about.vision_text` | About page sections |

**Conventions:**
- Use **snake_case** for keys (e.g., `hero_title`, `contact_us`)
- Group related keys by page/section
- Keep keys descriptive (avoid generic names like `text1`, `label2`)

---

## 🧪 Testing Your Translations

1. **Save your changes** to both `en.ts` and `ar.ts`
2. **Run the dev server**: `npm run dev`
3. **Toggle languages** using the EN/AR button in the navbar
4. **Verify** that your text displays correctly in both languages
5. **Check RTL layout** for Arabic (text should align right)

---

## ⚠️ Important Notes

- **Always add keys to BOTH language files** – missing keys will display the key path as fallback
- **Keep structure identical** in `en.ts` and `ar.ts` (same sections, same key names)
- **DO NOT edit** `src/i18n/index.ts` or `src/context/LanguageContext.tsx` unless you understand the implementation
- **Only touch** the translation dictionary files (`en.ts`, `ar.ts`) and component usage

---

## 🛠️ How It Works (Overview)

1. **LanguageContext** manages the current language state (`en` or `ar`)
2. **useT() hook** returns a translation function that reads from the active dictionary
3. **Dot-notation paths** (e.g., `'home.hero_title'`) navigate the nested translation objects
4. **RTL support** is automatically applied when language is set to Arabic

---

## 📝 Quick Reference

```tsx
// ✅ Correct usage
const t = useT();
<h1>{t('home.hero_title')}</h1>
<button>{t('common.get_a_quote')}</button>

// ❌ Incorrect usage
<h1>{t('hero_title')}</h1>           // Missing section prefix
<h1>{t('home', 'hero_title')}</h1>   // Wrong syntax (no comma)
```

---

## 🔗 Related Files

- [src/i18n/en.ts](./src/i18n/en.ts) – English translations
- [src/i18n/ar.ts](./src/i18n/ar.ts) – Arabic translations
- [src/i18n/index.ts](./src/i18n/index.ts) – Translation hook
- [src/context/LanguageContext.tsx](./src/context/LanguageContext.tsx) – Language state management

---

**Need help?** Check existing translation keys in `en.ts` to see patterns and examples.
