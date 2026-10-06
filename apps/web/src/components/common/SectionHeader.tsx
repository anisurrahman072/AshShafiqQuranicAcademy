import { GoldDivider } from "@/components/common/GoldDivider";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  overline?: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
  onDark?: boolean;
  /** For aria-labelledby on parent section */
  id: string;
}

export function SectionHeader({
  overline,
  heading,
  subtitle,
  centered = true,
  onDark = false,
  id,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16")}>
      {overline ? (
        <p
          className={cn(
            "text-sm font-semibold tracking-widest text-gold uppercase",
          )}
        >
          {overline}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-heading mt-2 text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-tight",
          onDark ? "text-white" : "text-foreground",
        )}
      >
        {heading}
      </h2>
      <GoldDivider className={cn(!centered && "mx-0")} />
      {subtitle ? (
        <p
          className={cn(
            "mx-auto max-w-2xl text-base leading-relaxed",
            onDark ? "text-warm/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
