import HeroSection from "./HeroSection";
import MarqueeSection from "./MarqueeSection";
import CredentialsSection from "./CredentialsSection";
import ProjectsSection from "./ProjectsSection";
import YouTubeSection from "./YouTubeSection";
import MagicSection from "./MagicSection";
import SocialsSection from "./SocialsSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";

export default function HomePageContent() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 w-full py-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
        <div className="lg:col-span-6 flex">
          <HeroSection />
        </div>
        <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
          <MarqueeSection />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            <CredentialsSection />
            <ProjectsSection />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
        <div className="md:col-span-3 flex">
          <YouTubeSection />
        </div>
        <div className="md:col-span-5 flex">
          <MagicSection />
        </div>
        <div className="md:col-span-4 flex">
          <SocialsSection />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
        <div className="lg:col-span-6 flex">
          <StatsSection />
        </div>
        <div className="lg:col-span-6 flex">
          <CTASection />
        </div>
      </div>
    </div>
  );
}
