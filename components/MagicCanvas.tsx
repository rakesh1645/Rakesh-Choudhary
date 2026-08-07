"use client";

import { useEffect, useRef } from "react";

export default function MagicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = (canvas.parentElement?.clientWidth || 400) * 2);
    let height = (canvas.height = (canvas.parentElement?.clientHeight || 230) * 2);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth * 2;
      height = canvas.height = canvas.parentElement.clientHeight * 2;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;
    const cols = 36;
    const rows = 22;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.035;

      const spacingX = width / cols;
      const spacingY = height / rows;

      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          const x = ix * spacingX + spacingX / 2;
          const baseY = iy * spacingY + spacingY / 2;

          const dist = Math.sin(ix * 0.22 + time) + Math.cos(iy * 0.22 + time);
          const y = baseY + dist * 14;

          const size = Math.max(1, (Math.sin(ix * 0.3 + iy * 0.3 + time) + 1.5) * 2.4);
          const opacity = Math.min(1, Math.max(0.15, (dist + 2) / 4));

          ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          if (ix < cols - 1) {
            const nextX = (ix + 1) * spacingX + spacingX / 2;
            const nextY = baseY + (Math.sin((ix + 1) * 0.22 + time) + Math.cos(iy * 0.22 + time)) * 14;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.35})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="about-services-box info-box shadow-box h-full w-full relative overflow-hidden flex items-center justify-center min-h-[220px] bg-gradient-to-br from-purple-950/90 via-zinc-950 to-pink-950/70 border border-purple-500/30">
      {/* Background bg1 image */}
      <img
        src="/icons/bg1.avif"
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      {/* Particle Canvas background */}
      <div className="magic-container absolute inset-0 w-full h-full z-0 flex items-center justify-center opacity-70">
        <div id="magic" className="w-full h-full flex items-center justify-center">
          <canvas
            ref={canvasRef}
            data-engine="three.js r185"
            className="w-full h-full block"
          />
        </div>
      </div>

      {/* Neon FUTURE IS NOW Typography Overlay */}
      <div className="relative z-10 text-center select-none py-6 pointer-events-none">
        <h2 
          className="text-4xl sm:text-5xl font-black tracking-widest text-transparent uppercase font-mono"
          style={{
            WebkitTextStroke: "1.5px #f43f5e",
            textShadow: "0 0 20px rgba(244, 63, 94, 0.7), 0 0 40px rgba(244, 63, 94, 0.4)",
          }}
        >
          FUTURE
        </h2>
        <h2 
          className="text-4xl sm:text-5xl font-black tracking-widest text-transparent uppercase font-mono mt-1"
          style={{
            WebkitTextStroke: "1.5px #ec4899",
            textShadow: "0 0 20px rgba(236, 72, 153, 0.7), 0 0 40px rgba(236, 72, 153, 0.4)",
          }}
        >
          IS NOW
        </h2>
      </div>
    </div>
  );
}
