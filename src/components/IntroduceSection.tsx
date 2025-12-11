import { Mail, Phone, Linkedin, Github, BookOpen, MapPin, Calendar, Briefcase } from "lucide-react";

const IntroduceSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 animate-slide-up">
        {/* Greeting */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Nguyen Duc <span className="text-gradient">Canh</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Software Engineer specializing in <span className="text-foreground font-semibold">Java</span> & <span className="text-foreground font-semibold">Backend Development</span> with expertise in building scalable payment systems and enterprise applications.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:canhnd15@gmail.com" 
              className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">canhnd15@gmail.com</span>
            </a>
            <a 
              href="tel:+84357660362" 
              className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">(+84) 357.660.362</span>
            </a>
            <div className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">Ha Noi, Vietnam</span>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Current Role</h3>
            </div>
            <p className="text-muted-foreground">Software Engineer</p>
            <p className="text-sm text-muted-foreground font-mono mt-1">Backend Development</p>
          </div>

          <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Experience</h3>
            </div>
            <p className="text-muted-foreground">Building scalable systems</p>
            <p className="text-sm text-muted-foreground font-mono mt-1">Payment & Enterprise Apps</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/davidnguyen15/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/canhnd15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://davidnguyenblog.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-secondary rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group"
              aria-label="Blog"
            >
              <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="card-gradient p-8 rounded-xl border border-border">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a passionate Software Engineer with a strong focus on backend development and system architecture. 
            My expertise lies in building robust, scalable applications using Java and modern frameworks like Spring Boot.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in developing payment systems and enterprise applications that handle high traffic and complex business logic. 
            When I'm not coding, I enjoy reading technical books, writing blog posts, and continuously learning new technologies to stay at the forefront of software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;

