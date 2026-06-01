'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OldGSORedirectClient() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/technical/certifications-compliance-guide');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <p className="text-gray-600">
                    This page has moved. Redirecting to{' '}
                    <a
                        href="/technical/certifications-compliance-guide"
                        className="text-amber-600 underline"
                    >
                        Quality & ISO Certifications Guide
                    </a>
                    ...
                </p>
            </div>
        </div>
    );
}
