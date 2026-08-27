import Link from "next/link";
import ActionButton from "../common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function ProjectsSection() {
  return (
    <div className="about-blog-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden transition-all duration-500 hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] bg-[#162029]">
      {/* Texture image */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      {/* Concentric Orange Semi-Circle Arcs Top-Left with Smooth Hover Rotation */}
      <div className="absolute -top-12 -left-12 w-44 h-44 rounded-full bg-[#f97316]/90 pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-[#fb923c] flex items-center justify-center opacity-90">
          <div className="w-20 h-20 rounded-full bg-[#fed7aa] opacity-80" />
        </div>
      </div>

      {/* Giant Subtle Background Text "PROJECTS" */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="text-3xl min-[400px]:text-4xl sm:text-5xl font-extrabold font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] text-slate-700/30 group-hover:text-amber-500/20 transition-colors duration-500 whitespace-nowrap">
          PROJECTS
        </span>
      </div>

      <Link href="/projects" className="overlay-link" aria-label="Go to Projects portfolio page" />

      {/* Laptop Showcase Visual with Laser Scan Beam */}
      <div className="w-full flex-1 flex flex-col items-center justify-center my-3 relative z-10">
        <div className="w-full max-w-[290px] rounded-xl bg-zinc-950 border border-slate-700/60 overflow-hidden flex flex-col shadow-2xl relative group-hover:scale-[1.04] group-hover:border-amber-400/50 transition-all duration-500">
          {/* Laptop Screen Scanline Laser Light Beam Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity pointer-events-none z-20" />

          {/* Laptop Top Bar */}
          <div className="h-4 bg-slate-900 border-b border-slate-800 px-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
              LIVE APP
            </span>
          </div>

          {/* Laptop Screen Content */}
          <div className="p-3 sm:p-4 bg-gradient-to-br from-slate-900 via-zinc-950 to-slate-900 flex flex-col items-center justify-center text-center min-h-[115px] relative">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                SAAS & WEB PLATFORMS
              </span>
            </div>
            <h3 className="text-xs font-bold text-white/90 tracking-tight group-hover:text-amber-300 transition-colors">
              VISUTI, ROODRAKSH, ALADINN & JKJ
            </h3>

            {/* Micro Tech Tags */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap justify-center">
              <span className="text-[8px] font-mono text-zinc-400 bg-slate-800/80 border border-slate-700/60 px-1.5 py-0.5 rounded">
                React
              </span>
              <span className="text-[8px] font-mono text-zinc-400 bg-slate-800/80 border border-slate-700/60 px-1.5 py-0.5 rounded">
                Next.js
              </span>
              <span className="text-[8px] font-mono text-zinc-400 bg-slate-800/80 border border-slate-700/60 px-1.5 py-0.5 rounded">
                Node
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between z-10 mt-1">
        <div>
          <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.2em] text-slate-400 group-hover:text-amber-400 transition-colors font-medium">
            SHOWCASE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white/90 mt-0.5 group-hover:text-white transition-colors">
            Projects
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
