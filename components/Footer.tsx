"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFileDownload, FaHeart, FaCode } from "react-icons/fa";
import {
    SocialIconLink,
    SectionHeader,
    NavigationLink,
    GradientButton,
    DecorativeDivider
} from "./ui";

export default function Footer() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const main = document.querySelector('main');

        // Check if main is the scroll container
        if (main && main.scrollHeight > main.clientHeight) {
            // Main is scrolling (desktop)
            const mainRect = main.getBoundingClientRect();
            const sectionRect = section.getBoundingClientRect();
            const scrollTop = main.scrollTop + (sectionRect.top - mainRect.top);
            main.scrollTo({ top: scrollTop, behavior: "smooth" });
        } else {
            // Window is scrolling (mobile)
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative w-full min-h-screen lg:h-full bg-linear-to-br from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 animate-pulse"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen lg:h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 md:py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* About Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-2 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                                Stian Gia Huy Ha
                            </h3>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <FaCode className="text-blue-400" />
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Crafting modern, responsive web experiences with clean code and innovative solutions.
                            Let&apos;s build something amazing together.
                        </p>
                        <GradientButton
                            href="resume.pdf"
                            download
                            icon={<FaFileDownload className="group-hover:animate-bounce" />}
                        >
                            Download Resume
                        </GradientButton>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <SectionHeader title="Quick Navigation" />
                        <ul className="space-y-4">
                            {[
                                { id: "hero", label: "Home" },
                                { id: "projects", label: "Projects" },
                                { id: "skills", label: "Skills" },
                                { id: "about", label: "About" },
                            ].map((link) => (
                                <li key={link.id}>
                                    <NavigationLink
                                        label={link.label}
                                        onClick={() => scrollToSection(link.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="space-y-6">
                        <SectionHeader
                            title="Let's Connect"
                            gradientFrom="from-purple-500"
                            gradientTo="to-pink-500"
                        />
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                            Open to new opportunities, collaborations, and interesting conversations.
                        </p>
                        <div className="flex gap-4">
                            <SocialIconLink
                                href="https://github.com/StianHa02"
                                icon={<FaGithub />}
                                label="GitHub"
                            />
                            <SocialIconLink
                                href="https://www.linkedin.com/in/stian-gia-huy-ha/"
                                icon={<FaLinkedin />}
                                label="LinkedIn"
                            />
                            <SocialIconLink
                                href="mailto:StianHa02@hotmail.com"
                                icon={<FaEnvelope />}
                                label="Email"
                                external={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <DecorativeDivider />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>© {new Date().getFullYear()} Stian Gia Huy Ha.</span>
                        <span className="hidden md:inline">•</span>
                        <span className="flex items-center gap-1">
                            Made with <FaHeart className="text-red-500 text-xs animate-pulse" /> and <FaCode className="text-blue-400 text-xs" />
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <GradientButton
                            onClick={() => scrollToSection("hero")}
                            variant="outline"
                            icon={<FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />}
                            className="cursor-pointer"
                        >
                            Back to Top
                        </GradientButton>
                    </div>
                </div>
            </div>
        </footer>
    );
}