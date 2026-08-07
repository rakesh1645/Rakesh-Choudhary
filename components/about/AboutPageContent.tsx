import AboutHeader from "./AboutHeader";
import AboutTimeline from "./AboutTimeline";
import AboutBottomRow from "./AboutBottomRow";

export default function AboutPageContent() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 w-full animate-in fade-in duration-500 max-w-6xl mx-auto py-4">
      {/* 1. Header with photo card and stacked title bio */}
      <AboutHeader />

      {/* 2. Side-by-side Experience and Education Timeline */}
      <AboutTimeline />

      {/* 3. Bottom 3 Sections in ONE single row on LG screens (Socials + CTA + Download Resume) */}
      <AboutBottomRow />
    </div>
  );
}
