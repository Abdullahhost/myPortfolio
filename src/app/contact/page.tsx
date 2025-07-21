
import Header from "../components/header/Header"
import FirstAnimation from "../components/loadingUi/FirstAnimation"
import Startup from "../components/loadingUi/Startup"
import MailingForm from "./components/MailingForm"


import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact - Page",
    description: "Let’s build your digital success together.",
};



const Contact = () => {

    return (
        <>
            <Startup />
            <FirstAnimation />
            <header className="w-full bgGradient controlLargeScreen ">
                <Header />
            </header>
            <main className="w-full px-4 md:px-8 bg-white controlLargeScreen py-6 md:py-24 md:mt-6 lg:mt-6">
                <div className=" w-full lg:w-3/4">
                    <h2 className="text-black text-[1.5rem] md:text-[2rem] lg:text-[3rem] first-letter:text-[#3D42FB] first-letter:font-bold inline-block">Let’s build your digital success together. </h2>
                    <br />
                    <small className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-neutral-400 block w-full lg:w-4/6 mt-4">Reach out to discuss your project needs. I’m here to help with innovative web solutions tailored to your vision.</small>
                </div>

                <MailingForm />

            </main>
        </>
    )
}

export default Contact
