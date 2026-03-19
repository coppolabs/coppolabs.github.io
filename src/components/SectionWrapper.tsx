import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
}

const SectionWrapper = ({ id, children, className = "", surface = false }: SectionWrapperProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`py-16 md:py-20 px-6 md:px-12 ${surface ? "bg-surface" : ""} ${className}`}
  >
    <div className="max-w-3xl">
      {children}
    </div>
  </motion.section>
);

export default SectionWrapper;
