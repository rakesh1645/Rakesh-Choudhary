"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function AboutTimeline() {
  const experiences = [
    {
      period: "Dec 2025 - Jul 2026",
      role: "Full Stack Engineer",
      company: "Keasbrain Technologies Pvt Ltd",
      points: [
        "Architected Role-Based Access Control (RBAC) engine governing granular permissions for 5+ user roles.",
        "Engineered subscription payment workflows with Razorpay Webhooks and automated transaction reconciliation.",
        "Secured applications with HTTP-only cookies and stateless JWT tokens, optimizing backend response times.",
      ],
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "RBAC"],
    },
    {
      period: "Jun 2024 - Nov 2025",
      role: "Front-End Developer",
      company: "Aladinn Digital Solutions",
      points: [
        "Engineered client-side search debouncing and caching mechanisms, slashing redundant API network requests by 50%.",
        "Tuned Core Web Vitals and frontend rendering pipelines, elevating Google Lighthouse scores to 90+.",
        "Developed responsive UI component libraries with reusable modular patterns using Next.js and Tailwind CSS.",
      ],
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
  ];

  const education = [
    {
      period: "2021 - 2024",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "S.S. Jain Subodh P.G. (Autonomous) College",
      highlights: "Core Focus: Data Structures, Database Systems (DBMS), Full Stack Web Development, OOP.",
    },
    {
      period: "2021 | 90% Merit",
      degree: "Senior Secondary Education (Class XII) - RBSE",
      institution: "Govt. Senior Secondary School",
      highlights: "Focus: Computer Science, Mathematics, Science.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="shadow-box p-5 sm:p-8 flex flex-col justify-between relative group min-h-[340px] sm:min-h-[360px] overflow-hidden"
      >
        <img
          src={BG1_TEXTURE}
          alt=""
          className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6 pb-4 border-b border-white/10">
            <div className="w-8 h-8 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-semibold block">
                Career History
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white/90">
                Work Experience
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-2.5 sm:gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-zinc-400 bg-zinc-800/60 border border-white/5 px-2 sm:px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mt-1">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] sm:text-[10px] text-zinc-400 bg-zinc-950/60 border border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="shadow-box p-5 sm:p-8 flex flex-col justify-between relative group min-h-[340px] sm:min-h-[360px] overflow-hidden"
      >
        <img
          src={BG1_TEXTURE}
          alt=""
          className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6 pb-4 border-b border-white/10">
            <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-semibold block">
                Academic Background
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white/90">
                Education & Credentials
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-2.5 sm:gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-zinc-400 bg-zinc-800/60 border border-white/5 px-2 sm:px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/40 p-2.5 sm:p-3 rounded-xl border border-white/5">
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
