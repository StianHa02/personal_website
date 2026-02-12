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
                    effectColor="rgba(0,255,255,0.5)"
                    darkEffectColor="rgba(255,0,255,0.5)"
                    trailLength={5}
                    glow
                    glowRadius={10}
                    showFade
                    fadeIntensity={25}
                    className="h-full w-full"
                    idleSpeed={0.1}
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

                    <p className="text-center text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-6 max-w-2xl px-4">
                        Building clean, performant web applications with a focus on usability and structure.
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium text-gray-200 dark:text-gray-300"
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