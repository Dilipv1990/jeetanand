"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
};

const programmes = [
  {
    title: "Main Yoga Classes",
    tags: ["Hatha", "Vinyasa", "Ashtanga", "Power", "Yin", "Restorative"],
    href: "/services#classes",
    image: "/images/studio.png",
  },
  {
    title: "Therapeutic Yoga",
    tags: ["Back pain", "Knee & joint", "Cervical", "Stress", "Diabetes", "Women's wellness"],
    href: "/services#classes",
    image: "/images/marma.png",
  },
  {
    title: "Kids Yoga Program",
    tags: ["Fun", "Fitness", "Focus", "Confidence", "Certificate"],
    href: "/services#kids-yoga",
    image: "/images/meditation.png",
  },
  {
    title: "Special Groups",
    tags: ["Senior citizens", "Corporate", "Family", "Personal 1-to-1"],
    href: "/services#classes",
    image: "/images/hero_meditation.png",
  },
  {
    title: "Home & Personal Classes",
    tags: ["At your home", "Group", "Weight-loss", "Meditation & pranayama"],
    href: "/services#home-classes",
    image: "/images/water.png",
  },
  {
    title: "Panchakarma & Ayurveda Retreats",
    tags: ["Detox", "Doctor consultation", "Ayurveda + Yoga"],
    href: "/services#retreats",
    image: "/images/ashram.png",
  },
];

const certificationPath = [
  { group: "Certificate Courses", items: ["1 Month", "3 Month", "6 Month"] },
  { group: "Teacher Training", items: ["TTC 200 Hrs", "TTC 300 Hrs", "TTC 500 Hrs"] },
];

const retreats = [
  "Ayurvedic Panchakarma Retreat with Doctor Consultation",
  "Panchakarma Detox & Wellness Retreat",
  "Ayurveda, Yoga & Panchakarma Retreat",
  "Holistic Wellness Retreat with Ayurvedic Doctor Consultation",
];

function RotatingBadge() {
  const text = "Teacher Training • TTC 200 · 300 · 500 • ";
  return (
    <div className="relative w-36 h-36 rounded-full bg-background shadow-xl shadow-stone-900/10 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full motion-safe:animate-[spin_28s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-primary text-[8px] uppercase font-bold">
          {/* textLength stretches the text to exactly the circle's circumference (2π·38) so it never overlaps */}
          <textPath href="#badge-circle" textLength="238" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <Award className="w-8 h-8 text-secondary" />
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-grain min-h-screen">

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-36 md:pt-44 pb-24">
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full border border-primary/15 bg-white/50 backdrop-blur text-[10px] tracking-[0.35em] uppercase text-primary font-bold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Prachi Yoga Center
            </motion.span>

            <h1 className="font-headline text-on-surface font-light tracking-[-0.04em] leading-[0.92] text-[3.6rem] sm:text-7xl xl:text-[7.5rem] mb-10">
              {["Breathe.", "Move."].map((word, i) => (
                <span key={word} className="block overflow-hidden">
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
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block italic text-primary"
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
              className="text-lg md:text-xl text-on-surface-variant max-w-[520px] mb-12 leading-relaxed font-light"
            >
              Yoga for kids, adults and seniors — therapeutic care, Ayurveda retreats
              and certified teacher training, all under one calm roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link
                href="#programmes"
                className="btn-shine group inline-flex items-center gap-3 bg-primary text-on-primary pl-9 pr-3 py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.22em] shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-shadow duration-500"
              >
                Explore Programmes
                <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="#certifications"
                className="text-on-surface font-bold text-[11px] uppercase tracking-[0.22em] border-b border-on-surface/20 hover:border-on-surface pb-1 transition-colors duration-300"
              >
                Teacher Training
              </Link>
            </motion.div>
          </div>

          {/* Arch imagery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease }}
            className="lg:col-span-6 xl:col-span-5 relative mx-auto w-full max-w-[460px]"
          >
            <div className="relative aspect-[4/5] rounded-t-full rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/15">
              <Image
                src="/images/hero_woman_final.png"
                alt="Yoga practice on the riverbank at sunrise"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 460px"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="absolute -left-6 md:-left-16 bottom-16 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[6px] border-background shadow-xl"
            >
              <Image
                src="/images/hero_meditation.png"
                alt="Meditation by the river"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.05, ease }}
              className="absolute -right-2 md:-right-10 -top-4"
            >
              <RotatingBadge />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Statement ─── */}
      <section className="py-24 md:py-32">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6 text-center font-headline font-light text-3xl sm:text-4xl md:text-6xl leading-[1.25] md:leading-[1.2] tracking-[-0.02em] text-on-surface"
        >
          A practice for{" "}
          <span className="inline-block align-middle w-20 h-10 md:w-28 md:h-14 rounded-full overflow-hidden relative -mt-2">
            <Image src="/images/studio.png" alt="" fill className="object-cover" sizes="112px" />
          </span>{" "}
          every age, every body{" "}
          <span className="inline-block align-middle w-20 h-10 md:w-28 md:h-14 rounded-full overflow-hidden relative -mt-2">
            <Image src="/images/meditation.png" alt="" fill className="object-cover" sizes="112px" />
          </span>{" "}
          and <span className="italic text-secondary">every stage</span> of life.
        </motion.p>
      </section>

      {/* ─── Programmes ─── */}
      <section id="programmes" className="scroll-mt-24 pb-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div>
              <span className="block mb-5 text-[10px] tracking-[0.45em] uppercase text-secondary font-bold">
                Our Programmes
              </span>
              <h2 className="font-headline text-5xl md:text-6xl tracking-[-0.02em] text-on-surface">
                Find your <span className="italic text-primary">practice</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-primary font-bold text-[11px] uppercase tracking-[0.22em]"
            >
              All programmes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Numbered list */}
            <ul className="lg:col-span-7 border-t border-outline/15">
              {programmes.map((p, i) => (
                <li key={p.title} className="border-b border-outline/15">
                  <Link
                    href={p.href}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4.5rem_1fr_auto] gap-x-4 items-center py-8 md:py-10"
                  >
                    <span
                      className={`font-headline text-sm md:text-base transition-colors duration-500 ${
                        active === i ? "text-secondary" : "text-on-surface-variant/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`font-headline text-2xl md:text-4xl tracking-[-0.01em] transition-all duration-500 ${
                          active === i ? "text-primary md:translate-x-2" : "text-on-surface"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[13px] text-on-surface-variant font-light">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <span
                      className={`w-11 h-11 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        active === i
                          ? "bg-primary border-primary text-on-primary rotate-45"
                          : "border-outline/20 text-primary"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sticky image preview (desktop) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32">
              <div className="relative aspect-[4/5] rounded-t-full rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/10 bg-surface-container">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={programmes[active].image}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={programmes[active].image}
                      alt={programmes[active].title}
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/50 to-transparent" />
                <span className="absolute bottom-8 left-8 right-8 text-white font-headline text-2xl italic">
                  {programmes[active].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section id="certifications" className="scroll-mt-24 px-3 md:px-6 pb-32">
        <div className="bg-primary text-on-primary rounded-[2.5rem] md:rounded-[4rem] py-24 md:py-32 px-6 md:px-16 relative overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <motion.span variants={fadeUp} custom={0} className="block mb-5 text-[10px] tracking-[0.45em] uppercase text-secondary-container font-bold">
                Certifications
              </motion.span>
              <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-5xl md:text-7xl tracking-[-0.02em] mb-6">
                From student <span className="italic text-secondary-container">to teacher</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.2} className="text-on-primary/75 font-light max-w-xl mx-auto leading-relaxed">
                Grow at your own pace — from short certificate courses to 200, 300 and
                500 hour teacher training. A certificate is awarded on successful
                completion of every course.
              </motion.p>
            </motion.div>

            {/* Path */}
            <div className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.6, ease }}
                className="hidden md:block absolute top-[27px] left-[8%] right-[8%] h-px bg-white/25 origin-left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
                {certificationPath.map(({ group, items }, g) => (
                  <div key={group}>
                    <div className="grid grid-cols-3 gap-4">
                      {items.map((item, i) => (
                        <motion.div
                          key={item}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-60px" }}
                          variants={fadeUp}
                          custom={0.2 + (g * 3 + i) * 0.12}
                          className="flex flex-col items-center text-center"
                        >
                          <span
                            className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-headline text-lg mb-5 ${
                              g === 1
                                ? "bg-secondary-container text-on-secondary-container"
                                : "bg-primary border border-white/30 text-on-primary"
                            }`}
                          >
                            {g * 3 + i + 1}
                          </span>
                          <span className="font-headline text-xl md:text-2xl">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-center mt-8 text-[10px] tracking-[0.35em] uppercase text-on-primary/60 font-bold">
                      {group}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-20">
              <Link
                href="/services#certifications"
                className="group inline-flex items-center gap-3 bg-background text-primary pl-9 pr-3 py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.22em] hover:shadow-2xl transition-shadow duration-500"
              >
                View Courses
                <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Retreats ─── */}
      <section className="px-3 md:px-6 pb-32">
        <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden min-h-[640px] flex items-end">
          <Image
            src="/images/hero_v2.png"
            alt="Sunrise over the Ganges"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

          <div className="relative w-full p-6 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white"
            >
              <motion.span variants={fadeUp} custom={0} className="block mb-5 text-[10px] tracking-[0.45em] uppercase text-secondary-container font-bold">
                Retreats
              </motion.span>
              <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-5xl md:text-6xl tracking-[-0.02em] leading-[1.05]">
                Panchakarma &amp; <br />
                <span className="italic">Ayurveda Wellness</span>
              </motion.h2>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0.2}
              className="bg-white/12 backdrop-blur-xl border border-white/20 rounded-[2rem] p-3"
            >
              {retreats.map((r) => (
                <li key={r}>
                  <Link
                    href="/services#retreats"
                    className="group flex items-center justify-between gap-6 px-5 py-4 rounded-2xl text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-[15px] font-light">{r}</span>
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="pb-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-headline text-5xl md:text-7xl mb-8 leading-[0.95] tracking-[-0.03em] text-on-surface font-light"
          >
            Your mat is <span className="italic text-primary">waiting.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-lg text-on-surface-variant mb-12 max-w-md font-light leading-relaxed"
          >
            See this week&apos;s class timings and pick the session that suits you.
          </motion.p>
          <motion.div variants={fadeUp} custom={0.2}>
            <Link
              href="/schedule"
              className="btn-shine group inline-flex items-center gap-3 bg-primary text-on-primary pl-9 pr-3 py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.22em] shadow-xl shadow-primary/25"
            >
              View Schedule
              <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
