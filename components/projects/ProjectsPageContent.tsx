import ProjectsHeaderSection from "./ProjectsHeaderSection";
import ProjectsGridSection from "./ProjectsGridSection";

export default function ProjectsPageContent() {
  return (
    <div className="flex flex-col gap-10 w-full animate-in fade-in duration-500 max-w-6xl mx-auto py-4">
      <ProjectsHeaderSection />
      <ProjectsGridSection />
    </div>
  );
}
