import Link from "next/link";
import { Sparkles } from "lucide-react";
import ActionButton from "../common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function CTASection() {
  return (
    <div className="shadow-box p-8 w-full flex flex-col justify-between relative group h-full overflow-hidden transition-all duration-500 hover:border-white/40">
      {/* Holographic Iridescent Rainbow Gradient Background on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, #7c3aed 0%, #f472b6 22%, #fef08a 45%, #67e8f9 70%, #fef08a 100%)",
        }}
      />

      {/* Texture image overlay */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      <Link
        href="/contact"
        className="overlay-link"
        aria-label="Contact page"
      />

      <div className="flex items-center justify-between z-10">
        <Sparkles className="w-6 h-6 text-zinc-500 group-hover:text-white/80 group-hover:rotate-12 transition-all duration-300" />
      </div>

      <div className="my-6 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white/85 group-hover:text-white tracking-tight leading-tight transition-colors">
          Let's <br />
          work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 group-hover:from-purple-800 group-hover:to-fuchsia-600 transition-all">
            together.
          </span>
        </h2>
      </div>

      <div className="flex items-center justify-end z-10">
        <ActionButton />
      </div>
    </div>
  );
}
