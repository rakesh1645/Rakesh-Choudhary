import Link from "next/link";
import { Sparkles, Download } from "lucide-react";
import ActionButton from "@/components/common/ActionButton";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/common/Icons";
import { BG1_TEXTURE, RESUME_PDF } from "@/constants/imageassets";

export default function AboutBottomRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
      {/* 1. Social Profiles Card */}
      <div className="shadow-box p-6 flex flex-col justify-between relative group min-h-[220px]">
        <div className="w-full rounded-[24px] bg-zinc-900/60 border border-white/5 p-4 flex items-center justify-around group-hover:border-indigo-500/30 transition-all duration-500 relative z-10 my-auto">
          <a
            href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-indigo-400 hover:border-indigo-400/80 hover:bg-indigo-950/60 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/rakesh1645"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/80 hover:bg-zinc-800 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.youtube.com/@codewithrc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-red-400 hover:border-red-400/80 hover:bg-red-950/60 hover:scale-110 transition-all duration-300"
            aria-label="YouTube Channel"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-end justify-between z-10 mt-4">
          <div>
            <span className="text-[10px] tracking-[0.2em] text-zinc-500 group-hover:text-indigo-300 transition-colors font-medium">
              Let's Connect
            </span>
            <h2 className="text-lg font-bold text-white/85 group-hover:text-white mt-0.5 transition-colors">
              My Social Profiles
            </h2>
          </div>
          <ActionButton />
        </div>
      </div>

      {/* 2. CTA Card ("Let's work together.") */}
      <div className="shadow-box p-6 flex flex-col justify-between relative group min-h-[220px]">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(125deg, #7c3aed 0%, #ec4899 22%, #fef08a 45%, #a855f7 70%, #fef08a 100%)",
          }}
        />

        <Link href="/contact" className="overlay-link" aria-label="Contact page" />

        <div className="flex items-center justify-between z-10">
          <Sparkles className="w-5 h-5 text-zinc-500 group-hover:text-white/80 group-hover:rotate-12 transition-all duration-300" />
        </div>

        <div className="my-3 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white/85 group-hover:text-white tracking-tight leading-tight transition-colors">
            Let's <br />
            work <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 group-hover:from-purple-800 group-hover:to-fuchsia-600 transition-all">together.</span>
          </h2>
        </div>

        <div className="flex items-center justify-end z-10">
          <ActionButton />
        </div>
      </div>

      {/* 3. Download Updated Resume Banner Card */}
      <div className="shadow-box p-6 flex flex-col justify-between relative group overflow-hidden min-h-[220px]">
        <img
          src={BG1_TEXTURE}
          alt=""
          className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="flex items-center gap-4 z-10">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] text-zinc-500 group-hover:text-indigo-400 transition-colors font-medium">
              Download My
            </span>
            <h2 className="text-lg font-bold text-white/90 mt-0.5">
              Updated Resume
            </h2>
          </div>
        </div>

        <div className="z-10 mt-4">
          <a
            href={RESUME_PDF}
            download="Rakesh_Choudhary_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn-glass text-xs font-semibold px-5 py-2.5 w-full justify-center flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
