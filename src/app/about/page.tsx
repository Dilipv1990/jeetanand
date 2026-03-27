"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AirVent, Mountain, Sparkles, Quote, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-24">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[820px] flex items-center px-8 md:px-20 overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/4 rounded-full blur-[140px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] translate-y-1/4 pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center relative z-10">
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-secondary font-label font-bold tracking-[0.35em] uppercase text-[10px] mb-6 block flex items-center gap-4"
            >
              <span className="inline-block h-[1px] w-10 bg-secondary" />
              Our Lineage
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl leading-[0.9] mb-10 text-on-surface font-headline tracking-[-0.025em]"
            >
              The Legacy of{" "}
              <br />
              <span className="italic text-primary">Infinite Silence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-light"
            >
              Founded on the banks of the sacred Ganges, Swami Jeetanand Yog Sansthan
              is more than a school — it is a sanctuary where the ancient rhythm of
              breath meets modern stillness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-12 grid grid-cols-3 gap-8 max-w-sm"
            >
              {[["1974", "Founded"], ["50+", "Years"], ["Global", "Reach"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="font-headline text-2xl text-primary font-light">{val}</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative"
            >
              <Image src="/images/swami.png" alt="Swami Jeetanand" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
            </motion.div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-secondary/8 rounded-full -z-10 blur-3xl" />
            {/* Decorative ring */}
            <div className="absolute -top-8 -right-8 w-72 h-72 border border-outline-variant/30 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* ─── Philosophy Section ─── */}
      <section className="py-36 bg-surface-container-low px-8 md:px-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 justify-center mb-6">
              <div className="h-[1px] w-10 bg-outline-variant" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant">
                The Three Pillars
              </span>
              <div className="h-[1px] w-10 bg-outline-variant" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl mb-6 font-headline text-on-surface tracking-tight">
              Core Philosophy
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} className="text-on-surface-variant font-light leading-loose">
              We believe that yoga is not a destination of the body, but a journey through
              the self. Our path is defined by three pillars of existence.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AirVent,
                title: "Prana (The Breath)",
                body: "The vital force that connects the physical to the spiritual. We master the air to anchor the soul.",
                color: "text-primary",
                variant: "light",
              },
              {
                icon: Mountain,
                title: "Dhara (The Earth)",
                body: "Staying grounded in tradition while adapting to the modern spirit. Stability is the foundation of growth.",
                color: "text-on-primary",
                variant: "dark",
                quote: '"Be as the mountain."',
              },
              {
                icon: Sparkles,
                title: "Shanti (The Peace)",
                body: "The ultimate silence achieved when movement and stillness become indistinguishable.",
                color: "text-secondary",
                variant: "light",
              },
            ].map(({ icon: Icon, title, body, color, variant, quote }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={idx * 0.12}
                className={`p-10 rounded-[2.5rem] flex flex-col justify-between group transition-all duration-700
                  ${variant === "dark"
                    ? "bg-primary text-on-primary shadow-2xl shadow-primary/20"
                    : "bg-surface-container-lowest hover:shadow-xl border border-outline/5"
                  }
                `}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8
                    ${variant === "dark" ? "bg-white/10" : "bg-surface-container"}`}
                  >
                    <Icon className={`w-7 h-7 ${color}`} />
                  </div>
                  <h3 className={`text-2xl mb-4 font-headline ${variant === "dark" ? "" : "text-on-surface"}`}>
                    {title}
                  </h3>
                  <p className={`leading-relaxed text-[15px] ${variant === "dark" ? "opacity-80" : "text-on-surface-variant"}`}>
                    {body}
                  </p>
                </div>
                {quote ? (
                  <div className="mt-12 font-headline italic text-3xl text-on-primary/40">
                    {quote}
                  </div>
                ) : (
                  <div className={`mt-12 h-[1.5px] w-10 transition-all duration-700 group-hover:w-full
                    ${variant === "dark" ? "bg-white/20" : "bg-outline-variant"}`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Heritage Section ─── */}
      <section className="py-36 px-8 md:px-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="relative">
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 relative border border-outline/8 group">
                <Image
                  src="/images/heritage.png"
                  alt="Heritage Site"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-72 h-72 border border-outline-variant/25 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/5 rounded-full -z-10 blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <motion.span variants={fadeUp} custom={0} className="text-secondary font-label font-bold tracking-[0.35em] uppercase text-[10px] mb-4 block">
              Since 1974
            </motion.span>
            <motion.h2 variants={fadeUp} custom={0.1} className="text-4xl md:text-6xl mb-8 font-headline text-on-surface tracking-[-0.025em] leading-[0.95]">
              A Sanctuary Carved <br />
              in Time
            </motion.h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
              <motion.p variants={fadeUp} custom={0.2}>
                What began as a small gathering under the shade of a Banyan tree has grown
                into a global center for yogic research and spiritual awakening.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.3}>
                Swami Jeetanand&apos;s teachings focus on the integration of the Hatha Yoga
                Pradipika with the psychological needs of the 21st century — bridging the
                gap between the sage and the seeker.
              </motion.p>
              <motion.div variants={fadeUp} custom={0.4} className="pt-6 flex items-center gap-4">
                <div className="w-16 h-[1px] bg-primary" />
                <span className="font-headline italic text-primary">Discover our roots</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Visionary Quote ─── */}
      <section className="py-44 bg-surface-container px-8 text-center border-y border-outline/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Quote className="w-14 h-14 text-primary/15 mx-auto mb-10" />
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            custom={0.1}
            className="text-3xl md:text-5xl font-headline leading-tight text-on-surface mb-14 italic tracking-tight"
          >
            &quot;Yoga is not about touching your toes. It is about what you learn on the
            way down, and the grace you find on the way back up.&quot;
          </motion.blockquote>
          <motion.cite variants={fadeUp} custom={0.2} className="font-label uppercase tracking-[0.45em] text-[11px] text-secondary font-bold not-italic">
            — Swami Jeetanand
          </motion.cite>
        </motion.div>
      </section>

      {/* ─── Values Section ─── */}
      <section className="py-36 px-8 md:px-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="bg-surface-container-low rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-outline/5 group hover:shadow-xl transition-shadow duration-500"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/4 rounded-full blur-3xl" />
            <h3 className="text-3xl mb-8 font-headline text-on-surface">Environmental Stewardship</h3>
            <p className="text-on-surface-variant leading-relaxed font-light mb-10 text-[15px]">
              Our Sansthan is committed to the Earth that sustains us. 10% of all
              memberships are dedicated to local reforestation near Rishikesh.
            </p>
            <div className="flex items-center gap-4 text-primary font-bold">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-[0.3em] text-[10px]">Sustainability Pledge</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.12}
            className="bg-surface-container-high rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col justify-center border border-outline/5 hover:shadow-xl transition-shadow duration-500"
          >
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/4 rounded-full blur-3xl" />
            <h3 className="text-3xl mb-8 font-headline text-on-surface">A Global Community</h3>
            <p className="text-on-surface-variant leading-relaxed font-light mb-10 text-[15px]">
              Joining us means becoming part of a worldwide family of seekers, united by
              the common language of peace.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
                    style={{ background: `hsl(${80 + i * 20}, 20%, ${70 + i * 3}%)` }}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-on-surface">5,000+</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-outline">Global Seekers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
