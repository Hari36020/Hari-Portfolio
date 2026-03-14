import { toast } from "sonner";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}HariKrishnaSangakari_FullStackResume.pdf`;
  link.download = "HariKrishnaSangakari_FullStackResume.pdf";
  link.click();
  toast.success("Resume download started!");
};

const Index = () => (
  <div className="min-h-screen bg-background text-foreground font-sans">
    <HeroSection
      onViewWork={() => scrollToSection("projects")}
      onDownloadResume={handleResumeDownload}
    />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <CTASection
      onContact={() => scrollToSection("contact")}
      onDownloadResume={handleResumeDownload}
    />
    <ContactSection onDownloadResume={handleResumeDownload} />
    <FooterSection />
  </div>
);

export default Index;
