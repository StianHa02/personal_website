import { ReactNode } from "react";

interface BentoBoxProps {
    title?: string | ReactNode;
    children: ReactNode;
    className?: string;
}

export default function BentoBox({
                                     title,
                                     children,
                                     className = "",
                                 }: BentoBoxProps) {
    return (
        <div
            className={`
        rounded-2xl p-6
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        shadow-sm dark:shadow-none
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        ${className}
      `}
        >
            {title && (
                <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {title}
                </h2>
            )}
            {children}
        </div>
    );
}