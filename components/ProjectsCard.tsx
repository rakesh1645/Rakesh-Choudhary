import Link from "next/link";
import ActionButton from "./ActionButton";

export default function ProjectsCard() {
  return (
    <div className="shadow-box p-6 flex flex-col justify-between relative group h-full overflow-hidden">
      <img
        src="/icons/bg1.avif"
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <Link href="/projects" className="overlay-link" aria-label="Go to Projects portfolio page" />

      {/* Laptop / Screen Showcase Visual */}
      <div className="w-full h-36 rounded-2xl bg-zinc-900/40 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-white/15 transition-colors p-3 z-10">
        <div className="w-full h-full rounded-xl bg-zinc-950 border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
          <div className="h-4 bg-zinc-900 border-b border-white/10 px-2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 p-3 bg-gradient-to-br from-sky-950/40 via-zinc-950 to-indigo-950/40 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono tracking-widest text-sky-400 uppercase font-bold">
              VISUTI & JKJ PLATFORMS
            </span>
            <span className="text-xs font-extrabold text-white mt-0.5 tracking-tight">
              FULL STACK SAAS & E-COMMERCE
            </span>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between mt-6 z-10">
        <div>
          <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-zinc-500 font-medium">
            SHOWCASE
          </span>
          <h2 className="text-xl font-bold text-white mt-1">
            Projects
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
