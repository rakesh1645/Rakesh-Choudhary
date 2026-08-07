import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactHeaderSection() {
  return (
    <div className="flex items-center justify-between w-full">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-white/10 px-4 py-2 rounded-full"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
      <span className="text-xs font-mono text-zinc-500 tracking-widest">
        Get In Touch
      </span>
    </div>
  );
}
