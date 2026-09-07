import { motion } from "framer-motion";
import { ChevronRight, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import PhotoPanel from "../components/PhotoPanel";

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

export default function Home() {
    return (
        <section className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 py-12 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                    className="relative z-10"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2"
                    >
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                            Available for work
                        </span>
                    </motion.div>

                    <motion.p variants={fadeUp} className="mb-3 text-lg font-semibold text-slate-300">
                        Hello, I am
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl"
                    >
                        {profile.name}
                        <span className="block text-primary">{profile.role}</span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-3">
                        {profile.roles.map((role) => (
                            <span
                                key={role}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-slate-400"
                            >
                                {role}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
                    >
                        {profile.tagline}
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
                        >
                            Hire Me
                            <ChevronRight size={18} />
                        </Link>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wide text-slate-200 transition hover:border-primary/45 hover:text-primary"
                        >
                            <GitBranch size={18} />
                            GitHub
                        </a>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
                        {[
                            ["3+", "Years Experience"],
                            ["50+", "Projects Built"],
                            ["15+", "Technologies"],
                        ].map(([value, label]) => (
                            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                                <p className="text-2xl font-black text-white">{value}</p>
                                <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <PhotoPanel />
                </motion.div>
            </div>
        </section>
    );
}
