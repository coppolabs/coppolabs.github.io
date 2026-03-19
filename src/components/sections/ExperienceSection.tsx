import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    position: "[Job Title 1]",
    org: "[Institution / Company]",
    dates: "[Start – End]",
    bullets: [
      "[Achievement / responsibility]",
      "[Impact / result]",
    ],
  },
  {
    position: "[Job Title 2]",
    org: "[Institution / Company]",
    dates: "[Start – End]",
    bullets: [
      "[Achievement / responsibility]",
      "[Impact / result]",
    ],
  },
  {
    position: "[Job Title 3]",
    org: "[Institution / Company]",
    dates: "[Start – End]",
    bullets: [
      "[Achievement / responsibility]",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionTitle>Experience</SectionTitle>
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-6 border-l-2 border-border">
          <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
          <h4 className="font-sans font-semibold text-foreground">{exp.position}</h4>
          <p className="text-sm text-meta font-sans">{exp.org}</p>
          <p className="text-xs text-meta font-sans mb-2">{exp.dates}</p>
          <ul className="list-disc list-inside space-y-1">
            {exp.bullets.map((b, j) => (
              <li key={j} className="text-sm text-foreground/70 font-sans">{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
