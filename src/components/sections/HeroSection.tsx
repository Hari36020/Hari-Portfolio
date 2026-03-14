import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Download } from "lucide-react";

interface HeroSectionProps {
  onViewWork: () => void;
  onDownloadResume: () => void;
}

const HeroSection = ({ onViewWork, onDownloadResume }: HeroSectionProps) => (
  <section className="min-h-screen flex items-center justify-center px-6 py-20">
    <div className="text-center max-w-4xl mx-auto animate-fade-in">
      <Avatar className="w-32 h-32 mx-auto mb-8 shadow-lg">
        <AvatarImage
          src="/lovable-uploads/03fd61d4-2f16-433f-be70-e260eff9f502.png"
          alt="Hari Krishna Sangakari"
          className="object-cover"
        />
        <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
          HK
        </AvatarFallback>
      </Avatar>
      <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
        Hi, I'm <span className="font-semibold">Hari Krishna Sangakari</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
        Full Stack Developer
      </p>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Delivering Clean Code & Seamless User Experiences Across Platforms
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          onClick={onViewWork}
          className="px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          🔍 View My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        <Button
          onClick={onDownloadResume}
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
        >
          📄 Download Resume
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
