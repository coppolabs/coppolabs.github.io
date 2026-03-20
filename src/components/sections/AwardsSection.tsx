import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Award } from "lucide-react";

const scholarships = [
  {
    name: "Bavaria–Quebec Student Mobility Program",
    year: "May 2025",
    description: "Awarded by the Bavarian Research Alliance (BayFOR)",
  },
  {
    name: "Academic Training Program Scholarship",
    year: "Nov 2024",
    description: "Awarded by the TUM School of Management",
  },
  {
    name: "Erasmus+ Scholarship",
    year: "Sep 2019",
    description: "Awarded by the European Commission",
  },
];

const AwardsSection = () => (
  <SectionWrapper id="awards">
    <SectionTitle>Awarded Scholarships</SectionTitle>

    <div className="space-y-4 mt-6">
      {scholarships.map((award, i) => (
        <div key={i} className="flex items-start gap-3">
          <Award size={16} className="text-primary mt-1 flex-shrink-0" />

          <div>
            <p className="text-xs font-sans uppercase tracking-wider text-foreground/50">
              {award.year}
            </p>

            <p className="font-sans font-medium text-foreground text-sm leading-snug">
              {award.name}
            </p>

            <p className="text-sm text-foreground/70 font-sans">
              {award.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AwardsSection;