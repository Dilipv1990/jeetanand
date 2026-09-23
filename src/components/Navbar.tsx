"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Sanctuary" },
  { href: "/services", label: "Practices" },
  { href: "/about", label: "Origins" },
  { href: "/schedule", label: "Schedule" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On pages other than home, always show solid nav
  const isHome = pathname === "/";
  const solidNav = (!isHome || scrolled) && !menuOpen;
  // Transparent nav over the dark home hero needs light text
  const onDark = isHome && !scrolled && !menuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out
          ${solidNav
            ? "bg-background/85 backdrop-blur-2xl border-b border-outline/8 shadow-sm shadow-stone-900/5 py-4"
            : "bg-transparent py-4 md:py-7"
          }
        `}
      >
        <div className="flex justify-between items-center px-5 md:px-16 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="relative z-50 group flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500
              ${onDark ? "border-white/30 bg-white/10" : "border-primary/30 bg-primary/5"}`}
            >
              <div className={`w-3 h-3 rounded-full transition-colors duration-500
                ${onDark ? "bg-secondary-container" : "bg-primary"}`}
              />
            </div>
            <span className={`text-[15px] font-headline font-semibold tracking-tight transition-colors duration-500
              ${onDark ? "text-white" : "text-primary"}`}
            >
              Prachi Yoga Center
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
                    ${onDark
                      ? isActive ? "text-white" : "text-white/70 hover:text-white"
                      : isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                    }
                  `}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-500
                    ${onDark ? "bg-secondary-container" : "bg-primary"}
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `} />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            className={`hidden md:block btn-shine px-7 py-2.5 rounded-full font-label text-[11px] font-bold uppercase tracking-widest transition-all duration-500 shadow-xl
              ${onDark
                ? "bg-white text-ink hover:scale-[1.05] shadow-ink/30"
                : "btn-sunrise text-white shadow-secondary/25"
              }
            `}
          >
            Join Now
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden relative z-50 w-11 h-11 rounded-full bg-sunrise text-white flex items-center justify-center shadow-lg shadow-secondary/30"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu (outside <nav> so its backdrop-filter can't trap position: fixed) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-background flex flex-col px-5 pt-28 pb-10"
          >
            <ul className="flex flex-col border-t border-outline/15">
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                  className="border-b border-outline/15"
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-5 font-headline text-4xl tracking-tight ${
                      pathname === href ? "text-primary italic" : "text-on-surface"
                    }`}
                  >
                    {label}
                    <ArrowUpRight className="w-6 h-6 text-secondary" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/schedule"
              onClick={() => setMenuOpen(false)}
              className="mt-auto w-full text-center btn-sunrise text-white py-4 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] shadow-xl shadow-primary/25"
            >
              Book a Class
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
