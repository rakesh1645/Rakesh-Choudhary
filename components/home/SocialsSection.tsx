import { GithubIcon, LinkedinIcon, YoutubeIcon } from "../common/Icons";
import ActionButton from "../common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function SocialsSection() {
  return (
    <div className="about-blog-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden transition-all duration-500 hover:border-sky-400/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]">
      {/* Electric Cyan / Sky Blue Gradient Overlay on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(12, 74, 110, 0.8) 0%, rgba(15, 15, 18, 0.9) 60%, rgba(3, 105, 161, 0.7) 100%)",
        }}
      />

      {/* Texture image */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      {/* Social Profiles Interactive Cards */}
      <div className="w-full rounded-[24px] bg-zinc-900/60 border border-white/5 p-3 sm:p-4 flex items-center justify-around group-hover:border-sky-500/30 group-hover:bg-zinc-900/80 transition-all duration-500 relative z-10">
        <a
          href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 group/icon"
          aria-label="LinkedIn Profile"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 group-hover/icon:text-sky-400 group-hover/icon:border-sky-400/80 group-hover/icon:bg-sky-950/60 group-hover/icon:scale-110 group-hover/icon:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300">
            <LinkedinIcon className="w-5 h-5 sm:w-8 sm:h-8" />
          </div>
        </a>

        <a
          href="https://github.com/rakesh1645"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 group/icon"
          aria-label="GitHub Profile"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 group-hover/icon:text-white group-hover/icon:border-white/80 group-hover/icon:bg-zinc-800 group-hover/icon:scale-110 group-hover/icon:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
            <GithubIcon className="w-5 h-5 sm:w-8 sm:h-8" />
          </div>
        </a>

        <a
          href="https://www.youtube.com/@codewithrc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 group/icon"
          aria-label="YouTube Channel"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 group-hover/icon:text-red-400 group-hover/icon:border-red-400/80 group-hover/icon:bg-red-950/60 group-hover/icon:scale-110 group-hover/icon:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300">
            <YoutubeIcon className="w-5 h-5 sm:w-8 sm:h-8" />
          </div>
        </a>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between z-10 mt-4">
        <div>
          <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-zinc-400 group-hover:text-sky-300 transition-colors font-medium">
            LET'S CONNECT
          </span>
          <h2 className="text-xl font-bold text-white/85 group-hover:text-white mt-0.5 transition-colors">
            My Social Profiles
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
