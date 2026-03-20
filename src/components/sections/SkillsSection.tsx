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
      "Graph Neural Networks",
      "Contextual Modeling",
      "PyTorch",
      "Flux.jl",
      "InferOpt.jl",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Italian (native)",
      "English (proficient)",
      "German (intermediate)",
      "French (intermediate)",
      "Portuguese (intermediate)",
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" surface>
    <SectionTitle>Skills</SectionTitle>

    <div className="mt-6 space-y-5">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="grid grid-cols-[180px_1fr] gap-x-6 items-start"
        >
          <h4 className="text-sm font-sans font-semibold text-foreground pt-1">
            {group.category}
          </h4>

          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[13px] font-sans rounded-md border border-border bg-surface text-foreground"
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