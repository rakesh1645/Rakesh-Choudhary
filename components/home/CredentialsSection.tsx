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

      {/* Handwritten Signature Visual from public/singnature.png */}
      <div className="w-full flex-1 flex items-center justify-center my-2 relative z-10 py-2">
        <div className="relative w-full max-w-[200px] h-[75px] sm:h-[85px] flex items-center justify-center">
          <Image
            src="/singnature.png"
            alt="Rakesh Choudhary Signature"
            fill
            sizes="(max-width: 768px) 180px, 220px"
            className="object-contain invert grayscale brightness-200 contrast-125 mix-blend-screen group-hover:scale-105 transition-all duration-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            priority
          />
        </div>
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
