"use client"

import { InputType } from "@/app/type/ProjectType"




const Input: React.FC<InputType> = ({
    type,
    name,
    number,
    heading,
    placeholder,
    textArea,
    userValue,
    onChange
}) => {


    return (
        <div style={{ background: "linear-gradient(to bottom, #f1f4f7 75%, #3D42FB)" }} className="py-2 lg:py-6 mb-8 lg:mb-4 ">
            <div className={`ml-0 lg:ml-12 text-nowrap p-2 lg:p-4 text-[1.2rem] lg:text-[1.5rem] text-[#3D42FB]}`}>
                {heading}
            </div>
            <div className="flex items-start relative flex-col lg:flex-row justify-start">

                <div className="text-neutral-400 p-4 hidden lg:block ">
                    {`0${number}`}
                </div>


                {textArea ? <>

                    <textarea
                        required placeholder={placeholder} title={`${name} is required`}
                        name={name} onChange={onChange} rows={6} value={userValue}
                        className="inputChecked text-black  focus:placeholder:text-[transparent] 
                        outline-none text-[1.1rem] h-full  placeholder:text-[.9rem] placeholder:lg:text-[1.1rem] 
                      px-2 lg:px-4 pt-4 pb-8 w-full bf-white" ></textarea>
                </> : <>
                    <input required type={type}
                        style={{ borderBottomLeftRadius: "2rem" }}
                        value={userValue}
                        className="inputChecked text-black focus:placeholder:text-[transparent] 
                        outline-none text-[1.1rem] h-full placeholder:text-[.9rem] placeholder:lg:text-[1.1rem] 
                         px-2 lg:px-4 pt-4 pb-6 w-full shadow-xl"

                        placeholder={placeholder} title={`${name} is required`} name={name} onChange={onChange} />
                </>}
            </div>
        </div>
    )
}

export default Input
