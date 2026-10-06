/**
 * Public site origin (no trailing slash). Drives `metadataBase`, canonical, JSON-LD, sitemap.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://ashshafiqquranicacademy.com`).
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://ashshafiqquranicacademy.com";
  return raw.replace(/\/$/, "");
}
