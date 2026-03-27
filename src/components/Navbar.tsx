"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Sanctuary" },
  { href: "/services", label: "Practices" },
  { href: "/about", label: "Origins" },
  { href: "/schedule", label: "Schedule" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On pages other than home, always show solid nav
  const isHome = pathname === "/";
  const solidNav = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out
        ${solidNav
          ? "bg-background/85 backdrop-blur-2xl border-b border-outline/8 shadow-sm shadow-stone-900/5 py-4"
          : "bg-transparent py-7"
        }
      `}
    >
      <div className="flex justify-between items-center px-8 md:px-16 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500
            ${solidNav ? "border-primary/30 bg-primary/5" : "border-primary/20 bg-primary/5"}`}
          >
            <div className={`w-3 h-3 rounded-full transition-colors duration-500
              ${solidNav ? "bg-primary" : "bg-primary"}`}
            />
          </div>
          <span className={`text-[15px] font-headline font-semibold tracking-tight transition-colors duration-500
            ${solidNav ? "text-primary" : "text-primary"}`}
          >
            Swami Jeetanand
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 group pb-0.5
                  ${isActive
                    ? "text-primary"
                    : solidNav
                      ? "text-on-surface-variant hover:text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }
                `}
              >
                {label}
                <span className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-500
                  ${isActive
                    ? "w-full bg-primary"
                    : "w-0 bg-primary group-hover:w-full"
                  }
                `} />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <button
          className={`btn-shine px-7 py-2.5 rounded-full font-label text-[11px] font-bold uppercase tracking-widest transition-all duration-500 shadow-xl
            ${solidNav
              ? "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container"
              : "bg-primary text-on-primary hover:scale-[1.05] shadow-primary/20"
            }
          `}
        >
          Join Now
        </button>
      </div>
    </nav>
  );
}
