import { motion } from "framer-motion";
import Section from "../components/Section";
import { timeline } from "../data/profile";

export default function Experience() {
    return (
        <div className="pt-20">
            <Section id="experience" kicker="Experience" title="Learning by building." muted>
                <div className="mx-auto max-w-4xl">
                    <div className="relative space-y-5">
                        <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent md:block" />
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -22 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ delay: index * 0.08 }}
                                className="relative md:pl-16"
                            >
                                <div className="absolute left-0 top-5 hidden h-10 w-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 md:grid">
                                    <item.icon size={18} className="text-primary" />
                                </div>
                                <div className="rounded-xl border border-white/10 bg-surface p-6">
                                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                                                {item.type}
                                            </p>
                                            <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                                            <p className="mt-1 text-sm text-slate-500">{item.org}</p>
                                        </div>
                                        <span className="self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="mt-5 leading-7 text-slate-500">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
