interface NavigationLinkProps {
    label: string;
    onClick: () => void;
}

export function NavigationLink({ label, onClick }: NavigationLinkProps) {
    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
            <span className="w-0 group-hover:w-8 h-px bg-linear-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">
                {label}
            </span>
        </button>
    );
}

