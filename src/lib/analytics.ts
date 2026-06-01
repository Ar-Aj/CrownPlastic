// ═══════════════════════════════════════════════════════════════════════════════
// GA4 ANALYTICS UTILITY — Crown Plastic Pipes
// ═══════════════════════════════════════════════════════════════════════════════
// Typed, fail-safe wrappers around window.gtag for custom GA4 events.
// All functions no-op silently when gtag is unavailable (SSR, ad-blockers).
// ═══════════════════════════════════════════════════════════════════════════════

/** Parameters accepted by gtag event calls. */
interface GtagEventParams {
    event_category?: string;
    event_label?: string;
    button_name?: string;
    button_location?: string;
    product_category?: string;
    product_name?: string;
    form_type?: string;
    outbound_url?: string;
    link_label?: string;
    value?: number;
    [key: string]: string | number | boolean | undefined;
}

/**
 * Safe wrapper around `window.gtag`. Silently no-ops when gtag is not loaded
 * (e.g. during SSR, in test environments, or when blocked by ad-blockers).
 */
function safeGtag(
    command: 'event',
    eventName: string,
    params?: GtagEventParams,
): void {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag(command, eventName, params);
    }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Track a generic button / CTA click.
 *
 * @param buttonName  Human-readable button label, e.g. "Request a Quote"
 * @param location    Page section, e.g. "hero" | "footer" | "product_card"
 */
export function trackButtonClick(buttonName: string, location: string): void {
    safeGtag('event', 'button_click', {
        event_category: 'engagement',
        button_name: buttonName,
        button_location: location,
    });
}

/**
 * Track a product or product-category view.
 * Maps to the custom GA4 event `product_viewed`.
 *
 * @param category     Category slug or display name, e.g. "upvc-pressure"
 * @param productName  Display name of the product / category viewed
 */
export function trackProductView(
    category: string,
    productName: string,
): void {
    safeGtag('event', 'product_viewed', {
        event_category: 'product',
        product_category: category,
        product_name: productName,
    });
}

/**
 * Track a form submission.
 * Use `formType = 'quote_request'` for the Request a Quote flow.
 *
 * @param formType  Identifier for the form, e.g. "contact" | "quote_request" | "join_us"
 */
export function trackFormSubmit(formType: string): void {
    safeGtag('event', 'form_submit', {
        event_category: 'conversion',
        form_type: formType,
    });
}

/**
 * Track an outbound (external) link click.
 *
 * @param url    Full destination URL
 * @param label  Optional human-readable label for the link
 */
export function trackOutboundClick(url: string, label?: string): void {
    safeGtag('event', 'outbound_click', {
        event_category: 'engagement',
        outbound_url: url,
        link_label: label ?? url,
    });
}
