import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const themes = [
  { id: "ocean-cyan", label: "Ocean Cyan", dot: "bg-[hsl(198,93%,60%)]" },
  { id: "dark-graphite-aqua", label: "Graphite Aqua", dot: "bg-[hsl(174,72%,46%)]" },
  { id: "light-steel-blue", label: "Light Steel Blue", dot: "bg-[hsl(224,76%,53%)]" },
] as const;

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "ocean-cyan";
    }
    return "ocean-cyan";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
  }, [active]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
        aria-label="Switch theme"
      >
        <Palette size={16} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-border bg-card/95 backdrop-blur-xl p-2 shadow-lg">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => { setActive(t.id); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  active === t.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${t.dot} shrink-0`} />
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
