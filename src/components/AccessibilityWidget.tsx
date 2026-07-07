import { useEffect, useState, useCallback } from "react";
import { Accessibility, X, Plus, Minus, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Settings = {
  fontScale: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  reducedMotion: boolean;
  readableFont: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 100,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  reducedMotion: false,
  readableFont: false,
};

const STORAGE_KEY = "ultrapharm_a11y";

function applySettings(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = `${s.fontScale}%`;
  root.classList.toggle("a11y-high-contrast", s.highContrast);
  root.classList.toggle("a11y-grayscale", s.grayscale);
  root.classList.toggle("a11y-highlight-links", s.highlightLinks);
  root.classList.toggle("a11y-reduced-motion", s.reducedMotion);
  root.classList.toggle("a11y-readable-font", s.readableFont);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Settings;
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      applySettings(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = () => {
    applySettings(DEFAULTS);
    setSettings(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="פתח תפריט נגישות"
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <Accessibility size={28} />
      </button>

      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="תפריט נגישות"
          dir="rtl"
          className="fixed bottom-24 left-5 z-50 w-[300px] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-border bg-background p-4 shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">תפריט נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגור תפריט נגישות"
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mb-3">
            <div className="mb-1 text-sm font-medium text-foreground">גודל טקסט ({settings.fontScale}%)</div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => update({ fontScale: Math.max(80, settings.fontScale - 10) })}
                aria-label="הקטן טקסט"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted"
              >
                <Minus size={16} />
              </button>
              <div className="h-2 flex-1 rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${((settings.fontScale - 80) / 70) * 100}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => update({ fontScale: Math.min(150, settings.fontScale + 10) })}
                aria-label="הגדל טקסט"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <ToggleButton active={settings.highContrast} onClick={() => update({ highContrast: !settings.highContrast })}>
              ניגודיות גבוהה
            </ToggleButton>
            <ToggleButton active={settings.grayscale} onClick={() => update({ grayscale: !settings.grayscale })}>
              גווני אפור
            </ToggleButton>
            <ToggleButton active={settings.highlightLinks} onClick={() => update({ highlightLinks: !settings.highlightLinks })}>
              הדגשת קישורים
            </ToggleButton>
            <ToggleButton active={settings.reducedMotion} onClick={() => update({ reducedMotion: !settings.reducedMotion })}>
              עצירת אנימציות
            </ToggleButton>
            <ToggleButton active={settings.readableFont} onClick={() => update({ readableFont: !settings.readableFont })}>
              גופן קריא
            </ToggleButton>
            <button
              type="button"
              onClick={reset}
              className="flex items-center justify-center gap-1 rounded-md border border-border px-2 py-2 text-xs font-medium hover:bg-muted"
            >
              <RotateCcw size={14} /> איפוס
            </button>
          </div>

          <div className="mt-3 border-t border-border pt-3 text-center">
            <Link
              to="/accessibility"
              onClick={() => setOpen(false)}
              className="text-sm text-primary hover:underline"
            >
              הצהרת נגישות מלאה
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-md border px-2 py-2 text-xs font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}
