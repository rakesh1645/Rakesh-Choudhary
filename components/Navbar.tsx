"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "My Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full py-4 sm:py-6 md:py-8 px-4 sm:px-8 max-w-6xl mx-auto z-50 relative">
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        {/* Dotted Logo Style */}
        <Link 
          href="/" 
          className="text-lg sm:text-2xl md:text-3xl tracking-[0.12em] sm:tracking-[0.18em] font-light text-zinc-300 hover:text-white transition-colors font-mono uppercase whitespace-nowrap"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.1)" }}
        >
          HELLO INDIA!
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm sm:text-base font-normal transition-colors ${
                      isActive
                        ? "text-white font-medium"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* LinkedIn Connect Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn-glass text-xs sm:text-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span>Let's Connect!</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white flex-shrink-0"
        >
          {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 p-6 rounded-3xl bg-zinc-950/95 border border-white/10 backdrop-blur-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <a
            href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 linkedin-btn-glass justify-center w-full"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span>Let's Connect!</span>
          </a>
        </div>
      )}
    </header>
  );
}
