// Prefer an environment variable so the ID can be changed without code edits.
// Expose it as NEXT_PUBLIC so it's available on the client when bundled by Next.js.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Send a page_view to Google Analytics
 * Call this from a client component when the route changes.
 */
export const pageview = (url: string) => {
  if (typeof window === "undefined" || !GA_ID) return;
  (window as any).gtag?.("config", GA_ID, {
    page_path: url,
  });
};

/**
 * Send a custom event to Google Analytics
 * Example:
 * event({ action: 'play', category: 'video', label: 'hero-video', value: 42 })
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === "undefined" || !GA_ID) return;
  (window as any).gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};