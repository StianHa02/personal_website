import { ReactNode } from "react";

interface GradientButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    download?: boolean;
    icon?: ReactNode;
    variant?: "solid" | "outline";
    className?: string;
}

export function GradientButton({
    children,
    onClick,
    href,
    download,
    icon,
    variant = "solid",
    className = ""
}: GradientButtonProps) {
    const baseClasses = "group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 backdrop-blur-sm";

    const variantClasses = variant === "solid"
        ? "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/50"
        : "bg-linear-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600 hover:to-purple-600 border border-blue-500/30 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/50";

    const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                download={download}
                className={combinedClasses}
            >
                {icon}
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={combinedClasses}
        >
            {icon}
            {children}
        </button>
    );
}

