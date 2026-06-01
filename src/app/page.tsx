import { redirect } from 'next/navigation';

// ─────────────────────────────────────────────────────────────
// Root Redirect: / → /en/
// With output: 'export', this generates a <meta http-equiv="refresh">
// For production, add a server-level 301 redirect (Apache/Nginx/CDN)
// ─────────────────────────────────────────────────────────────
export default function RootPage() {
  redirect('/en/');
}
