
import Image from "next/image"
import Button from "../button/Button"
import LinkBox from "./LinkBox"
import UpdateDate from "../UpdateDate"


const Footer = () => {
    return (
        <div className="w-full relative overflow-hidden min-h-[70vh] flex flex-col justify-between">
            <div className="px-2 py-12 md:px-8 lg:px-20 md:py-24 ">

                <div className="flex-col lg:flex-row flex justify-start gap-8">
                    <div className="relative h-24 w-24 md:min-w-24 md:min-h-24 md:max-h-24 activeStatus md:max-w-24 mt-0 md:-mt-3">

                        <Image
                            className="h-ful h-full  rounded-full object-cover animate-pulse"
                            width={200}
                            height={200}
                            alt="Profile"
                            src={"/portfolio.png"}
                        />
                    </div>
                    <div className="w-full">

                        <h2 className="text-neutral-50 text-[1.5rem] md:text-[1.8rem] lg:text-[2.1rem] first-letter:text-[#3D42FB] first-letter:font-bold inline-block">Let’s build your digital success together. </h2>
                        <br />
                        <small className="text-[.9rem] md:text-[1rem] lg:text-[1.2rem] text-neutral-400 block w-full lg:w-4/6 mt-4">Reach out to discuss your project needs. I’m here to help with innovative web solutions tailored to your vision.</small>

                    </div>

                </div>
                <div className="mt-[80px] lg:mt-[180px] relative">
                    <hr className="w-2/4 ml-[50%] activeStatus" />
                    <div style={{ transform: "translateY(-50%)" }} className="absolute z-50 top-0 right-[0%]">
                        <Button background="#6065ff" content="Contact" rounded={true} widthHeight={135} />
                    </div>

                </div>

                <div className="flex gap-4 ml-0 lg:ml-[120px] translate-y-[0px] mt-[100px] md:mt-0 md:translate-y-[-50%]">
                    <Button contact contactAddress="tel:+88017590018221" content="+8801759..." />
                    <Button contact contactAddress="mailto:abdullahalmamun7021@gmail.com" content="abdullahalmamun..." />
                </div>

            </div>

            <div className="text-white px-8 flex gap-8  py-4 md:px-24 lg:px-[13.5rem] md:py-8">
                <LinkBox />

            </div>
            <div className="verticalText absolute bottom-8 right-4 lg:right-10 text-slate-300">
                Version &nbsp;: &nbsp; <UpdateDate />
            </div>

        </div>
    )
}
// 313131

export default Footer
