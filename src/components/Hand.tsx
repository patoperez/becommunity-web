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
      viewBox="0 0 24 24"
      className={className}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M12 2c.6 0 1 .4 1 1v6h1V4c0-.6.4-1 1-1s1 .4 1 1v7h1V6c0-.6.4-1 1-1s1 .4 1 1v9c0 3.3-2.5 6-6 6-1.9 0-3.2-.7-4.2-1.7l-4-4c-.5-.5-.4-1.3.2-1.7.5-.3 1.2-.2 1.6.2L11 15V3c0-.6.4-1 1-1z"
      />
    </svg>
  );
}
