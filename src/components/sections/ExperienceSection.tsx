import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      position: t("experience.items.tum.position"),
      org: (
        <>
          {t("experience.items.tum.orgPrefix")}{" "}
          <a
            href="https://scholar.google.com/citations?user=umGuS18AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            Prof. Maximilian Schiffer
          </a>
        </>
      ),
      dates: "2022 – 2026",
      details: t("experience.items.tum.details", { returnObjects: true }) as string[],
    },
    {
      position: t("experience.items.polytechnique.position"),
      org: (
        <>
          {t("experience.items.polytechnique.orgPrefix")}{" "}
          <a
            href="https://scholar.google.com/citations?user=CilK624AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            Prof. Michel Gendreau
          </a>
        </>
      ),
      dates: "2025",
      details: t("experience.items.polytechnique.details", { returnObjects: true }) as string[],
    },
    {
      position: t("experience.items.steam.position"),
      org: (
        <>
          <a
            href="https://mcube-cluster.de/en/projekt/steam/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            {t("experience.items.steam.projectName")}
          </a>{" "}
          {t("experience.items.steam.orgSuffix")}
        </>
      ),
      dates: "2024",
      details: t("experience.items.steam.details", { returnObjects: true }) as string[],
    },
    {
      position: t("experience.items.unina.position"),
      org: (
        <>
          {t("experience.items.unina.orgPrefix")}{" "}
          <a
            href="https://scholar.google.com/citations?user=xO0lRJIAAAAJ&hl=it"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            Prof. Franco Garofalo
          </a>
        </>
      ),
      dates: "2021",
      details: t("experience.items.unina.details", { returnObjects: true }) as string[],
    },
  ];

  return (
    <SectionWrapper id="experience">
      <SectionTitle>{t("experience.title")}</SectionTitle>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l border-border/60">
            {/* Timeline Dot */}
            <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-sm" />

            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 -mb-0 mt-1">
              <h4 className="font-sans font-bold text-foreground text-lg leading-tight">
                {exp.position}
              </h4>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary/80 whitespace-nowrap">
                {exp.dates}
              </span>
            </div>

            {/* Organization/Supervision */}
            <p className="text-sm font-sans font-medium text-foreground/80 mb-5 mt-1">
              {exp.org}
            </p>

            {/* Bulleted Details from CV */}
            <ul className="space-y-1">
              {exp.details.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70 font-sans leading-relaxed -mt-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;