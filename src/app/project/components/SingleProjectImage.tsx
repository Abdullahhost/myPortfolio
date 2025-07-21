"use client"


import Image from "next/image"
import { useState } from "react"


type SingleProjectType = {
    singleImage: string;
}

const SingleProjectImage: React.FC<SingleProjectType> = ({ singleImage }) => {

    const [zoomImage, setZooomImage] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

    const handleClick = (imageName: string) => {
        setZooomImage(imageName)
        setModal(!modal)
    }

    return (
        <div onClick={() => handleClick(singleImage)} className='mb-2 shadow-md cursor-pointer border' key={singleImage}>
            <Image
                className="w-full object-cover"
                width={5000}
                height={5000}
                alt='Project Image'
                src={singleImage}
            />

            <div style={{ zIndex: 1000 }} className={`${modal ? "translate-y-0" : "translate-y-[-150%]"} transition-all duration-500 fixed top-0 left-0 bg-[#0007] backdrop-blur-lg w-full h-full p-2 md:p-12 lg:p-16 flex items-center justify-center`}>
                <Image
                    className="w-full max-h-full object-scale-down"
                    width={5000}
                    height={5000}
                    alt='Project Image'
                    src={zoomImage}
                />

                {modal && <div className="fixed top-10 right-8  rounded-full bg-white text-white p-4">
                    <button>❌</button>
                </div>}
            </div>
        </div>
    )
}
export default SingleProjectImage;
