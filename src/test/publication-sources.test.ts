import { describe, expect, it } from "vitest";
import { fromLibreCat, fromOrcidGroup, parseLibreCatExport } from "../../scripts/publication-sources.mjs";

describe("fromLibreCat", () => {
  it("wandelt einen PUB-Datensatz um", () => {
    const p = fromLibreCat({
      _id: "3016436",
      type: "journal_article",
      year: "2026",
      title: "Das Produkt als Flächeninhalt",
      author: [
        { first_name: "Valentin", last_name: "Katter" },
        { first_name: "Daniel", last_name: "Frohn" },
      ],
      publication: "mathematik lehren",
      volume: "255",
      page: "2-8",
      quality_controlled: "1",
    });
    expect(p).toMatchObject({
      id: "pub-3016436",
      year: 2026,
      category: "journal",
      peerReviewed: true,
      authors: "Katter, V.; Frohn, D.",
      venue: "mathematik lehren 255, 2–8",
      url: "https://pub.uni-bielefeld.de/record/3016436",
    });
  });

  it("kennzeichnet Herausgeberschaften", () => {
    const p = fromLibreCat({ _id: "1", type: "book_editor", year: 2026, title: "Heft", editor: [{ first_name: "Valentin", last_name: "Katter" }] });
    expect(p?.authors).toBe("Katter, V. (Hrsg.)");
    expect(p?.category).toBe("editorship");
  });

  it("ignoriert unvollständige Datensätze", () => {
    expect(fromLibreCat({ _id: "2" })).toBeNull();
  });
});

describe("fromOrcidGroup", () => {
  it("liest Titel, Jahr und DOI", () => {
    const p = fromOrcidGroup({
      "work-summary": [
        {
          "put-code": 42,
          type: "journal-article",
          title: { title: { value: "A title" } },
          "publication-date": { year: { value: "2025" } },
          "journal-title": { value: "JMD" },
          "external-ids": { "external-id": [{ "external-id-type": "doi", "external-id-value": "10.1/x" }] },
        },
      ],
    });
    expect(p).toMatchObject({ id: "orcid-42", year: 2025, category: "journal", doi: "10.1/x", venue: "JMD" });
  });
});

describe("parseLibreCatExport", () => {
  it("versteht Arrays, Trefferobjekte und JSON Lines", () => {
    expect(parseLibreCatExport('[{"_id":"1"}]')).toHaveLength(1);
    expect(parseLibreCatExport('{"hits":[{"_id":"1"},{"_id":"2"}]}')).toHaveLength(2);
    expect(parseLibreCatExport('{"_id":"1"}\n{"_id":"2"}\n')).toHaveLength(2);
  });
});
