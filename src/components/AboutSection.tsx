import { GraduationCap, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <p className="section-title">// About Me</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Background & <span className="text-gradient">Interests</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="card-gradient p-6 rounded-xl border border-border animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Education</h3>
          </div>
          <p className="text-foreground font-medium">Posts and Telecommunications Institute of Technology</p>
          <p className="text-muted-foreground text-sm font-mono">Sep 2017 - May 2022</p>
        </div>

        {/* Achievement */}
        <div className="card-gradient p-6 rounded-xl border border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Achievement</h3>
          </div>
          <p className="text-foreground">
            <span className="text-primary font-medium">1st Prize</span> in IT industry writing competition on ITviec platform
          </p>
        </div>

        {/* Interests */}
        <div className="md:col-span-2 card-gradient p-6 rounded-xl border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Interests & Activities</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I believe reading is one of the best ways to acquire knowledge. I've studied 
            <span className="text-foreground font-medium"> Clean Code</span> and 
            <span className="text-foreground font-medium"> Effective Java</span>, 
            gaining practical insights that improve my development practices. Beyond tech, I enjoy psychology and history books. 
            I also love sharing knowledge through <span className="text-primary">blog writing</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
