import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { MapPin } from "lucide-react";

const interests = [
  "Combinatorial Optimization",
  "Machine Learning",
  "Learning-Augmented Optimization",
  "Dynamic Routing",
  "Mobility-on-Demand Systems",
  "Stochastic Optimization",
  "Network Optimization",
  "Intelligent Transportation Systems",
];

const AboutSection = () => (
  <SectionWrapper id="about" surface>
    <SectionTitle>About Me</SectionTitle>

    <div className="">
      <div className="-mt-4 mb-4 flex items-center gap-2 text-sm text-foreground/60 font-sans">
        <MapPin size={14} />
        Munich, Germany
      </div>

      <p className="text-sm text-foreground/70 font-sans mb-4">
        Born in ’96 and raised in Italy, I bring an international perspective shaped by experiences in Portugal, Canada, and Germany.
      </p>

      <div className="space-y-4 text-foreground/80 font-sans leading-relaxed text-justify">
        <p>
          I am a Ph.D. student in Operations Research at the Technical University of Munich, working at the intersection of machine learning and combinatorial optimization. My research focuses on large-scale, dynamic routing problems, with a particular interest in mobility-on-demand systems and congestion-aware decision-making.
        </p>
        <p>
          I design learning-augmented optimization methods that enable systems to anticipate future demand and coordinate decisions under uncertainty. My work combines algorithmic modeling, data-driven learning, and scalable optimization techniques to bridge the gap between theoretical models and real-world deployment.
        </p>
        <p>
          More broadly, I am interested in how intelligent decision systems can improve the efficiency and sustainability of complex infrastructures. I enjoy building end-to-end systems—from modeling and algorithm design to experimentation and visualization—that make these ideas concrete and impactful.
        </p>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-sm font-sans font-semibold text-foreground/60 uppercase tracking-wider mb-3">
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
        Outside research, I am involved in music projects as the frontman of a rock band, where I enjoy writing, performing, and connecting with audiences.
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;