"use client"


import Magnifire from "@/app/components/magnifierImage/Magnifire";
import Image from "next/image"
import { useRef, useState } from "react"


type SingleProjectType = {
    singleImage: string;
}

const SingleProjectImage: React.FC<SingleProjectType> = ({ singleImage }) => {

    const divRef = useRef<HTMLDivElement>(null)

    const [zoomImage, setZooomImage] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);


    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 120, y: 120 })
    const [magnifier, setMagnifier] = useState<boolean>(false)
    const [cursorPosition, setCursorPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

    const handleClick = (imageName: string) => {
        setZooomImage(imageName)
        setModal(true)
        document.body.style.height = "100vh";
    }
    const handleMouseHoverMove = (e: any) => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.pageX - left) / width) * 100
        const y = ((e.pageY - top) / height) * 100

        setPosition({ x, y })
        setCursorPosition({ x: e.pageX - left, y: e.pageY - top })
    }

    return (
        <div className="relative" key={singleImage}>

            {modal && <div onClick={() => setModal(false)} className="fixed top-10 right-8 z-[1000] rounded-full bg-white text-white p-4">
                <button>❌</button>
            </div>}
            <div onClick={() => handleClick(singleImage)} className='mb-2 shadow-md cursor-zoom-in border' >


                <Image
                    className="w-full object-cover"
                    width={5000}
                    height={5000}
                    alt='Project Image'
                    src={singleImage}
                />

                <div

                    style={{ zIndex: 500 }}
                    className={`${modal ? "translate-y-0 z-[30]" : "translate-y-[-150%]"} transition-all duration-500 fixed top-0 left-0 bg-[#0007] backdrop-blur-lg w-full h-full p-2 md:p-12 lg:p-16 flex items-center justify-center`}>


                    <div
                        ref={divRef}
                        onMouseEnter={() => setMagnifier(true)}
                        onMouseLeave={() => setMagnifier(false)}
                        onMouseMove={handleMouseHoverMove}
                        className="relative">

                        <div
                            className="translate-x-[-50%] translate-y-[-50%] border shadow-2xl"
                            style={{
                                position: "absolute",
                                left: `${cursorPosition.x + 10}px`,
                                top: `${cursorPosition.y + 15}px`,
                                pointerEvents: "none",
                                zIndex: "1000"
                            }}>


                            {magnifier && <div className="w-[350px] h-[350px] border hidden lg:block" style={{

                                backgroundImage: `url(${zoomImage})`,
                                backgroundPosition: `${position.x}% ${position.y}%`,
                                backgroundSize: "100vw"

                            }}>

                            </div>
                            }
                        </div>

                        <Image
                            className="min-w-[70vw] max-w-full max-h-screen object-scale-down"
                            width={5000}
                            height={5000}
                            alt='Project Image'
                            src={zoomImage}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProjectImage;
