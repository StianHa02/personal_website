"use client";


import { useState } from "react";
import BentoBox from "@/components/ui/BentoBox";
import InteractiveGridBackground from "@/components/ui/interactive-grid-background";

export default function About() {
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

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
                setStatus("Message sent 🚀");
                form.reset();
            } else {
                setStatus("Something went wrong 😬");
            }
        } catch {
            setStatus("Network error 😵");
        }
    };

    return (
        <InteractiveGridBackground
            gridSize={50}
            showFade={true}
            fadeIntensity={20}
            glow={false}
            trailLength={0}
            idleRandomCount={0}
            className="min-h-screen"
            darkEffectColor="rgba(255,0,255,0.5)"

        >
            <div className="min-h-screen bg-transparent p-6 flex items-center justify-center">
                <div className="w-full max-w-6xl grid gap-6 md:grid-cols-2">

                    {/* Contact Bento */}
                    <BentoBox title="Contact Me" className="bg-gray-50">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <textarea
                                name="message"
                                placeholder="Your message"
                                rows={5}
                                required
                                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            {/* Web3Forms metadata */}
                            <input
                                type="hidden"
                                name="subject"
                                value="New portfolio contact"
                            />
                            <input
                                type="hidden"
                                name="from_name"
                                value="My Portfolio"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
                            >
                                Send Message
                            </button>

                            {status && (
                                <p className="text-sm text-gray-600">{status}</p>
                            )}
                        </form>
                    </BentoBox>

                    {/* About Bento */}
                    <BentoBox title="About Me">
                        <p className="mb-4 text-gray-700">
                            Hey! I'm <strong>[Your Name]</strong>, a developer focused on building
                            clean, modern web experiences.
                        </p>
                        <p className="text-gray-700">
                            I work mostly with React, Next.js, and Tailwind, and I love structured
                            UI systems like Bento layouts.
                        </p>
                    </BentoBox>

                </div>
            </div>
        </InteractiveGridBackground>
    );
}