"use client";

import { useEffect, useRef } from "react";

export default function CursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Full-screen colorful micro-dots streaming upwards
    const numGridDots = 140;
    const gridDots: {
      xRatio: number;
      y: number;
      speed: number;
      size: number;
      hue: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < numGridDots; i++) {
      gridDots.push({
        xRatio: Math.random(),
        y: Math.random() * height,
        speed: Math.random() * 1.2 + 0.5,
        size: Math.random() * 1.2 + 0.4,
        hue: Math.random() < 0.65 ? 355 + Math.random() * 20 : 130 + Math.random() * 50,
        opacity: Math.random() * 0.75 + 0.25,
      });
    }

    // Ambient background circle nodes
    const ambientNodes = [
      { xRatio: 0.2, yRatio: 0.25, phase: 0, speed: 0.4 },
      { xRatio: 0.8, yRatio: 0.35, phase: 2, speed: 0.5 },
      { xRatio: 0.35, yRatio: 0.75, phase: 4, speed: 0.35 },
      { xRatio: 0.75, yRatio: 0.8, phase: 1.5, speed: 0.45 },
    ];

    const createRingParticles = (count = 100) => {
      const arr: {
        angle: number;
        speed: number;
        radiusOffset: number;
        size: number;
        hue: number;
        opacity: number;
      }[] = [];

      for (let i = 0; i < count; i++) {
        const isGreenSpeck = Math.random() < 0.12;
        arr.push({
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() * 0.018 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
          radiusOffset: (Math.random() - 0.5) * 20,
          size: Math.random() * 0.7 + 0.3,
          hue: isGreenSpeck ? 130 + Math.random() * 40 : 355 + Math.random() * 15,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      return arr;
    };

    const mainRing = createRingParticles(160);
    const nodeRings = ambientNodes.map(() => createRingParticles(70));

    let scrollYOffset = 0;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      // Upward grid streaming continuously
      scrollYOffset -= 0.8;
      const gridSize = 24;
      const startY = (scrollYOffset % gridSize) - gridSize;

      // 1. Draw Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.038)";
      ctx.lineWidth = 0.7;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = startY; y <= height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw micro dots at grid intersections
      ctx.fillStyle = "rgba(255, 255, 255, 0.09)";
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = startY; y <= height + gridSize; y += gridSize) {
          ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
        }
      }

      // 3. Render Giant Subtle Ambient Watermark Background Text
      ctx.save();
      const fontSize = Math.min(width * 0.12, 140);
      ctx.font = `900 ${fontSize}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1.5;
      
      const waterX = width / 2 + Math.sin(time * 0.5) * 20;
      const waterY = height * 0.45 + Math.cos(time * 0.5) * 15;
      ctx.strokeText("RAKESH CHOUDHARY", waterX, waterY);
      ctx.restore();

      // 4. Render Full-Screen Colorful Micro-Dots Streaming Upwards
      gridDots.forEach((dot) => {
        dot.y -= dot.speed;
        if (dot.y < -10) {
          dot.y = height + 10;
          dot.xRatio = Math.random();
        }

        const dotX = width * dot.xRatio;
        ctx.fillStyle = `hsla(${dot.hue}, 90%, 60%, ${dot.opacity})`;
        ctx.beginPath();
        ctx.arc(dotX, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Render Ambient Circles at Different Locations
      ambientNodes.forEach((node, nodeIdx) => {
        const nx = width * node.xRatio + Math.sin(time * node.speed + node.phase) * 35;
        const ny = height * node.yRatio + Math.cos(time * node.speed * 0.8 + node.phase) * 35;
        const nodeRadius = 60;

        const glow = ctx.createRadialGradient(nx, ny, 5, nx, ny, nodeRadius + 20);
        glow.addColorStop(0, "rgba(239, 68, 68, 0.08)");
        glow.addColorStop(0.6, "rgba(239, 68, 68, 0.02)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(nx, ny, nodeRadius + 20, 0, Math.PI * 2);
        ctx.fill();

        nodeRings[nodeIdx].forEach((p) => {
          p.angle += p.speed;
          const currentRadius = nodeRadius + p.radiusOffset + Math.sin(time * 2 + p.angle) * 4;
          const px = nx + Math.cos(p.angle) * currentRadius;
          const py = ny + Math.sin(p.angle) * currentRadius;

          ctx.fillStyle = `hsla(${p.hue}, 90%, 58%, ${p.opacity * 0.75})`;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // 6. Render Main Cursor Circle
      const baseRadius = 85;
      const radialGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        baseRadius + 40
      );
      radialGlow.addColorStop(0, "rgba(239, 68, 68, 0.14)");
      radialGlow.addColorStop(0.6, "rgba(239, 68, 68, 0.04)");
      radialGlow.addColorStop(1, "transparent");
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, baseRadius + 40, 0, Math.PI * 2);
      ctx.fill();

      mainRing.forEach((p) => {
        p.angle += p.speed;
        const currentRadius = baseRadius + p.radiusOffset + Math.sin(time * 2.5 + p.angle) * 6;
        const px = mouse.x + Math.cos(p.angle) * currentRadius;
        const py = mouse.y + Math.sin(p.angle) * currentRadius;

        ctx.fillStyle = `hsla(${p.hue}, 90%, 58%, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
