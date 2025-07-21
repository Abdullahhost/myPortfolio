"use client"

import Image from "next/image"
import { useState } from "react"

const AboutWe = () => {

    const [showDetails, setShowDetails] = useState<boolean>(true)
    return (
        <section className="w-full py-12 px-2 md:pt-40 md:px-8 lg:px-20 bg-white">
            <div>
                <h2 className="relative text-[8vw] py-8 lg:pb-24 leading-9 md:text-[5vw] lg:text-[3.9vw]">
                    <span className="-rotate-[0deg] inline-block">W</span>
                    <span className="inline-block text-deasign text-[14vw] md:text-[9vw] lg:text-[5.9vw] text-[#3D42FB]">h</span>
                    <span>o</span>
                    <span>{" "}</span>
                    <span>a</span>
                    <span>m</span>
                    <span>{" "}</span>
                    <span>I</span>
                    <span>?</span>

                </h2>
                {/* <hr /> */}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap  gap-16 justify-between ">


                <div className="">
                    <strong className="text-[30px] font-medium inline-block rotate-90"> → </strong>
                    <p className="text-[4vw]  leading-normal md:leading-9 md:text-[3vw] lg:text-[1.9vw] lg:leading-[3vw] xl:leading-[2.5vw] " >

                        I am experts in full-stack software development, focusing on performance, scalability, and exceptional user experiences.

                    </p>
                    <div className={`${showDetails ? " h-[250px]" : "h-0"} transition-all duration-700 relative overflow-hidden w-full`}>

                        <p className={`${showDetails ? "text-md" : "text-[50px]"} absolute top-0 left-0 w-full h-full mt-10 pointer-events-none transition-all duration-700`}>I'm specialize in crafting dynamic, high-performance web applications.
                            With a deep understanding of .NET, MySQL, PostgreSQL MongoDB, Express.js, React.js, and Node.js and Typescript
                            we build seamless full-stack solutions that prioritize scalability, efficiency, and user experience.
                            our expertise spans from designing robust backend architectures to developing intuitive front-end interfaces,
                            ensuring every project is both functional and visually compelling.
                            we are committed to continuous learning,
                            leveraging the latest technologies and best practices to deliver
                            innovative solutions that drive growth and exceed expectations.</p>


                        <div className={`w-full ${showDetails ? "h-0" : "h-[250px]"} duration-700 transition-all backdrop-blur-lg absolute bottom-0 left-0`}>

                        </div>
                    </div>
                    <button onClick={() => setShowDetails(prev => !prev)} className="px-6 py-2 cursor-pointer rounded-md mt-6 bg-slate-100">{showDetails ? "Read Less" : "Read More"}</button>
                </div>
                <div>
                    <Image
                        className=" min-w-full md:min-w-[420px] object-cover md:max-w-[420px] h-full"
                        alt="About Image"
                        width={1000}
                        height={1000}
                        src={"/teamImage.jpg"}
                    />
                </div>
            </div>


        </section>
    )
}

export default AboutWe
