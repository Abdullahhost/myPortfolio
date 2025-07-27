
"use client"

import { useState } from "react"



const FAQSection = () => {

    const faqData = [
        {
            id: 1,
            title: "What services do you offer as a front-end web developer?",
            description: "I specialize in building modern, responsive, and interactive websites using technologies like HTML, CSS, JavaScript, React, Tailwind CSS, NextJS and more. I create user interfaces that are fast, accessible, and mobile-friendly with SEO."
        },
        {
            id: 2,
            title: "Do you build websites from scratch or use templates?",
            description: "I can do both based on your needs. I often build custom websites from scratch for full flexibility, but I can also customize premium templates to save time and cost while still meeting your branding goals."
        },
        {
            id: 3,
            title: "Will my website be mobile-friendly and responsive?",
            description: "Yes, 100%. Every website I build is fully responsive, which means it will look and function well on desktops, tablets, and smartphones"
        },
        {
            id: 4,
            title: "How long does it take to complete a website project?",
            description: "Project timelines vary depending on the complexity and features. A simple landing page can take 3–5 days, while a full website or dashboard can take 1–3 weeks. I always give you a clear timeline before we begin."
        },
        {
            id: 5,
            title: "Do you offer SEO optimization for websites?",
            description: "Yes, I implement basic front-end SEO best practices like semantic HTML, optimized images, performance tuning, and meta tags. For advanced SEO, I can collaborate with or refer you to an SEO specialist."
        },
        {
            id: 6,
            title: "Can you work with my back-end developer or designer?",
            description: "Absolutely. I often collaborate with other developers, designers, or teams. I'm flexible and can integrate my front-end work into your existing stack or workflow."
        },
        {
            id: 7,
            title: "What technologies do you use most often?",
            description: "I mainly work with HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, and sometimes TypeScript. I also use Git/GitHub for version control and tools like Figma or Adobe XD for design integration."
        },
        {
            id: 8,
            title: "How do we get started working together?",
            description: "Just contact me with a brief description of your project or idea. I’ll respond quickly to schedule a free consultation where we can discuss your goals, features, timeline, and budget."
        },
    ]


    const [selectedFaq, setSelectedFaq] = useState<null>(null)
    const toggleFaq = (index: any) => {
        if (selectedFaq === index) {

            return setSelectedFaq(null)
        }
        setSelectedFaq(index)


    }

    return (
        <div className="bg-white w-full h-fit px-2 md:px-8 lg:px-20 py-12">
            <h1 className="text-[1.8rem] md:text-[2rem]  lg:text-[2.2rem] font-bold text-black text-center my-12"></h1>

            {faqData.map((ele, index) => {
                return <div key={ele.id} className={`min-w-[100%] my-2 px-4 faqwrapper bg-[#f0efef] ${selectedFaq === index ? "faqOpen" : ""}`} onClick={() => toggleFaq(index)} >
                    <div className={` w-full`}>
                        <div className={`w-full faqBox hover:px-4 py-4 flex items-center justify-between transition-all  gap-6 group delay-100 duration-500 cursor-pointer ${selectedFaq === index ? "faqBoxHover" : ""}`}>


                            <h2 className="h-full text-md font-semibold">{ele.title}</h2>
                            <div className={`h-full duration-700 relative delay-100 ${selectedFaq === index ? "group-hover:rotate-[180deg] rotate-[180deg]" : " group-hover:rotate-90"} scale-75 lg:scale-100`} >
                                <span className={`plus-icon  ${selectedFaq === index ? "after:h-0 " : ""}`}></span>

                            </div>
                        </div>
                        <div className={`transition-all origin-center duration-700 delay-100 w-full h-[0.1px] bg-[silver] ${selectedFaq === index ? "scale-x-100" : "scale-0"} `}></div>
                    </div>
                    <div className={`faqAnsware text-sm text-[#787878] ${selectedFaq === index ? "overflow-auto" : ""}`}>
                        <p className="py-8">{ele.description}</p>
                    </div>

                </div>

            })}
        </div>
    )
}

export default FAQSection
