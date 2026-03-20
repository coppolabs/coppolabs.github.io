import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Mic, Layout } from "lucide-react";

const talks = [
  {
    title: "Online Balanced and Staggered Routing in AMoD Systems",
    event: "TSL Conference, MIT (accepted)",
    year: "Jul 2026",
    type: "talk",
  },
  {
    title: "Integrated Balanced and Staggered Routing in AMoD Systems",
    event: "JOPT Conference, Montréal, Canada",
    year: "May 2025",
    type: "talk",
  },
  {
    title: "Integrated Balanced and Staggered Routing in AMoD Systems: Preliminary Results",
    event: "OR Conference, Munich, Germany",
    year: "Sep 2024",
    type: "talk",
  },
  {
    title: "Data-driven Intermodal Autonomous Mobility: Operations and Control",
    event: "JADS Symposium, London, UK",
    year: "Nov 2023",
    type: "poster",
  },
  {
    title: "Staggered Routing in Autonomous Mobility-on-Demand Systems",
    event: "TSL Conference, Chicago, USA",
    year: "Jul 2023",
    type: "talk",
  },
  {
    title: "Staggered Routing in Autonomous Mobility-on-Demand Systems: Preliminary Results",
    event: "EURO Conference, Helsinki, Finland",
    year: "Jul 2022",
    type: "talk",
  },
];

const TalksSection = () => (
  <SectionWrapper id="talks" surface>
    <SectionTitle>Talks & Posters</SectionTitle>
    <div className="space-y-4">
      {talks.map((talk, i) => {
        const Icon = talk.type === "poster" ? Layout : Mic;

        return (
          <div key={i} className="flex items-start gap-3">
            <Icon size={16} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs font-sans uppercase tracking-wider text-foreground/50">
                {talk.year}
              </p>

              <p className="font-sans font-medium text-foreground text-sm leading-snug">
                {talk.title}
              </p>

              <p className="text-sm text-meta font-sans">
                {talk.event}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default TalksSection;
