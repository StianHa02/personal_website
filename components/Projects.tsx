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
            description: "Modern, interactive portfolio featuring animated grid backgrounds, bento layouts, toast notifications, and smooth transitions. Built with Next.js and TypeScript.",
            techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
            category: "frontend",
            featured: true,
            githubUrl: "https://github.com/StianHa02/personal_website",
            demoUrl: "https://yourportfolio.com",
            imageUrl: "/images/projects/portfolio.png",
        },
        {
            title: "Climbing Club Website",
            description: "Website for a local climbing club featuring member management, event calendar, and route information. Clean, responsive design for the climbing community.",
            techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "Linear", "React Aria"],
            category: "fullstack",
            featured: true,
            demoUrl: "https://ute.bergenklatreklubb.no/",
            imageUrl: "/images/projects/bergenklatreklubb.png",
        },
        {
            title: "Face Blur Privacy Tool",
            description: "Privacy-focused application using OpenCV for automatic face detection and blurring. Python Flask backend with Next.js frontend for real-time image processing.",
            techStack: ["Python", "Flask", "OpenCV", "Next.js", "Computer Vision"],
            category: "fullstack",
            githubUrl: "https://github.com/yourusername/face-blur",
            imageUrl: "Coming Soon",
        },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);
    projects.filter(p => p.featured);
    return (
        <InteractiveGridBackground
            gridSize={50}
            showFade={true}
            fadeIntensity={20}
            glow={false}
            trailLength={0}
            idleRandomCount={0}
            className="w-full min-h-screen lg:h-full"
            darkEffectColor="rgba(255,0,255,0.5)"
        >
            <div className="w-full bg-transparent p-4 md:p-6 py-12 md:py-16 min-h-screen lg:min-h-0">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            My Projects
                        </h1>
                        <p className="text-base text-white dark:text-gray-300 max-w-2xl mx-auto mb-6">
                            Web applications showcasing frontend and fullstack development
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                { label: "All Projects", value: "all" },
                                { label: "Frontend", value: "frontend" },
                                { label: "Fullstack", value: "fullstack" },
                            ].map((btn) => (
                                <button
                                    key={btn.value}
                                    onClick={() => setFilter(btn.value as typeof filter)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                                        filter === btn.value
                                            ? "bg-blue-600 text-white shadow-lg scale-105"
                                            : "bg-gray-800 text-gray-200 hover:bg-gray-700 border-2 border-gray-600"
                                    }`}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* All Projects in Single Grid */}
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </InteractiveGridBackground>
    );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
    const isComingSoon = project.imageUrl === "Coming Soon";
    const hasImage = project.imageUrl && !isComingSoon;

    return (
        <BentoBox
            title={project.title}
            className={`bg-gray-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border border-gray-700 ${
                featured ? "border-2 border-blue-500" : ""
            }`}
        >
            {/* Project Image */}
            <div className={`w-full h-36 rounded-lg mb-3 flex items-center justify-center overflow-hidden ${
                isComingSoon
                    ? "bg-linear-to-br from-gray-700 to-gray-800"
                    : "bg-linear-to-br from-blue-900/50 to-purple-900/50"
            }`}>
                {hasImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-gray-400 text-sm font-medium">
                        {isComingSoon ? "🚧 Coming Soon" : "Project Screenshot"}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-gray-200 text-sm mb-3 leading-relaxed">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-3">
                {project.techStack.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded-md text-xs font-medium border border-blue-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-2">
                {project.demoUrl && !isComingSoon && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-xs"
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
                        className="flex items-center gap-1.5 px-3 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-xs"
                    >
                        <FaGithub className="text-xs" />
                        Code
                    </a>
                )}
                {isComingSoon && (
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium text-xs cursor-not-allowed">
                        <span>🚧 In Development</span>
                    </div>
                )}
            </div>
        </BentoBox>
    );
}