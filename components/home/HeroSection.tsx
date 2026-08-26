"use client";

import Link from "next/link";
import Image from "next/image";
import ActionButton from "../common/ActionButton";
import Magnetic from "../common/Magnetic";
import { motion } from "framer-motion";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function HeroSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="shadow-box p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative group h-full overflow-hidden transition-all duration-500 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(129,140,248,0.1)] min-h-[220px]"
    >
      {/* Soft Light Indigo Gradient Backdrop on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-zinc-950 to-purple-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Background Texture */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      <Link href="/about" className="overlay-link" aria-label="About Rakesh Choudhary" />

      {/* Profile Photo Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-full md:w-1/2 aspect-[1/1] rounded-[24px] overflow-hidden relative z-10 border border-white/10 shadow-xl flex-shrink-0 transition-all duration-500 mx-auto md:mx-0"
      >
        <Image
          src="/pic1.png"
          alt="Rakesh Choudhary"
          width={1920}
          height={1080}
          priority
          quality={100}
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Profile Info Details Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full z-10 py-1 my-auto">
        <div className="flex flex-col gap-2 my-auto">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[11px] tracking-[0.2em] text-indigo-300/80 font-normal"
          >
            Full Stack Engineer
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/85 tracking-tight group-hover:text-white transition-colors"
          >
            Rakesh Choudhary
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-1.5 mt-3 text-xs sm:text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-pink-300/70 font-normal">✦</span>
              <span>React.js / Next.js / Node.js / Express.js</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-300/70 font-normal">✦</span>
              <span>MongoDB / MySQL</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="flex items-center justify-end w-full mt-4 interactive relative z-20"
        >
          <Magnetic strength={0.3}>
            <div>
              <ActionButton />
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </motion.div>
  );
}
