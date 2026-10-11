"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import { ArrowUpRight, CalendarClock, ExternalLink, House, MapPin, Monitor, Moon, Sun, Sunrise, Sunset, TrainFront } from "lucide-react";
import { useState } from "react";
import { ADDRESS_CITY, ADDRESS_LINE, NEAREST_METRO, mapsHref, whatsappHref } from "@/lib/contact";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const slots = [
  { label: "Early morning", hint: "5 – 8 AM", icon: Sunrise },
  { label: "Morning", hint: "8 – 11 AM", icon: Sun },
  { label: "Evening", hint: "4 – 7 PM", icon: Sunset },
  { label: "Late evening", hint: "7 – 9 PM", icon: Moon },
];

const places = [
  { label: "At my home", hint: "Anywhere in Noida", icon: House },
  { label: "At the studio", hint: "Sector 116, Noida", icon: MapPin },
  { label: "Online", hint: "Live video class", icon: Monitor },
];

const classTypes = ["General wellness", "Senior citizen yoga", "Therapeutic yoga", "Weight loss", "Kids yoga", "Meditation & pranayama"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease },
  }),
};

function OptionCard({ active, onClick, icon: Icon, label, hint }: { active: boolean; onClick: () => void; icon: typeof Sun; label: string; hint: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${
        active
          ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
          : "bg-background border-outline/15 text-on-surface hover:border-primary/40"
      }`}
    >
      <span className={`w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center ${active ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
        <Icon className="w-5 h-5" />
      </span>
      <span>
        <span className="block font-semibold text-[15px] leading-tight">{label}</span>
        <span className={`block text-[12px] mt-0.5 ${active ? "text-white/80" : "text-on-surface-variant"}`}>{hint}</span>
      </span>
    </button>
  );
}

export default function SchedulePage() {
  const [slot, setSlot] = useState(slots[0].label);
  const [place, setPlace] = useState(places[0].label);
  const [classType, setClassType] = useState(classTypes[0]);

  function book() {
    const message = `Hi, I'd like to book a yoga class.\nClass: ${classType}\nPreferred time: ${slot}\nWhere: ${place}`;
    window.open(whatsappHref(message), "_blank", "noopener");
  }

  return (
    <div className="bg-background min-h-screen pt-28 md:pt-36 pb-16 md:pb-20">

      {/* ─── Hero Header ─── */}
      <header className="px-4 md:px-10 max-w-screen-2xl mx-auto mb-10 md:mb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-5 flex items-center gap-4"
          >
            <span className="inline-block h-[1px] w-10 bg-secondary" />
            Your time, your place
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease }}
            className="font-headline text-[2.75rem] sm:text-5xl md:text-7xl text-on-surface leading-[0.95] md:leading-[0.9] mb-8 tracking-[-0.025em]"
          >
            Yoga class{" "}
            <span className="italic text-primary">any time, anywhere</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease }}
            className="text-on-surface-variant text-lg leading-relaxed font-light max-w-2xl"
          >
            No fixed batches to chase. Choose the time that suits you and where you&apos;d
            like to practise, and we&apos;ll arrange a teacher for you.
          </motion.p>
        </div>
      </header>

      {/* ─── Pick your slot ─── */}
      <section className="px-4 md:px-10 max-w-screen-2xl mx-auto mb-14 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-8 bg-surface-container-lowest rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-outline/10 shadow-sm"
          >
            <h2 className="font-headline text-3xl text-on-surface mb-2 tracking-tight">Book your session</h2>
            <p className="text-on-surface-variant font-light text-[14px] mb-8">Three quick choices, then confirm on WhatsApp.</p>

            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-3">1 · Preferred time</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {slots.map((s) => (
                <OptionCard key={s.label} active={slot === s.label} onClick={() => setSlot(s.label)} icon={s.icon} label={s.label} hint={s.hint} />
              ))}
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-3">2 · Where</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {places.map((p) => (
                <OptionCard key={p.label} active={place === p.label} onClick={() => setPlace(p.label)} icon={p.icon} label={p.label} hint={p.hint} />
              ))}
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-3">3 · Class</div>
            <div className="flex flex-wrap gap-2 mb-10">
              {classTypes.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setClassType(c)}
                  aria-pressed={classType === c}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    classType === c
                      ? "bg-ink text-white"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <button
              onClick={book}
              className="btn-sunrise btn-shine group w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white h-14 px-10 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/30"
            >
              Book on WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.1}
            className="lg:col-span-4 flex flex-col gap-5"
          >
            {/* TODO: replace with the weekly timetable once the centre shares it. */}
            <div className="bg-ink text-white rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-8 relative overflow-hidden">
              <div aria-hidden className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,182,39,0.3),transparent_65%)]" />
              <CalendarClock className="relative w-7 h-7 text-secondary-container mb-5" />
              <h3 className="relative font-headline text-2xl mb-2">Weekly timetable</h3>
              <p className="relative text-[14px] text-white/75 font-light leading-relaxed">
                Our fixed group batches will be listed here soon. Until then, every class is
                booked around your time.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-8 border border-outline/10 flex-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-2">Studio</div>
              <h3 className="font-headline text-2xl text-on-surface leading-tight">{ADDRESS_LINE}</h3>
              <p className="text-on-surface-variant font-light text-[14px] mt-1">{ADDRESS_CITY}</p>
              <div className="flex items-center gap-2 mt-5 mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">
                <TrainFront className="w-4 h-4 text-primary" /> Nearest metro
              </div>
              <div className="flex flex-wrap gap-2">
                {NEAREST_METRO.map((m) => (
                  <span key={m} className="px-3.5 py-1.5 rounded-full bg-background text-[12px] text-on-surface font-medium">{m}</span>
                ))}
              </div>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300"
              >
                Get Directions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Senior care banner ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="px-4 md:px-10 max-w-screen-2xl mx-auto"
      >
        <div className="h-80 md:h-72 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-outline/5 group">
          <Image
            src="/images/senior_namaste.jpg"
            alt="Smiling elderly woman greeting with folded hands"
            fill
            className="object-cover object-[50%_30%] transition-transform duration-1000 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/35 backdrop-blur-[3px] flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="font-headline text-3xl md:text-4xl text-white mb-3 tracking-tight">
                Booking for your parents?
              </h2>
              <p className="text-white/90 font-light mb-8">
                Gentle senior sessions at home, at the hour they&apos;re most comfortable.
              </p>
              <a
                href={whatsappHref("Hi, I'd like to book a senior citizen yoga session at home for my parents.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-block px-10 py-3.5 bg-white text-primary rounded-full font-bold text-[10px] uppercase tracking-[0.25em] hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Book a senior session
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
