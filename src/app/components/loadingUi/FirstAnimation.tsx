
"use client"


import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

import ToggleBtn from "../button/ToggleBtn";
import ResponsiveMenu from "../menubar/responsiveMenu/ResponsiveMenu";

const FirstAnimation = () => {



    const [stickyNav, setStickyNav] = useState<boolean>(false)
    const path = usePathname();

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 150) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }

        })

    }, [stickyNav, setStickyNav])
    return (
        <div style={{ zIndex: "999" }}
            className="fadeToTopAnimation transition-all 
                    fixed bottom-[-130%] left-[-25%] z-50 w-[150vw] h-screen
                  bg-black hidden lg:flex items-center justify-center zIndex" >

            <h3 className="animate-bounce text-5xl font-semibold text-white">
                {path === "/" ? "Home" : path.replace("/", "").toLocaleUpperCase()}
            </h3>

            {stickyNav && <>
                <div className={`border transition-all hidden lg:block zIndex`}>
                    <ToggleBtn />
                    <menu>
                        <ResponsiveMenu />
                    </menu>
                </div>
            </>}
        </div>
    )
}

export default FirstAnimation


