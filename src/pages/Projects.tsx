import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers3 } from "lucide-react";
import Section from "../components/Section";
import { n8nProjects, crewaiProjects, fullstackProjects, profile } from "../data/profile";

function FeaturedCard({
    title,
    description,
    tech,
    tag,
}: {
    title: string;
    description: string;
    tech: string[];
    tag: string;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/35"
        >
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(200,240,0,0.12),transparent_42%)]" />
            <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                            Featured
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                            <Layers3 size={11} />
                            {tag}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-primary/40 hover:text-primary"
                            aria-label={`${title} source`}
                        >
                            <GitBranch size={16} />
                        </a>
                    </div>
                </div>
                <h3 className="text-2xl font-black text-white transition group-hover:text-primary">
                    {title}
                </h3>
                <p className="mt-4 leading-7 text-slate-500">{description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="rounded-lg bg-white/[0.055] px-3 py-1.5 font-mono text-xs text-slate-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

function ProjectGrid({ names }: { names: string[] }) {
    return (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {names.map((name, i) => (
                <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.03 }}
                    className="rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm font-medium text-slate-300 transition hover:border-primary/30 hover:text-primary"
                >
                    {name}
                </motion.div>
            ))}
        </div>
    );
}

function CrewAICard({ title, description }: { title: string; description: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-primary/30 hover:-translate-y-0.5">
            <h4 className="font-bold text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="pt-20">
            {/* Automation / n8n */}
            <Section id="projects-n8n" kicker="Automation / n8n" title={`${n8nProjects.count} Projects`}>
                <FeaturedCard
                    title={n8nProjects.featured.title}
                    description={n8nProjects.featured.description}
                    tech={n8nProjects.featured.tech}
                    tag="Automation"
                />
                <ProjectGrid names={n8nProjects.others} />
            </Section>

            {/* CrewAI */}
            <Section
                id="projects-crewai"
                kicker="CrewAI Projects"
                title={`${crewaiProjects.count} Projects`}
                muted
            >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {crewaiProjects.items.map((p) => (
                        <CrewAICard key={p.title} title={p.title} description={p.description} />
                    ))}
                </div>
            </Section>

            {/* Full Stack */}
            <Section
                id="projects-fullstack"
                kicker="Full Stack Projects"
                title={`${fullstackProjects.count} Projects`}
            >
                <FeaturedCard
                    title={fullstackProjects.featured.title}
                    description={fullstackProjects.featured.description}
                    tech={fullstackProjects.featured.tech}
                    tag="Full Stack"
                />
                <ProjectGrid names={fullstackProjects.others} />
            </Section>
        </div>
    );
}
