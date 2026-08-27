"use client";

import Link from "next/link";
import { Sparkles, Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ActionButton from "@/components/common/ActionButton";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/common/Icons";
import { BG1_TEXTURE, RESUME_PDF } from "@/constants/imageassets";

export default function AboutBottomRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full"
    >
      {/* 1. Social Profiles Card */}
      <div className="shadow-box p-5 sm:p-7 flex flex-col justify-between relative group min-h-[220px] sm:min-h-[240px]">
        <img
          src={BG1_TEXTURE}
          alt=""
          className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        <div className="w-full rounded-[24px] bg-zinc-900/60 border border-white/5 p-3 sm:p-4 flex items-center justify-around group-hover:border-indigo-500/30 transition-all duration-500 relative z-10 my-auto">
          <a
            href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-indigo-400 hover:border-indigo-400/80 hover:bg-indigo-950/60 hover:scale-110 transition-all duration-300 shadow-md"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="https://github.com/rakesh1645"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/80 hover:bg-zinc-800 hover:scale-110 transition-all duration-300 shadow-md"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="https://www.youtube.com/@codewithrc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-red-400 hover:border-red-400/80 hover:bg-red-950/60 hover:scale-110 transition-all duration-300 shadow-md"
            aria-label="YouTube Channel"
          >
            <YoutubeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        <div className="flex items-end justify-between z-10 mt-3 sm:mt-4">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 group-hover:text-indigo-300 transition-colors font-medium">
              Stay Connected
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white/90 group-hover:text-white mt-0.5 transition-colors">
              Profiles & Media
            </h2>
          </div>
          <ActionButton />
        </div>
      </div>

      {/* 2. CTA Card ("Let's work together.") */}
      <div className="shadow-box p-5 sm:p-7 flex flex-col justify-between relative group min-h-[220px] sm:min-h-[240px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(125deg, #7c3aed 0%, #ec4899 22%, #fef08a 45%, #a855f7 70%, #fef08a 100%)",
          }}
        />

        <Link href="/contact" className="overlay-link" aria-label="Contact page" />

        <div className="flex items-center justify-between z-10">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-white/80 group-hover:rotate-12 transition-all duration-300" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white/80 font-medium transition-colors">
            Get In Touch
          </span>
        </div>

        <div className="my-2 sm:my-3 z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 group-hover:text-white tracking-tight leading-tight transition-colors">
            Let's <br />
            work <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 group-hover:from-purple-900 group-hover:to-fuchsia-700 transition-all">together.</span>
          </h2>
        </div>

        <div className="flex items-center justify-end z-10">
          <ActionButton />
        </div>
      </div>

      {/* 3. Download Updated Resume Banner Card */}
      <div className="shadow-box p-5 sm:p-7 flex flex-col justify-between relative group overflow-hidden min-h-[220px] sm:min-h-[240px]">
        <img
          src={BG1_TEXTURE}
          alt=""
          className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="flex items-center gap-3 sm:gap-4 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 group-hover:text-indigo-400 transition-colors font-medium">
              Curriculum Vitae
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white/90 mt-0.5">
              Updated Resume
            </h2>
          </div>
        </div>

        <div className="z-10 mt-3 sm:mt-4 flex flex-col sm:flex-row items-center gap-2">
          <a
            href={RESUME_PDF}
            download="Rakesh_Choudhary_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn-glass text-xs font-semibold px-4 py-2.5 w-full justify-center flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Download PDF</span>
          </a>

          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-white px-3 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-zinc-900/60 flex items-center justify-center gap-1 transition-colors w-full sm:w-auto flex-shrink-0"
          >
            <span>View</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
