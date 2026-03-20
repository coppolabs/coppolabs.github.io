import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree:
      "Ph.D. Candidate, Business Analytics and Intelligent Systems",
    institution:
      "TUM School of Management, Technical University of Munich",
    dates: "2022 – 2026",
    details: (
      <>
        Professorship for Business Analytics and Intelligent Systems
        <br />
        Thesis: “Balanced and Staggered Routing in AMoD Systems”
      </>
    ),
  },
  {
    degree: "B.Sc. & M.Sc. in Industrial Engineering",
    institution:
      "Università degli Studi di Napoli Federico II, Naples, Italy",
    dates: "2014 – 2021",
    details: (
      <>
        Graduated with highest distinction (110/110 cum laude with special mention for academic excellence)
        <br />
        Thesis: “Reconstructing the Connectivity of a Network Diffusion Process from Temporal Traces”
      </>
    ),
  },
  {
    degree: "EsaBac – Italian–French Dual Diploma",
    institution:
      "Liceo Classico Europeo, Convitto Nazionale “Vittorio Emanuele II”, Naples, Italy",
    dates: "2009 – 2014",
    details:
      "Completed a bilingual program awarding both the Italian Esame di Stato and the French Baccalauréat.",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionTitle>Education</SectionTitle>

    <div className="mt-6 space-y-8">
      {education.map((ed, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <GraduationCap size={20} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-sans uppercase tracking-wider text-foreground/50 mb-1">
              {ed.dates}
            </p>

            <h4 className="font-sans font-semibold text-foreground text-base leading-snug">
              {ed.degree}
            </h4>

            <p className="text-sm text-meta font-sans mt-1">
              {ed.institution}
            </p>

            {ed.details && (
              <p className="text-sm text-foreground/70 font-sans mt-1 leading-relaxed">
                {ed.details}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;