import Link from "next/link";
import Image from "next/image";
import ActionButton from "./ActionButton";

export default function CredentialsCard() {
  return (
    <div className="shadow-box p-6 flex flex-col justify-between relative group h-full overflow-hidden">
      <img
        src="/icons/bg1.avif"
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <Link href="/about" className="overlay-link" aria-label="Go to About page" />

      {/* Signature Photo Visual - Full Width & Original White Color */}
      <div className="w-full flex-1 min-h-[140px] sm:min-h-[160px] rounded-2xl overflow-hidden border border-white/10 relative z-10 shadow-lg group-hover:border-white/20 transition-all duration-500 my-2">
        <Image
          src="/singnature.png"
          alt="Rakesh Choudhary Signature"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between mt-4 z-10">
        <div>
          <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-zinc-500 font-medium">
            CREDENTIALS
          </span>
          <h2 className="text-xl font-bold text-white mt-1">
            More About Me
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
