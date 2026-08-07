import Link from "next/link";
import ActionButton from "../common/ActionButton";
import { PROFILE_IMAGE, BG1_TEXTURE } from "@/constants/imageassets";

export default function HeroSection() {
  return (
    <div className="shadow-box p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative group h-full overflow-hidden transition-all duration-500 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(129,140,248,0.1)] min-h-[220px]">
      {/* Soft Light Indigo Gradient Backdrop on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-zinc-950 to-purple-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Background Texture */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      <Link href="/about" className="overlay-link" aria-label="About Rakesh Choudhary" />

      {/* Profile Photo Container */}
      <div className="w-full md:w-5/12 h-48 sm:h-52 md:h-56 rounded-[24px] overflow-hidden relative z-10 border border-white/10 group-hover:border-indigo-400/30 shadow-xl flex-shrink-0 group-hover:scale-[1.02] transition-all duration-500">
        <img
          src={PROFILE_IMAGE}
          alt="Rakesh Choudhary"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Profile Info Details Container */}
      <div className="w-full md:w-7/12 flex flex-col justify-between h-full z-10 py-1 my-auto">
        <div className="flex flex-col gap-2 my-auto">
          <span className="text-[11px] tracking-[0.2em] text-indigo-300/80 font-normal">
            Full Stack Engineer
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/85 tracking-tight group-hover:text-white transition-colors">
            Rakesh Choudhary
          </h1>

          <div className="flex flex-col gap-1.5 mt-3 text-xs sm:text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-pink-300/70 font-normal">✦</span>
              <span>React.js / Next.js / Node.js / Express.js</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-300/70 font-normal">✦</span>
              <span>MongoDB / MySQL</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-full mt-4">
          <ActionButton />
        </div>
      </div>
    </div>
  );
}
