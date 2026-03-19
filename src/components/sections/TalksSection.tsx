import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Mic } from "lucide-react";

const talks = [
  { title: "[Talk Title 1]", event: "[Conference / University]", year: "[Year]" },
  { title: "[Talk Title 2]", event: "[Conference / University]", year: "[Year]" },
  { title: "[Talk Title 3]", event: "[Conference / University]", year: "[Year]" },
];

const TalksSection = () => (
  <SectionWrapper id="talks" surface>
    <SectionTitle>Talks & Teaching</SectionTitle>
    <div className="space-y-4">
      {talks.map((talk, i) => (
        <div key={i} className="flex items-start gap-3">
          <Mic size={16} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-sans font-medium text-foreground text-sm">{talk.title}</p>
            <p className="text-sm text-meta font-sans">{talk.event} · {talk.year}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TalksSection;
