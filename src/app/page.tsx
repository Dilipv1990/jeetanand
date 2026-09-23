"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";

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

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-grain min-h-screen">

      <Hero />

      {/* ─── Statement ─── */}
      <section className="py-16 md:py-32">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-5xl mx-auto px-5 text-center font-headline font-light text-3xl sm:text-4xl md:text-6xl leading-[1.25] md:leading-[1.2] tracking-[-0.02em] text-on-surface"
        >
          A practice for{" "}
          <span className="inline-block align-middle w-20 h-10 md:w-28 md:h-14 rounded-full overflow-hidden relative -mt-2">
            <Image src="/images/studio.png" alt="" fill className="object-cover" sizes="112px" />
          </span>{" "}
          every age, every body{" "}
          <span className="inline-block align-middle w-20 h-10 md:w-28 md:h-14 rounded-full overflow-hidden relative -mt-2">
            <Image src="/images/meditation.png" alt="" fill className="object-cover" sizes="112px" />
          </span>{" "}
          and <span className="italic text-gradient-primary pr-1">every stage</span> of life.
        </motion.p>
      </section>

      {/* ─── Programmes ─── */}
      <section id="programmes" className="scroll-mt-24 pb-20 md:pb-32">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">
            <div>
              <span className="block mb-5 text-[10px] tracking-[0.45em] uppercase text-secondary font-bold">
                Our Programmes
              </span>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-on-surface">
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
                    className="group grid grid-cols-[4.5rem_1fr_auto] gap-x-4 items-center py-5 md:py-10"
                  >
                    {/* Thumbnail stands in for the sticky preview below lg */}
                    <span className="lg:hidden relative w-[4.5rem] h-[4.5rem] rounded-2xl overflow-hidden bg-surface-container">
                      <Image src={p.image} alt="" fill className="object-cover" sizes="72px" />
                    </span>
                    <span
                      className={`hidden lg:block font-headline text-sm md:text-base transition-colors duration-500 ${
                        active === i ? "text-secondary" : "text-on-surface-variant/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`font-headline text-xl sm:text-2xl md:text-4xl leading-tight tracking-[-0.01em] transition-all duration-500 ${
                          active === i ? "text-primary md:translate-x-2" : "text-on-surface"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-1 mt-2 md:mt-3 text-[12px] md:text-[13px] text-on-surface-variant font-light">
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
      <section id="certifications" className="scroll-mt-24 px-3 md:px-6 pb-20 md:pb-32">
        <div className="bg-ink text-white rounded-[2.5rem] md:rounded-[4rem] py-16 md:py-32 px-5 md:px-16 relative isolate overflow-hidden">
          <div className="absolute -z-10 left-1/2 -translate-x-1/2 -bottom-[60%] w-[1200px] max-w-[200vw] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,150,40,0.45)_0%,rgba(255,61,127,0.22)_35%,transparent_65%)] pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-20"
            >
              <motion.span variants={fadeUp} custom={0} className="block mb-5 text-[10px] tracking-[0.45em] uppercase text-secondary-container font-bold">
                Certifications
              </motion.span>
              <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-4xl sm:text-5xl md:text-7xl tracking-[-0.02em] mb-6">
                From student <span className="italic text-sunrise pr-1">to teacher</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.2} className="text-white/70 font-light max-w-xl mx-auto leading-relaxed">
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
                    <div className="grid grid-cols-3 gap-2 md:gap-4">
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
                            className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-headline text-lg mb-5 ${
                              g === 1
                                ? "bg-sunrise text-white shadow-lg shadow-secondary/40"
                                : "bg-white/5 border border-white/25 text-white"
                            }`}
                          >
                            {g * 3 + i + 1}
                          </span>
                          <span className="font-headline text-lg md:text-2xl leading-tight">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-center mt-8 text-[10px] tracking-[0.35em] uppercase text-white/55 font-bold">
                      {group}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-14 md:mt-20">
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
      <section className="px-3 md:px-6 pb-20 md:pb-32">
        <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden min-h-[560px] md:min-h-[640px] flex items-end">
          <Image
            src="/images/hero_v2.png"
            alt="Sunrise over the Ganges"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

          <div className="relative w-full p-3 pt-28 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white"
            >
              <motion.span variants={fadeUp} custom={0} className="block mb-5 px-3 md:px-0 text-[10px] tracking-[0.45em] uppercase text-secondary-container font-bold">
                Retreats
              </motion.span>
              <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] leading-[1.05] px-3 md:px-0">
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
              className="bg-white/12 backdrop-blur-xl border border-white/20 rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3"
            >
              {retreats.map((r) => (
                <li key={r}>
                  <Link
                    href="/services#retreats"
                    className="group flex items-center justify-between gap-4 md:gap-6 px-4 md:px-5 py-3.5 md:py-4 rounded-2xl text-white hover:bg-white/10 transition-colors duration-300"
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
      <section className="px-3 md:px-6 pb-24 md:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-sunrise relative isolate overflow-hidden rounded-[2.5rem] md:rounded-[4rem] px-5 py-20 md:py-32 text-center flex flex-col items-center text-white"
        >
          <div aria-hidden className="absolute -z-10 -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-secondary-container/30 blur-[120px] pointer-events-none" />
          <div aria-hidden className="absolute -z-10 inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-headline text-[2.75rem] sm:text-5xl md:text-7xl mb-8 leading-[0.95] tracking-[-0.03em] text-white font-light"
          >
            Your mat is <span className="italic text-secondary-container">waiting.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-lg text-white/80 mb-10 md:mb-12 max-w-md font-light leading-relaxed"
          >
            See this week&apos;s class timings and pick the session that suits you.
          </motion.p>
          <motion.div variants={fadeUp} custom={0.2}>
            <Link
              href="/schedule"
              className="btn-shine group inline-flex items-center gap-3 bg-white text-ink pl-9 pr-3 py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.22em] shadow-2xl shadow-ink/30"
            >
              View Schedule
              <span className="w-10 h-10 rounded-full bg-sunrise text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
