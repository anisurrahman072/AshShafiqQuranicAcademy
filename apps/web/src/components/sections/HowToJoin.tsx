"use client";

import { BookHeart, CalendarCheck, MessageCircle } from "lucide-react";

import { MotionStaggerItem } from "@/components/common/MotionWrapper";
import { SectionHeader } from "@/components/common/SectionHeader";
import { site } from "@/config/site";
import { buildWaUrl } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MessageCircle,
    title: "Message Us on WhatsApp",
    copy: "Send us a quick message on WhatsApp: your name, age, current Quran level (beginner, intermediate, advanced), and which time batch interests you.",
    color: "text-whatsapp",
  },
  {
    icon: CalendarCheck,
    title: "Choose Your Slot",
    copy: "We'll confirm your available batch time — morning, afternoon, or night — and share your Zoom or Google Meet joining link before your first class.",
    color: "text-gold",
  },
  {
    icon: BookHeart,
    title: "Begin Your Journey",
    copy: "Join your first class and experience focused, one-to-one Quran teaching. Your teacher will assess your level and design a personalised roadmap.",
    color: "text-navy",
  },
] as const;

export function HowToJoin() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-tint py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="contact-heading"
          overline="Get started"
          heading="Three Simple Steps to Begin"
          subtitle="From first message to first lesson — we guide you every step of the way."
        />
        {site.zoomUrl || site.meetUrl ? (
          <p className="mb-6 text-center text-sm text-muted-foreground">
            {site.zoomUrl ? (
              <a href={site.zoomUrl} className="text-forest underline" target="_blank" rel="noreferrer">
                Zoom
              </a>
            ) : null}
            {site.zoomUrl && site.meetUrl ? " · " : null}
            {site.meetUrl ? (
              <a href={site.meetUrl} className="text-forest underline" target="_blank" rel="noreferrer">
                Google Meet
              </a>
            ) : null}
            {" "}
            links are available for enrolled students.
          </p>
        ) : null}
        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0 border-t-2 border-dashed border-gold/40 md:block"
            style={{ top: "2.5rem" }}
            aria-hidden
          />
          <ul className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <MotionStaggerItem
                key={s.title}
                index={i}
                stagger={0.2}
                className="list-none"
              >
                <li className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-cream shadow-sm",
                      s.color,
                    )}
                    aria-hidden
                  >
                    <s.icon className="size-7" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </li>
              </MotionStaggerItem>
            ))}
          </ul>
        </div>
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to take the first step?
          </p>
          <a
            href={buildWaUrl("Assalamu Alaikum, I'm ready to get started!")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex h-auto min-h-14 px-12 py-5 text-xl font-bold text-forest",
              "bg-gold-gradient shadow-gold-lg transition-all hover:scale-[1.02]",
            )}
          >
            Get Started on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
