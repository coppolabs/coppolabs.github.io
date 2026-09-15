import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

interface SkillCategory {
  categoryKey: string;
  skills: string[];
}

interface Language {
  nameKey: string;
  levelKey: string;
}

const coreTech: SkillCategory[] = [
  {
    categoryKey: "skills.categories.programming",
    skills: ["Python", "Julia", "C++", "TypeScript"],
  },
  {
    categoryKey: "skills.categories.optimization",
    skills: ["LP", "MILP", "Matheuristics", "Metaheuristics", "Gurobi", "CPLEX"],
  },
  {
    categoryKey: "skills.categories.machineLearning",
    skills: [
      "Supervised Learning",
      "Imitation Learning",
      "Deep Learning",
      "GNNs",
      "Contextual Modeling",
    ],
  },
];

const tools: string[] = ["Git", "Docker", "LaTeX", "React", "CI/CD"];

const languages: Language[] = [
  { nameKey: "skills.languages.italian.name", levelKey: "skills.languages.italian.level" },
  { nameKey: "skills.languages.english.name", levelKey: "skills.languages.english.level" },
  { nameKey: "skills.languages.german.name", levelKey: "skills.languages.german.level" },
  { nameKey: "skills.languages.french.name", levelKey: "skills.languages.french.level" },
  { nameKey: "skills.languages.portuguese.name", levelKey: "skills.languages.portuguese.level" },
];

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="skills" className="py-16 md:py-14">
      <div className="-mt-14 space-y-6">
        <SectionTitle>{t("skills.title")}</SectionTitle>

        <div className="divide-y divide-border/30 space-y-2">
          {/* Core Technical Capabilities */}
          {coreTech.map((group) => (
            <div
              key={group.categoryKey}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start pt-6 first:pt-0"
            >
              <h4 className="text-xs font-sans font-bold uppercase tracking-[0.14em] text-primary/80 pt-1.5">
                {t(group.categoryKey)}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border/80 bg-white px-3 py-1 text-[13px] font-sans font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Tools & Infrastructure Row */}
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start pt-6">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.14em] text-foreground/50 pt-1.5">
              {t("skills.categories.tools")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-border/80 bg-white px-3 py-1 text-[13px] font-sans font-medium text-slate-900 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Row */}
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start pt-6">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.14em] text-foreground/50 pt-1.5">
              {t("skills.categories.languages")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang.nameKey}
                  className="inline-flex items-center rounded-lg border border-border/80 bg-white px-3 py-1 text-[13px] font-sans text-slate-900 shadow-sm"
                >
                  <span className="font-medium">{t(lang.nameKey)}</span>
                  <span className="text-[11px] text-slate-500 font-normal italic font-sans ml-1.5">
                    ({t(lang.levelKey)})
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;