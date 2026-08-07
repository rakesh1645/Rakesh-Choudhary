import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-8 pb-12 px-4 max-w-7xl mx-auto border-t border-white/5 mt-10">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm sm:text-base font-medium tracking-widest text-zinc-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                MY PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs font-mono text-zinc-500 mt-2">
          © {new Date().getFullYear()} Rakesh Choudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
