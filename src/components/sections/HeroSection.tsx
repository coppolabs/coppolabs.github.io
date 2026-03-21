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
      <div className="flex flex-col md:flex-row items-start gap-10">
        <img
          src={profileImg}
          alt="Profile photo"
          className="mt-20 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
        />

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Antonio Coppola
          </h1>

          <p className="text-lg text-meta mt-2 font-sans">
            Operations Research & Machine Learning Researcher
          </p>

          <p className="text-primary font-sans font-medium mt-3 text-base">
            Learning-augmented optimization for large-scale mobility systems.
          </p>

          <p className="text-foreground/80 font-sans mt-4 leading-[1.65] max-w-2xl text-justify">
            I design scalable decision-making methods at the intersection of combinatorial optimization and machine learning, with a focus on dynamic routing and congestion-aware systems.

            My work integrates mathematical programming, metaheuristics, and learning-based approaches to enable coordinated, forward-looking control in autonomous mobility-on-demand systems.

            I am open to research collaborations and industry opportunities in optimization, mobility, and data-driven decision systems.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
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