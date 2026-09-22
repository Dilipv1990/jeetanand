"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Flower2,
  Droplets,
  Zap,
  Smile,
  Award,
  HeartPulse,
  Users,
  Leaf,
  House,
  GraduationCap,
} from "lucide-react";

const classCatalog = [
  {
    title: "Main Yoga Classes",
    icon: Flower2,
    items: [
      "Hatha Yoga – beginners, flexibility, strength",
      "Vinyasa Yoga – flow, fitness, flexibility",
      "Ashtanga Yoga – strength and disciplined practice",
      "Power Yoga – fitness, weight management",
      "Yin Yoga – deep stretching and relaxation",
      "Restorative Yoga – gentle, relaxation-focused",
    ],
  },
  {
    title: "Therapeutic Yoga",
    icon: HeartPulse,
    items: [
      "Back Pain Yoga",
      "Knee & Joint Care Yoga",
      "Cervical/Neck Care Yoga",
      "Stress & Anxiety Management",
      "Yoga for Diabetes",
      "Yoga for Women's Wellness",
      "Postnatal Yoga – only with appropriate medical clearance",
    ],
  },
  {
    title: "Special Groups",
    icon: Users,
    items: [
      "Kids Yoga",
      "Senior Citizen Yoga",
      "Corporate Yoga",
      "Personal/1-to-1 Yoga",
      "Family Yoga",
    ],
  },
  {
    title: "Wellness",
    icon: Leaf,
    items: ["Pranayama", "Meditation", "Sound Healing", "Yoga Nidra", "Breathwork"],
  },
];

const homeClasses = [
  "Group Classes",
  "Kids Yoga",
  "Senior Yoga",
  "Therapeutic Yoga — back, knee, cervical, stress, etc.",
  "Weight-loss & fitness yoga",
  "Meditation & pranayama",
];

const certifications = [
  { name: "1 Month", detail: "Certificate Course" },
  { name: "3 Month", detail: "Certificate Course" },
  { name: "6 Month", detail: "Certificate Course" },
  { name: "TTC 200 Hrs", detail: "Teacher Training" },
  { name: "TTC 300 Hrs", detail: "Teacher Training" },
  { name: "TTC 500 Hrs", detail: "Teacher Training" },
];

const retreats = [
  "Ayurvedic Panchakarma Retreat with Doctor Consultation",
  "Panchakarma Detox & Wellness Retreat",
  "Ayurveda, Yoga & Panchakarma Retreat",
  "Holistic Wellness Retreat with Ayurvedic Doctor Consultation",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
  }),
};

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pt-36 pb-20">

      {/* ─── Header ─── */}
      <header className="px-10 max-w-7xl mx-auto mb-28 flex flex-col items-center text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/4 via-transparent to-transparent rounded-full blur-3xl" />
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          className="text-secondary font-label text-[10px] tracking-[0.4em] uppercase mb-6 flex items-center gap-4"
        >
          <span className="inline-block h-[1px] w-8 bg-secondary" />
          The Pathway to Vitality
          <span className="inline-block h-[1px] w-8 bg-secondary" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          className="text-5xl md:text-7xl leading-[0.9] mb-8 font-headline text-on-surface tracking-[-0.025em]"
        >
          Sacred{" "}
          <span className="italic text-secondary">Vijnana</span>{" "}
          &amp; Practices
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          className="max-w-2xl text-on-surface-variant text-lg leading-relaxed font-light"
        >
          Discover a harmonious blend of ancient Indian healing traditions and modern
          physiological science. Each service is a deliberate step toward absolute
          equilibrium.
        </motion.p>
      </header>

      {/* ─── Services Grid ─── */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">

        {/* Classical Yoga — Featured */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="md:col-span-8 bg-surface-container-low p-10 rounded-[40px] flex flex-col md:flex-row gap-10 overflow-hidden group border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
              <Flower2 className="w-4 h-4" /> Core Discipline
            </span>
            <h2 className="text-4xl mb-6 font-headline text-on-surface">Classical Yoga</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed text-[15px]">
              Experience the union of breath and movement. Our traditional approach
              focuses on postural integrity and the awakening of inner prana.
            </p>
            <ul className="space-y-3 mb-10">
              {["Hatha & Vinyasa Alignment", "Therapeutic Sequence for Spine"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-on-surface font-medium">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-fit flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] uppercase group-hover:gap-5 transition-all duration-500 text-primary">
              Explore Methodology <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto rounded-[32px] overflow-hidden relative shadow-lg group">
            <Image
              src="/images/studio.png"
              alt="Yoga Studio"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>

        {/* Dhyan */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0.1}
          className="md:col-span-4 bg-surface-container-highest p-10 rounded-[40px] flex flex-col border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="mb-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <Flower2 className="text-secondary w-7 h-7" />
          </div>
          <h2 className="text-3xl mb-5 font-headline text-on-surface">Dhyan</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed text-[15px] font-light">
            The art of stillness. Cultivate a meditative mind to navigate life with
            unwavering clarity.
          </p>
          <div className="mt-auto aspect-square rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 relative">
            <Image 
              src="/images/meditation.png" 
              alt="Meditation" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>

        {/* Marma Chikitsa */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
          className="md:col-span-6 bg-surface-container p-10 rounded-[40px] flex flex-col justify-between group border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div>
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-3xl max-w-[200px] font-headline text-on-surface">Marma Chikitsa</h2>
              <span className="bg-secondary/10 text-secondary text-[9px] px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] flex-shrink-0">
                Ancient Healing
              </span>
            </div>
            <p className="text-on-surface-variant mb-10 leading-relaxed text-[15px] font-light">
              Pressure-point therapy focusing on 107 vital energy points. Restores
              biological rhythms and renews cellular vitality.
            </p>
          </div>
          <div className="relative h-64 w-full rounded-[32px] overflow-hidden shadow-lg">
            <Image 
              src="/images/marma.png" 
              alt="Marma Healing" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
          </div>
        </motion.div>

        {/* Pranayama */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0.12}
          className="md:col-span-6 bg-surface-container-low p-10 rounded-[40px] flex flex-col justify-between border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="h-64 w-full rounded-[32px] overflow-hidden mb-10 relative shadow-lg group">
            <Image
              src="/images/mountain.png"
              alt="Pranayama Mountain"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl mb-5 font-headline text-on-surface">Pranayama</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed text-[15px] font-light">
              Mastery of the life force through rhythmic breathing techniques. Regulate
              your nervous system and awaken dormant energy.
            </p>
            <div className="flex gap-3">
              {["Vitality", "Focus", "Clarity"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.25em] font-label uppercase text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/5 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kriya + Power Yoga Row */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="bg-surface-container-high p-12 rounded-[40px] flex flex-col md:flex-row gap-8 border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Droplets className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-3xl mb-4 font-headline text-on-surface">Yogic Kriya</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed text-[15px] font-light">
                Internal cleansing techniques (Shatkarma) to purify the body&apos;s channels
                and enhance biological efficiency.
              </p>
            </div>
            <div className="flex-1 h-64 rounded-[32px] overflow-hidden relative shadow-lg group">
              <Image
                src="/images/water.png"
                alt="Kriya Water"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.12}
            className="bg-primary text-on-primary p-12 rounded-[40px] flex flex-col justify-center border border-outline/5 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary-container" />
              </div>
              <h3 className="text-4xl mb-5 font-headline">Power Yoga</h3>
              <p className="text-on-primary/80 mb-8 leading-relaxed text-[15px] font-light">
                A dynamic, high-intensity flow designed to build heat, endurance, and
                muscular strength without losing spiritual focus.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-on-primary/30" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-primary">
                  Dynamic Strength
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Kids Yoga Program */}
        <motion.div
          id="kids-yoga"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
          className="scroll-mt-32 md:col-span-12 bg-surface-container-low p-10 md:p-14 rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-12 border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="flex flex-col justify-center">
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
              <Smile className="w-4 h-4" /> For Young Seekers
            </span>
            <h2 className="text-4xl mb-6 font-headline text-on-surface">Kids Yoga Program</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {["Fun", "Fitness", "Focus", "Confidence", "Certificate"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.25em] font-label uppercase text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/5 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-start gap-4 bg-secondary/10 rounded-3xl p-6">
              <Award className="text-secondary w-7 h-7 flex-shrink-0" />
              <p className="text-[14px] text-on-surface leading-relaxed">
                <strong className="font-semibold">Certificate of Completion</strong> provided
                after successfully completing the program.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-on-surface-variant mb-6 leading-relaxed text-[15px]">
              Children will learn age-appropriate:
            </p>
            <ul className="space-y-4">
              {[
                "Yoga postures & flexibility",
                "Breathing techniques",
                "Balance & coordination",
                "Relaxation and mindfulness",
                "Strength and body awareness",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-on-surface font-medium">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ─── Class Catalog ─── */}
      <section id="classes" className="scroll-mt-32 px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="text-secondary font-label text-[10px] tracking-[0.4em] uppercase mb-5 block">
            Our Classes
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl font-headline text-on-surface tracking-tight">
            Something for <span className="italic text-secondary">Every Seeker</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classCatalog.map(({ title, icon: Icon, items }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={(i % 2) * 0.12}
              className="bg-surface-container-low p-10 rounded-[40px] border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-3xl mb-6 font-headline text-on-surface">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-on-surface font-medium">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-px" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Home & Personal Classes ─── */}
      <section id="home-classes" className="scroll-mt-32 px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
          className="bg-primary text-on-primary p-10 md:p-14 rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <House className="w-6 h-6 text-secondary-container" />
            </div>
            <h2 className="text-4xl mb-5 font-headline">Home &amp; Personal Yoga Classes</h2>
            <p className="text-on-primary/80 leading-relaxed text-[15px] font-light">
              Practice in the comfort of your own home with a dedicated instructor, one-to-one
              or with your family and friends.
            </p>
          </div>
          <ul className="relative z-10 space-y-4 flex flex-col justify-center">
            {homeClasses.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] font-medium">
                <CheckCircle className="text-secondary-container w-5 h-5 flex-shrink-0 mt-px" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ─── Panchakarma & Ayurveda Retreats ─── */}
      <section id="retreats" className="scroll-mt-32 px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="text-secondary font-label text-[10px] tracking-[0.4em] uppercase mb-5 block">
            Retreats
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl font-headline text-on-surface tracking-tight">
            Panchakarma &amp; <span className="italic text-secondary">Ayurveda</span> Wellness Retreat
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {retreats.map((retreat, i) => (
            <motion.div
              key={retreat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={(i % 2) * 0.12}
              className="bg-surface-container p-8 rounded-[32px] flex items-center gap-5 border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline text-on-surface">{retreat}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section id="certifications" className="scroll-mt-32 px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="text-secondary font-label text-[10px] tracking-[0.4em] uppercase mb-5 block">
            Certifications
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl font-headline text-on-surface tracking-tight">
            Courses &amp; <span className="italic text-secondary">Teacher Training</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.2} className="text-on-surface-variant mt-6 max-w-xl mx-auto leading-relaxed font-light">
            A certificate is awarded after successful completion of every course.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map(({ name, detail }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={(i % 3) * 0.1}
              className="bg-surface-container-low p-8 rounded-[32px] flex flex-col items-center text-center border border-outline/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <GraduationCap className="text-primary w-8 h-8 mb-5" />
              <h3 className="text-2xl font-headline text-on-surface mb-2">{name}</h3>
              <span className="text-[9px] tracking-[0.25em] font-label uppercase text-secondary">{detail}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Educational Deep Dive ─── */}
      <section className="max-w-5xl mx-auto px-10 mb-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
            <div className="relative h-[520px] w-full rounded-[40px] overflow-hidden shadow-2xl z-10 group">
              <Image
                src="/images/manuscript.png"
                alt="Ancient Manuscript"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl font-headline text-on-surface tracking-tight">
              The Science of{" "}
              <span className="italic text-secondary">Veda-Yoga</span>
            </motion.h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light text-[15px]">
              <motion.p variants={fadeUp} custom={0.1}>
                Our approach at Prachi Yoga Center isn&apos;t merely about physical
                postures. It is a rigorous scientific enquiry into the human mechanism.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.2}>
                We leverage the teachings of the masters to address the stressors of modern
                life — whether through the cellular purification of{" "}
                <strong className="text-on-surface font-semibold">Yogic Kriya</strong> or the
                rhythmic harmony of{" "}
                <strong className="text-on-surface font-semibold">Pranayama</strong>.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={0.3}
                className="font-medium text-primary italic border-l-2 border-primary/25 pl-6 py-3"
              >
                &quot;Yoga is not a workout, it is a work-in. And this is the point of
                spiritual practice — to make us teachable; to open up our hearts and focus
                our awareness.&quot;
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
          className="bg-surface-container-low rounded-[60px] p-20 text-center relative overflow-hidden shadow-sm border border-outline/5"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/3 rounded-full -ml-36 -mb-36 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl mb-8 font-headline text-on-surface tracking-tight">
              Ready to begin your journey?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-14 leading-relaxed font-light">
              Consult with our Acharyas to find the practice that resonates with your
              current state of being.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <button className="btn-shine bg-primary text-on-primary px-12 py-5 rounded-full font-label tracking-[0.2em] uppercase text-[11px] hover:scale-[1.04] transition-all duration-500 shadow-xl shadow-primary/25">
                Book a Consultation
              </button>
              <button className="bg-transparent border border-outline/40 px-12 py-5 rounded-full font-label tracking-[0.2em] uppercase text-[11px] hover:bg-surface-container-high hover:border-outline transition-all duration-300">
                View Full Schedule
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
