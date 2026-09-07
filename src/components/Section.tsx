import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

interface SectionProps {
    kicker: string;
    title: string;
    children: React.ReactNode;
    id: string;
    muted?: boolean;
}

export default function Section({ kicker, title, children, id, muted = false }: SectionProps) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id={id}
            ref={ref}
            className={`px-5 py-24 sm:px-8 lg:py-32 ${muted ? "bg-[#0b150e]/70" : ""}`}
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="mb-14 max-w-3xl"
                >
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                        {kicker}
                    </p>
                    <h2 className="text-4xl font-black tracking-normal text-white sm:text-5xl">{title}</h2>
                    <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
                </motion.div>
                {children}
            </div>
        </section>
    );
}

export { fadeUp };
