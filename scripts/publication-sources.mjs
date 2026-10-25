// Umwandlung von PUB- (LibreCat) und ORCID-Datensätzen in das Format der Homepage
// (siehe src/lib/publications.ts). Reine Funktionen, damit sie testbar sind.

const LIBRECAT_CATEGORIES = {
  journal_article: "journal",
  newspaper_article: "journal",
  conference: "proceedings",
  conference_abstract: "proceedings",
  book: "book",
  dissertation: "book",
  book_chapter: "chapter",
  encyclopedia_article: "chapter",
  book_editor: "editorship",
  journal_editor: "editorship",
  conference_editor: "editorship",
};

const ORCID_CATEGORIES = {
  "journal-article": "journal",
  "magazine-article": "journal",
  "conference-paper": "proceedings",
  "conference-abstract": "proceedings",
  book: "book",
  "dissertation-thesis": "book",
  "book-chapter": "chapter",
  "edited-book": "editorship",
};

const initials = (firstName = "") =>
  firstName
    .split(/\s+/)
    .filter(Boolean)
    .map((part) =>
      part
        .split("-")
        .map((p) => `${p[0]}.`)
        .join("-"),
    )
    .join(" ");

const formatPerson = (person) => {
  if (person.last_name) {
    const init = initials(person.first_name);
    return init ? `${person.last_name}, ${init}` : person.last_name;
  }
  return person.full_name ?? "";
};

const formatPages = (page) => (page ? String(page).replace(/\s*-+\s*/g, "–") : "");

const joinVenue = (container, volume, issue, page) => {
  let venue = container ?? "";
  const vol = volume ? (issue ? `${volume} (${issue})` : `${volume}`) : issue ? `(${issue})` : "";
  if (vol) venue = venue ? `${venue} ${vol}` : vol;
  const pages = formatPages(page);
  if (pages) venue = venue ? `${venue}, ${pages}` : pages;
  return venue;
};

const asText = (value) => (Array.isArray(value) ? value[0] : value);

/** LibreCat-JSON-Datensatz aus PUB → Publication (oder null, wenn unbrauchbar). */
export const fromLibreCat = (record) => {
  const title = asText(record?.title);
  const year = Number.parseInt(record?.year, 10);
  if (!title || !Number.isFinite(year)) return null;

  const authors = (record.author ?? []).map(formatPerson).filter(Boolean);
  const editors = (record.editor ?? []).map(formatPerson).filter(Boolean);
  const people = authors.length ? authors.join("; ") : editors.length ? `${editors.join("; ")} (Hrsg.)` : "";

  const container = asText(record.publication) ?? (record.conference?.name ? record.conference.name : record.publisher);
  const qc = record.quality_controlled;

  return {
    id: `pub-${record._id}`,
    year,
    category: LIBRECAT_CATEGORIES[record.type] ?? "other",
    peerReviewed: qc === true || qc === 1 || qc === "1" || undefined,
    authors: people,
    title: String(title).trim(),
    venue: joinVenue(container, record.volume, record.issue, record.page),
    doi: asText(record.doi) || undefined,
    url: record._id ? `https://pub.uni-bielefeld.de/record/${record._id}` : undefined,
    source: "pub",
  };
};

/** Eintrag aus GET /v3.0/{orcid}/works → Publication (oder null). */
export const fromOrcidGroup = (group) => {
  const summary = group?.["work-summary"]?.[0];
  const title = summary?.title?.title?.value;
  const year = Number.parseInt(summary?.["publication-date"]?.year?.value, 10);
  if (!title || !Number.isFinite(year)) return null;

  const ids = summary["external-ids"]?.["external-id"] ?? [];
  const doi = ids.find((id) => id["external-id-type"] === "doi")?.["external-id-value"];

  return {
    id: `orcid-${summary["put-code"]}`,
    year,
    category: ORCID_CATEGORIES[summary.type] ?? "other",
    authors: "",
    title: String(title).trim(),
    venue: summary["journal-title"]?.value ?? "",
    doi: doi || undefined,
    url: summary.url?.value || undefined,
    source: "orcid",
  };
};

/** PUB liefert je nach Export-URL ein Array, ein Objekt mit Treffern oder JSON Lines. */
export const parseLibreCatExport = (text) => {
  const trimmed = text.trim();
  if (!trimmed) return [];
  try {
    const data = JSON.parse(trimmed);
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.hits)) return data.hits;
    if (data && typeof data === "object" && data._id) return [data];
    return [];
  } catch {
    return trimmed
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }
};
