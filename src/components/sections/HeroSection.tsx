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
      className="scroll-mt-28 -mt-20 min-h-[70vh] flex items-center pt-20 pb-8 md:pb-20"
    >
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        {/* Header */}
        <div className="mb-3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            {t("hero.name")}
          </h1>
          <div className="text-base md:text-lg text-primary mt-3 font-sans 
          font-medium uppercase tracking-[0.08em] md:tracking-wide flex flex-col
           md:flex-row md:items-center justify-center md:justify-start gap-1 md:gap-3">
            <span>{t("hero.title1")}</span>
            <span className="hidden md:inline text-primary/40">•</span>
            <span>{t("hero.title2")}</span>
            <span className="hidden md:inline text-primary/40">•</span>
            <span>{t("hero.title3")}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 lg:gap-6">
          {/* Profile image (desktop) */}
          <div className="hidden md:block flex-shrink-0 w-52 md:w-64 mx-auto md:mx-0">
            <img
              src={profileImg}
              alt="Antonio Coppola"
              className="w-full h-full rounded-xl border-4 border-primary/10 shadow-xl aspect-square object-cover object-[50%_20%]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between text-center md:text-left hyphens-auto break-words text-justify">
            <div
              lang={i18n.language}
              className="max-w-[530px] text-foreground/80 font-sans leading-relaxed text-left md:text-justify hyphens-auto break-words"
            >
              <p>{t("hero.paragraph1")}</p>
              <p className="mt-2">{t("hero.paragraph2")}</p>
              <p className="mt-2">{t("hero.paragraph3")}</p>
              <p className="mt-2 -mb-2 text-sm font-medium border-l-2 border-primary/30 pl-4 italic text-left">
                {t("hero.callout")}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
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

            {/* Mobile Image */}
            <div className="mt-8 mb-4 md:hidden flex justify-center w-full">
              <div className="w-full max-w-[340px]">
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