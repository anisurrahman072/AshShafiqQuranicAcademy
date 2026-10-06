import Image from "next/image";
import Link from "next/link";

import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { site } from "@/config/site";
import { buildWaUrl } from "@/lib/whatsapp";

export function Instructor() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="about-heading"
          overline="Your teacher"
          heading="Meet Your Instructor"
        />
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <MotionWrapper>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border-2 border-gold/30 shadow-gold/20 shadow-md mx-auto lg:mx-0">
              <Image
                src="/brand/teacher.png"
                alt={`Portrait of ${site.teacher.name}, instructor at ${site.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-top"
                priority={false}
              />
            </div>
          </MotionWrapper>
          <MotionWrapper>
            <div>
              <h3 className="font-heading text-3xl text-foreground">
                {site.teacher.name}
              </h3>
              <p className="mt-2 text-lg text-muted-foreground">
                {site.teacher.nameBangla}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="border border-gold/60 bg-gold-gradient px-3 py-1.5 text-sm font-bold text-forest shadow-gold">
                  ✦ Current: Qatar Imam — Imam of a mosque in Qatar
                </Badge>
                <Badge className="bg-forest/10 text-forest">
                  Hafiz of the Holy Quran
                </Badge>
                <Badge className="bg-forest/10 text-forest">
                  Mawlana (Islamic Scholar)
                </Badge>
                <Badge className="bg-forest/10 text-forest">Mufti</Badge>
                <Badge className="bg-forest/10 text-forest">
                  Certified Quran Teacher
                </Badge>
              </div>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Hafez Mawlana Mufti Shafiqul Islam has dedicated his life to
                  the teaching and transmission of the Holy Quran. Having
                  memorised the entire Quran and earned formal Islamic
                  scholarship as Mawlana and Mufti, he brings scholarly depth
                  to every lesson — combining precision with patient,
                  encouraging pedagogy.
                </p>
                <p>
                  Based in Dhaka, Bangladesh, and currently serving as Imam of a
                  mosque in Qatar, he guides students of all ages and
                  backgrounds — from young children taking their first steps
                  with the Arabic alphabet, to adults seeking to refine a
                  lifetime of recitation.
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-4 text-foreground">
                <li>
                  📍 {site.teacher.location}{" "}
                  <span className="text-muted-foreground">
                    ({site.teacher.locationBangla})
                  </span>
                </li>
                <li>
                  <Link
                    href={buildWaUrl("Assalamu Alaikum, I have a question about classes.")}
                    className="font-medium text-forest hover:text-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 WhatsApp: {site.teacher.phoneDisplay}
                  </Link>
                </li>
                <li>
                  <a
                    href={`tel:${site.teacher.phone}`}
                    className="font-medium text-forest hover:text-gold"
                  >
                    Call: {site.teacher.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
