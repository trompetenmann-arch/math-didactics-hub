export const SectionHeading = ({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) => (
  <div className="max-w-3xl mb-14">
    <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-accent" />
      {eyebrow}
    </div>
    <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance mb-4">
      {title}
    </h2>
    {intro && <p className="text-lg text-muted-foreground leading-relaxed text-balance">{intro}</p>}
  </div>
);
