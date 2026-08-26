"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Magnetic from "../common/Magnetic";
import { motion } from "framer-motion";

export default function ContactHeaderSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between w-full"
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
      <span className="text-xs font-mono text-zinc-500 tracking-widest">
        Get In Touch
      </span>
    </motion.div>
  );
}
