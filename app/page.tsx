"use client";

import Hero from "@/components/Hero";
import TimelineNav from "@/components/ui/TimelineNav";
import About from "@/components/About";
import { useIsMobile } from "@/hooks/use-mobile";
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
    const isMobile = useIsMobile();

    return (
        <div className="relative">
            <TimelineNav sections={sections} />

            <main
                className={`
          h-screen
          overflow-y-scroll
          overflow-x-hidden
          ${!isMobile ? "snap-y snap-mandatory" : ""}
          scroll-smooth
          bg-black-100
        `}
            >
                <section id="hero" className={`h-screen w-full ${!isMobile ? "snap-start" : ""}`}>
                    <Hero />
                </section>

                <section id={"projects"} className={`h-screen w-full ${!isMobile ? "snap-start" : ""}`}>
                    <Projects />
                </section>

                <section id="skills" className={`h-screen w-full ${!isMobile ? "snap-start" : ""}`}>
                    <Skills />
                </section>

                <section id="about" className={`h-screen w-full ${!isMobile ? "snap-start" : ""}`}>
                    <About />
                </section>

                <section id="footer" className={`h-screen w-full ${!isMobile ? "snap-start" : ""}`}>
                    <Footer />
                </section>
            </main>
        </div>
    );
}
