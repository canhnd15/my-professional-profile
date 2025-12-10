import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <main className="relative max-w-4xl mx-auto px-6">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        
        {/* Footer */}
        <footer className="py-12 border-t border-border text-center">
          <p className="font-mono text-sm text-muted-foreground">
            © 2024 Nguyen Duc Canh. Ha Noi, Vietnam.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
