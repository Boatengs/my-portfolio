// Peer reviewed publications, newest first.
// Source of record: ORCID 0009-0008-0127-9361. Author order is as published.
// Volume and issue match each article's DOI.

export type Publication = {
  title: string;
  journal: string;
  volume: string;
  issue: string;
  published: string;
  year: string;
  type: string;
  authors: string[];
  doi: string;
  keywords: string[];
};

export const ownName = "Sampson Boateng";

export const orcidId = "0009-0008-0127-9361";

export const orcidUrl = `https://orcid.org/${orcidId}`;

export const publications: Publication[] = [
  {
    title:
      "Predictive Sentiment Analysis and Proactive Service Intelligence: Implications for Long-Term Customer Loyalty and Retention-A Scoping Review",
    journal: "Advances in Research",
    volume: "27",
    issue: "6",
    published: "15 October 2026",
    year: "2026",
    type: "Scoping review",
    authors: [
      "Rahmat Kofoworola Sanusi",
      "Temiloluwa Paul Adetola",
      "Abimbola Serifat Oreoluwa",
      "Sampson Boateng",
    ],
    doi: "10.9734/air/2026/v27i61753",
    keywords: ["Sentiment Analysis", "Customer Retention", "Service Intelligence"],
  },
  {
    title:
      "Real-World Evidence and Machine Learning for Predictive Oncology and Clinical Decision Support: A Critical Narrative Review",
    journal: "Archives of Current Research International",
    volume: "26",
    issue: "9",
    published: "8 September 2026",
    year: "2026",
    type: "Narrative review",
    authors: [
      "Emmanuel Niiboye Odai",
      "Estherla Twene",
      "Nurudeen Gbadegesin",
      "Andrew Oluwashijibomi Adegoju",
      "David Tetteh Akuaku Blemano",
      "Sampson Boateng",
    ],
    doi: "10.9734/acri/2026/v26i92156",
    keywords: ["Machine Learning", "Oncology", "Clinical Decision Support"],
  },
];
