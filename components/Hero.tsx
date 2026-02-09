import React from "react";
import { Intergenerational } from "@/components/ui/Intergenerational";
import { FaAddressCard } from "react-icons/fa";
import HeroButton from "@/components/ui/heroButton";
import { EncryptedText } from "@/components/ui/encrypted-text";
import InteractiveGridBackground from "@/components/ui/interactive-grid-background";

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
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-1">
                    <div className="h-10 flex items-center justify-center w-full">
                        <EncryptedText
                            text="Embrace the Future of Web Development with Next.js and Tailwind CSS"
                            encryptedClassName="text-neutral-500"
                            revealedClassName="dark:text-purple-100 text-black"
                            revealDelayMs={50}
                            className="uppercase tracking-widest text-xs text-center max-w-80"
                        />
                    </div>

                    <Intergenerational
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Stian's Personal Website and Portfolio"
                    />

                    <a href="#about">
                        <HeroButton
                            title="Learn More About Me"
                            icon={<FaAddressCard />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
