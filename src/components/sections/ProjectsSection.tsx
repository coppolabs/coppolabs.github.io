import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "[Project Name 1]",
    description: "[What this project does and why it matters. 2–4 lines.]",
    stack: ["Python", "Gurobi", "PyTorch"],
    role: "[Your contribution]",
    github: "#",
    demo: "#",
  },
  {
    name: "[Project Name 2]",
    description: "[Description of applied work or tool you built.]",
    stack: ["Julia", "JuMP", "React"],
    role: "[Your contribution]",
    github: "#",
    demo: null,
  },
  {
    name: "[Project Name 3]",
    description: "[Description.]",
    stack: ["C++", "TensorFlow"],
    role: "[Your contribution]",
    github: "#",
    demo: "#",
  },
  {
    name: "[Project Name 4]",
    description: "[Description.]",
    stack: ["Python", "Scikit-learn"],
    role: "[Your contribution]",
    github: "#",
    demo: null,
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" surface>
    <SectionTitle>Projects</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <div
          key={project.name}
          className="p-5 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors"
        >
          <h4 className="font-sans font-semibold text-foreground text-base">
            {project.name}
          </h4>
          <p className="text-sm text-foreground/70 font-sans mt-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-sans bg-surface text-meta rounded border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xs text-meta font-sans mt-2">{project.role}</p>
          <div className="flex gap-3 mt-3">
            <a href={project.github} className="inline-flex items-center gap-1 text-sm font-sans text-primary hover:text-primary/80 transition-colors">
              <Github size={14} /> Repo
            </a>
            {project.demo && (
              <a href={project.demo} className="inline-flex items-center gap-1 text-sm font-sans text-primary hover:text-primary/80 transition-colors">
                <ExternalLink size={14} /> Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
