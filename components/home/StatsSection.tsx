import React from "react";
import { Heart } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="shadow-box p-6 w-full relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch h-full relative z-10">
        {/* Box 1: 02 YEARS EXPERIENCE */}
        <div className="p-6 rounded-[24px] bg-zinc-900/60 border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-indigo-500/30 hover:bg-gradient-to-br hover:from-indigo-950/40 hover:to-zinc-900 hover:scale-[1.02] cursor-pointer group">
          <h2 className="text-3xl sm:text-4xl font-light text-white/80 tracking-tight group-hover:text-indigo-300 transition-colors">
            02
          </h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2 leading-tight group-hover:text-indigo-200/80 transition-colors font-normal">
            YEARS <br /> EXPERIENCE
          </p>
        </div>

        {/* Box 2: MADE WITH LOVE */}
        <div className="p-6 rounded-[24px] bg-zinc-900/60 border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-rose-500/30 hover:bg-gradient-to-br hover:from-rose-950/40 hover:to-zinc-900 hover:scale-[1.02] cursor-pointer group">
          <div className="mb-2 group-hover:scale-110 transition-transform">
            <Heart className="w-6 h-6 text-white/70 fill-white/70 group-hover:text-rose-400 group-hover:fill-rose-400 transition-colors" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 leading-tight group-hover:text-rose-200/80 transition-colors font-normal">
            MADE <br /> WITH LOVE
          </p>
        </div>

        {/* Box 3: +10 TOTAL PROJECTS */}
        <div className="p-6 rounded-[24px] bg-zinc-900/60 border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-950/40 hover:to-zinc-900 hover:scale-[1.02] cursor-pointer group">
          <h2 className="text-3xl sm:text-4xl font-light text-white/80 tracking-tight group-hover:text-purple-300 transition-colors">
            +10
          </h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2 leading-tight group-hover:text-purple-200/80 transition-colors font-normal">
            TOTAL <br /> PROJECTS
          </p>
        </div>
      </div>
    </div>
  );
}
