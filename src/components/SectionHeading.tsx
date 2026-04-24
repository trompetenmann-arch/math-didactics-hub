export const SectionHeading = ({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) => (
  <div className="max-w-3xl mb-12">
    <p className="text-primary font-bold uppercase tracking-wider text-xs mb-3">{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl tracking-tight text-balance mb-3 text-foreground">
      {title}
    </h2>
    {intro && <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">{intro}</p>}
  </div>
);
