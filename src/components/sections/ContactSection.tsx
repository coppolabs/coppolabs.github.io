import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Linkedin, GraduationCap, Github } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:antonio.coppola@tum.de", icon: <Mail size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antoniocoppola364/", icon: <Linkedin size={18} /> },
  { label: "Google Scholar", href: "https://scholar.google.de/citations?user=43663d0AAAAJ&hl=it", icon: <GraduationCap size={18} /> },
  { label: "GitHub", href: "https://github.com/coppolabs", icon: <Github size={18} /> },
];

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionTitle>Contact</SectionTitle>
    <p className="text-foreground/70 font-sans mb-6">
      I welcome opportunities for collaboration, research discussions, and industry roles.
      <br />
      Feel free to reach out regarding projects, positions, or just for a chat.
      <br />
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:border-primary/30 hover:bg-primary/5 transition-colors group"
        >
          <span className="text-primary">{link.icon}</span>
          <span className="font-sans text-sm text-foreground group-hover:text-primary transition-colors">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  </SectionWrapper>
);

export default ContactSection;
