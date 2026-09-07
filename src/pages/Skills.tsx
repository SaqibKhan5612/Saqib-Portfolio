import { motion } from "framer-motion";
import Section from "../components/Section";
import { skills } from "../data/profile";

export default function Skills() {
    return (
        <div className="pt-20">
            <Section id="skills" kicker="My Skills" title="Tools I use to build." muted>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: index * 0.07 }}
                            className="rounded-xl border border-white/10 bg-surface p-6"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                                {group.title}
                            </h3>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300 transition hover:border-primary/30 hover:text-primary"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
