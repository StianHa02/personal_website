"use client";

import { ReactNode, useRef, useState } from "react";

interface BentoBoxProps {
    title?: string | ReactNode;
    children: ReactNode;
    className?: string;
}

export default function BentoBox({ title, children, className = "" }: BentoBoxProps) {
    const boxRef = useRef<HTMLDivElement>(null);
    const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const box = boxRef.current;
        if (!box) return;
        const rect = box.getBoundingClientRect();
        setSpotlight({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setSpotlight((prev) => ({ ...prev, opacity: 0 }));
    };

    return (
        <div
            ref={boxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`
                group relative rounded-2xl p-6
                bg-gray-950
                border border-white/10
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/40
                overflow-hidden
                ${className}
            `}
        >
            {/* Mouse spotlight effect */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: spotlight.opacity,
                    background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(99,102,241,0.08), transparent 70%)`,
                }}
            />

            {/* Animated top-edge shimmer on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Corner accent */}
            <div className="pointer-events-none absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Title */}
            {title && (
                <h2 className="relative mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                    {title}
                </h2>
            )}

            {/* Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}