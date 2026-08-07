import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 max-w-6xl mx-auto mt-12">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        {/* Navigation links matching screenshot 2 */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs font-mono tracking-widest text-zinc-500 uppercase">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors">
                MY PROJECTS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
