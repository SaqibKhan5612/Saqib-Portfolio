import { useState, useRef, useEffect } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const options = [
        { value: "light" as const, icon: Sun, label: "Light" },
        { value: "dark" as const, icon: Moon, label: "Dark" },
        { value: "system" as const, icon: Monitor, label: "System" },
    ];

    const current = options.find((o) => o.value === theme) || options[1];
    const CurrentIcon = current.icon;

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-primary/50 hover:text-primary dark:border-white/10 dark:text-slate-400"
                aria-label="Toggle theme"
            >
                <CurrentIcon size={18} />
            </button>

            {open && (
                <div className="absolute right-0 top-12 z-50 min-w-[140px] overflow-hidden rounded-xl border border-line bg-surface shadow-xl shadow-black/30">
                    {options.map(({ value, icon: Icon, label }) => (
                        <button
                            key={value}
                            type="button"
                            onClick={() => {
                                setTheme(value);
                                setOpen(false);
                            }}
                            className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition hover:bg-white/5 ${theme === value ? "text-primary font-semibold" : "text-slate-400"
                                }`}
                        >
                            <Icon size={15} />
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
