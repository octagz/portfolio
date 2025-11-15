import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import Script from "next/script";
import PlausibleProvider from "next-plausible";
import Analytics from "./analytics";
import { GA_ID } from "../lib/gtag";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | 8gza.in",
    template: "%s | 8gza.in",
  },
  description: "Software Engineer specializing in Artificial Intelligence. Octavio Gzain. 8gza.in",
  openGraph: {
    title: "8gza.in",
    description:
      "Software Engineer specializing in Artificial Intelligence",
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

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// The CalSans font is stored in `public/fonts/CalSans-SemiBold.ttf`.
// Use the public font file so Next.js can find it during the build.
const calSans = LocalFont({ src: "../public/fonts/CalSans-SemiBold.ttf", variable: "--font-calsans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <PlausibleProvider domain="8gza.in" />
        {/* Google Analytics (gtag.js) */}
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
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        {children}
        {/* Client-side analytics that sends pageviews on route changes */}
        {GA_ID ? <Analytics /> : null}
      </body>
    </html>
  );
}