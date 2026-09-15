import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X, Mail, Linkedin, Github, GraduationCap, Sun, Moon } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:antonio.coppola364@gmail.com", icon: <Mail size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antoniocoppola364/", icon: <Linkedin size={18} /> },
  { label: "Scholar", href: "https://scholar.google.de/citations?user=43663d0AAAAJ&hl=it", icon: <GraduationCap size={18} /> },
  { label: "GitHub", href: "https://github.com/coppolabs", icon: <Github size={18} /> },
];

const navItems = [
  { key: "about", href: "/#about" },
  { key: "experience", href: "/#experience" },
  { key: "education", href: "/#education" },
  { key: "skills", href: "/#skills" },
  { key: "research", href: "/#research" },
  { key: "awards", href: "/#awards" },
  { key: "talks", href: "/#talks" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t } = useTranslation();

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
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3.5">

          {/* Left: Name */}
          <div className="shrink-0">
            <a href="/#hero" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-lg sm:text-xl font-serif font-bold tracking-tight text-foreground whitespace-nowrap leading-none">
                Antonio Coppola
              </h2>
            </a>
          </div>

          {/* Center: Desktop Nav Links (Hidden below lg) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 mx-auto px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Mid-Screen Social Icons (Visible from `sm` breakpoint up to `lg`) */}
          <div className="hidden sm:flex lg:hidden items-center gap-1 mx-auto">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/60 hover:text-primary transition-colors p-1.5 rounded hover:bg-primary/5 flex items-center justify-center"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Right: Desktop Controls */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <div key={link.label} className="relative group flex items-center justify-center">
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
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors flex items-center justify-center"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="pl-2 border-l border-border flex items-center">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile/Tablet Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageSwitcher />

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-md text-foreground/70 hover:text-foreground transition-colors flex items-center justify-center"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-1.5 rounded-md text-foreground flex items-center justify-center"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Dropdown Menu */}
      {mobileOpen && (
        <div className="fixed top-[57px] left-0 w-full bg-surface border-b border-border z-40 px-6 py-5 flex flex-col gap-4 lg:hidden shadow-xl">
          {/* Grid layout: 2 columns on mobile, 3 columns on mid-screen (`sm`) */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary py-2 transition-colors border-b border-border/40"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Social Links Row in Dropdown: Visible only on mobile (< sm) */}
          <div className="pt-2 flex sm:hidden items-center justify-around border-t border-border/60">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-foreground/70 hover:text-primary p-2 rounded-md hover:bg-primary/5 transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;