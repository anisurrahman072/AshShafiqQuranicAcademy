import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const FB_URL = site.social.facebook;

const premium =
  "border border-white/20 bg-facebook-premium text-white shadow-[0_4px_20px_rgba(20,100,200,0.35)] transition-transform hover:scale-[1.03] motion-safe:animate-facebook-focus motion-reduce:animate-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none";

type IconProps = { className?: string };

export function FacebookHeaderIcon({ className }: IconProps) {
  return (
    <a
      href={FB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full",
        premium,
        className,
      )}
      aria-label={`Follow ${site.name} on Facebook`}
    >
      <span
        className="font-sans text-[1.15rem] font-bold leading-none tracking-tight"
        aria-hidden
      >
        f
      </span>
    </a>
  );
}

type FollowButtonProps = { className?: string };

export function FacebookFollowButton({ className }: FollowButtonProps) {
  return (
    <a
      href={FB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-12 min-h-[48px] items-center justify-center rounded-lg px-5 text-sm font-semibold",
        premium,
        className,
      )}
    >
      Follow on Facebook
    </a>
  );
}
