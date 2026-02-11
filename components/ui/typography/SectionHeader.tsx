interface SectionHeaderProps {
    title: string;
    gradientFrom?: string;
    gradientTo?: string;
}

export function SectionHeader({
    title,
    gradientFrom = "from-blue-500",
    gradientTo = "to-purple-500"
}: SectionHeaderProps) {
    return (
        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className={`w-1 h-6 bg-linear-to-b ${gradientFrom} ${gradientTo} rounded-full`}></span>
            {title}
        </h4>
    );
}

