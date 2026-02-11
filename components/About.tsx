"use client";

import BentoBox from "@/components/ui/BentoBox";
import InteractiveGridBackground from "@/components/ui/interactive-grid-background";

interface Skill {
    name: string;
    level?: "Expert" | "Proficient" | "Learning";
}

interface SkillCategory {
    title: string;
    skills: Skill[];
    icon?: string;
}

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: [
                { name: "React", level: "Proficient" },
                { name: "Next.js", level: "Proficient" },
                { name: "TypeScript", level: "Proficient" },
                { name: "Tailwind CSS", level: "Proficient" },
                { name: "JavaScript (ES6+)", level: "Expert" },
                { name: "HTML5 & CSS3", level: "Expert" },
                { name: "Responsive Design", level: "Proficient" },
            ],
        },
        {
            title: "Backend Development",
            icon: "⚙️",
            skills: [
                { name: "Node.js", level: "Proficient" },
                { name: "Express.js", level: "Proficient" },
                { name: "REST APIs", level: "Proficient" },
                { name: "MongoDB", level: "Learning" },
                { name: "PostgreSQL", level: "Learning" },
            ],
        },
        {
            title: "Tools & Technologies",
            icon: "🛠️",
            skills: [
                { name: "Git & GitHub", level: "Proficient" },
                { name: "VS Code", level: "Expert" },
                { name: "npm/yarn", level: "Proficient" },
                { name: "Vercel", level: "Proficient" },
                { name: "Figma", level: "Learning" },
            ],
        },
        {
            title: "Currently Learning",
            icon: "📚",
            skills: [
                { name: "Docker" },
                { name: "GraphQL" },
                { name: "Testing (Jest, React Testing Library)" },
                { name: "CI/CD Pipelines" },
            ],
        },
    ];

    const getLevelColor = (level?: string) => {
        switch (level) {
            case "Expert":
                return "bg-green-900/50 text-green-300 border-green-700";
            case "Proficient":
                return "bg-blue-900/50 text-blue-300 border-blue-700";
            case "Learning":
                return "bg-yellow-900/50 text-yellow-300 border-yellow-700";
            default:
                return "bg-gray-800 text-gray-300 border-gray-600";
        }
    };

    return (
        <div className="relative w-full min-h-screen">
            <InteractiveGridBackground
                gridSize={50}
                showFade={true}
                fadeIntensity={20}
                glow={false}
                trailLength={0}
                idleRandomCount={0}
                className="w-full min-h-screen absolute inset-0"
                darkEffectColor="rgba(255,0,255,0.5)"
            >
                <div className="relative z-10 min-h-screen w-full bg-transparent p-4 md:p-6 py-12 md:py-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                Skills & Technologies
                            </h1>
                            <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                                Technical skills and technologies I work with
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid gap-4 md:gap-6 md:grid-cols-2 mb-8">
                            {skillCategories.map((category, idx) => (
                                <BentoBox
                                    key={idx}
                                    title={
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{category.icon}</span>
                                            <span>{category.title}</span>
                                        </div>
                                    }
                                    className="bg-gray-900/90 backdrop-blur-sm shadow-lg border border-gray-700"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIdx) => (
                                            <div
                                                key={skillIdx}
                                                className={`px-3 py-1.5 rounded-lg border-2 font-medium text-sm transition-all hover:scale-105 ${getLevelColor(
                                                    skill.level
                                                )}`}
                                            >
                                                <span>{skill.name}</span>
                                                {skill.level && (
                                                    <span className="ml-1.5 text-xs opacity-75">
                                                        • {skill.level}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </BentoBox>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg max-w-3xl mx-auto border border-gray-700">
                            <h3 className="text-base md:text-lg font-bold text-white mb-3">
                                Proficiency Levels
                            </h3>
                            <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded bg-green-500"></div>
                                    <span className="text-sm text-gray-200">
                                        <strong className="text-white">Expert</strong> - Daily use, deep understanding
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                                    <span className="text-sm text-gray-200">
                                        <strong className="text-white">Proficient</strong> - Comfortable building projects
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded bg-yellow-500"></div>
                                    <span className="text-sm text-gray-200">
                                        <strong className="text-white">Learning</strong> - Actively studying
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </InteractiveGridBackground>
        </div>
    );
}