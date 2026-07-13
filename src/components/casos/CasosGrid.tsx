"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CaseCard } from "./CaseCard";
import type { CaseItem } from "./types";

type Filter = "all" | "colegios" | "empresas";

export function CasosGrid() {
  const t = useTranslations("casos");
  const items = t.raw("items") as CaseItem[];
  const [filter, setFilter] = useState<Filter>("all");

  const chips: { id: Filter; label: string }[] = [
    { id: "all", label: t("filterAll") },
    { id: "colegios", label: t("filterColegios") },
    { id: "empresas", label: t("filterEmpresas") },
  ];

  const filtered = items.filter((i) => filter === "all" || i.vertical === filter);
  const tagOf = (v: string) => (v === "colegios" ? t("colegioTag") : t("empresaTag"));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-colors ${
              filter === c.id ? "bg-ink text-paper" : "border border-paper-2 text-ink/70 hover:text-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filtered.map((item) => (
          <CaseCard key={item.slug} item={item} viewCase={t("viewCase")} tag={tagOf(item.vertical)} />
        ))}
      </div>
    </div>
  );
}
