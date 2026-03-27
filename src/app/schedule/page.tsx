"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Clock, User } from "lucide-react";
import { useState } from "react";

const locations = ["All Sanctuaries", "Rishikesh", "New Delhi", "Mumbai", "Bangalore", "Pune"];

const schedule = [
  { session: "Pranayama Mastery", type: "Meditation", level: "Advanced", loc: "Mumbai", time: "08:00 AM" },
  { session: "Hatha Vinyasa Flow", type: "Asana", level: "All Levels", loc: "New Delhi", time: "10:30 AM" },
  { session: "Restorative Yoga", type: "Gentle", level: "Healing", loc: "Bangalore", time: "05:00 PM" },
  { session: "Kriya Cleansing", type: "Kriya", level: "Traditional", loc: "Pune", time: "06:00 AM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const typeBadgeColors: Record<string, string> = {
  Meditation: "bg-primary/10 text-primary",
  Asana: "bg-secondary/10 text-secondary",
  Gentle: "bg-tertiary/10 text-tertiary",
  Kriya: "bg-stone-100 text-stone-600",
};

export default function SchedulePage() {
  const [activeLoc, setActiveLoc] = useState("All Sanctuaries");

  return (
    <div className="bg-background min-h-screen pt-36 pb-20">

      {/* ─── Hero Header ─── */}
      <header className="px-10 max-w-screen-2xl mx-auto mb-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-5 flex items-center gap-4"
          >
            <span className="inline-block h-[1px] w-10 bg-secondary" />
            Timeless Practice
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-headline text-5xl md:text-7xl text-on-surface leading-[0.9] mb-8 tracking-[-0.025em]"
          >
            Guided Journeys{" "}
            <span className="italic text-primary">&amp; Sacred Spaces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-on-surface-variant text-lg leading-relaxed font-light max-w-2xl"
          >
            Join our collective breath across five sanctuary locations. Each session is a
            step toward inner stillness, led by practitioners dedicated to the ancient
            lineage of Swami Jeetanand.
          </motion.p>
        </div>
      </header>

      {/* ─── Location Filter ─── */}
      <section className="px-10 max-w-screen-2xl mx-auto mb-14 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 pb-4 min-w-max">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLoc(loc)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 ${
                activeLoc === loc
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/25 scale-[1.04]"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Today's Highlight ─── */}
      <section className="px-10 max-w-screen-2xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="lg:col-span-8 bg-surface-container rounded-[2.5rem] p-10 flex flex-col md:flex-row gap-10 overflow-hidden relative border border-outline/5 shadow-sm"
          >
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary text-[9px] font-bold uppercase tracking-[0.25em] rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Live Now · Rishikesh
                </span>
                <h2 className="font-headline text-4xl text-on-surface mb-4 tracking-tight">
                  Surya Namaskar &amp; Deep Flow
                </h2>
                <p className="text-on-surface-variant font-light mb-10 max-w-sm leading-relaxed">
                  A foundational morning practice focusing on the breath-movement
                  synchronization. Experience the sunrise by the Ganges.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-outline font-bold flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> Time
                  </span>
                  <span className="text-xl font-medium text-primary">06:00 — 07:30</span>
                </div>
                <div className="w-px h-10 bg-outline-variant" />
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-outline font-bold flex items-center gap-1.5">
                    <User className="w-3 h-3" /> Guide
                  </span>
                  <span className="text-xl font-medium text-primary">Acharya Ved</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative min-h-[280px] md:min-h-full rounded-2xl overflow-hidden shadow-xl rotate-1 group">
              <Image
                src="/images/hero.png"
                alt="Yoga practice"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.1}
            className="lg:col-span-4 flex flex-col gap-5"
          >
            <div className="bg-surface-container-low p-8 rounded-[2.5rem] flex-1 border border-outline/5 shadow-sm">
              <h3 className="font-headline text-xl text-on-surface mb-8">Our Centers</h3>
              <div className="space-y-5">
                {["Himalayan Retreat", "Urban Sanctuary", "Oceanic Studio", "Garden Of Peace"].map(
                  (center) => (
                    <div key={center} className="group/item flex justify-between items-center cursor-pointer py-2 border-b border-outline/8 last:border-0">
                      <div>
                        <h4 className="font-medium text-[14px] text-on-surface group-hover/item:text-secondary transition-colors duration-200">
                          {center}
                        </h4>
                        <p className="text-[11px] text-on-surface-variant mt-0.5">
                          View location details
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-outline-variant group-hover/item:text-secondary group-hover/item:translate-x-1 transition-all duration-200 flex-shrink-0" />
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Weekly Schedule Table ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        custom={0}
        className="px-10 max-w-screen-2xl mx-auto mb-20"
      >
        <div className="bg-surface-container-lowest p-10 rounded-[3rem] border border-surface-container-high shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="font-headline text-3xl text-on-surface mb-2 tracking-tight">
                Weekly Schedule
              </h3>
              <p className="text-on-surface-variant font-light text-[14px]">
                Select a day to view available sessions.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-container-high">
                  {["Session", "Type", "Sanctuary", "Time", ""].map((col) => (
                    <th
                      key={col}
                      className="py-5 px-4 font-headline italic text-lg text-primary font-normal tracking-tight"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-surface-container-low transition-colors duration-200 border-b border-surface-container last:border-0"
                  >
                    <td className="py-7 px-4">
                      <div className="font-semibold text-on-surface text-[14px]">{row.session}</div>
                      <div className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-[0.2em] font-bold">
                        {row.level}
                      </div>
                    </td>
                    <td className="py-7 px-4">
                      <span
                        className={`text-[10px] px-3.5 py-1.5 rounded-full font-bold uppercase tracking-[0.15em] ${
                          typeBadgeColors[row.type] ?? "bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="py-7 px-4 text-on-surface text-[14px]">{row.loc}</td>
                    <td className="py-7 px-4 text-on-surface font-medium text-[14px]">{row.time}</td>
                    <td className="py-7 px-4 text-right">
                      <button className="btn-shine bg-primary/8 text-primary font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300">
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ─── Visual Accent Banner ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        custom={0}
        className="px-10 max-w-screen-2xl mx-auto mb-24"
      >
        <div className="h-72 relative rounded-[3rem] overflow-hidden shadow-2xl border border-outline/5 group">
          <Image
            src="/images/schedule_hero.png"
            alt="Meditation Space"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/25 backdrop-blur-[3px] flex items-center justify-center">
            <div className="text-center">
              <h4 className="font-headline text-3xl md:text-4xl text-white mb-3 tracking-tight">
                Can&apos;t join in person?
              </h4>
              <p className="text-white/85 font-light mb-8">
                Explore our virtual sanctuary for guided home sessions.
              </p>
              <button className="btn-shine px-10 py-3.5 bg-white text-primary rounded-full font-bold text-[10px] uppercase tracking-[0.25em] hover:scale-105 transition-transform duration-300 shadow-lg">
                Explore Online
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Location Cards ─── */}
      <section className="px-10 max-w-screen-2xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="font-headline text-4xl text-on-surface mb-16 tracking-tight"
        >
          Visit the Sanctuary
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Himalayan Retreat", addr: "Shakti Lane, Rishikesh", img: "/images/ashram.png" },
            { name: "Urban Sanctuary", addr: "GK II, New Delhi", img: "/images/studio.png" },
            { name: "Oceanic Studio", addr: "Beach Road, Mumbai", img: "/images/meditation.png" },
          ].map((loc, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={idx * 0.1}
              className="group cursor-pointer"
            >
              <div className="h-52 rounded-[2rem] overflow-hidden mb-6 relative shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={loc.img}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500" />
                {idx === 0 && (
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                    Headquarters
                  </span>
                )}
              </div>
              <h3 className="font-headline text-2xl mb-2 text-on-surface group-hover:text-primary transition-colors duration-300">
                {loc.name}
              </h3>
              <p className="text-on-surface-variant font-light mb-5 text-[14px]">{loc.addr}</p>
              <span className="inline-flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] group-hover:gap-3 transition-all duration-300">
                Get Directions <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
