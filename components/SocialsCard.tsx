import Link from "next/link";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./Icons";
import ActionButton from "./ActionButton";

export default function SocialsCard() {
  return (
    <div className="about-profile-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden">
      <img src="/icons/bg1.avif" alt="" className="bg-img absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none" />

      <Link href="/contact" className="overlay-link" aria-label="Go to contact page" />

      {/* Inner profile icons shadow-box container */}
      <div className="inner-profile-icons shadow-box w-full py-4 rounded-3xl bg-zinc-900/60 border border-white/10 flex items-center justify-around gap-3 px-4 relative z-10">
        <a
          href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedln w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30 hover:scale-110 transition-all z-20 shadow-md"
          title="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <a
          href="https://www.youtube.com/@codewithrc"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30 hover:scale-110 transition-all z-20 shadow-md"
          title="YouTube"
        >
          <YoutubeIcon className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/rakesh1645"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30 hover:scale-110 transition-all z-20 shadow-md"
          title="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between mt-6 z-10">
        <div className="infos">
          <h4 className="text-[11px] uppercase font-mono tracking-[0.2em] text-zinc-500 font-medium">Let's Connect</h4>
          <h2 className="text-xl font-bold text-white mt-1">My Social Profiles</h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
