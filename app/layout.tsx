import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import PlausibleProvider from 'next-plausible'

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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "8gza.in",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <PlausibleProvider domain="8gza.in"/>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
