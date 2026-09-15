import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const educationKeys = ["phd", "msc", "erasmus", "bsc", "esabac"] as const;

const EducationSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="education" variant="band">
      <SectionTitle>{t("education.title")}</SectionTitle>

      <div className="mt-8 space-y-8">
        {educationKeys.map((key) => {
          const details = t(`education.${key}.details`, { defaultValue: "" });

          return (
            <div
              key={key}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border last:before:bottom-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h4 className="font-sans font-bold text-foreground text-base leading-tight">
                  {t(`education.${key}.degree`)}
                </h4>
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary whitespace-nowrap">
                  {t(`education.${key}.dates`)}
                </span>
              </div>

              <p className="text-sm text-foreground/90 font-sans mt-1">
                <strong>{t(`education.${key}.institution`)}</strong>, {t(`education.${key}.location`)}
              </p>

              {details && (
                <p className="text-sm text-foreground/60 font-sans mt-1 italic leading-relaxed">
                  {details}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;