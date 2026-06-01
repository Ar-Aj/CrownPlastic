'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 404 → Home redirect.
 * Uses client-side router.replace because the project is
 * statically exported (output: 'export') and server-side
 * redirect() is not available at runtime.
 */
export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    }, [router]);

    // Minimal fallback while redirect fires (< 1 frame)
    return null;
}
