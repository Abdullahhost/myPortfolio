import MenuIconSection from "@/app/components/menubar/MenuIconSection"
import Image from "next/image"
import Form from "./Form"


const MailingForm = () => {
    return (
        <div className="w-full mt-20 flex justify-start flex-wrap xl:flex-nowrap gap-12">
            <div className="w-full md:min-w-[400px] lg:min-w-[420px] xl:min-w-[450px] mt-0 md:mt-8">
                <Image
                    className="w-full object-cover min-w-full"
                    width={500}
                    height={500}
                    alt="Profile"
                    src={"/handshake.webp"}
                />
            </div>
            <div className="w-full xl:max-w-[55vw] mt-0 md:mt-8">
                <Form />
            </div>
        </div>
    )
}

export default MailingForm
