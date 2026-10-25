import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { manualPublications } from "@/data/publications";
import generatedJson from "@/data/publications.generated.json";
import { profiles } from "@/data/profiles";
import {
  categoryLabels,
  filterLabels,
  matchesFilter,
  mergePublications,
  publicationLink,
  type Publication,
  type PublicationFilter,
} from "@/lib/publications";

type GeneratedPublications = { fetchedAt: string | null; sources: string[]; items: Publication[] };

const generated = generatedJson as GeneratedPublications;
const syncSources = generated.sources.map((s) => (s === "orcid" ? "ORCID" : "PUB")).join(" und ");
const publications = mergePublications(manualPublications, generated.items);
const featured = publications.filter((p) => p.featured);
const filters = Object.keys(filterLabels) as PublicationFilter[];

const publicationProfiles = profiles.filter((p) =>
  ["ORCID", "Google Scholar", "PUB Bielefeld", "ResearchGate"].includes(p.label),
);

const PublicationLink = ({ p }: { p: Publication }) => {
  const href = publicationLink(p);
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-highlight hover:underline not-italic"
    >
      {p.doi ? `doi:${p.doi}` : "Zum Eintrag"}
      <span className="sr-only"> (öffnet in neuem Tab)</span>
    </a>
  );
};

const Badges = ({ p }: { p: Publication }) => (
  <span className="flex flex-wrap gap-1.5">
    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{categoryLabels[p.category]}</span>
    {p.peerReviewed ? (
      <span className="text-[11px] px-2 py-0.5 rounded-full bg-highlight/10 text-highlight font-medium">
        peer-reviewed
      </span>
    ) : null}
    {p.note ? (
      <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{p.note}</span>
    ) : null}
  </span>
);

export const Publications = () => {
  const [filter, setFilter] = useState<PublicationFilter>("all");

  const byYear = useMemo(() => {
    const groups = new Map<number, Publication[]>();
    for (const p of publications.filter((p) => matchesFilter(p, filter))) {
      groups.set(p.year, [...(groups.get(p.year) ?? []), p]);
    }
    return [...groups.entries()];
  }, [filter]);

  const count = (f: PublicationFilter) => publications.filter((p) => matchesFilter(p, f)).length;

  return (
    <section id="publications" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Publikationen"
          title="Veröffentlichungen"
          intro="Beiträge aus Mathematikdidaktik und Mathematik – von der Grundlagenforschung bis zur Unterrichtspraxis."
        />

        {featured.length ? (
          <div className="mb-16">
            <h3 className="font-serif text-2xl mb-6">Ausgewählte Publikationen</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((p) => (
                <article key={p.id} className="p-6 rounded-md border border-border bg-card shadow-soft flex flex-col">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <span className="font-serif text-xl text-highlight">{p.year}</span>
                    <Badges p={p} />
                  </div>
                  <h4 className="font-serif text-lg leading-snug mb-2">{p.title}</h4>
                  <p className="text-sm text-foreground/75">{p.authors}</p>
                  <p className="text-sm text-muted-foreground italic mt-1">{p.venue}</p>
                  <p className="text-sm mt-3">
                    <PublicationLink p={p} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <h3 className="font-serif text-2xl">Alle Publikationen</h3>
          <div role="group" aria-label="Publikationen filtern" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {filterLabels[f]} <span className="tabular-nums opacity-70">({count(f)})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {byYear.map(([year, items]) => (
            <div key={year} className="grid md:grid-cols-12 gap-4">
              <h4 className="md:col-span-2 font-serif text-3xl text-highlight md:sticky md:top-24 self-start">{year}</h4>
              <ol className="md:col-span-10 border-t border-border">
                {items.map((p) => (
                  <li key={p.id} className="py-5 border-b border-border">
                    <Badges p={p} />
                    <p className="font-serif text-lg leading-snug mt-1.5">{p.title}</p>
                    <p className="text-sm mt-1 text-foreground/75">
                      {p.authors ? <>{p.authors} · </> : null}
                      <span className="italic text-muted-foreground">{p.venue}</span>
                    </p>
                    {publicationLink(p) ? (
                      <p className="text-sm mt-1">
                        <PublicationLink p={p} />
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <span className="text-muted-foreground">Vollständige Profile:</span>
          {publicationProfiles.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium border-b border-accent pb-0.5 hover:text-highlight transition-colors"
            >
              {p.label} →
            </a>
          ))}
        </div>
        {generated.fetchedAt ? (
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Automatisch mit {syncSources} abgeglichen am{" "}
            {new Date(generated.fetchedAt).toLocaleDateString("de-DE", { dateStyle: "long" })}.
          </p>
        ) : null}
      </div>
    </section>
  );
};
