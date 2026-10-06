"use client";

import {
  BookOpen,
  Mic2,
  MonitorPlay,
  ScrollText,
  Users,
} from "lucide-react";
import Link from "next/link";

import { MotionStaggerItem } from "@/components/common/MotionWrapper";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildWaUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: BookOpen,
    title: "Nazra — Basic Reading",
    body: "Start from the very beginning. Learn the Arabic alphabet, join letters, and read the Quran correctly — even with zero prior knowledge.",
  },
  {
    icon: ScrollText,
    title: "Tajweed — Recitation Rules",
    body: "Master the sacred rules of Tajweed: articulation points, elongations, merging, and pauses — so every word of Allah's book is recited perfectly.",
  },
  {
    icon: Mic2,
    title: "Quran Tilawah — Beautiful Recitation",
    body: "Elevate your recitation beyond correct to beautiful. Develop melodic flow, breath control, and emotional expression in your Quran reading.",
  },
  {
    icon: Users,
    title: "For Kids & Adults",
    body: "Patient, age-appropriate teaching for children (5+) and adults — male and female. Every student gets a personalised learning pace.",
  },
  {
    icon: MonitorPlay,
    title: "One-to-One Online Classes",
    body: "Fully private, fully focused. Each session is dedicated entirely to you via Zoom or Google Meet — no classroom distractions, only growth.",
  },
] as const;

export function Services() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="courses-heading"
          overline="What we offer"
          heading="Our Courses & Programs"
          subtitle="Comprehensive Quranic education — beginner to advanced — for every age group, online, one-to-one."
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <MotionStaggerItem
              key={item.title}
              index={i}
              className={cn(
                "list-none",
                i === 4 && "sm:col-span-2 lg:col-start-2",
              )}
            >
              <li>
                <Card
                  className={cn(
                    "h-full border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-gold",
                    "border-t-4 border-t-gold",
                  )}
                >
                  <CardHeader className="space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <item.icon className="size-6" aria-hidden />
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="leading-relaxed">{item.body}</p>
                    <Link
                      href={buildWaUrl(
                        `I'd like to know more about: ${item.title}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-semibold text-forest transition-colors hover:text-gold"
                    >
                      Learn more → WhatsApp
                    </Link>
                  </CardContent>
                </Card>
              </li>
            </MotionStaggerItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
