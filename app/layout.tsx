import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CursorBackground from "@/components/common/CursorBackground";
import CustomCursor from "@/components/common/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Rakesh Choudhary | Full Stack Engineer (React.js / Next.js / Node.js)",
  description:
    "Full Stack Engineer with 2+ years of experience building scalable, production-grade web applications using React.js, Next.js, Node.js, TypeScript, MongoDB, and MySQL.",
  keywords: [
    "Rakesh Choudhary",
    "Full Stack Engineer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Software Engineer Portfolio",
    "Jaipur India",
  ],
  authors: [
    { name: "Rakesh Choudhary", url: "mailto:rakeshchoudhary941397@gmail.com" },
  ],
  openGraph: {
    title: "Rakesh Choudhary | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in React.js, Next.js, Node.js, and TypeScript. View my portfolio of scalable web apps and SaaS platforms.",
    siteName: "Rakesh Choudhary Portfolio",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable}`}
    >
      <body className="bg-[#0f0f0f] text-zinc-100 min-h-screen flex flex-col antialiased font-sans">
        {/* Interactive Grid & Colorful Particle Cursor Ring Canvas */}
        <CursorBackground />
        
        {/* Custom Premium Cursor */}
        <CustomCursor />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
