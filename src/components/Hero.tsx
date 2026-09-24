"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import TrialForm from "@/components/TrialForm";
import { whatsappHref } from "@/lib/contact";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const practices = [
  "Hatha", "Vinyasa", "Ashtanga", "Pranayama", "Meditation", "Yin",
  "Ayurveda", "Panchakarma", "Kids Yoga", "Teacher Training",
];

const highlights = [
  ["5,000+", "Students taught"],
  ["All ages", "Kids to seniors"],
  ["200–500 hr", "Teacher training"],
];

const faces = ["/images/hero_woman_final.png", "/images/meditation.png", "/images/hero_meditation.png", "/images/swami.png"];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Sunrise glow over a night sky */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[55%] w-[170vw] max-w-[1500px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,150,40,0.6)_0%,rgba(255,61,127,0.32)_32%,rgba(123,77,255,0.12)_52%,transparent_68%)] motion-safe:animate-sunrise" />
        <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full bg-secondary/40 blur-[150px]" />
        <div className="absolute -top-32 -right-40 w-[520px] h-[520px] rounded-full bg-tertiary/50 blur-[150px]" />
      </div>

      {/* DOM order (copy → form → proof) puts the form right after the pitch on phones */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-28 md:pt-36 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
        <div className="lg:col-span-7 lg:pt-6">
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-3 mb-7 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-white/80 font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_12px_#ffb627]" />
            Yoga · Ayurveda · Teacher Training
          </motion.span>

          <motion.h1
            {...rise(0.1)}
            className="font-headline font-light tracking-[-0.03em] leading-[1.02] text-[2.75rem] sm:text-6xl xl:text-7xl mb-6"
          >
            Authentic yoga for{" "}
            <span className="italic text-sunrise pr-[0.08em]">every age &amp; every body</span>
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="text-base md:text-lg text-white/70 max-w-[540px] leading-relaxed font-light"
          >
            Group, personal and at-home classes, therapeutic care, Ayurveda retreats and
            certified teacher training, guided by experienced teachers.
          </motion.p>

          <motion.div {...rise(0.3)} className="hidden lg:flex flex-wrap gap-3 items-center mt-9">
            <Link
              href="#programmes"
              className="group inline-flex items-center gap-3 bg-white text-ink pl-7 pr-2 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:shadow-2xl transition-shadow duration-500"
            >
              Explore Programmes
              <span className="w-10 h-10 rounded-full bg-sunrise text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-14 px-6 rounded-full border border-white/25 text-white font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Chat with us
            </a>
          </motion.div>
        </div>

        {/* Free trial form */}
        <motion.div
          id="free-trial"
          {...rise(0.25)}
          className="lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-2 scroll-mt-28 relative"
        >
          <div aria-hidden className="absolute -inset-3 rounded-[2.5rem] md:rounded-[3rem] bg-[conic-gradient(from_140deg,#ffb627,#ff5e1a,#ff3d7f,#7b4dff,#ffb627)] opacity-40 blur-2xl" />
          <div className="relative bg-surface-container-lowest text-on-surface rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/40">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
              Free trial class
            </span>
            <h2 className="font-headline text-[1.75rem] md:text-4xl tracking-[-0.02em] leading-tight mb-2">
              Your first class is <span className="italic text-gradient-primary pr-1">on us</span>
            </h2>
            <p className="text-[14px] text-on-surface-variant font-light mb-6">
              Share a few details and we&apos;ll match you with the right class and teacher.
            </p>
            <TrialForm />
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div {...rise(0.4)} className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-7">
            <div className="flex -space-x-3">
              {faces.map((src) => (
                <span key={src} className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-ink">
                  <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-secondary-container">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[13px] text-white/65 mt-1">Loved by students across India</p>
            </div>
          </div>
          <dl className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl">
            {highlights.map(([title, detail]) => (
              <div key={title}>
                <dt className="font-headline text-xl md:text-3xl text-white">{title}</dt>
                <dd className="text-[11px] md:text-[13px] text-white/55 mt-1 leading-snug">{detail}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Practice marquee */}
      <div className="relative border-t border-white/10 bg-white/[0.03] py-4 md:py-5 overflow-hidden">
        <div className="flex w-max motion-safe:animate-marquee">
          {[...practices, ...practices].map((p, i) => (
            <span
              key={i}
              aria-hidden={i >= practices.length}
              className="flex items-center gap-8 pr-8 font-headline italic text-xl md:text-2xl text-white/80 whitespace-nowrap"
            >
              {p}
              <span className="not-italic text-sm text-secondary-container">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
