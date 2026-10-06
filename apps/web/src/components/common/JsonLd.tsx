import { site } from "@/config/site";
import { pricing } from "@/config/pricing";

function abs(path: string) {
  const base = site.url.replace(/\/$/, "");
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const orgId = `${abs("/")}#organization`;
const webId = `${abs("/")}#website`;
const personId = `${abs("/")}#instructor`;

const graph = [
  {
    "@type": "WebSite",
    "@id": webId,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": orgId },
  },
  {
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    description: site.description,
    logo: { "@type": "ImageObject", url: abs("/brand/logo.png") },
    image: [abs("/brand/logo.png")],
    sameAs: [site.social.facebook],
    telephone: site.teacher.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka",
      addressCountry: "BD",
    },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: [
      "Quran",
      "Tajweed",
      "Nazra",
      "Quran Tilawah",
      "Islamic education",
    ],
    offers: {
      "@type": "Offer",
      price: pricing.amount,
      priceCurrency: pricing.currency,
      name: "One-hour one-to-one Quran class",
      description:
        "1-hour one-to-one online Quran class via Zoom or Google Meet",
    },
    employee: { "@id": personId },
  },
  {
    "@type": "Person",
    "@id": personId,
    name: site.teacher.name,
    image: abs("/brand/teacher.png"),
    jobTitle: "Hafez, Mawlana, Mufti — Quran instructor; Qatar Imam",
    worksFor: { "@id": orgId },
  },
] as const;

const json = {
  "@context": "https://schema.org",
  "@graph": graph,
} as const;

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
