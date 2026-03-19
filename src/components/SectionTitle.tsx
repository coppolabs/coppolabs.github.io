interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 flex items-center gap-3">
    <span className="w-8 h-0.5 bg-primary inline-block" />
    {children}
  </h2>
);

export default SectionTitle;
