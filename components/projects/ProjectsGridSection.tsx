import { ExternalLink, Sparkles } from "lucide-react";
import ActionButton from "@/components/common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function ProjectsGridSection() {
  const projects = [
    {
      title: "Visuti Career — SaaS Career Counseling Platform",
      category: "Full Stack SaaS Platform",
      company: "Keasbrain Technologies",
      description:
        "Architected a Role-Based Access Control (RBAC) engine governing granular permissions for 5+ user roles. Implemented subscription payment workflows with Razorpay Webhooks. Secured the application utilizing HTTP-only session cookies and stateless JWT tokens.",
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "RBAC"],
      liveUrl: "https://visuticareer.com",
      featured: true,
      hoverGradient: "from-indigo-950/70 via-zinc-950 to-purple-950/70",
      borderColor: "hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]",
      tagBorder: "border-indigo-500/20 text-indigo-400 bg-indigo-950/60",
    },
    {
      title: "Muzspot — Hyperlocal Business Discovery Web App",
      category: "Web Application",
      company: "Aladinn Digital Solutions",
      description:
        "Designed multi-tenant portal infrastructure with isolated JWT authentication supporting 2 distinct user roles. Engineered client-side search debouncing and caching mechanisms, slashing redundant API network requests by 50%. Streamlined media delivery via video lazy loading.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://muzspot.com",
      featured: false,
      hoverGradient: "from-purple-950/70 via-zinc-950 to-pink-950/70",
      borderColor: "hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
      tagBorder: "border-purple-500/20 text-purple-400 bg-purple-950/60",
    },
    {
      title: "Roodraksh — Premier Real Estate Web Platform",
      category: "Real Estate Platform",
      company: "Roodraksh Group",
      description:
        "Architected and developed a modern real estate platform featuring interactive property discovery, high-resolution visual tours, and automated lead capture pipelines. Optimized client-side rendering and asset delivery for seamless mobile browsing.",
      tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "Framer Motion"],
      liveUrl: "https://roodraksh.co.in/",
      featured: true,
      hoverGradient: "from-emerald-950/70 via-zinc-950 to-teal-950/70",
      borderColor: "hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]",
      tagBorder: "border-emerald-500/20 text-emerald-400 bg-emerald-950/60",
    },
    {
      title: "Aladinn Tech — Digital Solutions & Agency Portal",
      category: "Corporate Tech Platform",
      company: "Aladinn Digital Solutions",
      description:
        "Engineered the official digital presence and service platform for Aladinn Tech. Built scalable modular components, optimized Core Web Vitals to 90+, and streamlined service inquiries with integrated client communication flows.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization", "Web Vitals"],
      liveUrl: "https://www.aladinntech.com/",
      featured: true,
      hoverGradient: "from-cyan-950/70 via-zinc-950 to-blue-950/70",
      borderColor: "hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]",
      tagBorder: "border-cyan-500/20 text-cyan-400 bg-cyan-950/60",
    },
    {
      title: "Phintex Power — Industrial Energy & Power Systems Platform",
      category: "Industrial Web Platform",
      company: "Phintex Power",
      description:
        "Crafted a seamless, high-performance UI/UX design for Phintex Power and engineered interactive, fluid animations. Built responsive multi-category industrial equipment showcases, intuitive inquiry funnels, and optimized component architectures for superior user engagement.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Animations", "UI/UX"],
      liveUrl: "https://www.phintexpower.com/",
      featured: true,
      hoverGradient: "from-amber-950/70 via-zinc-950 to-orange-950/70",
      borderColor: "hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]",
      tagBorder: "border-amber-500/20 text-amber-400 bg-amber-950/60",
    },
    {
      title: "JKJ Jewellers — Luxury E-Commerce Platform",
      category: "Enterprise E-Commerce SaaS",
      company: "E-Commerce Project",
      description:
        "Shipped an end-to-end luxury e-commerce experience with dynamic multi-attribute product filtering and integrated payment checkout. Optimized Core Web Vitals (LCP/FCP) through Next.js responsive image formats. Structured comprehensive product schemas (JSON-LD).",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://jkjjewellers.in",
      featured: true,
      hoverGradient: "from-amber-950/70 via-zinc-950 to-rose-950/70",
      borderColor: "hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)]",
      tagBorder: "border-amber-500/20 text-amber-400 bg-amber-950/60",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`shadow-box p-5 sm:p-8 flex flex-col justify-between relative group ${project.borderColor} transition-all duration-500 overflow-hidden`}
        >
          {/* Dynamic Background Hover Gradient Backdrop */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
          />

          {/* Background Texture */}
          <img
            src={BG1_TEXTURE}
            alt=""
            className="bg-img absolute inset-[#0f0f0f] w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <span className={`text-[10px] sm:text-[11px] tracking-widest font-semibold border px-2.5 sm:px-3 py-1 rounded-full ${project.tagBorder}`}>
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 text-[10px] text-indigo-300 bg-indigo-950/60 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Live
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white/90 tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h2>

            <p className="text-xs text-zinc-400 mt-1">
              {project.company}
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 sm:mt-3 leading-relaxed group-hover:text-zinc-200 transition-colors">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] sm:text-xs text-zinc-400 bg-zinc-900/80 border border-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md group-hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-4">
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/85 bg-indigo-600 hover:bg-indigo-500 px-3.5 sm:px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <ActionButton />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
