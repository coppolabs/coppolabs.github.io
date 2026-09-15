import { useState, useEffect } from "react";
import { Menu, X, Mail, Linkedin, Github, GraduationCap, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Email", href: "mailto:antonio.coppola364@gmail.com", icon: <Mail size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antoniocoppola364/", icon: <Linkedin size={18} /> },
  { label: "Google Scholar", href: "https://scholar.google.de/citations?user=43663d0AAAAJ&hl=it", icon: <GraduationCap size={18} /> },
  { label: "GitHub", href: "https://github.com/coppolabs", icon: <Github size={18} /> },
];

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Research", href: "/#research" },
  { label: "Talks", href: "/#talks" },
  { label: "Awards", href: "/#awards" },
  { label: "Skills", href: "/#skills" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Left: Name & Mobile Socials */}
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-serif font-bold tracking-tight text-foreground">
              Antonio Coppola
            </h2>

            <div className="flex lg:hidden items-center gap-4 ml-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Nav (Hidden on Mobile) */}
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

          {/* Desktop Socials & Theme Toggle (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-3">
            {links.map((link) => (
              <div key={link.label} className="relative group flex justify-center">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors p-1.5 rounded hover:bg-primary/5 flex items-center justify-center"
                >
                  {link.icon}
                </a>
                <div className="absolute top-full mt-1.5 px-2 py-1 bg-foreground text-background text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-sm">
                  {link.label}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-foreground"></div>
                </div>
              </div>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-1.5 rounded text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors flex items-center justify-center"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu button */}
          <div className="flex lg:hidden items-center gap-2 ml-auto">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md text-foreground/60 hover:text-primary transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-foreground"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown - Two Column Layout */}
      {mobileOpen && (
        <div className="fixed top-[60px] left-0 w-full bg-surface border-b border-border z-40 px-6 py-3 flex flex-col lg:hidden shadow-lg">
          <nav className="grid grid-cols-2 gap-x-4 gap-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-foreground/80 hover:text-primary py-2 transition-colors border-b border-border/50 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;