export function DecorativeDivider() {
    return (
        <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="px-4 bg-linear-to-r from-transparent via-gray-900 to-transparent">
                    <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </span>
            </div>
        </div>
    );
}

