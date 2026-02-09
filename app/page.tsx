import Hero from "@/components/Hero";
import TimelineNav from "@/components/ui/TimelineNav";
import About from "@/components/About";

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
];

export default function Home() {
    return (
        <div className="relative">
            <TimelineNav sections={sections} />

            <main
                className="
          h-screen
          overflow-y-scroll
          overflow-x-hidden
          snap-y snap-mandatory
          scroll-smooth
          bg-black-100
        "
            >
                <section id="hero" className="h-screen w-full snap-start">
                    <Hero />
                </section>

                <section id="about" className="h-screen w-full snap-start">
                    <About />
                </section>
            </main>
        </div>
    );
}
