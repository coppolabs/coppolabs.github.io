import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap } from "lucide-react";



const education = [
  {
    degree: "Ph.D. in Operations Research (Candidate)",
    institution: "**Technical University of Munich**, Germany",
    dates: "2022 – 2026",
    details: "Thesis: “Balanced and Staggered Routing in Autonomous Mobility-on-Demand Systems”",
  },
  {
    degree: "B.Sc. & M.Sc. in Industrial Engineering",
    institution: "**University of Naples Federico II**, Italy",
    dates: "2014 – 2021",
    details: "Graduated with highest distinction (110/110 cum laude) and special mention",
  },
  {
    degree: "EsaBac – Italian–French Dual Diploma",
    institution: "**Liceo Classico Europeo**, Naples, Italy",
    dates: "2009 – 2014",
    details: "Bilingual curriculum awarding both Italian and French diplomas",
  }
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionTitle>Education</SectionTitle>

    <div className="mt-8 space-y-8">
      {education.map((ed, i) => (
        <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border last:before:bottom-8">
          {/* Timeline Dot */}
          <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
            <h4 className="font-sans font-bold text-foreground text-base leading-tight">
              {ed.degree}
            </h4>
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary whitespace-nowrap">
              {ed.dates}
            </span>
          </div>

          <p className="text-sm text-foreground/90 font-sans mt-1">
            <span dangerouslySetInnerHTML={{ __html: ed.institution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </p>

          {ed.details && (
            <p className="text-sm text-foreground/60 font-sans mt-1 italic leading-relaxed">
              {ed.details}
            </p>
          )}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;