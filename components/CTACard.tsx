import Link from "next/link";
import { Sparkles } from "lucide-react";
import ActionButton from "./ActionButton";

export default function CTACard() {
  return (
    <div className="shadow-box p-8 flex flex-col justify-between relative group h-full overflow-hidden">
      <img
        src="/icons/bg1.avif"
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <Link href="/contact" className="overlay-link" aria-label="Contact page" />

      {/* Top Left Sparkle Icon */}
      <div className="flex items-center justify-between z-10">
        <Sparkles className="w-6 h-6 text-zinc-500 group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Title with Gradient "together." */}
      <div className="my-6 z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Let's <br />
          work <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">together.</span>
        </h2>
      </div>

      {/* Action Arrow Button from icons folder */}
      <div className="flex items-center justify-end z-10">
        <ActionButton />
      </div>
    </div>
  );
}
