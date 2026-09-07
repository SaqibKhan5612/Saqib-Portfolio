import { Sparkles } from "lucide-react";

export default function PhotoPanel({ compact = false }: { compact?: boolean }) {
    return (
        <div className={`relative mx-auto ${compact ? "max-w-md" : "max-w-lg"}`}>
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,240,0,0.16),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
                <div
                    className={`${compact ? "aspect-[4/5]" : "aspect-[5/6]"} relative grid place-items-center p-10`}
                >
                    <img
                        src="/photo.png"
                        alt="Muhammad Saqib"
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                        }}
                    />
                    <div className="relative grid h-36 w-36 place-items-center rounded-full border border-white/10 bg-white/5">
                        <Sparkles className="text-primary" size={56} />
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-xl bg-primary px-5 py-4 text-ink shadow-xl sm:-right-5">
                <p className="text-3xl font-black">50+</p>
                <p className="text-xs font-bold uppercase tracking-wide opacity-70">Projects</p>
            </div>
        </div>
    );
}
