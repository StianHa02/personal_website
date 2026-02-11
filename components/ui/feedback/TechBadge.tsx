interface TechBadgeProps {
    name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
    return (
        <span className="px-3 py-1 bg-gray-800/50 rounded-full backdrop-blur-sm">
            {name}
        </span>
    );
}

