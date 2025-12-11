import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Trade Tracker",
    description: "A full-stack trading data tracker built with Spring Boot (Java 21), React (Vite + TypeScript), and PostgreSQL.",
    image: "https://davidnguyenblog.vercel.app/_next/image?url=%2Fstatic%2Fimg%2Fprojects%2Ftrade-tracker.png&w=1200&q=75",
    github: "https://github.com/canhnd15/stock-watcher",
    tech: ["Java 21", "Spring Boot", "React", "TypeScript", "PostgreSQL"]
  },
  {
    title: "E-commerce Microservice",
    description: "An e-commerce application built with microservices architecture featuring API Gateway, event-driven communication, and distributed tracing.",
    image: "https://davidnguyenblog.vercel.app/_next/image?url=%2Fstatic%2Fimg%2Fprojects%2Fe-commerce.png&w=1200&q=75",
    github: "https://github.com/canhnd15/ecommerce-app",
    tech: ["Java", "Spring Boot", "React.js", "Docker", "Kafka", "Redis", "MongoDB"]
  },
  {
    title: "Blog Microservice",
    description: "A blog application built with microservices architecture featuring API Gateway, service discovery, and distributed tracing.",
    image: "https://davidnguyenblog.vercel.app/_next/image?url=%2Fstatic%2Fimg%2Fprojects%2Fblog-microservices.png&w=1200&q=75",
    github: "https://github.com/canhnd15/BlogMicroservice",
    tech: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Zipkin"]
  },
  {
    title: "Easy Quizzer",
    description: "A quiz application for practicing cloud certifications (AWS, GCP, Azure) built with modern web technologies.",
    image: "https://davidnguyenblog.vercel.app/_next/image?url=%2Fstatic%2Fimg%2Fprojects%2Feasyquizer.png&w=1200&q=75",
    github: "https://easyquizer.vercel.app/",
    live: "https://easyquizer.vercel.app/",
    tech: ["React.js", "TailwindCSS", "Supabase"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20" id="projects">
      <p className="section-title text-center">// Personal Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Things I've <span className="text-gradient">Built</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group card-gradient rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-secondary">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
