import { FileDown, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import cvFile from "@/assets/AC_CV.pdf";

const HeroSection = () => (
  <section
    id="hero"
    className="scroll-mt-28 -mt-20 min-h-[80vh] flex items-center py-20"
  >
    {/* Reduced max-width to 4xl to keep everything in a tighter column */}
    <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">

        {/* Profile Image - Balanced Size */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Antonio Coppola"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/10 shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Antonio Coppola
          </h1>

          <p className="text-lg text-primary mt-2 font-sans font-medium uppercase tracking-wide">
            Operations Research & Machine Learning
          </p>

          <div className="text-foreground/80 font-sans mt-6 leading-relaxed text-justify [hyphens:auto] [text-justify:inter-word]">
            <p>
              I design scalable decision-making methods at the intersection of
              combinatorial optimization and machine learning, with a focus
              on dynamic routing and congestion-aware systems.
            </p>

            <p className="mt-4">
              My work integrates mathematical programming and
              learning-based approaches to enable coordinated control in autonomous mobility-on-demand systems.
            </p>

            <p className="mt-4 text-sm font-medium border-l-2 border-primary/30 pl-4 italic">
              Open to research collaborations and industry opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            <a href={cvFile} download>
              <Button
                variant="outline"
                className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <FileDown size={16} className="mr-2" />
                Download CV
              </Button>
            </a>

            <a href="mailto:antonio.coppola@tum.de">
              <Button
                variant="outline"
                className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Contact
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;