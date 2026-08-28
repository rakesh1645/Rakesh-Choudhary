import Link from "next/link";
import Image from "next/image";
import ActionButton from "../common/ActionButton";
import { BG1_TEXTURE } from "@/constants/imageassets";

export default function CredentialsSection() {
  return (
    <div className="about-blog-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden transition-all duration-500 hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]">
      {/* Deep Midnight Indigo & Purple Aurora Glow Backdrop on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 27, 75, 0.85) 0%, rgba(15, 15, 18, 0.95) 50%, rgba(88, 28, 135, 0.75) 100%)",
        }}
      />

      {/* Texture image */}
      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      <Link
        href="/about"
        className="overlay-link"
        aria-label="Go to About Me & Credentials page"
      />

      {/* Signature Photo Visual - Full Width & Original White Color */}
      <div className="w-full flex-1 min-h-[140px] sm:min-h-[160px] rounded-2xl overflow-hidden border border-white/10 relative z-10 shadow-lg group-hover:border-white/20 transition-all duration-500 my-2">
        <Image
          src="/singnature.png"
          alt="Rakesh Choudhary Signature"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between z-10 mt-2">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-indigo-300 transition-colors font-medium">
            CREDENTIALS
          </span>
          <h2 className="text-xl font-bold text-white/85 group-hover:text-white mt-0.5 transition-colors">
            More About Me
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
