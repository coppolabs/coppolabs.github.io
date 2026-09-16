import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { FileText, Code, ExternalLink, ChevronDown, ChevronUp, Presentation } from "lucide-react";
import StaggeredRouting from "@/assets/papers/staggered_routing.pdf";
import IntegBalStag from "@/assets/papers/integ_bal_stag_arxiv.pdf";
import LCSS21Unilaral from "@/assets/papers/LCSS_21_unilateral.pdf";
import PhDThesisPdf from "@/assets/papers/AC_phd_thesis.pdf";
import PhDThesisSlides from "@/assets/papers/AC_defense_presentation.pdf";
import flowVideo from "@/assets/manhattan_flow.mp4";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  abstract: string;
  pdfHref?: string;
  codeHref?: string;
  pageHref?: string;
  slidesHref?: string;
}

const PublicationItem = ({ pub }: { pub: Publication }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="py-4 border-b  border-border last:border-b-0">
      <h4 className="font-sans font-semibold text-foreground text-base leading-snug break-words">
        {pub.title}
      </h4>
      <p className="text-sm text-meta font-sans mt-1 break-words [hyphens:auto]">
        {pub.authors}
      </p>
      <p className="text-sm text-meta font-sans italic mt-0.5">{pub.venue}</p>

      <div className="mt-3">
        <p
          className={`text-sm text-foreground/70 font-sans text-justify leading-relaxed break-words [hyphens:auto] transition-all ${expanded ? "" : "line-clamp-2"
            }`}
        >
          {pub.abstract}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? t("research.actions.showLess") : t("research.actions.readAbstract")}
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mt-3">
        {pub.pdfHref && (
          <a
            href={pub.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <FileText size={14} />
            {t("research.actions.pdf")}
          </a>
        )}

        {pub.slidesHref && (
          <a
            href={pub.slidesHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Presentation size={14} />
            {t("research.actions.slides")}
          </a>
        )}

        {pub.codeHref && (
          <a
            href={pub.codeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Code size={14} />
            {t("research.actions.code")}
          </a>
        )}

        {pub.pageHref && (
          <a
            href={pub.pageHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink size={14} />
            {t("research.actions.paperPage")}
          </a>
        )}
      </div>
    </div>
  );
};

const ResearchSection = () => {
  const { t } = useTranslation();

  const thesis: Publication = {
    title: t("research.thesis.title"),
    authors: t("research.thesis.authors"),
    venue: t("research.thesis.venue"),
    abstract: t("research.thesis.abstract"),
    pdfHref: PhDThesisPdf,
    slidesHref: PhDThesisSlides,
  };

  const publications: Publication[] = [
    {
      title: t("research.publications.staggeredRouting.title"),
      authors: t("research.publications.staggeredRouting.authors"),
      venue: t("research.publications.staggeredRouting.venue"),
      abstract: t("research.publications.staggeredRouting.abstract"),
      pdfHref: StaggeredRouting,
      codeHref: "https://github.com/tumBAIS/staggered_routing_in_amod_systems",
      pageHref: "https://www.sciencedirect.com/science/article/pii/S0377221725004771",
    },
    {
      title: t("research.publications.partialControllability.title"),
      authors: t("research.publications.partialControllability.authors"),
      venue: t("research.publications.partialControllability.venue"),
      abstract: t("research.publications.partialControllability.abstract"),
      pdfHref: LCSS21Unilaral,
      pageHref: "https://ieeexplore.ieee.org/document/9670453/",
    },
  ];

  const workingPapers: Publication[] = [
    {
      title: t("research.workingPapers.integratedBalStag.title"),
      authors: t("research.workingPapers.integratedBalStag.authors"),
      venue: t("research.workingPapers.integratedBalStag.venue"),
      abstract: t("research.workingPapers.integratedBalStag.abstract"),
      pdfHref: IntegBalStag,
      codeHref: "https://github.com/tumBAIS/integ_bal_stag",
      pageHref: "https://arxiv.org/abs/2506.19722",
    },
    {
      title: t("research.workingPapers.onlineBalStag.title"),
      authors: t("research.workingPapers.onlineBalStag.authors"),
      venue: t("research.workingPapers.onlineBalStag.venue"),
      abstract: t("research.workingPapers.onlineBalStag.abstract"),
    },
  ];

  return (
    <SectionWrapper id="research" variant="band">
      <SectionTitle>{t("research.title")}</SectionTitle>

      <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-1">
        {t("research.sections.phdThesis")}
      </h3>
      <div className="mb-6">
        <PublicationItem pub={thesis} />
      </div>

      <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-1">
        {t("research.sections.publications")}
      </h3>
      <div className="mb-6">
        {publications.map((pub) => (
          <PublicationItem key={pub.title} pub={pub} />
        ))}
      </div>

      <div className="sm:hidden md:hidden -mt-10 mb-6">
        <div className="overflow-hidden rounded-xl border border-primary/10 shadow-sm bg-muted/20 p-1">
          <div className="group relative aspect-[16/9] overflow-hidden rounded-lg grayscale transition-all duration-500 hover:grayscale-0 active:grayscale-0">
            <video
              src={flowVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-110"
            />

            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-1 bg-background/80 backdrop-blur-[1px] rounded-lg border border-border/40 z-10 flex flex-col gap-0.5 font-sans">
              {[
                { color: "bg-orange-400", label: t("research.videoLegend.passenger") },
                { color: "bg-blue-600", label: t("research.videoLegend.pickup") },
                { color: "bg-green-600", label: t("research.videoLegend.rebalancing") },
                { color: "bg-red-500", label: t("research.videoLegend.idle") },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 leading-none">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
                  <span className="text-[8px] text-foreground/90 font-medium tracking-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-1.5 mt-1">
            <p className="text-[9px] uppercase tracking-[0.15em] text-center text-foreground/40 font-sans font-bold">
              {t("research.videoCaption")}
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-1">
        {t("research.sections.workingPapers")}
      </h3>
      <div>
        {workingPapers.map((pub) => (
          <PublicationItem key={pub.title} pub={pub} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ResearchSection;