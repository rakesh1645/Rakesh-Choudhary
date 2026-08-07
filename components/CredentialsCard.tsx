import Link from "next/link";
import ActionButton from "./ActionButton";

export default function CredentialsCard() {
  return (
    <div className="shadow-box p-6 flex flex-col justify-between relative group h-full overflow-hidden">
      <img
        src="/icons/bg1.avif"
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <Link href="/about" className="overlay-link" aria-label="Go to About page" />

      {/* Signature SVG Visual */}
      <div className="w-full h-36 rounded-2xl bg-zinc-900/40 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-white/15 transition-colors z-10">
        <svg
          viewBox="0 0 300 120"
          className="w-48 h-24 text-zinc-300 opacity-80 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 20 70 C 40 10, 60 90, 80 40 C 90 20, 100 80, 120 50 C 140 30, 130 90, 160 60 C 180 30, 200 80, 220 50 C 240 30, 260 70, 280 50" />
          <path d="M 40 90 Q 150 110 270 85" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between mt-6 z-10">
        <div>
          <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-zinc-500 font-medium">
            CREDENTIALS
          </span>
          <h2 className="text-xl font-bold text-white mt-1">
            More About Me
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
