import IntroduceSection from "@/components/IntroduceSection";

const Introduce = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <main className="relative">
        <IntroduceSection />
      </main>
    </div>
  );
};

export default Introduce;

