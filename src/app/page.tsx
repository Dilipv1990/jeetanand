"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sun, MapPin, Building2, Flower2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay, ease: "easeOut" },
  }),
};

const stats = [
  { value: "30+", label: "Years of Practice" },
  { value: "5,000+", label: "Global Seekers" },
  { value: "8", label: "Sanctuaries" },
  { value: "12+", label: "Disciplines" },
];

const marqueeItems = [
  "Hatha Yoga", "•", "Pranayama", "•", "Dhyan", "•", "Marma Chikitsa",
  "•", "Yogic Kriya", "•", "Power Yoga", "•", "Vinyasa Flow", "•",
  "Ancient Wellness", "•", "Inner Stillness", "•", "Sacred Lineage", "•",
  "Hatha Yoga", "•", "Pranayama", "•", "Dhyan", "•", "Marma Chikitsa",
  "•", "Yogic Kriya", "•", "Power Yoga", "•", "Vinyasa Flow", "•",
  "Ancient Wellness", "•", "Inner Stillness", "•", "Sacred Lineage", "•",
];

export default function Home() {
  return (
    <div className="bg-grain min-h-screen">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Sunrise over Ganges"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 md:px-16 pt-36 pb-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-14 bg-secondary" />
              <span className="font-label text-[10px] tracking-[0.45em] uppercase text-secondary font-bold">
                The Living Sanctuary · Est. 1994
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-[7.5rem] font-headline leading-[0.88] mb-10 tracking-[-0.03em] text-on-surface font-light"
            >
              Find the pause{" "}
              <br />
              <span className="italic text-primary font-medium">between breaths.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-on-surface-variant max-w-[480px] mb-14 leading-relaxed font-light"
            >
              A sanctuary where movement meets stillness. Reconnect with your inner
              essence through authentic yogic practices rooted in ancient lineage.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 items-center"
            >
              <button className="btn-shine bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:scale-[1.04] hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 shadow-xl shadow-primary/30">
                Book a Session
              </button>
              <button className="flex items-center gap-4 text-primary font-bold text-[11px] uppercase tracking-[0.2em] group">
                <span className="w-12 h-12 rounded-full border border-primary/25 flex items-center justify-center group-hover:bg-primary/8 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-4 h-4 fill-primary" />
                </span>
                Our Philosophy
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden xl:block absolute bottom-20 right-20 w-72 p-10 bg-white/50 backdrop-blur-3xl rounded-[3rem] border border-white/60 shadow-2xl shadow-stone-900/10"
        >
          <div className="mb-6 flex justify-between items-start">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Flower2 className="text-secondary w-5 h-5" />
            </div>
            <span className="text-[9px] font-bold text-stone-400 tracking-[0.2em] uppercase">Est. 1994</span>
          </div>
          <p className="text-[14px] italic font-headline text-on-surface leading-relaxed mb-5">
            &quot;Yoga is not just a practice, it&apos;s the art of returning to yourself.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-secondary/40" />
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-secondary">Swami Jeetanand</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/50">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-on-surface-variant/30 to-transparent" />
        </motion.div>
      </section>

      {/* ─── Stats Strip ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-16 bg-surface-container-low border-y border-outline/8"
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-outline/15">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i * 0.1}
                variants={fadeUp}
                className="flex flex-col items-center text-center px-8 py-4"
              >
                <span className="font-headline text-4xl md:text-5xl text-primary font-light tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Marquee Ticker ─── */}
      <div className="py-5 bg-primary/4 border-b border-outline/8 overflow-hidden select-none">
        <div className="flex gap-12 marquee-track whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className={`font-label text-[11px] uppercase tracking-[0.3em] font-bold flex-shrink-0 ${
                item === "•" ? "text-primary/30" : "text-on-surface-variant/60"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Services Section ─── */}
      <section className="py-40 bg-white/30">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <motion.div variants={fadeUp} custom={0} className="relative">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                <h2 className="text-5xl md:text-7xl font-headline mb-8 leading-[0.95] tracking-[-0.02em]">
                  Nurturing the{" "}
                  <br />
                  <span className="text-secondary italic">Body,</span>{" "}
                  <span className="text-primary">&amp; Spirit</span>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                custom={0.1}
                className="text-on-surface-variant text-lg leading-relaxed font-light mb-10 max-w-md"
              >
                Our holistic approach combines traditional Hatha, Vinyasa, and deep
                meditation techniques tailored for every stage of your journey.
              </motion.p>
              <motion.div variants={fadeUp} custom={0.2} className="flex gap-4 items-center">
                <span className="font-label text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                  Discover our methods
                </span>
                <div className="flex-grow h-[1px] bg-stone-200" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="aspect-[16/10] rounded-[4rem] overflow-hidden relative group shadow-2xl">
                <Image
                  src="/images/studio.png"
                  alt="Yoga studio"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-700" />
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/92 backdrop-blur-md rounded-[2.5rem] transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-secondary mb-2 block">
                    Premium Collective
                  </span>
                  <h4 className="text-2xl font-headline mb-1.5 text-on-surface">Corporate Wellness</h4>
                  <p className="text-sm text-on-surface-variant font-light">
                    Elevating workforce harmony across NCR&apos;s business landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0}
              className="p-12 bg-surface-container rounded-[3.5rem] flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-500 group cursor-pointer border border-outline/5 hover:shadow-xl hover:-translate-y-2 hover:transition-all"
            >
              <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                <Flower2 className="text-secondary w-7 h-7" />
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-headline mb-4 text-on-surface">Private Therapy</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Personalized healing journeys focused on deep alignment and chronic restoration.
                </p>
                <div className="mt-8 flex items-center gap-3 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0.12}
              className="md:col-span-2 relative rounded-[3.5rem] overflow-hidden group bg-primary min-h-[400px]"
            >
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/25 transition-colors duration-700" />
              <Image
                src="/images/meditation.png"
                alt="Meditation"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="relative h-full p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-[9px] font-bold tracking-[0.3em] uppercase border border-white/20">
                    Live Interactive
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="text-4xl font-headline text-white mb-5">Online Sanctuary</h3>
                  <p className="text-white/80 font-light mb-8 leading-relaxed">
                    Join our virtual temple from anywhere in the world. High-definition
                    streaming with real-time guidance.
                  </p>
                  <button className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] text-white group/btn">
                    Enter Digital Space
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Locations Section ─── */}
      <section className="py-40 bg-surface-container-lowest relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
          >
            <div className="max-w-2xl">
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-14 bg-primary/30" />
                <span className="font-label text-[10px] tracking-[0.45em] uppercase text-primary font-bold">
                  Local Sanctums
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-5xl md:text-7xl font-headline tracking-[-0.02em] text-on-surface"
              >
                Heart of the{" "}
                <span className="italic text-secondary">Capital</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeIn}
              custom={0.2}
              className="text-on-surface-variant font-light max-w-xs text-right hidden md:block"
            >
              Three distinctive spaces, one unified philosophy of inner peace.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Noida Ashram", desc: "Sustainable bamboo architecture nestled within lush Zen gardens.", loc: "Sector 126", icon: MapPin },
              { name: "Urban Delhi", desc: "Elegant boutique studios in South Delhi & Civil Lines.", loc: "GK II & Civil Lines", icon: Building2 },
              { name: "Gurgaon Sky", desc: "High-rise sanctuary in Cyber City featuring panoramic views.", loc: "DLF Phase 5", icon: Sun },
            ].map((center, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={idx * 0.12}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-600 border border-outline/5 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-bold text-stone-300 tracking-[0.3em] uppercase">
                    Center 0{idx + 1}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-400">
                    <center.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-4xl font-headline mb-4 text-on-surface">{center.name}</h3>
                <p className="text-on-surface-variant font-light mb-12 leading-relaxed">{center.desc}</p>
                <div className="pt-8 border-t border-stone-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{center.loc}</span>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.15em] group-hover:tracking-[0.4em] transition-all duration-500 cursor-pointer">
                    View Schedule
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-52 relative overflow-hidden bg-white/20">
        {/* Layered background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/6 rounded-full blur-[150px]" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-tertiary/4 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-12 hover:border-primary/50 hover:scale-110 transition-all duration-500 cursor-pointer"
            >
              <Flower2 className="w-8 h-8 text-primary" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-6xl md:text-[6.5rem] font-headline mb-10 leading-[0.9] tracking-[-0.03em] text-on-surface"
            >
              Ready to begin <br />
              your{" "}
              <span className="italic text-primary">transformation?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-xl text-on-surface-variant mb-16 max-w-xl mx-auto font-light leading-relaxed"
            >
              Join an elite community dedicated to wellness, balance, and the timeless art
              of living well.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            >
              <button className="btn-shine bg-primary text-on-primary px-16 py-6 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] hover:scale-[1.05] transition-all duration-500 shadow-2xl shadow-primary/35">
                Book Your First Session
              </button>
              <button className="text-on-surface font-bold text-[12px] uppercase tracking-[0.2em] group flex items-center gap-3">
                <span className="border-b border-on-surface/20 group-hover:border-on-surface pb-0.5 transition-colors duration-300">
                  Download Schedule
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
