import Link from "next/link";
import ActionButton from "../common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function CredentialsSection() {
  return (
    <div className="about-blog-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden transition-all duration-500 hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]">
      {/* Deep Midnight Indigo & Purple Aurora Glow Backdrop on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 27, 75, 0.85) 0%, rgba(15, 15, 18, 0.95) 50%, rgba(88, 28, 135, 0.75) 100%)",
        }}
      />

      {/* Texture image */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      <Link
        href="/about"
        className="overlay-link"
        aria-label="Go to About Me & Credentials page"
      />

      {/* Elegant Cursive Signature Visual */}
      <div className="w-full flex-1 flex items-center justify-center my-2 relative z-10">
        <svg
          viewBox="0 0 300 120"
          className="w-full max-w-[220px] h-auto text-white/80 group-hover:text-indigo-200 group-hover:scale-105 transition-all duration-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20,70 Q40,20 60,60 T100,50 T140,80 T180,40 T220,65 Q250,55 280,60" />
          <path d="M30,85 Q130,80 270,82" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between z-10 mt-2">
        <div>
          <span className="text-[11px] uppercase  tracking-[0.2em] text-white/50 group-hover:text-indigo-300 transition-colors font-medium">
            CREDENTIALS
          </span>
          <h2 className="text-xl font-bold text-white/85 group-hover:text-white mt-0.5 transition-colors">
            More About Me
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
