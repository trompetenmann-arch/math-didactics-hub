import { describe, expect, it } from "vitest";
import { manualPublications } from "@/data/publications";
import { matchesFilter, mergePublications, publicationLink, type Publication } from "./publications";

const base: Publication = {
  id: "a",
  year: 2024,
  category: "journal",
  authors: "Katter, V.",
  title: "Das digitale Federpendel — virtuell-enaktiv zu periodischen Prozessen",
  venue: "mathematik lehren 243",
};

describe("mergePublications", () => {
  it("ergänzt fehlende DOIs bei gleichem Titel statt Duplikate anzulegen", () => {
    const fetched: Publication = {
      ...base,
      id: "pub-1",
      title: "Das digitale Federpendel - virtuell-enaktiv zu periodischen Prozessen.",
      doi: "10.1000/xyz",
      source: "pub",
    };
    const merged = mergePublications([base], [fetched]);
    expect(merged).toHaveLength(1);
    expect(merged[0].doi).toBe("10.1000/xyz");
    expect(merged[0].authors).toBe("Katter, V.");
  });

  it("hängt neue Einträge an und sortiert nach Jahr absteigend", () => {
    const fetched: Publication = { ...base, id: "pub-2", year: 2027, title: "Ein ganz neuer Beitrag", source: "pub" };
    const merged = mergePublications([base], [fetched]);
    expect(merged.map((p) => p.id)).toEqual(["pub-2", "a"]);
  });

  it("erkennt Duplikate zwischen PUB und ORCID über die DOI", () => {
    const a: Publication = { ...base, id: "pub-3", title: "Titel A", doi: "10.1/abc", source: "pub" };
    const b: Publication = { ...base, id: "orcid-3", title: "Title A (English)", doi: "https://doi.org/10.1/ABC", source: "orcid" };
    expect(mergePublications([], [a, b])).toHaveLength(1);
  });

  it("enthält keine doppelten IDs in der gepflegten Liste", () => {
    const ids = manualPublications.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("publicationLink", () => {
  it("bevorzugt die DOI", () => {
    expect(publicationLink({ ...base, doi: "10.1/abc", url: "https://example.org" })).toBe("https://doi.org/10.1/abc");
  });

  it("verwirft unsichere URLs", () => {
    expect(publicationLink({ ...base, url: "javascript:alert(1)" })).toBeUndefined();
  });
});

describe("matchesFilter", () => {
  it("filtert peer-reviewed Beiträge", () => {
    expect(matchesFilter({ ...base, peerReviewed: true }, "peer")).toBe(true);
    expect(matchesFilter(base, "peer")).toBe(false);
  });
});
