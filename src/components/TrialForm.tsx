"use client";

import { useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { whatsappHref } from "@/lib/contact";

const interests = [
  "Group yoga classes",
  "Personal / 1-to-1 yoga",
  "Yoga at home",
  "Therapeutic yoga",
  "Kids yoga",
  "Senior citizen yoga",
  "Teacher training (TTC)",
  "Panchakarma & Ayurveda retreat",
];

const field =
  "w-full h-13 px-5 rounded-2xl bg-background border border-outline/15 text-[15px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition";

// No backend yet: the enquiry is handed to WhatsApp, pre-filled.
export default function TrialForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi, I'd like to book a free trial class.\nName: ${name}\nPhone: ${phone}\nInterested in: ${interest}`;
    window.open(whatsappHref(message), "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="sr-only" htmlFor="trial-name">Name</label>
      <input
        id="trial-name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        autoComplete="name"
        className={field}
      />
      <label className="sr-only" htmlFor="trial-phone">Phone number</label>
      <input
        id="trial-phone"
        required
        type="tel"
        inputMode="tel"
        pattern="[0-9+\s-]{10,15}"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        autoComplete="tel"
        className={field}
      />
      <label className="sr-only" htmlFor="trial-interest">What are you looking for?</label>
      <select
        id="trial-interest"
        required
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className={`${field} appearance-none ${interest ? "" : "text-on-surface-variant/50"}`}
      >
        <option value="" disabled>What are you looking for?</option>
        {interests.map((i) => (
          <option key={i} value={i} className="text-on-surface">{i}</option>
        ))}
      </select>
      <button
        type="submit"
        className="btn-sunrise btn-shine group mt-2 inline-flex items-center justify-center gap-3 text-white h-14 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/30"
      >
        Book My Free Trial
        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
      </button>
      <p className="flex items-center justify-center gap-2 text-[12px] text-on-surface-variant mt-1">
        <Lock className="w-3.5 h-3.5" />
        100% private. We never share your number.
      </p>
    </form>
  );
}
