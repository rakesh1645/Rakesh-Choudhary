import { Heart } from "lucide-react";

export default function StatsCard() {
  return (
    <div className="shadow-box p-6 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch h-full">
      {/* Sub-box 1: 02 Years Experience */}
      <div className="p-6 rounded-[24px] bg-zinc-900/60 border border-white/5 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
          02
        </h2>
        <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-500 mt-2 leading-tight">
          YEARS <br /> EXPERIENCE
        </p>
      </div>

      {/* Sub-box 2: Made With Love */}
      <div className="p-6 rounded-[24px] bg-zinc-900/60 border border-white/5 flex flex-col items-center justify-center text-center">
        <div className="mb-2">
          <Heart className="w-7 h-7 text-white fill-white" />
        </div>
        <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-500 leading-tight">
          MADE <br /> WITH LOVE
        </p>
      </div>

      {/* Sub-box 3: Vibrant Emerald Green Pill */}
      <div className="p-6 rounded-[24px] bg-[#24a173] text-white flex flex-col items-center justify-center text-center shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white">
          +10
        </h2>
        <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-emerald-100 mt-2 leading-tight font-semibold">
          TOTAL <br /> PROJECTS
        </p>
      </div>
    </div>
  );
}
