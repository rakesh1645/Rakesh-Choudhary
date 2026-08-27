"use client";

import { useState } from "react";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function MagicSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "linear-gradient(135deg, #2e0538 0%, #120317 50%, #2d040f 100%)",
      }}
      className="about-services-box info-box shadow-box h-full w-full relative overflow-hidden flex items-center justify-center min-h-[240px] border border-purple-500/30 hover:border-fuchsia-400/80 hover:shadow-[0_0_60px_rgba(255,0,127,0.5)] group cursor-pointer p-6 transition-all duration-500"
    >
      {/* Background Texture */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      {/* Cyber Laser Scanline Overlay on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100 animate-pulse" : "opacity-0"
        }`}
      />

      {/* Crazy RGB Split Cyberpunk Glitch Typography on Hover */}
      <div className="relative z-10 text-center select-none py-4 sm:py-6 w-full pointer-events-none">
        <h2 
          className={`text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.12em] sm:tracking-[0.2em] text-transparent leading-tight transition-all duration-300 ${
            isHovered ? "scale-105 sm:scale-110 animate-[crazy-glitch_0.3s_infinite_linear]" : ""
          }`}
          style={{
            WebkitTextStroke: isHovered ? "2.2px #ff007f" : "1.8px #ff007f",
            textShadow: isHovered 
              ? "5px 0 #00f0ff, -5px 0 #ff007f, 0 0 35px #ff007f, 0 0 70px #a855f7" 
              : "0 0 20px rgba(255, 0, 127, 0.8), 0 0 40px rgba(255, 0, 127, 0.4)",
          }}
        >
          FUTURE
        </h2>

        <h2 
          className={`text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.12em] sm:tracking-[0.2em] text-transparent mt-2 sm:mt-3 leading-tight transition-all duration-300 ${
            isHovered ? "scale-105 sm:scale-110 animate-[crazy-glitch_0.25s_infinite_linear_reverse]" : ""
          }`}
          style={{
            WebkitTextStroke: isHovered ? "2.2px #00f0ff" : "1.8px #ff007f",
            textShadow: isHovered 
              ? "-5px 0 #ff007f, 5px 0 #00f0ff, 0 0 35px #00f0ff, 0 0 70px #ff007f" 
              : "0 0 20px rgba(255, 0, 127, 0.8), 0 0 40px rgba(255, 0, 127, 0.4)",
          }}
        >
          IS NOW
        </h2>
      </div>

      <style jsx>{`
        @keyframes crazy-glitch {
          0% {
            transform: scale(1.08) translate(0, 0);
            filter: hue-rotate(0deg);
          }
          20% {
            transform: scale(1.1) translate(-3px, 2px);
            filter: hue-rotate(90deg);
          }
          40% {
            transform: scale(1.06) translate(-2px, -2px);
            filter: hue-rotate(180deg);
          }
          60% {
            transform: scale(1.11) translate(3px, 1px);
            filter: hue-rotate(270deg);
          }
          80% {
            transform: scale(1.07) translate(2px, -1px);
            filter: hue-rotate(360deg);
          }
          100% {
            transform: scale(1.08) translate(0, 0);
            filter: hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
