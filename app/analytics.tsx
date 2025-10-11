"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "../lib/gtag";

/**
 * Client component that records a pageview on route changes (app router).
 * Place this at the root (in app/layout.tsx body) so it runs on every page.
 */
export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams?.toString() ?? "";
    const url = pathname + (search ? `?${search}` : "");
    // Only call if gtag is loaded
    if ((window as any).gtag) {
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}