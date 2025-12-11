import { Mail, Phone, Linkedin, Github, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 pt-32">
      <div className="animate-slide-up text-center">
        <p className="font-mono text-primary text-sm mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Nguyen Duc <span className="text-gradient">Canh</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Software Engineer specializing in <span className="text-foreground">Java</span> & <span className="text-foreground">Backend Development</span> with expertise in building scalable payment systems and enterprise applications.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <a 
            href="mailto:canhnd15@gmail.com" 
            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">canhnd15@gmail.com</span>
          </a>
          <a 
            href="tel:+84357660362" 
            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">(+84) 357.660.362</span>
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://www.linkedin.com/in/davidnguyen15/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/canhnd15" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://davidnguyenblog.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="Blog"
          >
            <BookOpen className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
