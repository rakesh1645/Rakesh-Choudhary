"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Sparkles, Cpu } from "lucide-react";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function AboutSkills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      accent: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      pillBg: "hover:border-blue-400/40 hover:bg-blue-950/40 hover:text-blue-300",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
        "HTML5 / CSS3",
      ],
    },
    {
      category: "Backend & Systems",
      icon: Server,
      accent: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      pillBg: "hover:border-emerald-400/40 hover:bg-emerald-950/40 hover:text-emerald-300",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "RBAC Architecture",
        "Razorpay Webhooks",
        "Server Actions",
      ],
    },
    {
      category: "Databases & Storage",
      icon: Database,
      accent: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
      pillBg: "hover:border-purple-400/40 hover:bg-purple-950/40 hover:text-purple-300",
      skills: [
        "MongoDB",
        "MySQL",
        "Mongoose ODM",
        "Schema Design",
        "Query Optimization",
        "Database Indexing",
      ],
    },
    {
      category: "Tools, DevOps & Performance",
      icon: Wrench,
      accent: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
      pillBg: "hover:border-amber-400/40 hover:bg-amber-950/40 hover:text-amber-300",
      skills: [
        "Git & GitHub",
        "Postman",
        "Vercel",
        "Lighthouse 90+ Tuning",
        "Core Web Vitals (LCP/FCP)",
        "SEO Optimization",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="shadow-box p-6 sm:p-8 w-full relative overflow-hidden group"
    >
      {/* Texture image */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 sm:pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mt-1 tracking-tight">
              Skills & Tech Stack
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 bg-zinc-900/80 border border-white/10 px-3 py-1.5 rounded-full font-mono">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Stack Engineering</span>
            </span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all duration-300 group/card"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br ${group.accent} border flex items-center justify-center`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white/90">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[11px] sm:text-xs text-zinc-300 bg-zinc-800/60 border border-white/5 px-2 sm:px-2.5 py-1 rounded-lg transition-all duration-200 cursor-default ${group.pillBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
