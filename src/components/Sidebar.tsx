import { useState } from "react";
import { Menu, X, Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Email", href: "mailto:antonio.coppola@tum.de", icon: <Mail size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antoniocoppola364/", icon: <Linkedin size={18} /> },
  { label: "Google Scholar", href: "https://scholar.google.de/citations?user=43663d0AAAAJ&hl=it", icon: <GraduationCap size={18} /> },
  { label: "GitHub", href: "https://github.com/coppolabs", icon: <Github size={18} /> },
];

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Talks", href: "/#talks" },
  { label: "Awards", href: "/#awards" },
  { label: "Skills", href: "/#skills" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Left: Name */}
          {/* Left: Name */}
          <div>
            <h2 className="text-xl font-serif font-bold tracking-tight text-foreground">
              Antonio Coppola
            </h2>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Socials */}
          <div className="hidden lg:flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="text-foreground/60 hover:text-primary transition-colors p-1.5 rounded hover:bg-primary/5"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-surface border-b border-border z-40 px-6 py-4 flex flex-col gap-4 lg:hidden">

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-foreground/80 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 pt-2 border-t border-border">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;