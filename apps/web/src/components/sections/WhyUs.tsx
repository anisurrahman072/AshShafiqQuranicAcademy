"use client";

import { BarChart2, Clock, GraduationCap, Heart } from "lucide-react";

import { MotionStaggerItem } from "@/components/common/MotionWrapper";
import { SectionHeader } from "@/components/common/SectionHeader";

const features = [
  {
    icon: GraduationCap,
    title: "Hafiz & Mawlana Certified",
    copy: "Your teacher has memorised the entire Quran (Hafiz) and holds a formal Islamic scholarship (Mawlana) — ensuring you learn from authentic, deep knowledge.",
  },
  {
    icon: Clock,
    title: "Your Schedule, Your Choice",
    copy: "Three daily time bands — morning, afternoon, and night — mean there is always a slot that fits your life, whether you are in Bangladesh or anywhere on Earth.",
  },
  {
    icon: BarChart2,
    title: "Visible Progress",
    copy: "Regular lesson summaries and milestone assessments show you exactly how far you've come and what to focus on next — no guesswork.",
  },
  {
    icon: Heart,
    title: "Warm, Encouraging Environment",
    copy: "A safe, non-judgmental space where questions are celebrated, mistakes are learning moments, and every student is honoured for showing up.",
  },
] as const;

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="bg-secondary py-20 text-warm md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="why-heading"
          overline="Our promise"
          heading="Why Thousands of Families Trust Us"
          subtitle="We don't just teach recitation — we guide you to a lifelong relationship with the Quran."
          onDark
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <MotionStaggerItem
              key={f.title}
              index={i}
              stagger={0.12}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold"
                  aria-hidden
                >
                  <f.icon className="size-7" />
                </div>
                <h3 className="font-heading mt-4 text-lg font-semibold text-gold">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm/85">
                  {f.copy}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
