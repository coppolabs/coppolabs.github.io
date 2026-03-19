import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "[Degree Name – e.g., Ph.D. in Operations Research]",
    institution: "[University]",
    dates: "[Start – End]",
    thesis: "[Thesis Title]",
    advisor: "[Advisor Name]",
  },
  {
    degree: "[M.Sc. in ...]",
    institution: "[University]",
    dates: "[Start – End]",
    thesis: "[Thesis Title]",
    advisor: "[Advisor Name]",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" surface>
    <SectionTitle>Education</SectionTitle>
    <div className="space-y-6">
      {education.map((ed, i) => (
        <div key={i} className="flex gap-4 items-start">
          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <GraduationCap size={20} />
          </div>
          <div>
            <h4 className="font-sans font-semibold text-foreground">{ed.degree}</h4>
            <p className="text-sm text-meta font-sans">{ed.institution} · {ed.dates}</p>
            <p className="text-sm text-foreground/70 font-sans mt-1">
              Thesis: <span className="italic">{ed.thesis}</span>
            </p>
            <p className="text-sm text-foreground/70 font-sans">Advisor: {ed.advisor}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
