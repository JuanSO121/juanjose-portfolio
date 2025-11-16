import { Sidebar } from "@/components/portfolio/Sidebar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { FooterSection } from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      
      {/* Main content with left margin for sidebar on desktop */}
      <main className="lg:ml-80">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
