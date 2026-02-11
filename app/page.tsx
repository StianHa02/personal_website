"use client";

import Hero from "@/components/Hero";
import { TimelineNav } from "@/components/ui";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "footer", label: "Contact" },
];

export default function Home() {
    return (
        <div className="relative">
            <TimelineNav sections={sections} />

            {/* Use CSS media queries with lg: breakpoint (1024px) instead of JS hook */}
            <main className="bg-black-100 scroll-smooth lg:h-screen lg:overflow-y-scroll lg:overflow-x-hidden lg:snap-y lg:snap-mandatory">
                <section id="hero" className="w-full min-h-screen lg:h-screen lg:snap-start">
                    <Hero />
                </section>

                <section id="projects" className="w-full lg:h-screen lg:snap-start">
                    <Projects />
                </section>

                <section id="skills" className="w-full lg:h-screen lg:snap-start">
                    <Skills />
                </section>

                <section id="about" className="w-full lg:h-screen lg:snap-start">
                    <About />
                </section>

                <section id="footer" className="w-full lg:h-screen lg:snap-start">
                    <Footer />
                </section>
            </main>
        </div>
    );
}