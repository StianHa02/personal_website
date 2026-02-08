import React from 'react'
import {Intergenerational} from "@/components/ui/Intergenerational";
import {FaAddressCard} from "react-icons/fa";
import {cn} from "@/lib/utils";
import HeroButton from "@/components/ui/heroButton";
import {BackgroundLines} from "@/components/ui/background-lines";
import {EncryptedText} from "@/components/ui/encrypted-text";

function Hero() {
    return (
        <div className="pb-20 pt-20 sm:pt-16">

            <BackgroundLines className="h-screen w-full absolute top-0 left-0">
                <div className="h-screen w-full dark:bg-black-100 bg-white flex items-center justify-center">
                    {/* Grid background */}
                    <div
                        className={cn(
                            "absolute inset-0",
                            "bg-size-[40px_40px]",
                            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                        )}
                    />
                    {/* Radial gradient mask */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
                </div>
            </BackgroundLines>

            {/* Content */}
            <div className="relative z-10 flex justify-center mt-32 md:mt-40">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-1">
                    <div className="h-10 flex items-center justify-center w-full">
                        <EncryptedText
                            text="Embrace the Future of Web Development with Next.js and Tailwind CSS"
                            encryptedClassName="text-neutral-500"
                            revealedClassName="dark:text-white text-black"
                            revealDelayMs={50}
                            className="uppercase tracking-widest text-xs text-center text-neutral-500 max-w-80"
                        />
                    </div>
                    <Intergenerational className="text-center text-[40px] md:text-5xl lg:text-6xl"
                                       words="Stian's Personal Website and Portfolio"/>
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
    )
}

export default Hero