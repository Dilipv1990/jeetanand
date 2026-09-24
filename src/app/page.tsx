"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ArrowRight, ArrowUpRight, Phone, MessageCircle, MapPin, Plus, Star, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import { PHONE_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

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
    image: "/images/water.png",
  },
  {
    title: "Yoga at Home",
    badge: "At Your Doorstep",
    body: "Our teachers come to you: group, family, weight-loss, meditation and pranayama sessions.",
    tags: ["No commute", "Family", "Weight-loss"],
    href: "/services#home-classes",
    image: "/images/hero_woman.png",
  },
  {
    title: "Therapeutic Yoga",
    badge: "Healing Focus",
    body: "Gentle, targeted sequences for back pain, knees, cervical strain, stress and diabetes.",
    tags: ["Back & knee", "Stress", "Women's wellness"],
    href: "/services#classes",
    image: "/images/marma.png",
  },
  {
    title: "Kids Yoga Program",
    badge: "Fun & Focus",
    body: "Playful classes that build fitness, concentration and confidence, with a certificate.",
    tags: ["Fitness", "Focus", "Certificate"],
    href: "/services#kids-yoga",
    image: "/images/meditation.png",
  },
  {
    title: "Senior Citizen Yoga",
    badge: "Gentle Practice",
    body: "Safe, chair-supported and mat practice for mobility, balance and calm breathing.",
    tags: ["Mobility", "Balance", "Breathwork"],
    href: "/services#classes",
    image: "/images/hero_meditation.png",
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
    image: "/images/ashram.png",
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

const locations = [
  { name: "Rishikesh", detail: "Himalayan retreat on Shakti Lane, home of our Panchakarma programmes." },
  { name: "New Delhi", detail: "Urban studio in GK II, with classes and home sessions across NCR." },
  { name: "Mumbai", detail: "Studio classes, personal training and yoga at home." },
  { name: "Bangalore", detail: "Studio classes, personal training and yoga at home." },
  { name: "Pune", detail: "Studio classes, personal training and yoga at home." },
  { name: "Online", detail: "Live classes wherever you are, with the same teachers." },
];

// TODO: replace with real student reviews (e.g. from Google).
const reviews = [
  { name: "Student", tag: "Therapeutic Yoga", body: "My back pain had stopped me from exercising for years. The sequences were gentle, and within weeks I could move freely again." },
  { name: "Parent", tag: "Kids Yoga", body: "My daughter looks forward to every class. She is calmer, more focused and proud of her certificate." },
  { name: "Student", tag: "Teacher Training", body: "The TTC was thorough and deeply traditional. I left confident enough to start teaching my own classes." },
  { name: "Student", tag: "Senior Yoga", body: "At 68 I was nervous to begin. The teachers adapted every pose and I feel steadier than I have in years." },
];

const faqs = [
  { q: "I have never done yoga. Can I join?", a: "Yes. Our Hatha and beginner-friendly classes start from the basics, and teachers adapt every pose to your level." },
  { q: "Do you offer a free trial class?", a: "Yes. Fill in the form above or message us on WhatsApp and we will book a trial session at a time that suits you." },
  { q: "Do you provide yoga classes at home?", a: "Yes. Our teachers come to your home for group, family, therapeutic, weight-loss and meditation sessions." },
  { q: "Can yoga help with back pain, knee pain or stress?", a: "Our therapeutic yoga programme is built for back, knee, cervical and stress concerns. Please share any medical history with your teacher." },
  { q: "Are there classes for children and seniors?", a: "Yes. We run a dedicated Kids Yoga Program and gentle Senior Citizen Yoga classes." },
  { q: "Do I receive a certificate?", a: "A certificate is awarded on successful completion of every course, from the 1 month certificate to 500 hour teacher training." },
  { q: "Is postnatal yoga safe?", a: "We offer postnatal yoga only once you have appropriate medical clearance from your doctor." },
  { q: "What happens on a Panchakarma retreat?", a: "Retreats combine daily yoga with Ayurvedic detox therapies and a consultation with an Ayurvedic doctor." },
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
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" />
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

      {/* ─── Locations ─── */}
      <section id="locations" className="scroll-mt-24 py-20 md:py-32 px-5 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-10 md:mb-14">
            <SectionHeading eyebrow="Where to practise" center sub="Join us at a studio, invite a teacher home, or practise live online.">
              Classes near <span className="italic text-primary">you</span>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={(i % 3) * 0.08}
                className="group flex gap-5 items-start p-6 md:p-7 rounded-[1.5rem] border border-outline/10 bg-surface-container-lowest hover:border-primary/30 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-500"
              >
                <span className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-headline text-xl text-on-surface mb-1.5">{l.name}</h3>
                  <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">{l.detail}</p>
                </div>
              </motion.div>
            ))}
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
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ">
              Got questions? <span className="italic text-primary">We&apos;ve got answers.</span>
            </SectionHeading>
            <div className="mt-10 p-7 rounded-[1.75rem] bg-surface-container-low border border-outline/10">
              <p className="font-headline text-xl text-on-surface mb-2">Still have questions?</p>
              <p className="text-[14px] text-on-surface-variant font-light mb-5">We&apos;re happy to help. Call or message us any time.</p>
              <div className="flex flex-wrap gap-3">
                <a href={telHref} className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-white text-[12px] font-bold tracking-wide">
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-outline/20 text-on-surface text-[12px] font-bold tracking-wide hover:border-[#25D366] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#1da851]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <ul className="lg:col-span-8 border-t border-outline/15">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <li key={f.q} className="border-b border-outline/15">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`font-headline text-lg md:text-2xl transition-colors ${open ? "text-primary" : "text-on-surface"}`}>{f.q}</span>
                    <span className={`w-10 h-10 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-500 ${open ? "bg-primary border-primary text-white rotate-45" : "border-outline/20 text-primary"}`}>
                      <Plus className="w-4 h-4" />
                    </span>
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
                        <p className="pb-6 pr-14 text-[15px] md:text-base text-on-surface-variant font-light leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
