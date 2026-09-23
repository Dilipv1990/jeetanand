"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, ArrowUpRight } from "lucide-react";

// Thumb-reachable booking action for phones; hidden where it would point to the current page.
export default function MobileBookBar() {
  const pathname = usePathname();
  if (pathname === "/schedule") return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-30 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none">
      <Link
        href="/schedule"
        className="pointer-events-auto flex items-center justify-between gap-3 bg-ink text-white pl-5 pr-2 py-2 rounded-full shadow-xl shadow-ink/40 ring-1 ring-white/10"
      >
        <span className="flex items-center gap-3">
          <CalendarDays className="w-5 h-5 text-secondary-container" />
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-[12px] uppercase tracking-[0.18em]">Book a Class</span>
            <span className="text-[11px] text-white/65">See this week&apos;s timings</span>
          </span>
        </span>
        <span className="w-11 h-11 rounded-full bg-sunrise flex items-center justify-center">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </Link>
    </div>
  );
}
