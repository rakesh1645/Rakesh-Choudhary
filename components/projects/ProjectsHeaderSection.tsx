"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Magnetic from "../common/Magnetic";
import { motion } from "framer-motion";

export default function ProjectsHeaderSection() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Navigation Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <Magnetic strength={0.2}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-white/10 px-4 py-2 rounded-full interactive"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </Magnetic>
        <span className="text-xs tracking-widest text-zinc-500">
          Featured Engineering Work
        </span>
      </motion.div>

      {/* Hero Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="shadow-box p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
      >
        <div className="flex flex-col gap-3 w-full md:w-2/3 relative z-10">
          <span className="text-xs tracking-widest text-indigo-400 font-medium">
            Portfolio Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white/90 tracking-tight">
            Featured Projects & SaaS Platforms
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Real-world applications, SaaS platforms, and enterprise solutions designed and engineered by Rakesh Choudhary.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-1/2 md:w-1/3 flex justify-center md:justify-end relative z-10"
        >
          <div className="w-full aspect-[1/1.414] max-w-[280px] rounded-[24px] overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
            <Image src="/pic3.png" alt="Rakesh Choudhary" width={1920} height={1080} priority quality={100} className="w-full h-full object-cover object-left  scale-[1.41] transition-transform duration-700" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
