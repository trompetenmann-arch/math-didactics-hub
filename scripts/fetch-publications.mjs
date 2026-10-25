#!/usr/bin/env node
// Holt die Publikationsliste aus PUB (Universität Bielefeld) und optional aus ORCID und
// schreibt sie nach src/data/publications.generated.json. Läuft im Deploy-Workflow vor dem Build.
//
// Umgebungsvariablen:
//   PUB_PERSON_ID   PUB-Personen-ID (Standard: 78762114)
//   PUB_EXPORT_URL  optional: vollständige JSON-Export-URL aus PUB („Export / Einbettung“)
//   ORCID_ID        optional: ORCID-iD, z. B. 0000-0002-1825-0097
//
// Schlägt der Abruf fehl, bleibt die vorhandene Datei unverändert und der Build läuft weiter.

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { fromLibreCat, fromOrcidGroup, parseLibreCatExport } from "./publication-sources.mjs";

const OUTPUT = fileURLToPath(new URL("../src/data/publications.generated.json", import.meta.url));
const PUB_BASE = "https://pub.uni-bielefeld.de";
const TIMEOUT_MS = 20_000;

const pubPersonId = process.env.PUB_PERSON_ID?.trim() || "78762114";
const orcidId = process.env.ORCID_ID?.trim();

const fetchText = async (url, accept) => {
  const res = await fetch(url, {
    headers: { Accept: accept, "User-Agent": "valentinkatter.de publication sync" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
};

const fetchPub = async () => {
  const id = encodeURIComponent(pubPersonId);
  const candidates = process.env.PUB_EXPORT_URL
    ? [process.env.PUB_EXPORT_URL]
    : [
        `${PUB_BASE}/person/${id}?fmt=json&limit=1000`,
        `${PUB_BASE}/publication?cql=person=${id}&fmt=json&limit=1000`,
        `${PUB_BASE}/publication?q=person=${id}&fmt=json&limit=1000`,
      ];

  for (const url of candidates) {
    try {
      const records = parseLibreCatExport(await fetchText(url, "application/json"));
      const items = records.map(fromLibreCat).filter(Boolean);
      if (items.length) {
        console.log(`PUB: ${items.length} Einträge von ${url}`);
        return items;
      }
      console.warn(`PUB: keine verwertbaren Einträge von ${url}`);
    } catch (error) {
      console.warn(`PUB: ${url} fehlgeschlagen (${error.message})`);
    }
  }
  return [];
};

const fetchOrcid = async () => {
  if (!orcidId) return [];
  if (!/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(orcidId)) {
    console.warn(`ORCID: ungültige iD „${orcidId}“`);
    return [];
  }
  try {
    const data = JSON.parse(await fetchText(`https://pub.orcid.org/v3.0/${orcidId}/works`, "application/json"));
    const items = (data.group ?? []).map(fromOrcidGroup).filter(Boolean);
    console.log(`ORCID: ${items.length} Einträge`);
    return items;
  } catch (error) {
    console.warn(`ORCID: Abruf fehlgeschlagen (${error.message})`);
    return [];
  }
};

const main = async () => {
  const [pub, orcid] = await Promise.all([fetchPub(), fetchOrcid()]);
  const items = [...pub, ...orcid];

  if (!items.length) {
    console.warn("Keine Publikationen abgerufen – vorhandene Datei bleibt unverändert.");
    return;
  }

  const sources = [pub.length && "pub", orcid.length && "orcid"].filter(Boolean);
  const next = { fetchedAt: new Date().toISOString(), sources, items };

  await writeFile(OUTPUT, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`${items.length} Einträge nach ${OUTPUT} geschrieben.`);
};

main().catch((error) => {
  // Der Build soll an einem Abruffehler nie scheitern.
  console.warn(`Publikationsabruf abgebrochen: ${error.message}`);
});
