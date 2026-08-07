import { Star } from "lucide-react";

export default function MarqueeBanner() {
  const stack = [
    { name: "REACT.JS", category: "Frontend" },
    { name: "NEXT.JS", category: "Framework" },
    { name: "NODE.JS", category: "Backend" },
    { name: "TYPESCRIPT", category: "Language" },
    { name: "MONGODB", category: "Database" },
    { name: "MYSQL", category: "Database" },
    { name: "TAILWIND CSS", category: "Styling" },
    { name: "EXPRESS.JS", category: "Backend" },
    { name: "REST APIs", category: "Architecture" },
    { name: "GIT", category: "DevOps" },
    { name: "VERCEL", category: "Cloud" },
    { name: "AZURE", category: "Cloud" },
    { name: "GOOGLE ANTIGRAVITY", category: "AI Tool" },
    { name: "GITHUB COPILOT", category: "AI Tool" },
  ];

  const marqueeItems = [...stack, ...stack];

  return (
    <div className="shadow-box p-4 w-full overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex items-center gap-6">
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 text-zinc-300 font-bold text-sm sm:text-base uppercase tracking-wider select-none shrink-0">
              <span className="bg-zinc-800/80 px-3 py-1 rounded-md border border-white/10 text-zinc-100 flex items-center gap-2">
                {item.name}
              </span>
              <Star className="w-3.5 h-3.5 text-zinc-500 fill-zinc-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
