import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Award } from "lucide-react";

const awards = [
  { name: "[Award Name 1]", year: "[Year]", description: "[Brief description]" },
  { name: "[Award Name 2]", year: "[Year]", description: "[Brief description]" },
  { name: "[Award Name 3]", year: "[Year]", description: "[Brief description]" },
];

const AwardsSection = () => (
  <SectionWrapper id="awards">
    <SectionTitle>Awards & Honors</SectionTitle>
    <div className="space-y-4">
      {awards.map((award, i) => (
        <div key={i} className="flex items-start gap-3">
          <Award size={16} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-sans font-medium text-foreground text-sm">
              {award.name} <span className="text-meta font-normal">· {award.year}</span>
            </p>
            <p className="text-sm text-foreground/70 font-sans">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AwardsSection;
