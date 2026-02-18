"use client";

import { useState } from "react";
import { BentoBox, Toast, HeroButton } from "@/components/ui";
import { FaPaperPlane } from "react-icons/fa";

type ToastType = "success" | "error" | "info";

export default function About() {
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setToast({ message: "Sending...", type: "info" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string
        );

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data: { success: boolean } = await res.json();

            if (data.success) {
                setToast({ message: "Message sent successfully!", type: "success" });
                form.reset();
            } else {
                setToast({ message: "Something went wrong", type: "error" });
            }
        } catch {
            setToast({ message: "Network error", type: "error" });
        }
    };

    return (
        <div className="relative w-full min-h-screen lg:h-full bg-[#000319] dark:bg-black">
            {/* Static Grid Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #1f2937 1px, transparent 1px),
                            linear-gradient(to bottom, #1f2937 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />
                {/* Radial Shadow/Fade */}
                <div
                    className="absolute inset-0 bg-[#000319] dark:bg-black"
                    style={{
                        maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
                    }}
                />
            </div>

            <div className="relative lg:absolute lg:inset-0 w-full min-h-screen lg:h-full bg-transparent p-4 md:p-6 flex items-center justify-center py-12 md:py-6">
                <div className="w-full max-w-7xl grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {/* About Bento */}
                    <BentoBox
                        title="About Me"
                        className="relative bg-gray-950 shadow-xl md:col-span-2 text-white border border-white/10 order-1 overflow-hidden"
                    >
                        {/* Subtle glow accent */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative space-y-3">
                            <p className="text-base leading-relaxed">
                                <span className="text-zinc-400">Hey! I&#39;m </span>
                                <span className="font-medium text-white">
                                    Stian Gia Huy Ha
                                </span>
                                <span className="text-zinc-400">
                                    , a developer who loves turning ideas into working applications.
                                </span>
                            </p>

                            <p className="text-base leading-relaxed text-zinc-400">
                                I build full-stack apps with{' '}
                                <span className="inline-flex items-center text-white font-semibold bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded-md text-sm">
                                    Next.js
                                </span>
                                , crafting interfaces on the front and working with Node.js and PostgreSQL on the back.


                            </p>

                            <p className="text-base leading-relaxed text-zinc-400">
                                Currently taking a master&#39;s degree in Data Science
                                and looking to collaborate on projects that make a real impact.
                            </p>
                        </div>
                    </BentoBox>

                    {/* Currently Learning */}
                    <BentoBox
                        title="Currently Learning"
                        className="relative bg-gray-950 shadow-xl border border-white/10 order-2 overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

                        <ul className="relative space-y-3">
                            {[
                                { name: "Docker", desc: "Containerization" },
                                { name: "FastAPI", desc: "API development" },
                                { name: "AWS / Vercel", desc: "Cloud platforms & deployment" },
                                { name: "SEO", desc: "Search engine optimization" },
                            ].map(({ name, desc }) => (
                                <li key={name} className="flex items-start gap-3 group">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-400 transition-colors" />
                                    <span className="text-sm text-zinc-400 leading-snug">
                                        <strong className="text-white font-semibold">{name}</strong>
                                        <span className="text-zinc-500"> — </span>
                                        {desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </BentoBox>

                    {/* Journey / Education */}
                    <BentoBox
                        title="Academic Journey"
                        className="relative bg-gray-950 shadow-xl border border-white/10 order-3 md:order-4 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative space-y-3">
                            <div className="relative pl-4 py-1">
                                {/* Timeline line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/0 rounded-full" />
                                {/* Dot */}
                                <div className="absolute left-[-3px] top-2 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-blue-500/30" />

                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-white text-sm">Data Science Student @ UiB</h3>
                                </div>
                                <p className="text-blue-400/80 text-xs font-medium mb-2">2023 — Present</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Integrated master&#39;s program covering machine learning, mathematics, statistics,
                                    software development, networks, and data visualization. Includes industry internship
                                    and master&#39;s thesis in data science.
                                </p>
                            </div>
                        </div>
                    </BentoBox>

                    {/* Contact Form */}
                    <BentoBox
                        title="Contact Me"
                        className="relative bg-gray-950 shadow-xl md:col-span-2 border border-white/10 order-4 md:order-3 overflow-hidden"
                    >
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative space-y-3">
                            <div className="grid md:grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Your message"
                                rows={3}
                                required
                                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                            />

                            <input type="hidden" name="subject" value="New portfolio contact" />
                            <input type="hidden" name="from_name" value="My Portfolio" />

                            <HeroButton
                                title="Send Message"
                                icon={<FaPaperPlane />}
                                position="right"
                                type="submit"
                                otherClasses="w-full"
                            />
                        </form>
                    </BentoBox>

                </div>
            </div>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}