export type CaseMetric = { value: string; label: string };

export type CaseItem = {
  slug: string;
  vertical: "colegios" | "empresas";
  client: string;
  tagline: string;
  summary: string;
  metrics: CaseMetric[];
  challenge: string;
  solutionIntro: string;
  solution: string[];
  results: string;
  quote: { text: string; author: string; role: string };
};

export const CASE_SLUGS = [
  "colegio-monteverde",
  "instituto-altavista",
  "marca-aurora",
  "grupo-nodo",
];

const COLORS: Record<string, string> = {
  "colegio-monteverde": "#1B72B8",
  "instituto-altavista": "#7DB52E",
  "marca-aurora": "#E23B8A",
  "grupo-nodo": "#9B84C4",
};

export const caseColor = (slug: string): string => COLORS[slug] ?? "#1B72B8";
