"use client";

import { useState } from "react";
import { BentoBox, InteractiveGridBackground } from "@/components/ui";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    category: "frontend" | "fullstack" | "personal";
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    imageUrl?: string;
}

export default function Projects() {
    const [filter, setFilter] = useState<"all" | "frontend" | "fullstack" | "personal">("all");

    const projects: Project[] = [
        {
            title: "Personal Portfolio Website",
            description: "Modern, interactive portfolio featuring animated grid backgrounds, bento layouts, toast notifications, and smooth transitions. Built with Next.js, TypeScript and deployed on Vercel.",
            techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Aceternity UI"],
            category: "frontend",
            featured: true,
            githubUrl: "https://github.com/StianHa02/personal_website",
            demoUrl: "https://stianha.com",
            imageUrl: "/images/projects/portfolio.png",
        },
        {
            title: "Bergen Klatreklubb Route Database",
            description: "Maintaining and improving the digital route database for Bergen Klatreklubb through UI refinements, bug fixes, and feature updates, ensuring stable performance and responsive design.",
            techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "Linear", "React Aria"],
            category: "fullstack",
            featured: true,
            demoUrl: "https://ute.bergenklatreklubb.no/",
            imageUrl: "/images/projects/bergenklatreklubb.png",
        },
        {
            title: "Face Blur Privacy Tool",
            description: "Web application for automatic face blurring in videos using OpenCV. Built with Next.js for the frontend and a Python (FastAPI) backend for video processing and face detection.",
            techStack: ["Python", "FastAPI", "OpenCV", "Next.js", "Computer Vision"],
            category: "fullstack",
            githubUrl: "https://github.com/StianHa02/BlurThatGuyProject",
            demoUrl: "https://blurthatguy.no",
            imageUrl: "/images/projects/blurthatguy.png",
        },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    const filterButtons = [
        { label: "All", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Fullstack", value: "fullstack" },
    ];

    return (
        <InteractiveGridBackground
            gridSize={50}
            showFade={true}
            fadeIntensity={20}
            glow={false}
            trailLength={0}
            idleRandomCount={0}
            className="relative w-full h-full"
            darkEffectColor="rgba(255,0,255,0.5)"
        >
            <div className="relative lg:absolute lg:inset-0 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-8 lg:overflow-y-auto">
                <div className="w-full max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">What I've built</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Projects
                        </h1>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {filterButtons.map((btn) => (
                                <button
                                    key={btn.value}
                                    onClick={() => setFilter(btn.value as typeof filter)}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border ${
                                        filter === btn.value
                                            ? "bg-blue-500/10 text-blue-300 border-blue-500/30"
                                            : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20 hover:text-zinc-200"
                                    }`}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-sm uppercase tracking-widest text-zinc-600">
                                No projects in this category
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </InteractiveGridBackground>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const hasImage = project.imageUrl && project.imageUrl !== "Coming Soon";
    const isComingSoon = project.imageUrl === "Coming Soon";

    return (
        <BentoBox
            title={project.title}
            className="border-white/10 flex flex-col"
        >
            {/* Image */}
            <div className="w-full h-36 rounded-lg mb-4 overflow-hidden bg-white/5 border border-white/10">
                {hasImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-200"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-zinc-600">
                            {isComingSoon ? "In Development" : "No Preview"}
                        </span>
                    </div>
                )}
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/5 text-zinc-300 rounded-md text-xs font-medium border border-white/10"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-2 mt-auto">
                {project.demoUrl && !isComingSoon && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-colors"
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-zinc-300 border border-white/10 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                        <FaGithub className="text-xs" />
                        Code
                    </a>
                )}
                {isComingSoon && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-zinc-600 border border-white/10 rounded-lg text-xs font-medium cursor-not-allowed">
                        In Development
                    </div>
                )}
            </div>
        </BentoBox>
    );
}