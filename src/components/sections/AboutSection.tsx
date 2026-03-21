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
];

const AboutSection = () => (
  <SectionWrapper id="about" variant="band">
    <SectionTitle>About Me</SectionTitle>

    <div className="">
      <div className="-mt-4 mb-4 flex items-center gap-2 text-sm text-foreground/60 font-sans">
        <MapPin size={14} />
        Munich, Germany
      </div>

      <div className="space-y-4 text-foreground/80 font-sans leading-[1.65] text-justify">
        {/* <p>
          I am a Ph.D. candidate in Operations Research at the Technical University of Munich, working at the intersection of machine learning and combinatorial optimization. My research focuses on large-scale dynamic routing problems, with a particular emphasis on mobility-on-demand systems and congestion-aware decision-making.
        </p> */}

        <p>
          I began my academic journey in Naples, Italy, where I studied industrial engineering and worked as a research assistant on the control of complex networks under the supervision of{" "}
          <a
            href="https://scholar.google.de/citations?hl=it&user=xO0lRJIAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Prof. Franco Garofalo
          </a>. I then moved to Germany to pursue a Ph.D. at the Technical University of Munich under{" "}
          <a
            href="https://scholar.google.de/citations?user=umGuS18AAAAJ&hl=it&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Prof. Maximilian Schiffer
          </a>'s supervision, where I shifted my focus toward operations research and mobility systems.
        </p>

        <p>
          During my graduate studies, I became actively involved in the international OR community, presenting my work at major conferences and publishing in leading journals. I also worked as a visiting researcher at Polytechnique Montréal, where I collaborated with{" "}
          <a
            href="https://scholar.google.de/citations?hl=it&user=CilK624AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Prof. Michel Gendreau
          </a>, further broadening my perspective on transportation optimization. In parallel, I have been engaged in teaching and thesis supervision, as well as collaborating with industry partners on real-world mobility applications.
        </p>
      </div>
    </div>

    {/* <div className="mt-8">
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
    </div> */}

    <div className="mt-8 p-4 rounded-lg bg-background border border-border">
      <p className="text-xs font-sans uppercase tracking-wider text-foreground/50 mb-1">
        Fun fact
      </p>
      <p className="text-sm text-foreground/70 font-sans italic">
        Outside research, I am the frontman of a rock band, where I explore a more creative and expressive side of my personality.
        <br></br>
        I truly enjoy the process of writing music, performing and connecting with audiences.
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;