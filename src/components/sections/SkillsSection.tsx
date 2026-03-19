import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const skillGroups = [
  { category: "Programming", skills: ["Python", "Julia", "C++", "R", "SQL"] },
  { category: "Optimization / OR", skills: ["Linear Programming", "MIP", "Column Generation", "Heuristics", "Gurobi", "CPLEX"] },
  { category: "ML / AI", skills: ["Deep Learning", "Reinforcement Learning", "Graph Neural Networks", "NLP"] },
  { category: "Tools & Frameworks", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Git", "LaTeX", "Docker"] },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle>Skills</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h4 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-3">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm font-sans bg-surface border border-border text-foreground/80 rounded-md"
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
