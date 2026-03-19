import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { FileText, Code, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  description: string;
  links: { label: string; href: string; icon: React.ReactNode }[];
}

const publications: Publication[] = [
  {
    title: "[Paper Title 1]",
    authors: "[Authors – e.g., Your Name, Co-Author A, Co-Author B]",
    venue: "[Journal / Conference, Year]",
    description: "[2–3 line summary of contribution and results.]",
    links: [
      { label: "PDF", href: "#", icon: <FileText size={14} /> },
      { label: "Code", href: "#", icon: <Code size={14} /> },
      { label: "DOI", href: "#", icon: <ExternalLink size={14} /> },
    ],
  },
  {
    title: "[Paper Title 2]",
    authors: "[Authors]",
    venue: "[Venue, Year]",
    description: "[Contribution summary.]",
    links: [
      { label: "PDF", href: "#", icon: <FileText size={14} /> },
      { label: "Code", href: "#", icon: <Code size={14} /> },
    ],
  },
  {
    title: "[Paper Title 3]",
    authors: "[Authors]",
    venue: "[Venue, Year]",
    description: "[Contribution summary.]",
    links: [
      { label: "PDF", href: "#", icon: <FileText size={14} /> },
    ],
  },
];

const workingPapers: Publication[] = [
  {
    title: "[Working Paper Title]",
    authors: "[Authors]",
    venue: "Working Paper, [Year]",
    description: "[What this paper explores and preliminary findings.]",
    links: [
      { label: "Preprint", href: "#", icon: <FileText size={14} /> },
    ],
  },
];

const PublicationItem = ({ pub }: { pub: Publication }) => (
  <div className="py-5 border-b border-border last:border-b-0">
    <h4 className="font-sans font-semibold text-foreground text-base leading-snug">
      {pub.title}
    </h4>
    <p className="text-sm text-meta font-sans mt-1">{pub.authors}</p>
    <p className="text-sm text-meta font-sans italic">{pub.venue}</p>
    <p className="text-sm text-foreground/70 font-sans mt-2 leading-relaxed">
      {pub.description}
    </p>
    <div className="flex gap-3 mt-3">
      {pub.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

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
