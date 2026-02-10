"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFileDownload, FaHeart, FaCode } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        const main = document.querySelector('main');
        if (main) {
            main.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative h-full w-full bg-linear-to-br from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 animate-pulse"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-16">

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
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 group"
                        >
                            <FaFileDownload className="group-hover:animate-bounce" />
                            Download Resume
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded-full"></span>
                            Quick Navigation
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { id: "hero", label: "Home" },
                                { id: "about", label: "About" },
                                { id: "projects", label: "Projects" },
                                { id: "skills", label: "Skills" }
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all cursor-pointer"
                                    >
                                        <span className="w-0 group-hover:w-8 h-px bg-linear-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                                            {link.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-linear-to-b from-purple-500 to-pink-500 rounded-full"></span>
                            Let&apos;s Connect
                        </h4>
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                            Open to new opportunities, collaborations, and interesting conversations.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/StianHa02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-linear-to-br hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/stian-gia-huy-ha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-linear-to-br hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="mailto:StianHa02@hotmail.com"
                                className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-linear-to-br hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                                aria-label="Email"
                            >
                                <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="relative my-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-linear-to-r from-transparent via-gray-900 to-transparent">
                            <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </span>
                    </div>
                </div>

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
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <span className="px-3 py-1 bg-gray-800/50 rounded-full backdrop-blur-sm">Next.js</span>
                            <span className="px-3 py-1 bg-gray-800/50 rounded-full backdrop-blur-sm">React</span>
                            <span className="px-3 py-1 bg-gray-800/50 rounded-full backdrop-blur-sm">Tailwind</span>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600 hover:to-purple-600 border border-blue-500/30 hover:border-transparent rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm cursor-pointer:"
                            aria-label="Back to top"
                        >
                            <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}