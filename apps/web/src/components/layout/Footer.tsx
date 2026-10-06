import Image from "next/image";
import Link from "next/link";
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

import { site } from "@/config/site";
import { buildWaUrl } from "@/lib/whatsapp";

const quick = [
  { href: "#courses", label: "Courses" },
  { href: "#schedule", label: "Schedule" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-secondary text-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logo.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full border border-gold/40"
              />
              <span className="font-heading text-xl text-gold">{site.name}</span>
            </div>
            <p className="mt-2 text-sm text-warm/70">{site.tagline}</p>
            <p className="mt-1 text-sm text-warm/60">{site.teacher.location}</p>
          </div>
          <nav aria-label="Footer">
            <p className="font-semibold text-gold">Quick links</p>
            <ul className="mt-4 flex flex-col gap-2 text-warm/80">
              {quick.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold text-gold">Connect</p>
            <ul className="mt-4 space-y-3 text-warm/80">
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <FacebookIcon className="size-5 shrink-0" />
                  {site.social.facebookHandle}
                </a>
              </li>
              <li>
                <a
                  href={buildWaUrl(
                    "Assalamu Alaikum, I'm reaching out from your website.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp: {site.teacher.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gold/20 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-warm/50">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="text-sm italic text-warm/50">
              May Allah bless your learning journey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
