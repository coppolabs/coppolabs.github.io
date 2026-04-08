import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { MapPin } from "lucide-react";
import flowVideo from "@/assets/manhattan_flow.mp4";

const AboutSection = () => (
  <SectionWrapper id="about" variant="band">
    <SectionTitle>About Me</SectionTitle>

    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Left Column: Text Content */}
      <div className="flex-1 max-w-none">
        <div className="-mt-4 mb-4 flex items-center gap-2 text-sm text-foreground/60 font-sans">
          <MapPin size={14} />
          Munich, Germany
        </div>

        <div className="space-y-4 text-foreground/80 font-sans leading-[1.65] text-justify break-words [hyphens:auto]">
          <p>
            I began my academic journey in Naples, Italy, where I studied industrial engineering and worked as a research assistant on the control of complex networks under the supervision of{" "}
            <a
              href="https://scholar.google.de/citations?hl=it&user=xO0lRJIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary transition-colors"
            >
              Prof. Franco Garofalo
            </a>. I then moved to Germany to pursue a Ph.D. at the Technical University of Munich under{" "}
            <a
              href="https://scholar.google.de/citations?user=umGuS18AAAAJ&hl=it&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary transition-colors"
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
              className="underline underline-offset-2 hover:text-primary transition-colors"
            >
              Prof. Michel Gendreau
            </a>, further broadening my perspective on transportation optimization. In parallel, I have been engaged in teaching and thesis supervision, as well as collaborating with industry partners on real-world mobility applications.
          </p>
        </div>
      </div>

      {/* Right Column: Visualization */}
      {/* Right Column: Visualization */}
      <div className="w-full md:w-56 flex-shrink-0 self-start">
        <div className="overflow-hidden rounded-xl border border-primary/10 shadow-md bg-muted/20 p-1.5">
          <div className="group grayscale hover:grayscale-0 transition-all duration-700">
            {/* Use relative positioning for the legend overlay */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <video
                src={flowVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110"
              />

              <div className="absolute bottom-2 right-2 px-2 py-1.5 bg-background/80 backdrop-blur-[1px] rounded-lg border border-border/40 z-10 flex flex-col gap-0.5 font-sans">
                {[
                  { color: "bg-orange-400", label: "passenger" },
                  { color: "bg-blue-600", label: "pickup" },
                  { color: "bg-green-600", label: "rebalancing" },
                  { color: "bg-red-500", label: "idle" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 leading-none">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
                    <span className="text-[9px] text-foreground/90 font-medium tracking-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thinner, tighter label area */}
            <div className="py-2 mt-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-center text-foreground/40 font-sans font-bold">
                Manhattan Flow Simulation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5 p-4 rounded-lg bg-background border border-border">
      <p className="text-xs font-sans uppercase tracking-wider text-foreground/50 mb-1">
        Fun fact
      </p>
      <div className="text-sm text-foreground/70 font-sans italic flex flex-col gap-1">
        <span>
          Outside research, I am the frontman of a rock band, where I explore a more creative and expressive side of my personality.
        </span>
        <span>
          I truly enjoy the process of writing music, performing and connecting with audiences.
        </span>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;