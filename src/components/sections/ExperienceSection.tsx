import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    position: "Doctoral Researcher (PhD Candidate)",
    org: (
      <>
        Technical University of Munich (TUM), School of Management, supervised by{" "}
        <a
          href="https://scholar.google.de/citations?user=umGuS18AAAAJ&hl=it&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Prof. Maximilian Schiffer
        </a>
      </>
    ),
    dates: "2022 – Present",
    bullets: [
      "Develop optimization and learning-augmented methods for spatiotemporal coordination in autonomous mobility-on-demand systems, combining mathematical programming, metaheuristics, and machine learning, with a focus on balanced and staggered routing for congestion mitigation.",
      "Designed and implemented large-scale experimental pipelines (Julia/Python/C++) to train, evaluate, and validate these methods, supporting publications in leading operations research journals.",
      "Teaching Assistant, guiding student teams in developing solutions to complex transportation problems.",
      "Supervised several Master’s theses on extensions of routing and optimization models.",
      "Presented research at international conferences, including TSL 2023 in Chicago."
    ]
  },
  {
    position: "Visiting Researcher",
    org: (
      <>
        Polytechnique Montréal, hosted by{" "}
        <a
          href="https://scholar.google.de/citations?hl=it&user=CilK624AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Prof. Michel Gendreau
        </a>
      </>
    ),
    dates: "2025",
    bullets: [
      "Conducted collaborative research on large-scale transportation optimization within a leading OR group.",
      "Presented at international conferences and participated in local seminars.",
      "Expanded international collaborations within the operations research community."
    ]
  },
  {
    position: "Research Engineer – STEAM Project (Semi-Flexible Transit)",
    org: "Technical University of Munich",
    dates: "2023 – 2024",
    bullets: [
      "Implemented and evaluated algorithms for real-time semi-flexible bus routing using real-world mobility data.",
      "Designed and conducted large-scale experiments to assess system performance under dynamic demand.",
      "Participated in field trials, collecting and processing GPS data to evaluate operational outcomes."
    ]
  },
  {
    position: "Research Assistant",
    org: (
      <>
        Università degli Studi di Napoli Federico II, supervised by{" "}
        <a
          href="https://scholar.google.de/citations?hl=it&user=xO0lRJIAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Prof. Franco Garofalo
        </a>
      </>
    ),
    dates: "2020 – 2021",
    bullets: [
      "Collaborated on research in network dynamical systems following Master’s thesis work.",
      "Contributed to a publication in IEEE Control Systems Letters."
    ]
  }
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" surface>
    <SectionTitle>Experience</SectionTitle>
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-6 border-l-2 border-border">
          <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
          <p className="text-xs font-sans uppercase tracking-wider text-foreground/50 mb-1">
            {exp.dates}
          </p>

          <h4 className="font-sans text-justify font-semibold text-foreground">
            {exp.position}
          </h4>

          <p className="text-sm text-meta/80 font-sans text-justify mb-2">
            {exp.org}
          </p>
          <ul className="space-y-1">
            {exp.bullets.map((b, j) => (
              <li
                key={j}
                className="flex gap-2 text-sm text-foreground/70 font-sans leading-relaxed"
              >
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-justify">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;