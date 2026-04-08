import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import cvFile from "@/assets/AC_CV.pdf";

const HeroSection = () => (
  <section
    id="hero"
    className="scroll-mt-28 -mt-20 min-h-[80vh] flex items-center pt-20 pb-8 md:pb-20"
  >
    <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
          Antonio Coppola
        </h1>
        <p className="text-base text-primary mt-3 font-sans font-medium uppercase tracking-[0.08em] leading-snug max-w-[320px] mx-auto md:text-lg md:mt-2 md:tracking-wide md:max-w-none md:mx-0">
          COMBINATORIAL OPTIMIZATION & Machine Learning FOR TRANSPORTATION
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-14 -mt-5">
        <div className="hidden md:block flex-shrink-0 w-40 md:w-52 mx-auto md:mx-0">
          <img
            src={profileImg}
            alt="Antonio Coppola"
            className="w-full h-full rounded-xl border-4 border-primary/10 shadow-xl aspect-square object-cover object-[50%_20%]"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between text-center md:text-left">
          <div className="max-w-[530px] md:-ml-9 text-foreground/80 font-sans leading-relaxed text-left md:text-justify [hyphens:auto] [text-justify:inter-word] break-words">
            <p>
              I design scalable decision-making methods at the intersection of combinatorial optimization and machine learning,
              with a focus on dynamic routing and congestion management. My work provides algorithmic solutions to complex,
              high-dimensional transportation problems that balance rigor with real-time performance.
            </p>

            <p className="mt-4">
              Beyond algorithmic design, I focus on the end-to-end architecture of decision-making systems.
              I bridge the gap between mathematical models and deployable software, ensuring that complex decision
              logic remains computationally efficient and practical for real-time operations.
            </p>

            <p className="mt-5 text-sm font-medium border-l-2 border-primary/30 pl-4 italic">
              I’m always open to research collaborations, industry opportunities, or simply connecting to share ideas. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start md:-ml-9">
            <a href={cvFile} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <FileText size={16} className="mr-2" />
                Open CV
              </Button>
            </a>

            <a href="mailto:antonio.coppola364@gmail.com">
              <Button
                variant="outline"
                className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Image */}
          <div className="mt-6 mb-4 md:hidden flex justify-center">
            <div className="w-13">
              <img
                src={profileImg}
                alt="Antonio Coppola"
                className="w-full rounded-xl border-4 border-primary/10 shadow-lg aspect-square object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;