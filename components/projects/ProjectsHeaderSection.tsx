"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Layers, Zap, ShieldCheck, Award } from "lucide-react";
import Magnetic from "../common/Magnetic";
import { motion } from "framer-motion";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function ProjectsHeaderSection() {
  const projectStats = [
    { label: "Live Platforms", value: "6+", icon: Layers },
    { label: "Lighthouse Score", value: "90+", icon: Zap },
    { label: "Production Security", value: "RBAC / JWT", icon: ShieldCheck },
  ];

  const domains = [
    "Full Stack SaaS",
    "Real Estate",
    "Enterprise E-Commerce",
    "Industrial Systems",
    "Corporate Portals",
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Navigation Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <Magnetic strength={0.2}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-white/10 px-4 py-2 rounded-full interactive hover:border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </Magnetic>

        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-medium font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span>Production Deployments</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Title & Rich Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="shadow-box p-5 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group"
      >
        <img
          src={BG1_TEXTURE}
          alt=""
          className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        <div className="flex flex-col gap-4 w-full lg:w-3/5 relative z-10 text-center lg:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
                Engineered Portfolio Showcase
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight leading-tight">
              Featured Projects & SaaS Platforms
            </h1>

            <p className="text-zinc-300/90 text-xs sm:text-sm md:text-base leading-relaxed mt-2 max-w-2xl">
              A curated collection of production-grade SaaS systems, commercial real estate platforms, enterprise e-commerce portals, and modern agency websites engineered with <strong className="text-white font-medium">React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and MySQL</strong>.
            </p>
          </div>

          {/* Domain Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start pt-1">
            {domains.map((dom, dIdx) => (
              <span
                key={dIdx}
                className="text-[11px] sm:text-xs text-zinc-300 bg-zinc-900/80 border border-white/10 px-2.5 sm:px-3 py-1 rounded-lg font-medium shadow-sm"
              >
                ✦ {dom}
              </span>
            ))}
          </div>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-4 mt-2 border-t border-white/10">
            {projectStats.map((stat, sIdx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={sIdx}
                  className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 mb-1" />
                  <span className="text-xs sm:text-base font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[8px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Photo Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-1/2 lg:w-2/5 flex justify-center lg:justify-end relative z-10"
        >
          <div className="w-full aspect-[1/1.25] sm:aspect-[1/1.35] max-w-[260px] sm:max-w-[300px] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] group-hover:border-indigo-400/40 transition-all duration-500 relative">
            <Image 
              src="/pic3.png" 
              alt="Rakesh Choudhary" 
              width={1920} 
              height={1080} 
              priority 
              quality={100} 
              className="w-full h-full object-cover object-left scale-[1.25] sm:scale-[1.35] transition-transform duration-700" 
            />

            {/* Bottom floating badge */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-center z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/85 border border-white/10 text-[11px] text-indigo-300 backdrop-blur-md font-mono shadow-lg">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>Full Stack Engineering</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
