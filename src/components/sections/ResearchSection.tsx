import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { FileText, Code, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import StaggeredRouting from "@/assets/papers/staggered_routing.pdf";
import IntegBalStag from "@/assets/papers/integ_bal_stag_arxiv.pdf";
import LCSS21Unilaral from "@/assets/papers/LCSS_21_unilateral.pdf";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  abstract: string;
  pdfHref?: string;
  codeHref?: string;
  pageHref?: string;
}

const publications: Publication[] = [
  {
    title: "Staggered Routing in Autonomous Mobility-on-Demand Systems",
    authors:
      "Antonio Coppola, Gerhard Hiermann, Dario Paccagnan, Maximilian Schiffer",
    venue: "European Journal of Operational Research, 327(3):875–891, 2025",
    abstract: "In autonomous mobility-on-demand systems, effectively managing vehicle flows to mitigate induced congestion and ensure efficient operations is imperative for system performance and positive customer experience. Against this background, we study the potential of staggered routing, i.e., purposely delaying trip departures from a system perspective, in order to reduce congestion and ensure efficient operations while still meeting customer time windows. We formalize the underlying planning problem and show how to efficiently model it as a mixed integer linear program. Moreover, we present a matheuristic that allows us to efficiently solve large-scale real-world instances both in an offline full-information setting and its online rolling horizon counterpart. We conduct a numerical study for Manhattan, New York City, focusing on low- and highly- congested scenarios. Our results show that in low-congestion scenarios, staggering trip departures allows mitigating, on average, 98% of the induced congestion in a full information setting. In a rolling horizon setting, our algorithm allows us to reduce 82% of the induced congestion. In high-congestion scenarios, we observe an average reduction of 60% as the full information bound and an average reduction of 30% in our online setting. Surprisingly, we show that these reductions can be reached by shifting trip departures by a maximum of six minutes in both the low- and high-congestion scenarios.",
    pdfHref: StaggeredRouting,
    codeHref: "https://github.com/tumBAIS/staggered_routing_in_amod_systems",
    pageHref: "https://www.sciencedirect.com/science/article/pii/S0377221725004771",
  },
  {
    title: "Partial Controllability of Network Dynamical Systems with Unilateral Inputs",
    authors:
      "Camilla Ancona, Francesco Lo Iudice, Antonio Coppola, Pietro De Lellis, Francesco Garofalo",
    venue: "IEEE Control Systems Letters, 6:2252–2257, 2021",
    abstract:
      "Our ability to control network dynamical systems is often hindered by constraints on the number and nature of the available control actions, which make controlling the whole network unfeasible.In this manuscript, we focus on the case where unilateral inputs are exerted on a subset of the network nodes. Leveraging the observation that, different from the case of subsystems, unilateral node reachability and controllability are equivalent, we provide conditions for a given node subset to be unilaterally controllable.The theoretical findings are then employed to develop a computationally efficient heuristic to select the nodes where the unilateral inputs should be injected.",
    pdfHref: LCSS21Unilaral,
    pageHref: "https://ieeexplore.ieee.org/document/9670453/",
  },
];

const workingPapers: Publication[] = [
  {
    title: "Integrated Balanced and Staggered Routing in AMoD Systems",
    authors:
      "Antonio Coppola, Gerhard Hiermann, Dario Paccagnan, Michel Gendreau, Maximilian Schiffer",
    venue: "Under revision at Transportation Science, 2025",
    abstract: "Autonomous mobility-on-demand (AMoD) systems — centrally coordinated fleets of self-driving vehicles — offer a promising alternative to traditional ride-hailing by improving traffic flow and reducing operating costs. Centralized control in AMoD systems enables two complementary routing strategies: balanced routing, which distributes traffic across alternative routes to ease congestion, and staggered routing, which delays departures to smooth peak demand over time. In this work, we introduce a unified framework that jointly optimizes both route choices and departure times to minimize system travel times. We formulate the problem as an optimization model and show that our congestion model yields an unbiased estimate of travel times derived from a discretized version of Vickrey’s bottleneck model. To solve large-scale instances, we develop a custom metaheuristic based on a large neighborhood search framework. To assess our method, we conduct a case study on the Manhattan street network using real-world taxi data. In a setting with exclusively centrally controlled AMoD vehicles, our approach reduces total traffic delay by up to 25% and mitigates network congestion by up to 35% compared to selfish routing. We also consider mixed-traffic settings with both AMoD and conventional vehicles, comparing a welfare-oriented operator that minimizes total system travel time with a profit-oriented one that optimizes only the fleet’s travel time. Independent of the operator’s objective, the analysis reveals a win–win outcome: across all control levels, both autonomous and non-autonomous traffic benefit from the implementation of balancing and staggering strategies.",
    pdfHref: IntegBalStag,
    codeHref: "https://github.com/tumBAIS/integ_bal_stag",
    pageHref: "https://arxiv.org/abs/2506.19722",
  },
  {
    title: "Online Balanced and Staggered Routing",
    authors: "Antonio Coppola",
    venue: "Work in progress, 2025",
    abstract:
      "This ongoing work explores online decision-making for balanced and staggered routing under dynamic demand. The goal is to design scalable and anticipatory control policies for real-time AMoD operations that can internalize future congestion effects while remaining computationally tractable.",
  },
];


const PublicationItem = ({ pub }: { pub: Publication }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-6 border-b border-border last:border-b-0">
      <h4 className="font-sans font-semibold text-foreground text-base leading-snug break-words">
        {pub.title}
      </h4>
      {/* Added break-words and hyphens for author list */}
      <p className="text-sm text-meta font-sans mt-1 break-words [hyphens:auto]">
        {pub.authors}
      </p>
      <p className="text-sm text-meta font-sans italic mt-0.5">{pub.venue}</p>

      <div className="mt-3">
        {/* Added break-words and hyphens for Abstract */}
        <p
          className={`text-sm text-foreground/70 font-sans text-justify leading-relaxed break-words [hyphens:auto] transition-all ${expanded ? "" : "line-clamp-3"
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
          {expanded ? "Show less" : "Read abstract"}
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
            PDF
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
            Code
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
            Paper page
          </a>
        )}
      </div>
    </div>
  );
};

const ResearchSection = () => (
  <SectionWrapper id="research">
    <SectionTitle>Research & Publications</SectionTitle>

    <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-2">
      Publications
    </h3>
    <div className="mb-10">
      {publications.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}
    </div>

    <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-2">
      Working Papers & Preprints
    </h3>
    <div>
      {workingPapers.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}
    </div>
  </SectionWrapper>
);

export default ResearchSection;