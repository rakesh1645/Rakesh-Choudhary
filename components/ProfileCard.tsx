import Link from "next/link";
import Image from "next/image";
import { Sparkles, Code2 } from "lucide-react";
import ActionButton from "./ActionButton";

export default function ProfileCard() {
  return (
    <div className="shadow-box p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-8 relative group h-full justify-between overflow-hidden">
      {/* Background bg1 texture */}
      <img
        src="/icons/bg1.avif"
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      />

      <Link href="/about" className="overlay-link" aria-label="Go to About page" />

      {/* Left side profile photo */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[28px] overflow-hidden border border-white/10 shrink-0 relative shadow-2xl group-hover:scale-[1.02] transition-transform duration-300 z-10">
        <Image
          src="/profile.png"
          alt="Rakesh Choudhary"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Right side Name & Subtitles */}
      <div className="flex flex-col justify-between flex-1 gap-6 text-center sm:text-left h-full z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Rakesh <br />
            Choudhary
          </h1>
          
          <div className="mt-4 space-y-1.5 text-zinc-300 italic text-sm sm:text-base font-light">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-sky-400 not-italic opacity-80" />
              <span>Full Stack Engineer</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-400">
              <Code2 className="w-4 h-4 text-indigo-400 not-italic opacity-80" />
              <span>React / Next / Node</span>
            </div>
          </div>
        </div>

        {/* Action button icon from icons folder */}
        <div className="flex justify-end pt-2">
          <ActionButton />
        </div>
      </div>
    </div>
  );
}
