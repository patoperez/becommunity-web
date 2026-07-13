import { Link } from "@/i18n/navigation";
import { Hand } from "../Hand";
import { caseColor, type CaseItem } from "./types";

export function CaseCard({
  item,
  viewCase,
  tag,
}: {
  item: CaseItem;
  viewCase: string;
  tag: string;
}) {
  const color = caseColor(item.slug);
  return (
    <Link
      href={`/casos/${item.slug}`}
      className="group block overflow-hidden rounded-[14px] border border-paper-2 bg-paper transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div
        className="relative flex aspect-[16/10] items-end overflow-hidden p-5"
        style={{ backgroundColor: color }}
      >
        <div className="absolute -right-3 -top-3 flex rotate-[-8deg] gap-1 opacity-25">
          <Hand color="#FAF8F3" size={34} />
          <Hand color="#FAF8F3" size={34} />
          <Hand color="#FAF8F3" size={34} />
        </div>
        <span className="rounded-full bg-white/90 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-ink">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-[1.45rem]">{item.client}</h3>
        <p className="mt-1.5 text-[0.98rem] text-ink/70">{item.tagline}</p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-[1.9rem] font-semibold" style={{ color }}>
            {item.metrics[0].value}
          </span>
          <span className="text-[0.85rem] text-ink/60">{item.metrics[0].label}</span>
        </div>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-magenta">
          {viewCase}{" "}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
