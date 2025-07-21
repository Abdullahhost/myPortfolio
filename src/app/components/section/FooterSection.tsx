"use client"

import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs"
import SocialLink from "../menubar/SocialLink"
import Image from "next/image"

const FooterSection = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col gap-6 h-fit controlLargeScreen my-12 py-6  lg:py-12 ">

            <div className="mb-12">


                <div className="flex items-center flex-col gap-4">
                    <Image
                        className="w-32 h-24 rounded-full"
                        width={5000}
                        height={5000}
                        alt="logo-image"
                        src={"/nexoqod_logo.png"}
                    />
                    <h3 className='-mt-2 text-center mb-0  w-fit text-[8vw] leading-[10vw] md:text-[3vw] md:leading-[5.2vw] lg:text-[3.2vw] lg:leading-[4.5vw] font-bold text-slate-50' >
                        NEXOQOD IT
                    </h3>
                </div>
                <div className=" w-full flex  my-1 lg:my-2 flex-col items-center justify-center">
                    <address>House: 5, Apartment 5B</address>
                    <address>Road 17, Block D, Banani</address>
                    <address>Dhaka, Bangladesh</address>
                    <address>Phone: +8801973002528</address>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
                <div className="w-full flex items-center p-0 lg:p-4">
                    <div>
                        <h2 className="text-[5vw] text-slate-300 lg:text-[2.5vw] font-semibold">Aminur Rahman</h2>
                        <cite>CEO</cite><br /><br />
                        <cite>Email: aminur@nexoqod.com</cite><br />
                        <cite>Phone/Whatsapp: +8801752008844</cite>
                        <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                            <div className="w-full flex items-center justify-center rounded-full">
                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsFacebook}
                                            iconSize={18}
                                            linkName="FaceBook"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center  rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsTwitterX}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center rounded-full">
                                <div className="">
                                    <div className="w-fit  h-fit">
                                        <SocialLink
                                            icon={BsLinkedin}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center p-0 lg:p-4">
                    <div>
                        <h2 className="text-[5vw] lg:text-[2.5vw] text-slate-300 font-semibold">Syed Ahmad Taofique</h2>
                        <cite>CTO</cite><br /><br />
                        <cite>Email: arif@nexoqod.com</cite><br />
                        <cite>Phone/Whatsapp: +8801711930032</cite><br />
                        <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                            <div className="w-full flex items-center justify-center rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsFacebook}
                                            iconSize={18}
                                            linkName="FaceBook"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center  rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsTwitterX}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center rounded-full">
                                <div className="">
                                    <div className="w-fit  h-fit">
                                        <SocialLink
                                            icon={BsLinkedin}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
                <div className="w-full flex items-center p-0 lg:p-4">
                    <div>
                        <h2 className="text-[5vw] lg:text-[2.5vw] text-slate-300 font-semibold">Samsur Rahman Rafez</h2>
                        <cite>Tech Lead</cite><br /><br />
                        <cite>Email: rafez@nexoqod.com</cite><br />
                        <cite>Phone/Whatsapp: +8801717062884</cite><br />
                        <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                            <div className="w-full flex items-center justify-center rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsFacebook}
                                            iconSize={18}
                                            linkName="FaceBook"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center  rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsTwitterX}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center rounded-full">
                                <div className="">
                                    <div className="w-fit  h-fit">
                                        <SocialLink
                                            icon={BsLinkedin}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center p-0 lg:p-4">
                    <div>
                        <h2 className="text-[5vw] lg:text-[2.5vw] text-slate-300 font-semibold">Mirza Amirul Islam</h2>
                        <cite className="">Tech Lead</cite><br /><br />
                        <cite>Email: mahfuz@nexoqod.com</cite><br />
                        <cite>Phone/Whatsapp: +8801754146178</cite><br />
                        <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                            <div className="w-full flex items-center justify-center rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsFacebook}
                                            iconSize={18}
                                            linkName="FaceBook"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center  rounded-full">

                                <div className="">
                                    <div className="w-fit h-fit">
                                        <SocialLink
                                            icon={BsTwitterX}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center rounded-full">
                                <div className="">
                                    <div className="w-fit  h-fit">
                                        <SocialLink
                                            icon={BsLinkedin}
                                            iconSize={18}
                                            linkName="Twiter"
                                            linkUrl="https://facebook.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection
