import { FileDown, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";
import cvFile from "@/assets/AC_CV.pdf";

const HeroSection = () => (
  <section
    id="hero"
    className="scroll-mt-28 -mt-20 -mb-5 min-h-screen flex items-center py-20 pt-10"
  >
    <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Profile Image: Centered and larger on mobile */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-16 md:mt-20">
          <img
            src={profileImg}
            alt="Profile photo"
            className="w-56 h-56 md:w-60 md:h-60 rounded-full object-cover border-4 border-primary/20 flex-shrink-0 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Antonio Coppola
          </h1>

          <p className="text-lg text-primary text-meta mt-2 font-sans">
            Operations Research & Machine Learning For Mobility Systems
          </p>

          {/* Bio: Justified with hyphenation and inter-word spacing to prevent gaps */}
          <div className="text-foreground/80 font-sans mt-6 leading-[1.7] max-w-2xl text-justify [hyphens:auto] [text-justify:inter-word] overflow-wrap-anywhere">
            <p>
              I design scalable decision-making methods at the intersection of
              combinatorial optimization and machine learning, with a focus
              on dynamic routing and congestion-aware systems.
            </p>

            <p className="mt-4">
              My work integrates mathematical programming, metaheuristics, and
              learning-based approaches to enable coordinated, forward-looking
              control in autonomous mobility-on-demand systems.
            </p>

            <p className="mt-4">
              I am open to research collaborations and industry opportunities
              in optimization, mobility, and data-driven decision systems.
            </p>
          </div>

          {/* Buttons: Centered on mobile */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            <a href={cvFile} download>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 hover:text-primary font-sans"
              >
                <FileDown size={16} className="mr-2 text-inherit" />
                Download CV
              </Button>
            </a>

            <a href="mailto:antonio.coppola@tum.de">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 hover:text-primary font-sans"
              >
                <Mail size={16} className="mr-2 text-inherit" />
                Contact
              </Button>
            </a>

            <a href="#research">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 hover:text-primary font-sans"
              >
                <ArrowDown size={16} className="mr-2 text-inherit" />
                Research
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;