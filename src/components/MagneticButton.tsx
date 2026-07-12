"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  className?: string;
};

export function MagneticButton({ children, onClick, variant = "solid", className = "" }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const move = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${
      (e.clientY - r.top - r.height / 2) * 0.25
    }px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-magenta text-white hover:bg-ink"
      : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper";

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`${base} ${styles} ${className}`}
      style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s" }}
    >
      {children}
    </button>
  );
}
