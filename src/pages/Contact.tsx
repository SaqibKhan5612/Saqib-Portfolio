import { FormEvent, useState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import Section from "../components/Section";
import { contactLinks } from "../data/profile";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    function validate(form: FormData): Record<string, string> {
        const errs: Record<string, string> = {};
        const name = String(form.get("name") || "").trim();
        const email = String(form.get("email") || "").trim();
        const subject = String(form.get("subject") || "").trim();
        const message = String(form.get("message") || "").trim();

        if (!name) errs.name = "Name is required.";
        if (!email) {
            errs.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errs.email = "Please enter a valid email address.";
        }
        if (!subject) errs.subject = "Subject is required.";
        if (!message) errs.message = "Message is required.";
        return errs;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setStatus("sending");

        try {
            // ──────────────────────────────────────────────────────
            // EmailJS Integration (configure after deployment)
            //
            // 1. Create a free account at https://www.emailjs.com
            // 2. Create a service and email template
            // 3. Replace the placeholders below:
            //    - YOUR_SERVICE_ID
            //    - YOUR_TEMPLATE_ID
            //    - YOUR_PUBLIC_KEY
            // 4. Uncomment the emailjs.send() call below
            // ──────────────────────────────────────────────────────

            // import emailjs from '@emailjs/browser';
            // await emailjs.send(
            //   'YOUR_SERVICE_ID',
            //   'YOUR_TEMPLATE_ID',
            //   {
            //     from_name: formData.get('name'),
            //     from_email: formData.get('email'),
            //     subject: formData.get('subject'),
            //     message: formData.get('message'),
            //   },
            //   'YOUR_PUBLIC_KEY'
            // );

            // Simulate a brief send delay for now
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setStatus("sent");
            (event.target as HTMLFormElement).reset();
        } catch {
            setStatus("error");
        }
    }

    const fieldBase =
        "w-full rounded-lg border bg-[#07100a] px-4 py-3.5 text-sm text-slate-200 outline-none transition placeholder:text-slate-700";

    function fieldClass(name: string) {
        return `${fieldBase} ${errors[name]
                ? "border-red-500/60 focus:border-red-400"
                : "border-white/10 focus:border-primary/50"
            }`;
    }

    return (
        <div className="pt-20">
            <Section id="contact" kicker="Contact" title="Let's build something great.">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left — Links */}
                    <div>
                        <p className="max-w-xl text-lg leading-8 text-slate-400">
                            Have a project, role, or collaboration in mind? Send me a message and I'll get back to
                            you as soon as possible.
                        </p>
                        <div className="mt-9 space-y-3">
                            {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noreferrer" : undefined}
                                    className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"
                                >
                                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                                        <Icon size={19} />
                                    </span>
                                    <span>
                                        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                                            {label}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-300">{value}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="rounded-xl border border-white/10 bg-surface p-5 sm:p-7"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                    Name
                                </span>
                                <input
                                    name="name"
                                    placeholder="Your name"
                                    className={fieldClass("name")}
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                                )}
                            </label>
                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                    Email
                                </span>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={fieldClass("email")}
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                                )}
                            </label>
                        </div>
                        <label className="mt-4 block">
                            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                Subject
                            </span>
                            <input
                                name="subject"
                                placeholder="Project inquiry"
                                className={fieldClass("subject")}
                            />
                            {errors.subject && (
                                <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                            )}
                        </label>
                        <label className="mt-4 block">
                            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                Message
                            </span>
                            <textarea
                                name="message"
                                rows={6}
                                placeholder="Tell me about your project..."
                                className={`${fieldClass("message")} resize-none`}
                            />
                            {errors.message && (
                                <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                            )}
                        </label>

                        {status === "sent" && (
                            <p className="mt-4 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
                                <CheckCircle2 size={16} />
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                <AlertCircle size={16} />
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? (
                                <>
                                    <Loader2 size={17} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={17} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </Section>
        </div>
    );
}
