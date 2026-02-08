import React from 'react'

function HeroButton(
    {title, icon, position, handleClick, otherClasses}: {
        title: string;
        icon?: React.ReactNode;
        position: string;
        handleClick?: () => void;
        otherClasses?: string;
    }
)
{
    return (
        <button className="p-0.75 relative w-full" onClick={handleClick}>
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className={`px-8 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center ${otherClasses}`}>
                {position === "left" && icon && <span className="mr-2">{icon}</span>}
                {title}
                {position === "right" && icon && <span className="ml-2">{icon}</span>}
            </div>
        </button>
    )
}

export default HeroButton
