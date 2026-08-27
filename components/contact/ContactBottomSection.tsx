"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Rocket } from "lucide-react";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function ContactBottomSection() {
  const cards = [
    {
      title: "Rapid Turnaround",
      subtitle: "Agile Development",
      description: "Fast-paced execution with clean modular component architectures, rapid MVP prototyping, and continuous delivery.",
      icon: Zap,
      accent: "text-amber-400 bg-amber-950/60 border-amber-500/30",
    },
    {
      title: "Scalable Architecture",
      subtitle: "Enterprise Backend",
      description: "Robust RBAC security engines, stateless JWT authentication, MongoDB aggregations, and automated payment gateways.",
      icon: ShieldCheck,
      accent: "text-indigo-400 bg-indigo-950/60 border-indigo-500/30",
    },
    {
      title: "90+ Lighthouse Speed",
      subtitle: "Core Web Vitals",
      description: "Zero-lag responsive interfaces, modern fluid animations, and aggressive frontend performance optimization.",
      icon: Rocket,
      accent: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full"
    >
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="shadow-box p-6 sm:p-7 flex flex-col justify-between relative group overflow-hidden"
          >
            <img
              src={BG1_TEXTURE}
              alt=""
              className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${card.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-semibold block">
                    {card.subtitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white/90">
                    {card.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
