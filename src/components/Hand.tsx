type HandProps = {
  color?: string;
  size?: number;
  className?: string;
  rotate?: number;
};

export function Hand({ color = "currentColor", size = 24, className, rotate = 0 }: HandProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      fill={color}
      aria-hidden="true"
    >
      {/* palma */}
      <rect x="12" y="20" width="26" height="20" rx="9" />
      {/* pulgar */}
      <rect x="6" y="24.5" width="4.8" height="12.5" rx="2.4" transform="rotate(34 8.4 30.7)" />
      {/* cuatro dedos */}
      <rect x="14.6" y="11" width="4.8" height="15" rx="2.4" />
      <rect x="20.6" y="7" width="4.8" height="19" rx="2.4" />
      <rect x="26.7" y="8" width="4.8" height="18" rx="2.4" />
      <rect x="32.8" y="12" width="4.8" height="14" rx="2.4" />
    </svg>
  );
}
