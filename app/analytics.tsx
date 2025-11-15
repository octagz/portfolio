"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_ID, pageview } from "../lib/gtag";

const MAX_PAGEVIEW_RETRIES = 4;
const RETRY_DELAY_MS = 500;

/**
 * Client component that records a pageview on route changes (app router).
 * Place this at the root (in app/layout.tsx body) so it runs on every page.
 */
export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? "";

  useEffect(() => {
    if (!GA_ID) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Google Analytics is disabled. Set NEXT_PUBLIC_GA_ID to enable metrics.");
      }
      return;
    }

    const url = pathname + (search ? `?${search}` : "");
    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const sendPageview = () => {
      attempts += 1;
      pageview(url);

      const gtagLoaded = typeof window !== "undefined" && typeof (window as any).gtag === "function";
      if (!gtagLoaded && attempts <= MAX_PAGEVIEW_RETRIES) {
        timeoutId = setTimeout(sendPageview, RETRY_DELAY_MS * attempts);
      } else if (!gtagLoaded && process.env.NODE_ENV === "development") {
        console.warn("Google Analytics library did not load before timing out.");
      }
    };

    sendPageview();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname, search]);

  return null;
}