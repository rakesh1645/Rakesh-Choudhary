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

      {/* Signature Photo Visual */}
      <div className="w-full h-36 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-white/15 transition-colors z-10 p-4">
        <div className="relative w-full h-full">
          <Image
            src="/singnature.png"
            alt="Rakesh Choudhary Signature"
            className="object-cover"
          />
        </div>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between mt-6 z-10">
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
