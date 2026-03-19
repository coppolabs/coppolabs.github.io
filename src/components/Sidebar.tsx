import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Talks", href: "/#talks" },
  { label: "Awards", href: "/#awards" },
  { label: "Contact", href: "/#contact" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-surface border border-border"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-surface border-r border-border flex flex-col py-10 px-6 transition-transform duration-200 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="mb-10">
          <h2 className="text-xl font-serif font-bold text-foreground">Antonio Coppola</h2>
          <p className="text-sm text-meta mt-1">Researcher in OR & ML</p>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-sans text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="pt-6 border-t border-border text-xs text-meta">
          <p>© 2026 Antonio Coppola</p>
          <p className="mt-1">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link> |{" "}
            <Link to="/impressum" className="hover:underline">Impressum</Link>
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
