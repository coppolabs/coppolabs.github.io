import "../i18n";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TalksSection from "@/components/sections/TalksSection";
import AwardsSection from "@/components/sections/AwardsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="pt-24 min-h-screen bg-surface">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <SkillsSection />
    <ResearchSection />
    <AwardsSection />
    <TalksSection />
    <Footer />
  </main>
);

export default Index;