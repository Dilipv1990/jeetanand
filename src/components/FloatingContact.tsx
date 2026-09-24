import { Phone, MessageCircle } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/contact";

// Always-reachable call / WhatsApp shortcuts; sits above the mobile book bar.
export default function FloatingContact() {
  return (
    <div className="fixed right-4 md:right-6 bottom-24 md:bottom-6 z-30 flex flex-col gap-3">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-stone-900/20 hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={telHref}
        aria-label="Call us"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sunrise text-white flex items-center justify-center shadow-xl shadow-secondary/30 hover:scale-105 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
