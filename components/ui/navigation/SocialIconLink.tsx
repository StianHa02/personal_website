import { ReactNode } from "react";

interface SocialIconLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
    external?: boolean;
}

export function SocialIconLink({ href, icon, label, external = true }: SocialIconLinkProps) {
    return (
        <a
            href={href}
            {...(external && {
                target: "_blank",
                rel: "noopener noreferrer"
            })}
            className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-linear-to-br hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            aria-label={label}
        >
            <div className="text-2xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
        </a>
    );
}

