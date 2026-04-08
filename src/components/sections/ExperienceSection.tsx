import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    position: "Research Associate",
    org: (
      <>
        Technical University of Munich • Supervised by{" "}
        <a href="https://scholar.google.com/citations?user=umGuS18AAAAJ&hl=en" className="underline underline-offset-2 hover:text-primary transition-colors">
          Prof. Maximilian Schiffer
        </a>
      </>
    ),
    dates: "2022 – 2026",
    details: [
      "Conduct large-scale, data-driven experiments on real-world transportation networks using empirical taxi demand data",
      "Develop learning-augmented optimization methods for congestion-aware routing under uncertainty",
      "Build scalable experimental pipelines for simulation, evaluation, and visualization",
      "Publish in leading operations research journals and present at international conferences across Europe and North America",
      "Supervise Master's theses and contribute to teaching"
    ]
  },
  {
    position: "Visiting Researcher",
    org: (
      <>
        Polytechnique Montréal • Hosted by{" "}
        <a href="https://scholar.google.com/citations?user=CilK624AAAAJ&hl=en" className="underline underline-offset-2 hover:text-primary transition-colors">
          Prof. Michel Gendreau
        </a>
      </>
    ),
    dates: "2025",
    details: [
      "Collaborated on large-scale transportation optimization problems and metaheuristic design",
      "Contributed to international research collaborations across multiple operations research domains"
    ]
  },
  {
    position: "Research Engineer",
    org: (
      <>
        <a href="https://mcube-cluster.de/en/projekt/steam/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">
          STEAM Project
        </a>{" "}
        • Part of the{" "}
        <a href="https://mcube-cluster.de/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">
          MCube Cluster
        </a>
      </>
    ),
    dates: "2024",
    details: [
      "Developed optimization methods for designing semi-flexible transit routes",
      "Validated the approach through real-world experiments, reducing passenger waiting times and walking distances",
      "Conducted a field study with a user-facing booking platform, collecting and analyzing GPS telemetry data",
      "Identified and quantified inefficiencies in fixed-route transit systems using empirical mobility data"
    ]
  },
  {
    position: "Research Assistant",
    org: (
      <>
        University of Naples Federico II • Supervised by{" "}
        <a href="https://scholar.google.com/citations?user=xO0lRJIAAAAJ&hl=it" className="underline underline-offset-2 hover:text-primary transition-colors">
          Prof. Franco Garofalo
        </a>
      </>
    ),
    dates: "2021",
    details: [
      "Studied the controllability of complex network dynamical systems",
      "Co-authored publication in IEEE Control Systems Letters"
    ]
  }
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" variant="band">
    <SectionTitle>Experience</SectionTitle>
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-8 border-l border-border/60">
          {/* Timeline Dot */}
          <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-sm" />

          {/* Header Area */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 -mb-0 mt-1">
            <h4 className="font-sans font-bold text-foreground text-lg leading-tight">
              {exp.position}
            </h4>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary/80 whitespace-nowrap">
              {exp.dates}
            </span>
          </div>

          {/* Organization/Supervision */}
          <p className="text-sm font-sans font-medium text-foreground/80 mb-5 mt-1">
            {exp.org}
          </p>

          {/* Bulleted Details from CV */}
          <ul className="space-y-1">
            {exp.details.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70 font-sans leading-relaxed -mt-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;