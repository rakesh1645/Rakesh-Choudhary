"use client";

import { motion } from "framer-motion";
import { Globe, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function AboutProjects() {
  const featuredProjects = [
    {
      title: "Visuti Career",
      tagline: "SaaS Career Counseling & RBAC Engine",
      url: "https://visuticareer.com",
      tags: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
      accent: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30",
      badge: "Full Stack SaaS",
    },
    {
      title: "Roodraksh",
      tagline: "Premier Real Estate Web Platform",
      url: "https://roodraksh.co.in/",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Framer"],
      accent: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      badge: "Real Estate",
    },
    {
      title: "Phintex Power",
      tagline: "Seamless UI/UX Design & Dynamic Interactive Animations",
      url: "https://www.phintexpower.com/",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Animations"],
      accent: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
      badge: "Industrial & Energy",
    },
    {
      title: "Aladinn Tech",
      tagline: "Digital Agency & Corporate Platform",
      url: "https://www.aladinntech.com/",
      tags: ["Next.js", "TypeScript", "Tailwind", "90+ Lighthouse"],
      accent: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
      badge: "Agency Platform",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="shadow-box p-5 sm:p-8 w-full relative overflow-hidden group"
    >
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium">
                Production Deliverables
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mt-1 tracking-tight">
              Featured Client & Live Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group/link self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6">
          {featuredProjects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-300 group/card relative overflow-hidden cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] tracking-wider font-semibold border px-2.5 py-0.5 rounded-full bg-gradient-to-br ${proj.accent}`}
                  >
                    {proj.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/card:text-white transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white group-hover/card:text-indigo-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {proj.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
