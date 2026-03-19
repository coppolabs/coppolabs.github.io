import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { MapPin } from "lucide-react";

const interests = [
  "[Interest 1 – e.g., Combinatorial Optimization]",
  "[Interest 2 – e.g., Deep Reinforcement Learning]",
  "[Interest 3 – e.g., Supply Chain Analytics]",
];

const AboutSection = () => (
  <SectionWrapper id="about" surface>
    <SectionTitle>About Me</SectionTitle>
    <div className="space-y-4 text-foreground/80 font-sans leading-relaxed">
      <p>
        [Detailed background paragraph 1 – your academic journey, where you studied, what sparked your interest in OR and ML.]
      </p>
      <p>
        [Paragraph 2 – your research philosophy, what problems excite you, how you bridge theory and practice.]
      </p>
      <p>
        [Paragraph 3 – optional, broader motivation, collaborations, impact you aim for.]
      </p>
    </div>

    <div className="mt-8">
      <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-3">
        Research Interests
      </h3>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="px-3 py-1.5 text-sm font-sans bg-primary/10 text-primary rounded-full"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-8 p-4 rounded-lg bg-background border border-border">
      <p className="text-sm text-foreground/70 font-sans italic">
        🎸 [Personal note – e.g., "Outside the lab, I play guitar in a rock band and collect vintage vinyl records."]
      </p>
    </div>

    <div className="mt-4 flex items-center gap-2 text-sm text-meta font-sans">
      <MapPin size={14} />
      [City, Country]
    </div>
  </SectionWrapper>
);

export default AboutSection;
