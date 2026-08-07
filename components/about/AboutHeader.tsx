import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { PROFILE_IMAGE, BG1_TEXTURE } from "@/constants/imageassets";

export default function AboutHeader() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-white/10 px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="text-xs tracking-widest text-zinc-500 font-normal">
          Credentials & Summary
        </span>
      </div>

      {/* Top Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Square Photo Card */}
        <div className="md:col-span-5 shadow-box p-6 flex items-center justify-center relative group min-h-[360px]">
          <img
            src={BG1_TEXTURE}
            alt=""
            className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="w-full h-full min-h-[300px] rounded-[28px] overflow-hidden border border-white/10 relative shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={PROFILE_IMAGE}
              alt="Rakesh Choudhary"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: ✴ Self-Summary ✴ + Bio Box Card */}
        <div className="md:col-span-7 flex flex-col justify-between gap-4">
          {/* Title with Starburst Icons on BOTH SIDES in Light Font Weight */}
          <div className="flex items-center justify-center gap-3 select-none py-1">
            <span className="text-3xl sm:text-4xl text-zinc-400 font-light">✴</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white/85">
              Self-Summary
            </h1>
            <span className="text-3xl sm:text-4xl text-zinc-400 font-light">✴</span>
          </div>

          {/* Bio Box Card */}
          <div className="shadow-box p-8 flex flex-col justify-between relative group flex-1">
            <img
              src={BG1_TEXTURE}
              alt=""
              className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />

            <div className="flex flex-col gap-3 relative z-10 my-auto">
              <Sparkles className="w-6 h-6 text-zinc-400 group-hover:text-pink-400/80 group-hover:rotate-12 transition-all duration-300" />
              
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/85">
                Rakesh Choudhary
              </h2>

              <p className="text-zinc-300/90 text-sm sm:text-base font-normal leading-relaxed font-sans mt-1">
                Full Stack Engineer with 2+ years of hands-on experience building scalable, production-grade web applications using React.js, Next.js, Node.js, and TypeScript across EdTech, travel, and e-commerce domains. Driven by clean code and real-world impact. Always smiling :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
