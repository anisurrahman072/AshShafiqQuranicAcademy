"use client";

import { MotionScaleIn } from "@/components/common/MotionWrapper";
import { IslamicPatternBg } from "@/components/common/IslamicPatternBg";
import { SectionHeader } from "@/components/common/SectionHeader";
import { pricing } from "@/config/pricing";
import { WA_FREE_INTRO_CTA } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden bg-primary py-20 text-warm md:py-28 lg:py-32"
    >
      <IslamicPatternBg />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="pricing-heading"
          overline="Simple pricing"
          heading="One Clear Price. One Full Hour."
          subtitle="No hidden fees. No contracts. Just dedicated, one-to-one Quran learning."
          onDark
        />
        <MotionScaleIn>
          <div className="mx-auto max-w-xl rounded-2xl border border-gold/30 bg-white/5 p-10 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-warm/80">
              Per Session
            </p>
            <p className="font-heading text-5xl font-bold text-gold md:text-7xl">
              {pricing.currencySymbol}
              {pricing.amount}
            </p>
            <p className="mt-2 text-base text-warm/80">
              {pricing.currency} / hour · 1 session = {pricing.sessionDuration}
            </p>
            <div className="my-8 border-t border-gold/20" />
            <ul className="space-y-3 text-left text-sm text-warm/90">
              {pricing.included.map((line) => (
                <li key={line}>✓ {line}</li>
              ))}
            </ul>
            <a
              href={WA_FREE_INTRO_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 w-full min-h-12 max-w-sm border-0 bg-gold-gradient font-bold text-forest shadow-gold hover:shadow-gold-lg",
              )}
            >
              Start with a Free Introductory Call
            </a>
          </div>
        </MotionScaleIn>
        <p className="mt-4 text-center text-sm text-warm/60">
          {pricing.internationalNote}
        </p>
        <div className="mt-12 max-w-2xl space-y-2 text-warm">
          {pricing.faq.map((row) => (
            <details
              key={row.q}
              className="group rounded-lg border border-gold/20 bg-white/5 open:border-gold/40"
            >
              <summary className="cursor-pointer list-none px-4 py-3 text-left text-sm font-medium marker:content-none hover:text-gold [&::-webkit-details-marker]:hidden">
                {row.q}
              </summary>
              <p className="px-4 pb-3 text-sm text-warm/85">{row.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
