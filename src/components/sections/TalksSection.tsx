import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Mic, Layout } from "lucide-react";

interface Talk {
  titleKey: string;
  eventKey: string;
  yearKey: string;
  type: "talk" | "poster";
}

const talks: Talk[] = [
  {
    titleKey: "talks.items.tsl2026.title",
    eventKey: "talks.items.tsl2026.event",
    yearKey: "talks.items.tsl2026.year",
    type: "talk",
  },
  {
    titleKey: "talks.items.jopt2025.title",
    eventKey: "talks.items.jopt2025.event",
    yearKey: "talks.items.jopt2025.year",
    type: "talk",
  },
  {
    titleKey: "talks.items.or2024.title",
    eventKey: "talks.items.or2024.event",
    yearKey: "talks.items.or2024.year",
    type: "talk",
  },
  {
    titleKey: "talks.items.jads2023.title",
    eventKey: "talks.items.jads2023.event",
    yearKey: "talks.items.jads2023.year",
    type: "poster",
  },
  {
    titleKey: "talks.items.tsl2023.title",
    eventKey: "talks.items.tsl2023.event",
    yearKey: "talks.items.tsl2023.year",
    type: "talk",
  },
  {
    titleKey: "talks.items.euro2022.title",
    eventKey: "talks.items.euro2022.event",
    yearKey: "talks.items.euro2022.year",
    type: "talk",
  },
];

const TalksSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="talks" variant="band">
      <SectionTitle>{t("talks.title")}</SectionTitle>
      <div className="space-y-6">
        {talks.map((talk, i) => {
          const Icon = talk.type === "poster" ? Layout : Mic;

          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-6"
            >
              {/* Left Column: Icon & Details */}
              <div className="flex items-start gap-3 flex-1">
                <Icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans font-medium text-foreground text-sm leading-snug break-words">
                    {t(talk.titleKey)}
                  </p>

                  <p className="text-sm text-meta font-sans mt-0.5">
                    {t(talk.eventKey)}
                  </p>
                </div>
              </div>

              {/* Right Column: Date */}
              <div className="sm:w-28 sm:text-right flex-shrink-0">
                <span className="text-xs font-sans uppercase tracking-wider text-foreground/50 font-medium">
                  {t(talk.yearKey)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default TalksSection;