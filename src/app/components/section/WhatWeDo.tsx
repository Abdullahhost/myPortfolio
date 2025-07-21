
"use client"

import { useContext } from "react"
import HoverFeatures from "./component/HoverFeatures"
import Image from "next/image"
import { ToggleContext } from "@/app/context/ToggleContex"


const WhatWeDo = () => {

    const { state } = useContext(ToggleContext)
    // const [dropdownMenuOpen, setDropDownMenu] = useState<boolean>(false)
    return (
        <section className="w-full bg-[#272727] py-24 flex flex-col items-center min-h-[80vh]">
            {state.focusToggle ? <div className="fixed pointer-events-none top-0 left-0 w-full h-screen bg-[#0008] z-40 backdrop-blur-lg">

            </div> : ""
            }
            <h2 className="text-[1.8rem] md:text-[2rem]  lg:text-[2.2rem] font-bold uppercase my-6 text-white">What We Do</h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center p-2 md:p-6 lg:p-16 ">
                <HoverFeatures color1="rgba(68,36,164,1)" color2="rgba(84,212,228,1) 92.7% )" title="Webdesign & Development">
                    <div className="">

                        <div className="flex flex-col lg:flex-row items-center gap-4 ">
                            <div className="min-w-[50%] max-h-[80%]">

                                <Image
                                    alt="image"
                                    width={500}
                                    height={500}
                                    className="w-full block my-4 lg:w-[90%] h-[250px] lg:h-[350px] object-cover"
                                    src={"/project.webp"}
                                />
                            </div>
                            <div className="">
                                <h2 className="text-[#141414] text-[28px] lg:text-[42px] font-bold my-2">Webdesign</h2>
                                <hr />
                                <div className="text-[14px] lg:text-[16px] flex gap-3 flex-wrap my-2 font-bold">
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline text-[#141414]">UI/UXdesign</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Wirefarming</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Prototyping</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Webdesign</li>

                                    </div>
                                </div>
                                <hr />
                                <div className="my-4">

                                    <small className="text-[#9D9D9D] text-[12px] lg:text-[14px]">
                                        User-focused,aesthetically refined websites that balance functionality with visual appeal. I design intuitive digital experiences tailored to your brand and audience.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </HoverFeatures>

                <HoverFeatures color1="rgba(255,162,104,1)" color2="rgba(254,80,147,1))" title=" Back-end development">
                    <div>

                        <div className="flex flex-col lg:flex-row items-center gap-4 ">
                            <div className="min-w-[50%] max-h-[80%]">

                                <Image
                                    alt="image"
                                    width={500}
                                    height={500}
                                    className="w-full block my-4 lg:w-[90%] h-[250px] lg:h-[350px] object-cover"
                                    src={"/api-img.webp"}
                                />
                            </div>
                            <div className="">
                                <h2 className="text-[#141414] text-[28px] lg:text-[42px] font-bold my-2">Back-end</h2>
                                <hr />
                                <div className=" flex gap-3 flex-wrap my-2 font-bold">
                                    <div className="text-[14px] lg:text-[16px]  inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline text-[#141414]">API development</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Database management</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">User Authentication & Authorization</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Server & Hosting Configuration</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Performance Optimization</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Third-Party Integrations</li>

                                    </div>
                                </div>
                                <hr />
                                <div className="my-4">

                                    <small className="text-[#9D9D9D] text-[12px] lg:text-[14px]">
                                        I provide back-end web development services tailored to power your web applications. From developing custom APIs to setting up databases and managing server-side logic, I ensure your web infrastructure runs smoothly and securely. Whether you're building a new application or need to upgrade your existing systems, I deliver efficient, scalable, and future-ready solutions.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </HoverFeatures>
                <HoverFeatures color1="rgba(9,9,121,1)" color2="rgba(0,212,255,1)" title="Front-end development">
                    <div className="">

                        <div className="flex flex-col lg:flex-row items-center gap-4 ">
                            <div className="min-w-[50%] max-h-[80%]">

                                <Image
                                    alt="image"
                                    width={500}
                                    height={500}
                                    className="w-full block my-4 lg:w-[90%] h-[250px] lg:h-[350px] object-cover"
                                    src={"/front-endimg.png"}
                                />
                            </div>
                            <div className="">
                                <h2 className="text-[#141414] text-[28px] lg:text-[42px] font-bold my-2">Front-end</h2>
                                <hr />
                                <div className="text-[14px] lg:text-[16px] flex gap-3 flex-wrap my-2 font-bold">
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline text-[#141414]">Responsive Web Design</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">UI/UX Implementation</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Performance Optimization</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline"> API Integration</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Front-End Tooling</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">TypeScript based reusable component</li>

                                    </div>
                                </div>
                                <hr />
                                <div className="my-4">

                                    <small className=" text-[#9D9D9D] text-[12px] lg:text-[14px]">
                                        I specialize in front-end web development, creating responsive, user-friendly interfaces that deliver seamless user experiences. I work with modern technologies like HTML5, CSS3, JavaScript, and frameworks such as React to build performant and visually engaging web applications. My focus is on clean, maintainable code and intuitive design, ensuring that the front-end not only looks great but functions flawlessly across devices and browsers.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </HoverFeatures>
                <HoverFeatures color1="rgba(242,150,150,1)" color2="rgba(242,150,150,1)" title="Full-stack development">
                    <div>

                        <div className="flex flex-col lg:flex-row items-center gap-4 ">
                            <div className="min-w-[50%] max-h-[80%]">

                                <Image
                                    alt="image"
                                    width={500}
                                    height={500}
                                    className="w-full block my-4 lg:w-[90%] h-[250px] lg:h-[350px] object-cover"
                                    src={"/full-stack.webp"}
                                />
                            </div>
                            <div className="">
                                <h2 className="text-[#141414]  text-[28px] lg:text-[42px] font-bold my-2">Full-stack</h2>
                                <hr />
                                <div className=" flex gap-3 flex-wrap my-2 font-bold text-[14px] lg:text-[16px]">
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline  text-[#141414]">Front-End Development</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Back-End Development</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Database Management</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Deployment & DevOps</li>

                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-black"></div>
                                        <li className="inline">Performance & Monitoring</li>

                                    </div>
                                </div>
                                <hr />
                                <div className="my-2">

                                    <small className="text-[#9D9D9D] text-[12px] lg:text-[14px]">
                                        I offer full-stack web development services, meaning I take care of both the front-end and the back-end. From designing beautiful, responsive interfaces to building powerful, secure APIs and database systems, I deliver complete, high-quality web solutions tailored to your needs—whether it’s a custom website, a business platform, or a web app.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </HoverFeatures>

            </div>
        </section>
    )
}

export default WhatWeDo
