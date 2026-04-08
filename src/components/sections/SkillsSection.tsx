import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "Julia", "C++", "TypeScript"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "LaTeX", "Microsoft Office", "React"],
  },
  {
    category: "Optimization & OR",
    skills: ["LP", "MILP", "Matheuristics", "Metaheuristics", "Gurobi", "CPLEX"],
  },
  {
    category: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Imitation Learning",
      "Deep Learning",
      "GNNs",
      "Contextual Modeling",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Italian (native)",
      "English (fluent)",
      "German (conversational)",
      "French (conversational)",
      "Portuguese (conversational)",
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" variant="band" className="py-16 md:py-14">
    <div className="-mt-14 space-y-4">
      <SectionTitle>Skills</SectionTitle>
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start"
        >
          <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.14em] text-foreground/55 pt-1">
            {group.category}
          </h4>

          <div className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/80 bg-background/70 px-3 py-1.5 text-[13px] font-sans text-foreground/85 transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;