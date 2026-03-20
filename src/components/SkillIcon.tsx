// SVG skill icons - simple inline SVGs for each technology
const icons: Record<string, JSX.Element> = {
  react: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <circle cx="16" cy="16" r="3" fill="hsl(var(--primary))" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#F7DF1E" />
      <text x="16" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#323330">JS</text>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#3178C6" />
      <text x="16" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">TS</text>
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path d="M4 2l2.4 26L16 30l9.6-2L28 2H4z" fill="#E34F26" />
      <text x="16" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">H5</text>
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path d="M4 2l2.4 26L16 30l9.6-2L28 2H4z" fill="#1572B6" />
      <text x="16" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">C3</text>
    </svg>
  ),
  expo: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <text x="16" y="20" textAnchor="middle" fontSize="8" fontWeight="bold" fill="hsl(var(--primary))">EX</text>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#007396" />
      <text x="16" y="22" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">☕</text>
    </svg>
  ),
  spring: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="14" fill="#6DB33F" />
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">S</text>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#339933" />
      <text x="16" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">N</text>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="hsl(var(--muted))" />
      <text x="16" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="hsl(var(--foreground))">Ex</text>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#00758F" />
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">SQL</text>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#47A248" />
      <text x="16" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">M</text>
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#FFCA28" />
      <text x="16" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333">🔥</text>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#F05032" />
      <text x="16" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Git</text>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="14" fill="hsl(var(--foreground))" />
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="hsl(var(--background))">GH</text>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#2496ED" />
      <text x="16" y="22" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">🐳</text>
    </svg>
  ),
};

interface SkillIconProps {
  name: string;
  className?: string;
}

const SkillIcon = ({ name }: SkillIconProps) => {
  return icons[name] || (
    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
      <span className="text-xs font-bold text-primary">{name.slice(0, 2).toUpperCase()}</span>
    </div>
  );
};

export default SkillIcon;
