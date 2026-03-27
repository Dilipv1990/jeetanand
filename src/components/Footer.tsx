import Link from "next/link";
import { Mail, Phone, Sprout, ArrowUpRight } from "lucide-react";

const links = [
  {
    heading: "Practices",
    items: [
      { label: "Hatha Yoga", href: "/services" },
      { label: "Pranayama", href: "/services" },
      { label: "Meditation", href: "/services" },
      { label: "Marma Chikitsa", href: "/services" },
    ],
  },
  {
    heading: "About",
    items: [
      { label: "Our Story", href: "/about" },
      { label: "Teachers", href: "/about" },
      { label: "Philanthropy", href: "/about" },
      { label: "Lineage", href: "/about" },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline/8">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 pt-24 pb-12">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-20">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <h2 className="text-[17px] font-headline font-semibold text-primary tracking-tight">
                Swami Jeetanand
              </h2>
            </div>
            <p className="text-[14px] text-on-surface-variant leading-relaxed font-light mb-8">
              Crafting the pause between breaths through authentic practices in the
              heart of NCR. Established 1994.
            </p>
            {/* Contact icons */}
            <div className="flex gap-3">
              {[
                { icon: Mail, label: "Email" },
                { icon: Phone, label: "Phone" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-outline/15 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            {links.map(({ heading, items }) => (
              <div key={heading} className="flex flex-col gap-5">
                <span className="text-[9px] font-bold text-outline uppercase tracking-[0.35em]">
                  {heading}
                </span>
                {items.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-[13px] text-on-surface-variant hover:text-primary transition-colors duration-200 font-light flex items-center gap-1.5 group w-fit"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-outline/20 to-transparent mb-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[10px] text-outline font-bold uppercase tracking-[0.25em]">
            © 2025 Swami Jeetanand Yog Sansthan
          </p>
          <div className="flex items-center gap-2.5">
            <Sprout className="w-3.5 h-3.5 text-primary" />
            <p className="text-[10px] text-outline font-medium uppercase tracking-[0.2em] italic">
              Design for the pause between breaths.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
