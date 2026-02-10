"use client";


import { useState } from "react";
import BentoBox from "@/components/ui/BentoBox";
import InteractiveGridBackground from "@/components/ui/interactive-grid-background";
import Toast from "@/components/ui/Toast";

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
            <div className="min-h-screen bg-transparent p-4 md:p-6 flex items-center justify-center">
                <div className="w-full max-w-7xl grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {/* About Bento - Spans 2 columns on larger screens */}
                    <BentoBox title="About Me" className="bg-white shadow-md md:col-span-2">
                        <p className="mb-3 text-base leading-relaxed text-gray-900">
                            Hey! I'm <strong className="font-bold">Stian Gia Huy Ha</strong>, a passionate frontend/fullstack developer focused on building
                            clean, modern web experiences that solve real problems.
                        </p>
                        <p className="mb-3 text-base leading-relaxed text-gray-900">
                            I specialize in React, Next.js, and TypeScript, creating responsive and intuitive user interfaces.
                        </p>
                        <p className="text-base leading-relaxed text-gray-900">
                            Currently seeking opportunities to contribute to innovative projects and grow as a developer.
                        </p>
                    </BentoBox>

                    {/* Currently Learning */}
                    <BentoBox title="📚 Currently Learning" className="bg-yellow-50 shadow-md">
                        <ul className="space-y-2">
                            <li className="text-gray-900 text-sm">
                                <strong>Docker</strong> - Containerization
                            </li>
                            <li className="text-gray-900 text-sm">
                                <strong>GraphQL</strong> - API development
                            </li>
                            <li className="text-gray-900 text-sm">
                                <strong>Testing</strong> - Jest & RTL
                            </li>
                        </ul>
                    </BentoBox>

                    {/* Contact Form - Spans full width on mobile, 2 cols on tablet/desktop */}
                    <BentoBox title="📧 Contact Me" className="bg-white shadow-md md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid md:grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-lg border-2 border-gray-300 p-3 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full rounded-lg border-2 border-gray-300 p-3 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Your message"
                                rows={3}
                                required
                                className="w-full rounded-lg border-2 border-gray-300 p-3 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                            />

                            <input type="hidden" name="subject" value="New portfolio contact" />
                            <input type="hidden" name="from_name" value="My Portfolio" />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg cursor-pointer transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </BentoBox>

                    {/* Education/Timeline - Right column */}
                    <BentoBox title="🎓 Journey" className="bg-blue-50 shadow-md">
                        <div className="space-y-3">
                            <div className="border-l-4 border-blue-500 pl-3 py-1">
                                <h3 className="font-bold text-gray-900 text-sm">Self-Taught Developer</h3>
                                <p className="text-gray-700 text-xs mb-1">2023 - Present</p>
                                <p className="text-gray-800 text-sm">
                                    Focused on modern web development and fullstack applications.
                                </p>
                            </div>
                            <div className="border-l-4 border-gray-400 pl-3 py-1">
                                <h3 className="font-bold text-gray-900 text-sm">Online Learning</h3>
                                <p className="text-gray-700 text-xs mb-1">2022 - 2023</p>
                                <p className="text-gray-800 text-sm">
                                    Courses in JavaScript, React, Node.js, and web fundamentals.
                                </p>
                            </div>
                        </div>
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
        </InteractiveGridBackground>
    );
}