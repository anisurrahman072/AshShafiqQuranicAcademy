import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto mt-3 mb-12 h-0.5 w-16 rounded-full bg-gold-gradient",
        className,
      )}
      aria-hidden
    />
  );
}
