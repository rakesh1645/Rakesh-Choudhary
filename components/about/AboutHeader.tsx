"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin, CheckCircle2, Zap, Award } from "lucide-react";
import Magnetic from "../common/Magnetic";
import { motion } from "framer-motion";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function AboutHeader() {
  const highlights = [
    { label: "Experience", value: "2+ Years", icon: Zap },
    { label: "Lighthouse Score", value: "90+", icon: Sparkles },
    { label: "Projects Delivered", value: "10+", icon: Award },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Breadcrumb & Status Bar */}
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

        {/* Availability Status Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Opportunities</span>
          </div>

          <span className="hidden sm:inline-block text-xs tracking-widest text-zinc-500 font-normal uppercase">
            Profile & Summary
          </span>
        </div>
      </motion.div>

      {/* Top Bento Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Column: Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 shadow-box p-5 sm:p-8 flex flex-col items-center justify-center relative group min-h-[320px] sm:min-h-[380px] overflow-hidden"
        >
          <img
            src={BG1_TEXTURE}
            alt=""
            className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Photo Frame */}
          <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none aspect-[1/1.2] sm:aspect-[1/1.3] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 relative shadow-2xl group-hover:scale-[1.02] group-hover:border-indigo-400/40 transition-all duration-500">
            <Image
              src="/pic2.png"
              alt="Rakesh Choudhary"
              width={1920}
              height={1080}
              priority
              quality={100}
              className="w-full h-full object-cover object-bottom scale-[1.08] group-hover:scale-[1.12] transition-transform duration-700"
            />

            {/* Bottom Overlay Pill Badges on Photo */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-zinc-950/85 border border-white/10 text-[10px] sm:text-[11px] text-zinc-300 backdrop-blur-md">
                <MapPin className="w-3 h-3 text-rose-400" />
                <span>Jaipur, India</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-zinc-950/85 border border-white/10 text-[10px] sm:text-[11px] text-indigo-300 backdrop-blur-md">
                <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: ✴ Self-Summary ✴ + Bio Box Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-between gap-4"
        >
          {/* Title with Starburst Icons on BOTH SIDES in Light Font Weight */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 select-none py-1">
            <span className="text-xl sm:text-3xl md:text-4xl text-zinc-400 font-light">✴</span>
            <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white/90 whitespace-nowrap">
              Self-Summary
            </h1>
            <span className="text-xl sm:text-3xl md:text-4xl text-zinc-400 font-light">✴</span>
          </div>

          {/* Bio Box Card */}
          <div className="shadow-box p-5 sm:p-8 flex flex-col justify-between relative group flex-1">
            <img
              src={BG1_TEXTURE}
              alt=""
              className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />

            <div className="flex flex-col gap-2.5 sm:gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                    Full Stack Engineer
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white/90">
                Rakesh Choudhary
              </h2>

              <div className="space-y-2.5 text-zinc-300/90 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed font-sans mt-1">
                <p>
                  I am a passionate <strong className="text-white font-semibold">Full Stack Developer</strong> with 2+ years of experience designing, building, and deploying scalable web applications and SaaS platforms using <strong className="text-white font-medium">React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and MySQL</strong>.
                </p>

                <p>
                  Specialized in constructing high-performance backend systems with multi-tenant RBAC security and Razorpay payment workflows, while optimizing Core Web Vitals to elevate Google Lighthouse scores to <span className="text-emerald-400 font-semibold">90+</span> and cut page load times by <span className="text-indigo-300 font-semibold">30%</span>.
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 relative z-10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-2 sm:p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col items-center justify-center text-center group-hover:border-white/10 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 mb-0.5 sm:mb-1" />
                    <span className="text-xs sm:text-base font-bold text-white tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
