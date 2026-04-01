import "../global.css";
import { Playfair_Display, Outfit } from "@next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import PlausibleProvider from "next-plausible";
import Analytics from "./analytics";
import { GA_ID } from "../lib/gtag";

export const metadata: Metadata = {
  title: {
    default: "Octavio Gzain | 8gza.in",
    template: "%s | 8gza.in",
  },
  description: "Argentine engineer and Fulbright Scholar building at the intersection of AI, engineering, and business. Octavio Gzain. 8gza.in",
  openGraph: {
    title: "Octavio Gzain",
    description:
      "Argentine engineer and Fulbright Scholar building at the intersection of AI, engineering, and business.",
    url: "https://8gza.in",
    siteName: "8gza.in",
    images: [
      {
        url: "https://8gza.in/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const themeInitializer = `
(function() {
  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle('dark', isDark);
  };
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  if (!mql) return;
  applyTheme(mql.matches);
  const listener = (event) => applyTheme(event.matches);
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', listener);
  } else if (typeof mql.addListener === 'function') {
    mql.addListener(listener);
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[bodyFont.variable, displayFont.variable].join(" ")} suppressHydrationWarning>
      <head>
        <Script id="prefers-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        <PlausibleProvider domain="8gza.in" />
        {GA_ID ? (
          <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
              }}
            />
          </>
        ) : null}
      </head>
      <body className={`min-h-screen font-body bg-background text-foreground antialiased ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        {children}
        {GA_ID ? <Analytics /> : null}
      </body>
    </html>
  );
}
