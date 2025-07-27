"use client"

import Image from "next/image"
import { useState } from "react"

const Magnifire: React.FC<{ imageName: string, position: { x: number, y: number } }> = ({ imageName, position }) => {


    return (

        <div className="magnifire-image w-[400px] h-[400px] border" style={{
            backgroundImage: `url(${imageName})`,
            backgroundPosition: `${position.x}% ${position.y}%`
        }}>

        </div>
    )
}

export default Magnifire
