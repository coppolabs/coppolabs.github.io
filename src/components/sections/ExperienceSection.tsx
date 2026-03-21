import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    position: "Doctoral Researcher (PhD Candidate)",
    org: (
      <>
        Technical University of Munich • Supervised by{" "}
        <a href="..." className="underline underline-offset-2 hover:text-primary transition-colors">
          Prof. Maximilian Schiffer
        </a>
      </>
    ),
    dates: "2022 – Present",
    summary: "Developing optimization and learning-augmented methods for congestion-aware autonomous mobility systems, integrating mathematical programming with large-scale experimental pipelines in Julia, Python, and C++."
  },
  {
    position: "Visiting Researcher",
    org: (
      <>
        Polytechnique Montréal • Hosted by{" "}
        <a href="..." className="underline underline-offset-2 hover:text-primary transition-colors">
          Prof. Michel Gendreau
        </a>
      </>
    ),
    dates: "2025",
    summary: "Collaborating with leading Operations Research groups on large-scale transportation optimization and international research initiatives."
  },
  {
    position: "Research Engineer – STEAM Project",
    org: (
      <>
        TUM • Part of the{" "}
        <a href="..." className="underline underline-offset-2 hover:text-primary transition-colors">
          MCube Cluster
        </a>
      </>
    ),
    dates: "2024",
    summary: "Designed real-time routing algorithms for semi-flexible transit systems using empirical GPS telemetry and large-scale computational benchmarks."
  },
  {
    position: "Research Assistant",
    org: (
      <>
        University of Naples Federico II • Supervised by{" "}
        <a href="..." className="underline underline-offset-2 hover:text-primary transition-colors">
          Prof. Franco Garofalo
        </a>
      </>
    ),
    dates: "2021",
    summary: "Researched network dynamical systems, resulting in a co-authored publication in IEEE Control Systems Letters."
  }
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" variant="band">
    <SectionTitle>Experience</SectionTitle>
    <div className="space-y-10">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-8 border-l border-border/60">
          {/* Minimalist Timeline Indicator */}
          <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-sm" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
            <h4 className="font-sans font-bold text-foreground text-lg leading-tight">
              {exp.position}
            </h4>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary/80 whitespace-nowrap">
              {exp.dates}
            </span>
          </div>

          <p className="text-sm font-sans font-medium text-foreground/80 mb-3">
            {exp.org}
          </p>

          <p className="text-sm text-foreground/60 font-sans leading-relaxed text-justify [hyphens:auto] [text-justify:inter-word]">
            {exp.summary}
          </p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);



export default ExperienceSection;