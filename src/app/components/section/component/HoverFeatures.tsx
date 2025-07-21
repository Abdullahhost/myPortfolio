"use client"

import { ToggleContext } from "@/app/context/ToggleContex"
import { useContext, useState } from "react"

const HoverFeatures: React.FC<{ children: React.ReactNode, title: string, color1?: string, color2?: string }> = ({
    children,
    title,
    color1,
    color2
}) => {
    const [dropdownMenuOpen, setDropDownMenu] = useState<boolean>(false)

    const { state, dispatch } = useContext(ToggleContext)

    const handleMouseOver = () => {
        dispatch({ type: 'TOGGLE_FOCUS' })
        setDropDownMenu(true)
    }
    const handleMouseOut = () => {
        dispatch({ type: 'TOGGLE_FOCUS' })
        setDropDownMenu(false)
    }
    const handleCloseModal = () => {
        setDropDownMenu((prev => !prev))
        // dispatch({ type: 'TOGGLE_FOCUS' })

    }
    return (
        <div className={`relative w-full`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div style={{ backgroundImage: `radial-gradient( circle farthest-corner at 0.2% 0.5%,  ${color1} 3.7%, ${color2}` }} className={`w-full rounded-xl hover:shadow-2xl transition-all text-white cursor-pointer px-6 py-12 text-center shadow-xl relative`}>
                {title}
            </div>
            <div className={`relative drop_menu p-4 md:p-6 lg:p-12 grid place-items-center border ${dropdownMenuOpen ? "drop_menu_open" : ""}`}>
                <button onClick={handleCloseModal} className="absolute top-4 right-4 text-red-500 font-bold">Close</button>
                {children}
            </div>
        </div>
    )
}

export default HoverFeatures
