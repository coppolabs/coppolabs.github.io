import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Linkedin, GraduationCap, Github } from "lucide-react";

const links = [
  { label: "your.email@university.edu", href: "mailto:your.email@university.edu", icon: <Mail size={18} /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin size={18} /> },
  { label: "Google Scholar", href: "#", icon: <GraduationCap size={18} /> },
  { label: "GitHub", href: "#", icon: <Github size={18} /> },
];

const ContactSection = () => (
  <SectionWrapper id="contact" surface>
    <SectionTitle>Contact</SectionTitle>
    <p className="text-foreground/70 font-sans mb-6">
      I'm always happy to chat about research, collaboration opportunities, or just say hi. ☀️
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
