
"use client"

import { useState } from "react"



const FAQSection = () => {

    const faqData = [
        {
            id: 1,
            title: "What services do you offer as a branding and design freelancer",
            description: "This is a short description  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi suscipit iusto dolore. Tempore nesciunt eligendi accusamus illum amet non voluptas! Aut, blanditiis quis! Cupiditate non sunt dolores aut eum?"
        },
        {
            id: 2,
            title: "How long does a typical branding project take?",
            description: "This is a short description"
        },
        {
            id: 3,
            title: "Third Title",
            description: "This is a short description"
        },
        {
            id: 4,
            title: "Fourth Title",
            description: "This is a short description"
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
            <h1 className="text-[1.8rem] md:text-[2rem]  lg:text-[2.2rem] font-bold text-black text-center my-12">Single Faq Section</h1>

            {faqData.map((ele, index) => {
                return <div key={ele.id} className={`min-w-[100%] my-2 px-4 faqwrapper bg-[#f0efef] ${selectedFaq === index ? "faqOpen" : ""}`} onClick={() => toggleFaq(index)} >
                    <div className={` w-full faqBox flex items-center justify-between gap-6 group delay-100 duration-300 hover:px-6 py-4 cursor-pointer ${selectedFaq === index ? "faqBoxHover" : ""}`}>

                        <h2 className="h-full text-md font-semibold">{ele.title}</h2>
                        <div className={`h-full duration-500 relative delay-100 ${selectedFaq === index ? "group-hover:rotate-[180deg] rotate-[180deg]" : " group-hover:rotate-90"} scale-75 lg:scale-100`} >
                            <span className={`plus-icon  ${selectedFaq === index ? "after:h-0 " : ""}`}></span>

                        </div>
                    </div>
                    <div className={`faqAnsware text-sm text-[#787878] ${selectedFaq === index ? "overflow-auto" : ""}`}>

                        <p className="py-6">{ele.description}</p>
                    </div>

                </div>

            })}
        </div>
    )
}

export default FAQSection
