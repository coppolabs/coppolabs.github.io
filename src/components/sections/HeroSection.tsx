import { useTranslation } from "react-i18next";
import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const activeCv = i18n.language?.startsWith("de") ? "/AC_CV_de.pdf" : "/AC_CV.pdf";

  return (
    <section
      id="hero"
      className="scroll-mt-28 -mt-20 min-h-[70vh] flex items-center pt-20 pb-8 sm:pb-20"
    >
      <div className="max-w-4xl mx-auto w-full px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-center">
            {t("hero.name")}
          </h1>

          {/* Subtitles: Centered across full container width with larger text on mobile */}
          <div className="w-full flex justify-center mt-3">
            <div className="text-sm sm:text-base md:text-lg text-primary font-sans font-medium uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
              <span className="whitespace-nowrap">{t("hero.title1")}</span>
              <span className="hidden sm:inline text-primary/40">•</span>
              <span className="whitespace-nowrap">{t("hero.title2")}</span>
              <span className="hidden sm:inline text-primary/40">•</span>
              <span className="whitespace-nowrap">{t("hero.title3")}</span>
            </div>
          </div>
        </div>

        {/* Side-by-side layout starting at sm breakpoint */}
        <div className="flex flex-col sm:flex-row items-stretch gap-5 lg:gap-6 mt-6">
          {/* Profile image (Desktop / Tablet) */}
          <div className="hidden sm:block flex-shrink-0 w-44 sm:w-48 md:w-60 lg:w-64 mx-auto sm:mx-0">
            <img
              src={profileImg}
              alt="Antonio Coppola"
              className="w-full h-full rounded-xl border-4 border-primary/10 shadow-xl aspect-square object-cover object-[50%_20%]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
            <div
              lang={i18n.language}
              className="max-w-[530px] text-foreground/80 font-sans leading-relaxed text-justify hyphens-auto break-words space-y-2"
            >
              <p>{t("hero.paragraph1")}</p>
              <p>{t("hero.paragraph2")}</p>
              <p>{t("hero.paragraph3")}</p>
              <p className="mt-2 text-sm font-medium border-l-2 border-primary/30 pl-4 italic text-justify">
                {t("hero.callout")}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-5 justify-center sm:justify-start">
              <a
                href={activeCv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
                >
                  <FileText size={16} className="mr-2" />
                  {t("hero.btnResume")}
                </Button>
              </a>

              <a href="mailto:antonio.coppola364@gmail.com">
                <Button
                  variant="outline"
                  className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  {t("hero.btnContact")}
                </Button>
              </a>
            </div>

            {/* Mobile Image (< 640px) */}
            <div className="mt-6 mb-2 sm:hidden flex justify-center w-full">
              <div className="w-full max-w-[280px]">
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
};

export default HeroSection;