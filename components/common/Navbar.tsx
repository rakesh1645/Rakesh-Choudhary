"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Welcome to Rakesh Choudhary's Interactive Terminal CLI v2.0",
    "Type 'help' to view available commands.",
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = "";
    if (cmd === "help") {
      output =
        "Available commands: 'about', 'skills', 'projects', 'contact', 'clear', 'sudo'";
    } else if (cmd === "about") {
      output =
        "Rakesh Choudhary — Full Stack Engineer with 2+ years experience in React, Next.js, Node.js, MongoDB & MySQL.";
    } else if (cmd === "skills") {
      output =
        "Tech Stack: React.js, Next.js, TypeScript, Node.js, Express, MongoDB, MySQL, Tailwind CSS, Git, Vercel.";
    } else if (cmd === "projects") {
      output =
        "1. Visuti Career (visuticareer.com) | 2. Roodraksh Real Estate (roodraksh.co.in) | 3. Phintex Power (phintexpower.com) | 4. Aladinn Tech (aladinntech.com) | 5. Muzspot (muzspot.com) | 6. JKJ Jewellers (jkjjewellers.in)";
    } else if (cmd === "contact") {
      output =
        "Email: rakeshchoudhary941397@gmail.com | Phone: +91 9024226200 | Location: Jaipur, India";
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else if (cmd === "sudo") {
      output =
        "Nice try! Access granted: You are now a certified VIP visitor 🎉";
    } else {
      output = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setTerminalLogs((prev) => [...prev, `> ${terminalInput}`, output]);
    setTerminalInput("");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "My Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full py-4 sm:py-6 md:py-8 px-4 sm:px-8 max-w-7xl mx-auto z-40 relative">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Header Title in Uppercase */}
          <Link
            href="/"
            className="inline-block group min-w-0 flex-shrink tracking-widest text-zinc-300 hover:text-white transition-colors font-mono uppercase"
          >
            <span className="logo-text">HELLO INDIA!</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium tracking-widest text-zinc-400">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors ${
                        isActive
                          ? "text-white font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Group: LinkedIn */}
          <div className="hidden sm:flex items-center gap-3">
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
          <div className="md:hidden mt-3 p-5 sm:p-6 rounded-3xl bg-zinc-950/95 border border-white/10 backdrop-blur-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-2xl text-sm sm:text-base font-semibold transition-colors ${
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
              className="linkedin-btn-glass justify-center w-full text-xs sm:text-sm font-semibold py-2.5 mt-1"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>Let's Connect!</span>
            </a>
          </div>
        )}
      </header>

      {/* Floating Bottom-Right Circular CLI Widget Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-2">
        <span className="hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono text-indigo-300 bg-zinc-950/90 border border-indigo-500/40 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md">
          CLI Terminal (⌘K)
        </span>

        <button
          onClick={() => setIsTerminalOpen(true)}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-zinc-950/90 border border-indigo-500/50 text-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:border-indigo-400 hover:bg-zinc-900 hover:scale-105 sm:hover:scale-110 transition-all duration-300 flex items-center justify-center relative backdrop-blur-xl group/btn cursor-pointer"
          aria-label="Open Interactive CLI Terminal"
          title="Open Interactive CLI Terminal (Ctrl + K)"
        >
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-400 animate-ping absolute -top-0.5 -right-0.5 opacity-75" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-indigo-400 absolute -top-0.5 -right-0.5 border border-zinc-950" />

          <Terminal className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      {/* Cyberpunk Terminal CLI Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-zinc-950 border border-indigo-500/40 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col font-mono text-sm">
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">
                  RAKESH_CLI_V2.0
                </span>
              </div>
              <button
                onClick={() => setIsTerminalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 h-72 overflow-y-auto flex flex-col gap-2 bg-zinc-950/90 text-indigo-300 leading-relaxed">
              {terminalLogs.map((log, i) => (
                <div key={i} className="break-words">
                  {log.startsWith(">") ? (
                    <span className="text-sky-300 font-semibold">{log}</span>
                  ) : (
                    <span className="text-zinc-300">{log}</span>
                  )}
                </div>
              ))}
            </div>

            <form
              onSubmit={handleTerminalSubmit}
              className="bg-zinc-900/90 border-t border-zinc-800 px-4 py-3 flex items-center gap-2"
            >
              <span className="text-indigo-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'skills', 'projects', 'about'..."
                autoFocus
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-zinc-600 font-mono text-sm"
              />
              <button
                type="submit"
                className="text-xs text-indigo-300 bg-indigo-950/80 border border-indigo-500/40 px-3 py-1.5 rounded-lg hover:bg-indigo-900/60 transition-colors"
              >
                RUN
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
