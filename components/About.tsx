"use client";


import { useState } from "react";
import BentoBox from "@/components/ui/BentoBox";
import InteractiveGridBackground from "@/components/ui/interactive-grid-background";
import Toast from "@/components/ui/Toast";
import HeroButton from "@/components/ui/heroButton";
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
        <InteractiveGridBackground
            gridSize={50}
            showFade={true}
            fadeIntensity={20}
            glow={false}
            trailLength={0}
            idleRandomCount={0}
            className="flex-1 w-full"
            darkEffectColor="rgba(255,0,255,0.5)"

        >
            <div className="h-full w-full bg-transparent p-4 md:p-6 flex items-center justify-center py-8 md:py-6">
                <div className="w-full max-w-7xl grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {/* About Bento - Spans 2 columns on larger screens */}
                    <BentoBox title="About Me" className="bg-gray-900/90 backdrop-blur-sm shadow-lg md:col-span-2 text-white border border-gray-700 order-1">
                        <p className="mb-3 text-base leading-relaxed text-gray-100">
                            Hey! I&#39;m <strong className="font-bold text-white">Stian Gia Huy Ha</strong>, a passionate frontend/fullstack developer focused on building
                            clean, modern web experiences that solve real problems.
                        </p>
                        <p className="mb-3 text-base leading-relaxed text-gray-100">
                            I specialize in React, Next.js, and TypeScript, creating responsive and intuitive user interfaces.
                        </p>
                        <p className="text-base leading-relaxed text-gray-100">
                            Currently seeking opportunities to contribute to innovative projects and grow as a developer.
                        </p>
                    </BentoBox>

                    {/* Currently Learning */}
                    <BentoBox title="📚 Currently Learning" className="bg-gray-900/90 backdrop-blur-sm shadow-lg border border-gray-700 order-2">
                        <ul className="space-y-2">
                            <li className="text-gray-100 text-sm">
                                <strong className="text-white">Docker</strong> - Containerization
                            </li>
                            <li className="text-gray-100 text-sm">
                                <strong className="text-white">GraphQL</strong> - API development
                            </li>
                            <li className="text-gray-100 text-sm">
                                <strong className="text-white">Testing</strong> - Jest & RTL
                            </li>
                        </ul>
                    </BentoBox>

                    {/* Education/Timeline - Right column - Shows before Contact on mobile */}
                    <BentoBox title="🎓 Journey" className="bg-gray-900/90 backdrop-blur-sm shadow-lg border border-gray-700 order-3 md:order-4">
                        <div className="space-y-3">
                            <div className="border-l-4 border-blue-500 pl-3 py-1">
                                <h3 className="font-bold text-white text-sm">Self-Taught Developer</h3>
                                <p className="text-gray-400 text-xs mb-1">2023 - Present</p>
                                <p className="text-gray-200 text-sm">
                                    Focused on modern web development and fullstack applications.
                                </p>
                            </div>
                            <div className="border-l-4 border-gray-500 pl-3 py-1">
                                <h3 className="font-bold text-white text-sm">Online Learning</h3>
                                <p className="text-gray-400 text-xs mb-1">2022 - 2023</p>
                                <p className="text-gray-200 text-sm">
                                    Courses in JavaScript, React, Node.js, and web fundamentals.
                                </p>
                            </div>
                        </div>
                    </BentoBox>

                    {/* Contact Form - Spans full width on mobile, 2 cols on tablet/desktop - Shows after Journey on mobile */}
                    <BentoBox title="📧 Contact Me" className="bg-gray-900/90 backdrop-blur-sm shadow-lg md:col-span-2 border border-gray-700 order-4 md:order-3">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid md:grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-lg border-2 border-gray-600 bg-gray-800 p-3 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full rounded-lg border-2 border-gray-600 bg-gray-800 p-3 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Your message"
                                rows={3}
                                required
                                className="w-full rounded-lg border-2 border-gray-600 bg-gray-800 p-3 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
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
        </InteractiveGridBackground>
    );
}