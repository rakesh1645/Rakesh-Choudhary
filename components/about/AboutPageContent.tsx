import AboutHeader from "./AboutHeader";
import AboutSkills from "./AboutSkills";
import AboutProjects from "./AboutProjects";
import AboutTimeline from "./AboutTimeline";
import AboutBottomRow from "./AboutBottomRow";

export default function AboutPageContent() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full animate-in fade-in duration-500 max-w-6xl mx-auto py-2 sm:py-4">
      {/* 1. Header with photo card and stacked title bio */}
      <AboutHeader />

      {/* 2. Comprehensive Skills & Tech Stack Matrix */}
      <AboutSkills />

      {/* 3. Featured Production Projects Showcase */}
      <AboutProjects />

      {/* 4. Side-by-side Experience and Education Timeline */}
      <AboutTimeline />

      {/* 5. Bottom 3 Bento Sections (Socials + CTA + Download Resume) */}
      <AboutBottomRow />
    </div>
  );
}
