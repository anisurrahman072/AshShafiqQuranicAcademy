import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Amiri, Inter, Playfair_Display } from "next/font/google";

import { JsonLd } from "@/components/common/JsonLd";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Navbar } from "@/components/layout/Navbar";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  weight: "400",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#004B57" },
    { media: "(prefers-color-scheme: dark)", color: "#002A32" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="overflow-x-clip scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Dhaka, Bangladesh" />
      </head>
      <body
        className={`${inter.variable} ${display.variable} ${amiri.variable} min-h-svh overflow-x-clip font-sans antialiased`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only z-[200] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:inline-block focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:font-medium focus:text-forest focus:shadow-md focus:outline focus:outline-2 focus:outline-gold/50"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-w-0">
          {children}
        </main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
