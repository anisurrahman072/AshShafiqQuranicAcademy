"use client";

import { Moon, Sun, Sunset } from "lucide-react";
import Link from "next/link";

import { MotionXItem } from "@/components/common/MotionWrapper";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  ALL_DAYS,
  schedule,
  type TimeSlot,
  type Weekday,
} from "@/config/schedule";
import { buildWaUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const icons = {
  morning: Sun,
  afternoon: Sunset,
  night: Moon,
} as const;

function WeekdayChips({ days, slotId }: { days: Weekday[]; slotId: string }) {
  if (days.length === 0) {
    return (
      <div className="mt-3 flex flex-col gap-2">
        <Badge
          variant="secondary"
          className="w-fit border border-gold/30 bg-cream text-forest"
        >
          Contact us to confirm days
        </Badge>
        <Link
          href={buildWaUrl(
            `Please confirm which days my batch (${slotId}) can run.`,
          )}
          className="text-sm font-medium text-forest hover:text-gold"
        >
          Message on WhatsApp
        </Link>
      </div>
    );
  }
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Days available">
      {ALL_DAYS.map((d) => {
        const active = days.includes(d);
        return (
          <li key={d}>
            <span
              className={cn(
                "inline-block rounded-full px-2 py-1 text-xs font-medium",
                active
                  ? "bg-gold/20 text-gold-dark"
                  : "bg-gray-200 text-muted-foreground",
              )}
            >
              {d}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function leftBorderClass(accent: TimeSlot["accent"]) {
  if (accent === "gold") return "border-l-gold";
  if (accent === "forest") return "border-l-forest-light";
  return "border-l-navy";
}

function iconColorClass(accent: TimeSlot["accent"]) {
  if (accent === "gold") return "text-gold";
  if (accent === "forest") return "text-forest-light";
  return "text-navy";
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="bg-tint py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="schedule-heading"
          overline="Class schedule"
          heading="Find Your Perfect Batch"
          subtitle="All times shown in Bangladesh Standard Time (BST / UTC+6). International students: simply convert to your local timezone."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {schedule.map((slot, index) => {
            const Icon = icons[slot.id];
            return (
              <MotionXItem key={slot.id} index={index}>
                <li
                  className={cn(
                    "h-full rounded-xl border border-[var(--border)] border-l-4 bg-cream/90 p-6 shadow-sm transition-shadow hover:shadow-gold/30",
                    leftBorderClass(slot.accent),
                  )}
                >
                  <div
                    className={cn("mb-2 flex items-center gap-2", iconColorClass(slot.accent))}
                  >
                    <Icon className="size-6 shrink-0" aria-hidden />
                    <h3 className="font-heading text-lg text-foreground">
                      {slot.label}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-forest">
                    {slot.timeRange} BST
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {slot.note}
                  </p>
                  <WeekdayChips days={slot.days} slotId={slot.label} />
                  <div className="mt-4">
                    <Link
                      href={buildWaUrl(slot.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-sm font-semibold text-forest hover:text-gold"
                    >
                      Book this slot →
                    </Link>
                  </div>
                </li>
              </MotionXItem>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
