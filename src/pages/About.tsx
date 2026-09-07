import { BriefcaseBusiness, Code2, Database, Rocket } from "lucide-react";
import Section from "../components/Section";
import PhotoPanel from "../components/PhotoPanel";

export default function About() {
    return (
        <div className="pt-20">
            <Section id="about" kicker="About Me" title="Muhammad Saqib">
                <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                    <PhotoPanel compact />
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-black text-white sm:text-3xl">
                                Software Engineer &{" "}
                                <span className="text-primary">AI Developer</span>
                            </h3>
                            <p className="mt-5 leading-8 text-slate-400">
                                I specialize in full-stack development and agentic AI, building modern web
                                applications with React, Node.js, and MongoDB, while creating intelligent
                                automation workflows with tools like n8n, CrewAI, and LangChain. I focus on
                                delivering practical, production-ready solutions that solve real problems.
                            </p>
                            <p className="mt-4 leading-8 text-slate-400">
                                With a strong foundation in software engineering, I combine clean code practices
                                with an eye for user experience. Whether it's building responsive interfaces,
                                designing reliable backend systems, or automating complex workflows with AI agents,
                                I bring a problem-solving mindset to every project I take on.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    icon: Code2,
                                    title: "Frontend Engineering",
                                    text: "Responsive React interfaces with strong component structure and modern styling.",
                                },
                                {
                                    icon: Database,
                                    title: "Backend Systems",
                                    text: "APIs, databases, authentication flows, and practical data architecture.",
                                },
                                {
                                    icon: Rocket,
                                    title: "AI & Automation",
                                    text: "Agentic AI workflows, intelligent automation, and AI-powered solutions.",
                                },
                                {
                                    icon: BriefcaseBusiness,
                                    title: "Problem Solver",
                                    text: "Turning complex requirements into clean, maintainable, and scalable software.",
                                },
                            ].map(({ icon: Icon, title, text }) => (
                                <div
                                    key={title}
                                    className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-primary/35"
                                >
                                    <Icon className="mb-4 text-primary" size={24} />
                                    <h4 className="font-bold text-white">{title}</h4>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
