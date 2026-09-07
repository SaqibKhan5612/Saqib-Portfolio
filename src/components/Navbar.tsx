import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55 }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                    ? "border-b border-white/10 bg-[#07100a]/86 shadow-2xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-[#07100a]/86"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2" aria-label="Go to home">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary font-black text-ink">
                        K
                    </span>
                    <span className="text-lg font-black text-white">{profile.logo}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navLinks.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] transition hover:bg-white/5 hover:text-primary ${location.pathname === path ? "text-primary" : "text-slate-400"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Right side */}
                <div className="hidden items-center gap-3 lg:flex">
                    <ThemeToggle />
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                    >
                        <Download size={16} />
                        Download CV
                    </a>
                </div>

                {/* Mobile toggle */}
                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-slate-200 transition hover:border-primary/50 hover:text-primary"
                        aria-label="Toggle navigation"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t border-white/10 bg-surface lg:hidden"
                    >
                        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
                            {navLinks.map(({ label, path }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`rounded-lg px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] transition hover:bg-primary/10 hover:text-primary ${location.pathname === path ? "text-primary" : "text-slate-300"
                                        }`}
                                >
                                    {label}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-ink"
                            >
                                <Download size={16} />
                                Download CV
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
