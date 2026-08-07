import React from "react";
import { Star } from "lucide-react";

export default function MarqueeSection() {
  const stack = [
    {
      name: "REACT.JS",
      icon: (
        <svg
          className="w-4 h-4 text-sky-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "NEXT.JS",
      icon: (
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.8 14.8L10.3 8.3v8.5H8.7V7.2h1.8l6.3 8.3v-8.3h1.6v9.6h-1.6z" />
        </svg>
      ),
    },
    {
      name: "NODE.JS",
      icon: (
        <svg
          className="w-4 h-4 text-emerald-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1-7.5 4.1-7.5-4.1L12 4.3zm-8 6.5l7 3.8v7.6l-7-3.8v-7.6zm9 11.4v-7.6l7-3.8v7.6l-7 3.8z" />
        </svg>
      ),
    },
    {
      name: "TYPESCRIPT",
      icon: (
        <svg
          className="w-4 h-4 text-blue-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3h18v18H3V3zm10.5 7.5h-2.2v7.5h-2.2v-7.5H6.8V9h6.7v1.5zm6.5 4.6c0 2.2-1.6 3.1-3.7 3.1-1.8 0-3.1-.7-3.6-1.5l1.6-1c.4.6 1.1 1 2 1 1 0 1.6-.4 1.6-1.1 0-.6-.4-.9-1.5-1.2-1.8-.5-3.3-1.1-3.3-3 0-2 1.6-3 3.5-3 1.5 0 2.7.6 3.2 1.4l-1.5 1c-.3-.5-.9-.9-1.7-.9-.9 0-1.4.4-1.4.9 0 .6.4.9 1.4 1.2 1.9.5 3.4 1.1 3.4 3.1z" />
        </svg>
      ),
    },
    {
      name: "MONGODB",
      icon: (
        <svg
          className="w-4 h-4 text-emerald-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2s-6 5.5-6 12a6 6 0 0 0 12 0c0-6.5-6-12-6-12zm.5 17.8v-4.3c1.8-.3 3-1.7 3-3.5a3.5 3.5 0 0 0-7 0c0 1.8 1.2 3.2 3 3.5v4.3c-2.3-.5-4-2.6-4-5.3 0-4.5 4.5-9 4.5-9s4.5 4.5 4.5 9c0 2.7-1.7 4.8-4 5.3z" />
        </svg>
      ),
    },
    {
      name: "MYSQL",
      icon: (
        <svg
          className="w-4 h-4 text-sky-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm-7 6c0-.66 3.13-2 7-2s7 1.34 7 2v2.5c0 .66-3.13 2-7 2s-7-1.34-7-2V11zm0 5c0-.66 3.13-2 7-2s7 1.34 7 2v2.5c0 .66-3.13 2-7 2s-7-1.34-7-2V16z" />
        </svg>
      ),
    },
    {
      name: "TAILWIND CSS",
      icon: (
        <svg
          className="w-4 h-4 text-cyan-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.1 2.4-1.5 3.8-1.1 1.2.3 2.1 1.2 3 2.2 1.6 1.7 3.5 3.6 7.4 3.6 3.3 0 5.5-1.6 6.6-4.9-1.1 1.1-2.4 1.5-3.8 1.1-1.2-.3-2.1-1.2-3-2.2-1.6-1.7-3.5-3.6-7.4-3.6zM5.4 13.6c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.1 2.4-1.5 3.8-1.1 1.2.3 2.1 1.2 3 2.2 1.6 1.7 3.5 3.6 7.4 3.6 3.3 0 5.5-1.6 6.6-4.9-1.1 1.1-2.4 1.5-3.8 1.1-1.2-.3-2.1-1.2-3-2.2-1.6-1.7-3.5-3.6-7.4-3.6z" />
        </svg>
      ),
    },
    {
      name: "VERCEL",
      icon: (
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      ),
    },
    {
      name: "GIT",
      icon: (
        <svg
          className="w-4 h-4 text-orange-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M2.6 10.6l8.8 8.8c.8.8 2.1.8 2.8 0l8.8-8.8c.8-.8.8-2.1 0-2.8l-8.8-8.8c-.8-.8-2.1-.8-2.8 0l-8.8 8.8c-.7.8-.7 2.1 0 2.8zm11.9 1.7c.4.4.6.9.6 1.5 0 .8-.5 1.5-1.2 1.8v2h-1.8v-2c-.7-.3-1.2-1-1.2-1.8 0-.6.2-1.1.6-1.5l-2-2c-.4.4-.9.6-1.5.6-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 .6-.2 1.1-.6 1.5l2 2c.4-.4.9-.6 1.5-.6s1.1.2 1.5.6l2-2c-.4-.4-.6-.9-.6-1.5 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2-.6 0-1.1-.2-1.5-.6l-2 2z" />
        </svg>
      ),
    },
  ];

  const marqueeItems = [...stack, ...stack, ...stack];

  return (
    <div className="shadow-box  w-full overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex items-center gap-6">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 text-zinc-300 font-bold text-sm    "
            >
              <span className="bg-zinc-800/80 px-3.5 py-1.5 rounded-xl border border-white/10 text-zinc-100 flex items-center gap-2.5 shadow-sm">
                {item.icon}
                <span>{item.name}</span>
              </span>
              <Star className="w-3.5 h-3.5 text-zinc-500 fill-zinc-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
