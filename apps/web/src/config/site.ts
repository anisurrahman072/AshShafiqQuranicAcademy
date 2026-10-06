import { getSiteUrl } from "@/lib/site-url";

export const site = {
  name: "Ash Shafiq Quranic Academy",
  nameBangla: "আশ শফিক কোরআনিক একাডেমী",
  tagline: "Learn Quran · Understand Quran · Live by Quran",
  taglineBangla: "অনলাইনে কুরআন ও ইসলামী শিক্ষা",
  description:
    "Online one-to-one Quran classes for learners worldwide. Nazra, Tajweed, and Quran Tilawah — taught by Hafez Mawlana Mufti Shafiqul Islam in Dhaka, Bangladesh.",
  url: getSiteUrl(),
  teacher: {
    name: "Hafez Mawlana Mufti Shafiqul Islam",
    nameBangla: "হাফেজ মাওলানা মুফতি শফিকুল ইসলাম",
    phone: "+8801887233643",
    phoneDisplay: "+880 1887-233643",
    location: "Dhaka, Bangladesh",
    locationBangla: "ঢাকা বাংলাদেশ",
    currentRole: "Qatar Imam — Imam of a mosque in Qatar",
  },
  social: {
    facebook: "https://www.facebook.com/ashshafiqquranicacademy1",
    facebookHandle: "facebook.com/ashshafiqquranicacademy1",
    whatsapp: "https://wa.me/8801887233643",
  },
  zoomUrl: process.env.NEXT_PUBLIC_ZOOM_URL ?? null,
  meetUrl: process.env.NEXT_PUBLIC_GOOGLE_MEET_URL ?? null,
} as const;

export type Site = typeof site;
