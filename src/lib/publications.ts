export type PublicationCategory = "journal" | "proceedings" | "book" | "chapter" | "editorship" | "other";

export type Publication = {
  id: string;
  year: number;
  category: PublicationCategory;
  peerReviewed?: boolean;
  authors: string;
  title: string;
  venue: string;
  doi?: string;
  url?: string;
  featured?: boolean;
  note?: string;
  source?: "manual" | "pub" | "orcid";
};

export const categoryLabels: Record<PublicationCategory, string> = {
  journal: "Zeitschriftenbeitrag",
  proceedings: "Tagungsbeitrag",
  book: "Monografie",
  chapter: "Buchkapitel",
  editorship: "Herausgeberschaft",
  other: "Beitrag",
};

export type PublicationFilter = "all" | "peer" | "journal" | "proceedings" | "books";

export const filterLabels: Record<PublicationFilter, string> = {
  all: "Alle",
  peer: "Peer-reviewed",
  journal: "Zeitschriften",
  proceedings: "Tagungsbände",
  books: "Bücher & Herausgaben",
};

export const matchesFilter = (p: Publication, filter: PublicationFilter) => {
  switch (filter) {
    case "all":
      return true;
    case "peer":
      return Boolean(p.peerReviewed);
    case "journal":
      return p.category === "journal";
    case "proceedings":
      return p.category === "proceedings";
    case "books":
      return p.category === "book" || p.category === "chapter" || p.category === "editorship";
  }
};

export const normalizeTitle = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const normalizeDoi = (doi?: string) =>
  doi
    ?.trim()
    .toLowerCase()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//, "") || undefined;

// Titel aus verschiedenen Quellen unterscheiden sich oft nur in Untertitel oder Satzzeichen.
// Verglichen wird daher der normalisierte Titelanfang.
const titleKey = (title: string) => normalizeTitle(title).slice(0, 48);

const isSamePublication = (a: Publication, b: Publication) => {
  const doiA = normalizeDoi(a.doi);
  const doiB = normalizeDoi(b.doi);
  if (doiA && doiB) return doiA === doiB;
  return titleKey(a.title) === titleKey(b.title);
};

/**
 * Führt die gepflegte Liste mit automatisch abgerufenen Einträgen (PUB, ORCID) zusammen.
 * Die gepflegten Einträge haben Vorrang; automatische Einträge ergänzen fehlende DOIs/Links
 * oder werden als neue Einträge angehängt.
 */
export const mergePublications = (manual: Publication[], fetched: Publication[]): Publication[] => {
  const merged: Publication[] = manual.map((p) => ({ ...p, source: p.source ?? "manual" }));

  for (const item of fetched) {
    const existing = merged.find((p) => isSamePublication(p, item));
    if (existing) {
      existing.doi ??= item.doi;
      existing.url ??= item.url;
      continue;
    }
    merged.push(item);
  }

  return merged
    .map((p, index) => ({ p, index }))
    .sort((a, b) => b.p.year - a.p.year || a.index - b.index)
    .map(({ p }) => p);
};

export const publicationLink = (p: Publication) => {
  if (p.doi) return `https://doi.org/${normalizeDoi(p.doi)}`;
  // Nur http(s)-Links übernehmen – Daten aus externen Quellen könnten sonst z. B. javascript:-URLs enthalten.
  return p.url && /^https?:\/\//i.test(p.url) ? p.url : undefined;
};
