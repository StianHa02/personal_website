import React from "react";
import { Intergenerational, EncryptedText, InteractiveGridBackground, HeroButton } from "@/components/ui";
import { FaAddressCard } from "react-icons/fa";

function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 h-full w-full">
                <InteractiveGridBackground
                    gridSize={50}
                    gridColor="#000319"
                    darkGridColor="#1f2937"
                    glow
                    glowRadius={4}
                    trailLength={20}
                    showFade
                    fadeIntensity={25}
                    className="h-full w-full"
                    idleSpeed={1.5}
                    effectColor="rgba(0, 255, 255, 0.9)"      // head color (cyan)
                    darkEffectColor="rgba(255, 0, 255, 0.9)"   // head color in dark mode (magenta)
                    tailColor="rgba(0, 100, 255, 0.9)"         // tail fades to this (blue)
                    darkTailColor="rgba(100, 0, 255, 0.9)"     // tail in dark mode (purple)
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <div className="mb-2 flex items-center justify-center w-full">
                        <EncryptedText
                            text="Data Science Student & Aspiring Full-Stack Developer"
                            encryptedClassName="text-neutral-500"
                            revealedClassName="dark:text-purple-100 text-black"
                            revealDelayMs={50}
                            className="uppercase tracking-widest text-xs text-center max-w-80"
                        />
                    </div>

                    <Intergenerational
                        className="text-center text-[40px] md:text-5xl lg:text-6xl mb-4"
                        words="Stian Gia Huy Ha"
                    />

                    <p className="text-center text-base md:text-lg text-zinc-400 mb-6 max-w-2xl px-4">
                        Showcasing my projects in modern web development.
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
                        {["Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-black/60 dark:bg-white/20 border border-white/20 rounded-lg text-sm font-medium text-white hover:border-white/30 hover:bg-black/70 dark:hover:bg-white/30 transition-all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <a href="#projects">
                            <HeroButton
                                title="View My Work"
                                icon={<FaAddressCard />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;