import { FileDown, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 py-20">
    <div className="max-w-3xl w-full">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <img
          src={profileImg}
          alt="Profile photo"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            [Your Name]
          </h1>
          <p className="text-lg text-meta mt-2 font-sans">
            [Current Role / Position]
          </p>
          <p className="text-primary font-sans font-medium mt-3 text-base">
            [One-line professional identity + impact]
          </p>
          <p className="text-foreground/70 font-sans mt-4 leading-relaxed max-w-lg">
            [Brief bio – research focus + personal tone. 2–3 lines about what drives your work and what makes you unique.]
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans">
              <FileDown size={16} className="mr-2" />
              Download CV
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-sans">
              <Mail size={16} className="mr-2" />
              Contact
            </Button>
            <Button variant="ghost" className="text-foreground/60 hover:text-primary font-sans" asChild>
              <a href="#research">
                <ArrowDown size={16} className="mr-2" />
                Research
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
