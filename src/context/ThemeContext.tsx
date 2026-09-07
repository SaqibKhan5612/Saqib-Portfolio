import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
    theme: Theme;
    setTheme: (t: Theme) => void;
    resolved: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => { },
    resolved: "dark",
});

export function useTheme() {
    return useContext(ThemeContext);
}

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem("portfolio-theme");
        return (saved as Theme) || "dark";
    });

    const resolved = theme === "system" ? getSystemTheme() : theme;

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(resolved);
        root.setAttribute("data-theme", resolved);
        localStorage.setItem("portfolio-theme", theme);
    }, [theme, resolved]);

    useEffect(() => {
        if (theme !== "system") return;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => setThemeState((prev) => (prev === "system" ? "system" : prev));
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme]);

    function setTheme(t: Theme) {
        setThemeState(t);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolved }}>
            {children}
        </ThemeContext.Provider>
    );
}
