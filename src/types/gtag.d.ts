// Type declarations for Google Analytics gtag.js
// This ensures TypeScript recognises window.gtag across the project.

interface GtagEventParamsMap {
    [key: string]: string | number | boolean | undefined;
}

interface Window {
    gtag: (
        command: 'config' | 'event' | 'js' | 'set',
        targetOrEventName: string | Date,
        params?: GtagEventParamsMap,
    ) => void;
    dataLayer: Array<Record<string, unknown>>;
}
