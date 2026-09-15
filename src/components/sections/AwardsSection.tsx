import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Award } from "lucide-react";

interface Scholarship {
  nameKey: string;
  yearKey: string;
  descriptionKey: string;
}

const scholarships: Scholarship[] = [
  {
    nameKey: "awards.items.bavariaQuebec.name",
    yearKey: "awards.items.bavariaQuebec.year",
    descriptionKey: "awards.items.bavariaQuebec.description",
  },
  {
    nameKey: "awards.items.academicTraining.name",
    yearKey: "awards.items.academicTraining.year",
    descriptionKey: "awards.items.academicTraining.description",
  },
  {
    nameKey: "awards.items.unina.name",
    yearKey: "awards.items.unina.year",
    descriptionKey: "awards.items.unina.description",
  },
  {
    nameKey: "awards.items.erasmus.name",
    yearKey: "awards.items.erasmus.year",
    descriptionKey: "awards.items.erasmus.description",
  },
];

const AwardsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="awards">
      <SectionTitle>{t("awards.title")}</SectionTitle>

      <div className="space-y-6 mt-6">
        {scholarships.map((award, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-6">
            {/* Left Column: Icon & Details */}
            <div className="flex items-start gap-3 flex-1">
              <Award size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans font-medium text-foreground text-sm leading-snug break-words">
                  {t(award.nameKey)}
                </p>

                <p className="text-sm text-foreground/70 font-sans mt-0.5">
                  {t(award.descriptionKey)}
                </p>
              </div>
            </div>

            {/* Right Column: Date */}
            <div className="sm:w-28 sm:text-right flex-shrink-0">
              <span className="text-xs font-sans uppercase tracking-wider text-foreground/50 font-medium">
                {t(award.yearKey)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AwardsSection;