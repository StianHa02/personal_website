"use client";

import { useEffect, useState } from "react";

type Section = {
    id: string;
    label: string;
};

export default function TimelineNav({ sections }: { sections: Section[] }) {
    const [active, setActive] = useState<string>(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
            {/* Timeline container */}
            <div className="relative flex flex-col items-center gap-6">
                {/* Vertical line */}
                <div className="absolute top-0 bottom-0 w-px bg-gray-600" />

                {/* Dots */}
                {sections.map(section => (
                    <button
                        key={section.id}
                        onClick={() =>
                            document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className={`relative z-10 w-3 h-3 rounded-full cursor-pointer transition-all
              ${
                            active === section.id
                                ? "bg-white scale-125"
                                : "bg-gray-500 hover:bg-gray-300"
                        }`}
                    >
                        {/* Label */}
                        <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-xs text-white whitespace-nowrap opacity-100">
              {section.label}
            </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
