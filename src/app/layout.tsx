// ─────────────────────────────────────────────────────────────
// Minimal Root Layout (passthrough)
// The real layout with <html>, <body>, providers, and locale
// handling lives in app/[locale]/layout.tsx.
//
// This file exists solely because Next.js requires app/layout.tsx.
// It must NOT contain <html> or <body> tags to avoid nesting
// conflicts with the [locale] layout.
// ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
