"use client"

import { useRef } from "react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import Image from "next/image";
import Link from "next/link";



gsap.registerPlugin(ScrollTrigger)


const AboutSection = () => {

    const aboutRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {


        gsap.fromTo(".posRightTo", { translateX: 0, translateY: 0 }, {
            translateX: 150, translateY: 100, ease: "power1.in", delay: .2, scrollTrigger: {
                trigger: ".posRightTo",
                start: "top 100%",
                scrub: 1,
                toggleActions: 'play play play reverse'
            }
        })
    }, [])


    return (

        <div ref={aboutRef} className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-12 lg:gap-24 relative py-20 px-8 md:px-12 lg:px-20 overflow-hidden">

            <div className="full">
                <Image
                    className="w-full md:max-w-[30vw] lg:min-w-[30vw] lg:max-w-[65vw]"
                    width={5000}
                    height={5000}
                    alt="banner"
                    src={"/banner.webp"}
                />
            </div>
            <div className="w-full">
                <h2 className="text-[28px] md:text[36px] lg:text-[48px] mb-8 font-bold leading-tight text-[#686969]">Working to build your success</h2>
                <span className="text-[16px] md:text[1.7vw] lg:text-[1.2vw] text-light text-[#9D9D9D]">For over 6 years, NEXOQOD IT, a premier digital agency, provides best-in-class web design, development, hosting, digital marketing, and managed services. With us, your success is our success, and we work with you to find powerful online solutions that fit your needs.</span>

                <div className="my-8">
                    <Link href={"/about"}>
                        <button className="text-[12px]  hover:bg-white hover:text-black transition-all hover:ring-black lg:text-[15px] font-bold ring-2 ring-[#9D9D9D] rounded-sm p-3 ring-offset-4">Know us more</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default AboutSection
