// Zentrale Angaben, die an mehreren Stellen der Seite verwendet werden.

export const CONTACT_EMAIL = "vkatter@uni-bielefeld.de";

// PUB-Personen-ID (identisch mit der eKVV-/PEVZ-ID).
export const PUB_PERSON_ID = "78762114";

// ORCID-iD im Format 0000-0000-0000-0000. Leer lassen, solange keine iD hinterlegt ist –
// dann wird der Link ausgeblendet.
export const ORCID_ID = "";

export type Profile = { label: string; href: string };

export const profiles: Profile[] = [
  ...(ORCID_ID ? [{ label: "ORCID", href: `https://orcid.org/${ORCID_ID}` }] : []),
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=s5muH9sAAAAJ&hl=de" },
  { label: "PUB Bielefeld", href: `https://pub.uni-bielefeld.de/person/${PUB_PERSON_ID}` },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Valentin-Katter" },
  { label: "eKVV Bielefeld", href: `https://ekvv.uni-bielefeld.de/pers_publ/publ/PersonDetail.jsp?personId=${PUB_PERSON_ID}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/valentin-katter-74b142402/" },
];
