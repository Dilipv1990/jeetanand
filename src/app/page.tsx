"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ArrowRight, ArrowUpRight, Phone, MessageCircle, MapPin, ChevronDown, Star, Quote, TrainFront, House, Monitor, HeartPulse, Send } from "lucide-react";
import Hero from "@/components/Hero";
import { PHONE_DISPLAY, telHref, whatsappHref, ADDRESS_LINE, ADDRESS_CITY, NEAREST_METRO, mapsHref, mapsEmbedSrc } from "@/lib/contact";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
};

// Card photos for home, senior, personal, kids and Panchakarma: Unsplash / Pexels licences (free for commercial use).
const programmes: { title: string; badge: string; body: string; tags: string[]; href: string; image: string; contain?: boolean }[] = [
  {
    title: "Yoga at Home",
    badge: "At Your Doorstep",
    body: "Any time, anywhere: our teachers come to your home for solo, family, weight-loss, meditation and pranayama sessions.",
    tags: ["Your timing", "No commute", "Family"],
    href: "/services#home-classes",
    image: "/images/yoga_at_home.jpg",
  },
  {
    title: "Senior Citizen Yoga",
    badge: "Special Care",
    body: "Safe, chair-supported practice for joints, balance, BP, sugar and calm breathing, at home or in studio.",
    tags: ["Joints", "Balance", "BP & diabetes"],
    href: "/services#classes",
    image: "/images/senior_yoga.jpg",
  },
  {
    title: "Group Yoga Classes",
    badge: "Most Popular",
    body: "Hatha, Vinyasa, Ashtanga, Power, Yin and Restorative sessions for every level.",
    tags: ["Flexibility", "Strength", "All levels"],
    href: "/services#classes",
    image: "/images/studio.png",
  },
  {
    title: "Personal 1-to-1 Yoga",
    badge: "Personalised",
    body: "A programme built around your body, goals and schedule, with a teacher's full attention.",
    tags: ["Custom plan", "Flexible timings", "Private"],
    href: "/services#classes",
    image: "/images/personal_yoga.jpg",
  },
  {
    title: "Therapeutic Yoga",
    badge: "Healing Focus",
    body: "Gentle, targeted sequences for back pain, knees, cervical strain, stress and diabetes.",
    tags: ["Back & knee", "Stress", "Women's wellness"],
    href: "/services#classes",
    image: "/images/pranah_logo.jpg",
    contain: true,
  },
  {
    title: "Kids Yoga Program",
    badge: "Fun & Focus",
    body: "Playful classes that build fitness, concentration and confidence, with a certificate.",
    tags: ["Fitness", "Focus", "Certificate"],
    href: "/services#kids-yoga",
    image: "/images/kids_yoga.jpg",
  },
  {
    title: "Teacher Training",
    badge: "Certified",
    body: "Certificate courses of 1, 3 and 6 months, and 200, 300 and 500 hour TTC.",
    tags: ["TTC 200", "TTC 300", "TTC 500"],
    href: "/services#certifications",
    image: "/images/manuscript.png",
  },
  {
    title: "Panchakarma & Ayurveda",
    badge: "Doctor-Led",
    body: "Detox and wellness retreats that pair yoga with Ayurvedic doctor consultation.",
    tags: ["Detox", "Consultation", "Retreat"],
    href: "/services#retreats",
    image: "/images/panchakarma.jpg",
  },
];

const reasons = [
  { title: "Every age, every body", body: "Classes for kids, adults and seniors, from first-timers to seasoned practitioners." },
  { title: "Personal attention", body: "Small groups and 1-to-1 sessions so your teacher corrects, adapts and guides you." },
  { title: "Therapeutic expertise", body: "Sequences designed around back, joint, cervical and stress concerns." },
  { title: "Studio, home or online", body: "Practise where it suits you, with timings that fit around your day." },
  { title: "A path to teaching", body: "Grow from certificate courses to 200, 300 and 500 hour teacher training." },
  { title: "Yoga + Ayurveda", body: "Panchakarma retreats and doctor consultations, all under one calm roof." },
];

const seniorCare = [
  { title: "Joint & knee comfort", body: "Gentle movements that ease arthritis stiffness and keep knees, hips and shoulders mobile." },
  { title: "Balance & fall prevention", body: "Chair and wall-supported poses that build steadiness and confidence on your feet." },
  { title: "BP, sugar & heart", body: "Calm breathing and light practice that support blood pressure and diabetes care." },
  { title: "Better sleep & memory", body: "Pranayama and meditation for a quieter mind, deeper rest and sharper focus." },
];

// TODO: replace with real student reviews (e.g. from Google).
const reviews = [
  { name: "Student", tag: "Therapeutic Yoga", body: "My back pain had stopped me from exercising for years. The sequences were gentle, and within weeks I could move freely again." },
  { name: "Parent", tag: "Kids Yoga", body: "My daughter looks forward to every class. She is calmer, more focused and proud of her certificate." },
  { name: "Student", tag: "Teacher Training", body: "The TTC was thorough and deeply traditional. I left confident enough to start teaching my own classes." },
  { name: "Student", tag: "Senior Yoga", body: "At 68 I was nervous to begin. The teachers adapted every pose and I feel steadier than I have in years." },
];

const faqs = [
  { q: "I have never done yoga. Can I join?", a: "Not at all a problem. Every class can be adapted for beginners, and your teacher will guide you gently from the very first breath." },
  { q: "Can I really take a class at any time and place?", a: "Yes. Tell us the time that suits you, early morning to evening, and choose your home, our Sector 116 studio or a live online session." },
  { q: "Do you come home for yoga classes in Noida?", a: "Yes. Our teachers come to your home across Noida for solo, couple, family, senior and therapeutic sessions." },
  { q: "Is yoga safe for senior citizens?", a: "Yes. Senior sessions are slow, chair-supported where needed and adapted for knees, back, BP and diabetes. Please share your medical history and follow your doctor's advice." },
  { q: "Can yoga help with back pain, knee pain or stress?", a: "Our therapeutic yoga programme is built for back, knee, cervical and stress concerns. Please share any medical history with your teacher." },
  { q: "Where is the studio and what is the nearest metro?", a: "We are at S-K102, Sector 116, Noida. The nearest metro stations are Noida Sector 52 and Noida Sector 76." },
  { q: "Do you offer a free trial class?", a: "Yes. Fill in the form above or message us on WhatsApp and we will book a trial session at a time that suits you." },
  { q: "Are there classes for children?", a: "Yes. Our Kids Yoga Program builds fitness, focus and confidence, with a certificate on completion." },
];

function SectionHeading({ eyebrow, children, sub, center = false }: { eyebrow: string; children: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <motion.span variants={fadeUp} custom={0} className="block mb-5 text-[10px] tracking-[0.45em] uppercase text-secondary font-bold">
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-on-surface leading-[1.05]">
        {children}
      </motion.h2>
      {sub && (
        <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-on-surface-variant font-light leading-relaxed text-[16px] md:text-lg">
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [askName, setAskName] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="bg-grain min-h-screen">

      <Hero />

      {/* ─── Programmes ─── */}
      <section id="programmes" className="scroll-mt-24 py-20 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">
            <SectionHeading eyebrow="Our Programmes" sub="Yoga designed around you: your age, your body, your goals.">
              Find your <span className="italic text-primary">practice</span>
            </SectionHeading>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-primary font-bold text-[11px] uppercase tracking-[0.22em] flex-shrink-0"
            >
              All programmes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {programmes.map((p, i) => (
              <motion.article
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={(i % 4) * 0.08}
                className="group flex flex-col bg-surface-container-lowest rounded-[1.75rem] overflow-hidden border border-outline/10 hover:shadow-2xl hover:shadow-stone-900/10 transition-shadow duration-500"
              >
                <Link href={p.href} className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                  <Image src={p.image} alt={p.title} fill className={`${p.contain ? "object-contain bg-[#fbf7ee]" : "object-cover"} group-hover:scale-105 transition-transform duration-1000`} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    {p.badge}
                  </span>
                </Link>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="font-headline text-2xl text-on-surface leading-tight mb-3">{p.title}</h3>
                  <p className="text-[14px] text-on-surface-variant font-light leading-relaxed mb-5">{p.body}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-surface-container text-[12px] text-on-surface-variant">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2 pt-5 border-t border-outline/10">
                    <Link href={p.href} className="flex-grow inline-flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-[0.2em]">
                      View more
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                    </Link>
                    <a href={telHref} aria-label={`Call about ${p.title}`} className="w-10 h-10 rounded-full border border-outline/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={whatsappHref(`Hi, I'd like to know more about ${p.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp about ${p.title}`}
                      className="w-10 h-10 rounded-full border border-outline/15 flex items-center justify-center text-[#1da851] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Senior citizen care ─── */}
      <section id="seniors" className="scroll-mt-24 px-5 md:px-16 pb-20 md:pb-32">
        <div className="max-w-screen-2xl mx-auto relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-ink text-white">
          <div aria-hidden className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,182,39,0.28),transparent_65%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 p-7 sm:p-10 md:p-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-[10px] tracking-[0.3em] uppercase font-bold text-secondary-container">
                <HeartPulse className="w-3.5 h-3.5" />
                Senior citizen health
              </span>
              <h2 className="font-headline text-4xl sm:text-5xl tracking-[-0.02em] leading-[1.05]">
                Healthy, active <span className="italic text-sunrise">golden years</span>
              </h2>
              <p className="mt-5 text-white/80 font-light leading-relaxed text-[16px] md:text-lg">
                Slow, safe and patient sessions designed for parents and grandparents. Our
                teacher comes home at the time they prefer, so there is no travel, no rush
                and no strain.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref("Hi, I'd like to book a senior citizen yoga session at home.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sunrise group inline-flex items-center gap-3 text-white pl-7 pr-2 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/30"
                >
                  Book for my parents
                  <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={telHref} className="inline-flex items-center gap-2 h-14 px-6 rounded-full border border-white/25 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call us
                </a>
              </div>
              <p className="mt-6 text-[12px] text-white/55">
                Always practise with your doctor&apos;s advice. Share any medical condition with your teacher.
              </p>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {seniorCare.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="rounded-[1.5rem] bg-white/[0.06] border border-white/10 p-6 md:p-7 backdrop-blur"
                >
                  <span className="font-headline text-3xl text-secondary-container">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-headline text-xl mt-3 mb-2">{c.title}</h3>
                  <p className="text-[14px] text-white/75 font-light leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why us ─── */}
      <section id="why-us" className="scroll-mt-24 bg-surface-container-low py-20 md:py-32 px-5 md:px-16">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <SectionHeading eyebrow="Why Prachi" sub="Experienced teachers, personal guidance and flexible sessions, rooted in an authentic tradition.">
              More than just <span className="italic text-primary">yoga classes</span>
            </SectionHeading>
            <Link
              href="#free-trial"
              className="btn-sunrise group mt-10 inline-flex items-center gap-3 text-white pl-7 pr-2 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/30"
            >
              Book Your Free Trial
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline/10 rounded-[2rem] overflow-hidden border border-outline/10">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={(i % 2) * 0.1}
                className="bg-background p-7 md:p-10"
              >
                <span className="font-headline text-4xl md:text-5xl text-gradient-primary font-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-headline text-xl md:text-2xl text-on-surface mt-4 mb-3">{r.title}</h3>
                <p className="text-[14px] md:text-[15px] text-on-surface-variant font-light leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section id="story" className="scroll-mt-24 bg-surface-container py-20 md:py-32 px-5 md:px-16 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-t-full rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/15 max-w-md mx-auto lg:mx-0">
              <Image src="/images/swami.png" alt="Teacher at Prachi Yoga Center" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="absolute -bottom-6 right-2 sm:right-10 lg:right-6 bg-background rounded-3xl px-7 py-5 shadow-xl shadow-stone-900/10 border border-outline/10">
              <div className="font-headline text-4xl text-primary">50+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant mt-1">Years of tradition</div>
            </div>
          </motion.div>

          <div>
            <SectionHeading eyebrow="The Prachi Story">
              Yoga that comes with <span className="italic text-primary">roots</span>
            </SectionHeading>
            <div className="mt-8 space-y-5 text-on-surface-variant text-[16px] md:text-lg leading-relaxed font-light">
              <p>
                Founded on the banks of the sacred Ganges, Prachi Yoga Center began as a small
                gathering under the shade of a Banyan tree and grew into a sanctuary where the
                ancient rhythm of breath meets modern stillness.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-t-2 border-primary pt-5">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface mb-3">Learn it the right way</h3>
                <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">
                  Teachings integrate the Hatha Yoga Pradipika with the needs of modern life,
                  with alignment and breath taught properly from day one.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-5">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface mb-3">More than fitness</h3>
                <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">
                  Therapeutic yoga, pranayama, meditation and Ayurveda work together for
                  lasting health of body and mind.
                </p>
              </div>
            </div>
            <Link href="/about" className="group mt-10 inline-flex items-center gap-3 text-primary font-bold text-[11px] uppercase tracking-[0.22em]">
              Read our story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Visit us ─── */}
      <section id="locations" className="scroll-mt-24 py-20 md:py-32 px-5 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-10 md:mb-14">
            <SectionHeading eyebrow="Where to practise" center sub="Visit our studio, invite a teacher home anywhere in Noida, or join live online.">
              Classes near <span className="italic text-primary">you</span>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="lg:col-span-5 flex flex-col gap-5"
            >
              <div className="p-7 md:p-9 rounded-[1.75rem] bg-surface-container-lowest border border-outline/10">
                <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5" />
                </span>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-2">Our studio</div>
                <h3 className="font-headline text-2xl md:text-3xl text-on-surface leading-tight">{ADDRESS_LINE}</h3>
                <p className="text-on-surface-variant font-light mt-1">{ADDRESS_CITY}</p>

                <div className="mt-6 pt-6 border-t border-outline/10">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-3">
                    <TrainFront className="w-4 h-4 text-primary" />
                    Nearest metro
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {NEAREST_METRO.map((m) => (
                      <span key={m} className="px-4 py-2 rounded-full bg-surface-container text-[13px] text-on-surface font-medium">{m}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-3 text-primary font-bold text-[11px] uppercase tracking-[0.22em]"
                >
                  Get directions
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline/10">
                  <House className="w-5 h-5 text-primary mb-4" />
                  <h3 className="font-headline text-lg text-on-surface">At your home</h3>
                  <p className="text-[13px] text-on-surface-variant font-light mt-1 leading-relaxed">Anywhere in Noida, at your time.</p>
                </div>
                <div className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline/10">
                  <Monitor className="w-5 h-5 text-primary mb-4" />
                  <h3 className="font-headline text-lg text-on-surface">Live online</h3>
                  <p className="text-[13px] text-on-surface-variant font-light mt-1 leading-relaxed">Same teachers, wherever you are.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0.1}
              className="lg:col-span-7 min-h-[320px] rounded-[1.75rem] overflow-hidden border border-outline/10 bg-surface-container"
            >
              <iframe
                title="Map to Prachi Yoga Center, Sector 116 Noida"
                src={mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] border-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <section id="reviews" className="scroll-mt-24 pb-20 md:pb-32">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 mb-10 md:mb-14">
          <SectionHeading eyebrow="Reviews" center>
            Loved by our <span className="italic text-primary">community</span>
          </SectionHeading>
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 md:px-16 pb-4 max-w-screen-2xl mx-auto lg:grid lg:grid-cols-4 lg:overflow-visible">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i * 0.08}
              className="snap-start flex-shrink-0 w-[82vw] sm:w-[360px] lg:w-auto flex flex-col bg-surface-container-low border border-outline/10 rounded-[1.75rem] p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5 text-secondary-container">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-primary/15" />
              </div>
              <blockquote className="text-[15px] text-on-surface leading-relaxed font-light flex-grow">{r.body}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-outline/10">
                <div className="font-headline text-lg text-on-surface">{r.name}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mt-1">{r.tag}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="scroll-mt-24 pb-20 md:pb-32 px-5 md:px-16">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 rounded-[2rem] md:rounded-[2.5rem] bg-surface-container-lowest border border-outline/10 p-6 sm:p-10 md:p-12 shadow-xl shadow-stone-900/5">
            <span className="inline-flex items-center gap-2 mb-5 text-[10px] tracking-[0.4em] uppercase text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Good to know
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-on-surface leading-[1.05] mb-8 md:mb-10">
              Your questions, <span className="italic text-primary">answered.</span>
            </h2>

            <ul className="border-t border-outline/15">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li key={f.q} className="border-b border-outline/15">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left"
                    >
                      <span className="w-6 flex-shrink-0 text-[12px] font-bold text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`flex-grow text-[15px] md:text-lg font-medium transition-colors ${open ? "text-primary" : "text-on-surface"}`}>{f.q}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-on-surface-variant transition-transform duration-500 ${open ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pl-10 md:pl-12 pr-8 text-[14px] md:text-[15px] text-on-surface-variant font-light leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Ask a question: no backend yet, so it goes to WhatsApp pre-filled */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 rounded-[2rem] md:rounded-[2.5rem] bg-ink text-white p-6 sm:p-10 relative overflow-hidden">
            <div aria-hidden className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,94,26,0.35),transparent_65%)]" />
            <div className="relative">
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-secondary-container text-[10px] tracking-[0.25em] uppercase font-bold">
                Ask us anything
              </span>
              <h3 className="font-headline text-3xl md:text-4xl leading-tight mb-2">
                Have a <span className="italic text-sunrise">question?</span>
              </h3>
              <p className="text-[14px] text-white/75 font-light mb-6">
                Timings, fees, home visits or a health concern: type it below and we&apos;ll reply on WhatsApp.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const msg = `Hi, I have a question.\n${askName ? `Name: ${askName}\n` : ""}Question: ${question}`;
                  window.open(whatsappHref(msg), "_blank", "noopener");
                }}
                className="flex flex-col gap-3"
              >
                <label className="sr-only" htmlFor="ask-name">Your name</label>
                <input
                  id="ask-name"
                  value={askName}
                  onChange={(e) => setAskName(e.target.value)}
                  placeholder="Your name (optional)"
                  autoComplete="name"
                  className="w-full h-13 px-5 rounded-2xl bg-white/[0.08] border border-white/15 text-[15px] text-white placeholder:text-white/45 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/15 transition"
                />
                <label className="sr-only" htmlFor="ask-question">Your question</label>
                <textarea
                  id="ask-question"
                  required
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here…"
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.08] border border-white/15 text-[15px] text-white placeholder:text-white/45 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/15 transition resize-none"
                />
                <button
                  type="submit"
                  className="btn-sunrise btn-shine group mt-1 inline-flex items-center justify-center gap-3 text-white h-14 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/30"
                >
                  Send my question
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/75">
                <span>Or call us:</span>
                <a href={telHref} className="inline-flex items-center gap-2 font-bold text-white">
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-white">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
