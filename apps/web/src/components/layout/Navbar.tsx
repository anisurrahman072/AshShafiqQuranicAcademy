"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FacebookHeaderIcon } from "@/components/common/FacebookCta";
import { site } from "@/config/site";
import { WA_FREE_INTRO } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#schedule", label: "Schedule" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 overflow-x-clip transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-primary/95 shadow-nav backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/#top"
          className="group flex min-h-[44px] min-w-0 max-w-full flex-1 items-center gap-2 sm:flex-initial"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gold/40">
            <Image
              src="/brand/logo.png"
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
          </span>
          <span className="min-w-0 font-heading text-base font-semibold leading-tight text-white sm:text-lg md:text-xl">
            <span aria-hidden className="mr-0.5 text-gold sm:mr-1">
              ☪
            </span>
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-4 md:flex lg:gap-6"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-warm/90 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={WA_FREE_INTRO}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "min-h-11 shrink-0 border-0 bg-gold-gradient px-4 font-semibold text-forest shadow-gold transition-all hover:scale-[1.03] hover:shadow-gold-lg",
              )}
            >
              Book a Free Call
            </a>
            <FacebookHeaderIcon className="shrink-0" />
          </div>
        </nav>

        <div className="flex shrink-0 items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-lg" }),
                "min-h-[44px] min-w-[44px] text-warm",
              )}
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l-gold/30 bg-primary text-warm"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-gold">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="min-h-[44px] rounded-lg px-3 py-2 text-base font-medium hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href={WA_FREE_INTRO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-gold-gradient px-4 font-semibold text-forest"
                >
                  Book a Free Call
                </a>
                <div className="mt-3 flex items-center justify-center">
                  <FacebookHeaderIcon className="size-12" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
