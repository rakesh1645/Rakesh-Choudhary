import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import ActionButton from "@/components/common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function ProjectsGridSection() {
  const projects = [
    {
      title: "Visuti Career — Career Counselling Platform",
      category: "Full Stack SaaS Platform",
      company: "Keasbrain Technologies",
      description:
        "Built a multi-panel SaaS career counselling platform managing 5+ user roles (Admin & Student portals). Implemented role-based access control (RBAC), plan-gated premium college insights (seat matrix, allotment history), and zero-incident JWT & OTP authentication.",
      tags: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "MySQL"],
      liveUrl: "https://visuticareer.com/otp",
      githubUrl: "https://github.com/rakesh1645",
      featured: true,
      hoverGradient: "from-indigo-950/70 via-zinc-950 to-purple-950/70",
      borderColor: "hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]",
      tagBorder: "border-indigo-500/20 text-indigo-400 bg-indigo-950/60",
    },
    {
      title: "Stop Delay — Flight Compensation Platform",
      category: "Operations & Flight Claims SaaS",
      company: "Aladinn Digital Solutions",
      description:
        "Built an intuitive flight compensation claim experience using React.js. Integrated third-party flight data APIs, designed a multi-step claim submission form with client-side validation, and built animated hero visuals setting a reassuring tone.",
      tags: ["React.js", "Express.js", "REST APIs", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/rakesh1645",
      featured: false,
      hoverGradient: "from-purple-950/70 via-zinc-950 to-pink-950/70",
      borderColor: "hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
      tagBorder: "border-purple-500/20 text-purple-400 bg-purple-950/60",
    },
    {
      title: "JKJ Jewellers — Luxury E-Commerce Platform",
      category: "Enterprise E-Commerce SaaS",
      company: "E-Commerce Project",
      description:
        "Built product listing, cart, and checkout flows for an online jewelry store with smooth payment experiences. Implemented responsive UI, structured data SEO optimization, and fine-grained filterable product catalogs (category, metal, price range).",
      tags: ["Next.js", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
      liveUrl: "https://www.jkjjewellers.in/",
      githubUrl: "https://github.com/rakesh1645",
      featured: true,
      hoverGradient: "from-amber-950/70 via-zinc-950 to-rose-950/70",
      borderColor: "hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)]",
      tagBorder: "border-amber-500/20 text-amber-400 bg-amber-950/60",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`shadow-box p-8 flex flex-col justify-between relative group ${project.borderColor} transition-all duration-500 overflow-hidden`}
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
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className={`text-[11px] tracking-widest font-semibold border px-3 py-1 rounded-full ${project.tagBorder}`}>
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 text-[10px] text-indigo-300 bg-indigo-950/60 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Live
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold text-white/90 tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h2>

            <p className="text-xs text-zinc-400 mt-1">
              {project.company}
            </p>

            <p className="text-sm text-zinc-300 mt-3 leading-relaxed group-hover:text-zinc-200 transition-colors">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs text-zinc-400 bg-zinc-900/80 border border-white/10 px-2.5 py-1 rounded-md group-hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-4">
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/85 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Code</span>
              </a>
            </div>

            <a
              href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionButton />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
