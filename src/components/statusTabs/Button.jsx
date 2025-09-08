import React from 'react'

export default function Button({
    title1,
    title2,
    bg1 = "bg-white",
    bg2 = "",
    onClick1,
    onClick2,
    isSubmit = false
}) {
    return (
        <div className="flex gap-[14px]">

            <button
                type="button"
                onClick={onClick1}
                className={`text-black border border-gray-300 rounded-md w-auto p-6 h-[50px] flex items-center justify-center font-bold ${bg1}`}>
                {title1}
            </button>

            <button
                type={isSubmit ? "submit" : "button"}
                onClick={!isSubmit ? onClick2 : undefined}
                className={`text-black border border-gray-300 rounded-md w-auto p-6 h-[50px] flex items-center justify-center font-bold ${bg2}`} >
                {title2}
            </button>
        </div>
    );
}
