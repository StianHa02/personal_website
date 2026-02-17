"use client";

import { BentoBox, InteractiveGridBackground } from "@/components/ui";

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
            title: "Frontend",
            skills: [
                { name: "React", level: "Proficient" },
                { name: "Next.js", level: "Proficient" },
                { name: "TypeScript", level: "Proficient" },
                { name: "Tailwind CSS", level: "Proficient" },
                { name: "JavaScript (ES6+)", level: "Proficient" },
                { name: "HTML5 & CSS3", level: "Expert" },
                { name: "Responsive Design", level: "Expert" },

            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "REST APIs", level: "Learning" },
                { name: "PostgreSQL", level: "Learning" },
                { name: "Python (Flask)", level: "Proficient" },
                { name: "Supabase", level: "Proficient" },
                { name: "Node.js", level: "Proficient" },
            ],
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "AWS", level: "Learning" },
                { name: "npm/yarn", level: "Proficient" },
                { name: "Vercel", level: "Proficient" },
                { name: "Git & GitHub", level: "Expert" },
                { name: "Docker", level: "Learning" },
                { name: "Jetbrains IDE", level: "Proficient" },
                { name: "SEO", level: "Learning" },
            ],
        },
        {
            title: "Data Science & ML",
            skills: [
                { name: "NumPy", level: "Expert" },
                { name: "Pandas", level: "Expert" },
                { name: "Scikit-learn", level: "Proficient" },
                { name: "Matplotlib", level: "Proficient" },
                { name: "Jupyter", level: "Expert" },
                { name: "PyTorch", level: "Learning" },
            ],
        },
    ];

    const levelConfig: Record<string, { label: string; dot: string; pill: string }> = {
        Expert:     { label: "Expert",     dot: "bg-emerald-400", pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
        Proficient: { label: "Proficient", dot: "bg-blue-400",    pill: "bg-blue-500/10 text-blue-300 border-blue-500/30" },
        Learning:   { label: "Learning",   dot: "bg-amber-400",   pill: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
    };

    const levelOrder: Record<string, number> = { Expert: 0, Proficient: 1, Learning: 2 };

    const sortedCategories = skillCategories.map(category => ({
        ...category,
        skills: [...category.skills].sort((a, b) =>
            (levelOrder[a.level ?? "Learning"] ?? 2) - (levelOrder[b.level ?? "Learning"] ?? 2)
        ),
    }));

    const allSkills = skillCategories.flatMap(c => c.skills);
    const counts = {
        Expert:     allSkills.filter(s => s.level === "Expert").length,
        Proficient: allSkills.filter(s => s.level === "Proficient").length,
        Learning:   allSkills.filter(s => s.level === "Learning").length,
    };

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
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">What I work with</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Skills & Technologies
                        </h1>
                    </div>

                    {/* Main layout — skills top, stats bottom, all stretching to fill height */}
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2 mb-4" style={{ gridAutoRows: "1fr" }}>
                        {sortedCategories.map((category, idx) => (
                            <BentoBox
                                key={idx}
                                title={
                                    <div className="flex items-center gap-2">
                                        <span>{category.icon}</span>
                                        <span>{category.title}</span>
                                    </div>
                                }
                                className={`border-white/10 flex flex-col justify-between ${
                                    idx === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                                        ? "md:col-span-2"
                                        : ""
                                }`}
                            >
                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill, skillIdx) => {
                                        const config = skill.level ? levelConfig[skill.level] : null;
                                        return (
                                            <span
                                                key={skillIdx}
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:scale-105 hover:brightness-110 ${
                                                    config?.pill ?? "bg-white/5 text-zinc-300 border-white/10"
                                                }`}
                                            >
                                                {config && (
                                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${levelConfig[skill.level!].dot}`} />
                                                )}
                                                {skill.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </BentoBox>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-center gap-6 mt-4">
                        {(["Expert", "Proficient", "Learning"] as const).map((level) => (
                            <div key={level} className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${levelConfig[level].dot}`} />
                                <span className="text-xs uppercase tracking-widest text-zinc-500">{level}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </InteractiveGridBackground>
    );
}