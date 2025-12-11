const skills = {
  "Languages & Frameworks": [
    "Java", "Spring Boot", "Spring MVC", "Spring Data JPA", 
    "Spring Security", "Spring Batch", "Spring Cloud Gateway",
    "Hibernate", "MyBatis"
  ],
  "Frontend": [
    "React.js", "Angular", "HTML5", "CSS", "TailwindCSS"
  ],
  "Databases": [
    "PostgreSQL", "MySQL", "MariaDB", "OracleDB", "Redis"
  ],
  "DevOps & Tools": [
    "Docker", "AWS", "Apache Kafka", "Jenkins", "GitLab CI/CD",
    "Elasticsearch", "Git", "Jira"
  ],
  "Architecture": [
    "Microservices", "RESTful API", "gRPC", "WebSocket",
    "Design Patterns", "SOLID", "TDD"
  ]
};

const SkillsSection = () => {
  return (
    <section className="py-20" id="skills">
      <p className="section-title text-center">// Technical Skills</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Areas of <span className="text-gradient">Expertise</span>
      </h2>
      
      <div className="grid gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
