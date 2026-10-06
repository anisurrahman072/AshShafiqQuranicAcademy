import type { Metadata } from "next";
import { site } from "@/config/site";

const url = site.url;

const titleDefault = `${site.name} — Online Quran Classes Worldwide | Nazra, Tajweed & One-to-One`;

const description = `${site.name}: ${site.description} One-to-one classes via Zoom or Google Meet. ${
  site.teacher.name
} · ${site.teacher.location}.`;

const keywords: string[] = [
  site.name,
  "Ash Shafiq Quranic Academy",
  "আশ শফিক কোরআনিক একাডেমী",
  "Quran classes online",
  "online Quran teacher Bangladesh",
  "Tajweed classes online",
  "Nazra for beginners",
  "Hafiz teacher online",
  "Mufti Quran teacher",
  "Mawlana Quran teacher",
  "learn Quran online one to one",
  "Quran for kids and adults",
  "Zoom Quran classes",
  "Google Meet Quran",
  "Islamic education online",
  "Quran recitation Dhaka",
  "Bangladesh Quran classes BST",
  "Surah",
  "Quran tilawah",
];

/**
 * App Router metadata: favicon and social images use file conventions
 * (`/icon`, `/apple-icon`, `/opengraph-image`, `/twitter-image`) in `src/app/`.
 * metadataBase is required for correct absolute OG URLs when shared.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: titleDefault,
    template: `%s | ${site.name}`,
  },
  applicationName: site.name,
  description,
  keywords,
  authors: [{ name: site.teacher.name }, { name: site.name, url }],
  publisher: site.name,
  creator: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: site.name,
    title: titleDefault,
    description,
    countryName: "Bangladesh",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: ["/twitter-image.png"],
  },
  alternates: { canonical: url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "education",
  classification: "Educational institution",
  referrer: "origin-when-cross-origin",
  other: {
    "apple-mobile-web-app-title": "Ash Shafiq",
  },
  appleWebApp: {
    capable: true,
    title: "Ash Shafiq",
    statusBarStyle: "black-translucent",
  },
};
