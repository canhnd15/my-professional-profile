import { MapPin } from "lucide-react";

const experiences = [
  {
    company: "Newwave Solutions",
    position: "Back-end Developer & Team Lead",
    period: "08/2024 – Present",
    location: "Ha Noi, VN",
    description: "E-commerce and document management system for German clients",
    highlights: [
      "Designed and implemented APIs with payment platform integration (FinAPI)",
      "Architected system components, optimized APIs and database queries for high performance",
      "Led back-end team, mentoring members and driving technical decisions",
      "Direct client communication for task planning and issue resolution"
    ],
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "AWS S3", "Angular 18", "KeyCloak", "gRPC"]
  },
  {
    company: "VNPT Electronic Payment JSC",
    position: "Back-end Developer",
    period: "09/2022 – 04/2024",
    location: "Ha Noi, VN",
    description: "MegaPay payment gateway handling ATM, Credit Card, E-wallet & BNPL",
    highlights: [
      "Integrated Buy Now Pay Later with Kredivo and Home Credit",
      "Developed e-wallet payment method integrating MoMo",
      "Optimized transaction reports for internal management",
      "Code review and team support, reporting to Korean managers"
    ],
    tech: ["Java 8", "Spring Boot", "Spring Batch", "OracleDB", "Apache Kafka", "React.js"]
  },
  {
    company: "Vietants Digital Transformation JSC",
    position: "Back-end Developer",
    period: "03/2021 – 08/2022",
    location: "Ha Noi, VN",
    description: "PostPay E-wallet for Vietnam Post postmen and collaborators",
    highlights: [
      "Built APIs for mobile apps and front-end teams",
      "Integrated with core banking for payment, deposit and withdrawal",
      "Connected third-party services (electricity, water, VNPT postpaid)",
      "Designed report queries for state banks and accounting"
    ],
    tech: ["Java 11", "Spring Boot", "Spring Cloud Gateway", "MariaDB", "Redis", "Docker", "Elasticsearch"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20" id="experience">
      <p className="section-title text-center">// Work Experience</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Professional <span className="text-gradient">Journey</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className="relative pl-8 md:pl-16 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-6 top-2 -translate-x-1/2">
                <div className="timeline-dot" />
              </div>

              <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.position}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 italic">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
