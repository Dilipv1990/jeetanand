"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, cubicBezier, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = cubicBezier(0.22, 1, 0.36, 1);
const BREATH_MS = 4000;

const chips = [
  { label: "Hatha", className: "top-[4%] left-[4%]", delay: 0 },
  { label: "Pranayama", className: "top-[16%] -right-[2%]", delay: 1.2 },
  { label: "Ayurveda", className: "hidden sm:block bottom-[22%] -left-[6%]", delay: 0.6 },
  { label: "Meditation", className: "hidden sm:block bottom-[12%] -right-[4%]", delay: 1.8 },
];

const practices = [
  "Hatha", "Vinyasa", "Ashtanga", "Pranayama", "Meditation", "Yin",
  "Ayurveda", "Panchakarma", "Kids Yoga", "Teacher Training",
];

const highlights = [
  ["All ages", "Kids to seniors"],
  ["Therapeutic", "Back, knee & stress care"],
  ["TTC", "200 · 300 · 500 hrs"],
];

/** A photo that expands and contracts at a calm 4s-in / 4s-out breathing pace. */
function BreathOrb() {
  const reduce = useReducedMotion();
  const [inhale, setInhale] = useState(true);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setInhale((v) => !v), BREATH_MS);
    return () => clearInterval(t);
  }, [reduce]);

  const breath = { duration: BREATH_MS / 1000, ease: "easeInOut" as const };

  return (
    <div className="relative aspect-square w-full max-w-[330px] sm:max-w-[440px] lg:max-w-[540px] mx-auto">
      {/* Rotating aura */}
      <div className="absolute inset-[10%] rounded-full bg-[conic-gradient(from_0deg,#ffb627,#ff5e1a,#ff3d7f,#7b4dff,#ffb627)] blur-3xl opacity-60 motion-safe:animate-[spin_16s_linear_infinite]" />

      {/* Breath rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/15"
          style={{ inset: `${i * 6}%` }}
          animate={reduce ? undefined : { scale: inhale ? 1 + (3 - i) * 0.02 : 0.96, opacity: inhale ? 1 : 0.35 }}
          transition={breath}
        />
      ))}

      <motion.div
        className="absolute inset-[17%] rounded-full overflow-hidden ring-1 ring-white/30 shadow-[0_40px_100px_-20px_rgba(255,94,26,0.65)]"
        animate={reduce ? undefined : { scale: inhale ? 1.05 : 0.95 }}
        transition={breath}
      >
        <Image
          src="/images/hero_woman_final.png"
          alt="Yoga practice on the banks of the Ganges at sunrise"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 360px"
        />
      </motion.div>

      {/* Breath cue */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[1%] flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.25em] text-white whitespace-nowrap">
        <motion.span
          className="w-2 h-2 rounded-full bg-secondary-container"
          animate={reduce ? undefined : { scale: inhale ? 1.6 : 0.8 }}
          transition={breath}
        />
        {reduce ? (
          "Breathe"
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={inhale ? "in" : "out"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
            >
              {inhale ? "Breathe in" : "Breathe out"}
            </motion.span>
          </AnimatePresence>
        )}
      </div>

      {/* Floating practice chips */}
      {chips.map(({ label, className, delay }) => (
        <motion.span
          key={label}
          className={`absolute ${className} px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[12px] text-white/90 font-medium`}
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  );
}

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

      <div className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-28 md:pt-40 pb-14 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-6 items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="inline-flex items-center gap-3 mb-8 md:mb-10 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-white/80 font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_12px_#ffb627]" />
            Yoga · Ayurveda · Teacher Training
          </motion.span>

          <h1 className="font-headline font-light tracking-[-0.045em] leading-[0.88] text-[3.9rem] sm:text-8xl xl:text-[9.5rem] mb-8 md:mb-10">
            {[
              { word: "Breathe.", className: "" },
              { word: "Move.", className: "sm:pl-[0.9em]" },
            ].map(({ word, className }, i) => (
              <span key={word} className={`block overflow-hidden ${className}`}>
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-[0.16em] -mb-[0.08em] sm:pl-[0.35em]">
              <motion.span
                className="block italic text-sunrise pr-[0.1em]"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.39, ease }}
              >
                Belong.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="text-lg md:text-xl text-white/70 max-w-[520px] mb-10 leading-relaxed font-light"
          >
            Yoga for kids, adults and seniors — therapeutic care, Ayurveda retreats
            and certified teacher training, all under one calm roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease }}
            className="flex flex-wrap gap-3 sm:gap-4 items-center"
          >
            <Link
              href="#programmes"
              className="btn-sunrise group inline-flex items-center gap-3 text-white pl-7 pr-2 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/40"
            >
              Explore Programmes
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center h-14 px-7 rounded-full border border-white/25 text-white font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors duration-300"
            >
              Book a Class
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 md:mt-16 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl"
          >
            {highlights.map(([title, detail]) => (
              <div key={title}>
                <dt className="font-headline text-lg md:text-2xl text-white">{title}</dt>
                <dd className="text-[11px] md:text-[13px] text-white/55 mt-1 leading-snug">{detail}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Breathing orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
          className="lg:col-span-5"
        >
          <BreathOrb />
        </motion.div>
      </div>

      {/* Practice marquee */}
      <div className="relative border-t border-white/10 bg-white/[0.03] py-5 md:py-6 overflow-hidden">
        <div className="flex w-max motion-safe:animate-marquee">
          {[...practices, ...practices].map((p, i) => (
            <span
              key={i}
              aria-hidden={i >= practices.length}
              className="flex items-center gap-8 pr-8 font-headline italic text-2xl md:text-3xl text-white/85 whitespace-nowrap"
            >
              {p}
              <span className="not-italic text-base text-secondary-container">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
