"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { WA_DEFAULT } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <Link
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={cn(
        "group fixed bottom-6 right-6 z-50 flex min-h-14 min-w-14 items-center justify-center overflow-hidden rounded-full bg-whatsapp p-3 text-white shadow-lg transition-all duration-300 hover:px-4",
        "animate-pulse-ring",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))]",
      )}
    >
      <MessageCircle className="size-7 shrink-0" aria-hidden />
      <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width,margin] duration-300 group-hover:ml-2 group-hover:max-w-[10rem]">
        Chat with us
      </span>
    </Link>
  );
}
