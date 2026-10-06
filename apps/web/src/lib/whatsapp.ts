import { site } from "@/config/site";

const PHONE = site.teacher.phone.replace(/\D/g, "");

export function buildWaUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = buildWaUrl(
  `Assalamu Alaikum, I'd like to inquire about Quran classes at ${site.name}.`,
);

export const WA_FREE_INTRO = buildWaUrl(
  "Assalamu Alaikum, I'd like to book a free introductory call for Quran classes.",
);

export const WA_FREE_INTRO_CTA = buildWaUrl(
  "Assalamu Alaikum, I'd like to start with a free introductory session.",
);
