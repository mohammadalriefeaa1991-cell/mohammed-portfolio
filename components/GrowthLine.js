export default function GrowthLine({ className = "" }) {
  return (
    <svg
      className={`growth-line ${className}`}
      viewBox="0 0 84 20"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="growthGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B2FA0" />
          <stop offset="45%" stopColor="#3E6FE0" />
          <stop offset="75%" stopColor="#5FC4EC" />
          <stop offset="100%" stopColor="#9C3E86" />
        </linearGradient>
      </defs>
      <path d="M2 16 L26 16 L34 4 L42 16 L54 16 L62 6 L70 16 L82 16" />
    </svg>
  );
}
