import Image from 'next/image'


const AboutOurServices = () => {
    return (
        <section style={{ background: "linear-gradient(to top, #F5F5F5, #fff)" }} className="w-full  flex flex-col justify-center items-center px-2 md:py-16 md:px-8 lg:px-20 ">
            <h2 className="text-[1.8rem] md:text-[2rem]  lg:text-[2.2rem] font-bold my-6 text-black py-12">We can aid you in.</h2>
            <div className="w-full flex md:justify-start lg:justify-center items-start flex-wrap lg:flex-nowrap gap-12">
                <div className="relative border-slate-800 pr-2 max-w-[450px] w-full md:w-[60%] lg:min-w-[300px] xl:w-[100%]">

                    <div className="flex items-start gap-2 lg:gap-6 mb-4">
                        <Image
                            className="-ml-3 -mt-2"
                            alt="About Image"
                            width={80}
                            height={80}
                            src={"/front-end.png"}
                        />
                        <h2 className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]   first-letter:text-[#3D42FB]">Front-end</h2>
                    </div>

                    <p className='text-sm'>
                        Expert front-end developers skilled in creating reusable components with TypeScript, enhancing code efficiency, maintainability, and scalability. We help clients build robust, modular, and high-performing web applications.</p>

                    <div className='bg-slate-800 w-[1px] h-[200px] customBorder hidden lg:block'></div>


                </div>
                <div className="relative border-slate-800 pr-2 max-w-[450px] w-full md:w-[60%] lg:min-w-[300px] xl:w-[100%]">

                    <div className="flex items-start gap-2 lg:gap-6 mb-4">
                        <Image
                            className="-ml-3 -mt-2"
                            alt="About Image"
                            width={80}
                            height={80}
                            src={"/back-end.png"}
                        />
                        <h2 className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]   first-letter:text-[#3D42FB]">Back-end</h2>
                    </div>

                    <p className='text-sm'>
                        Experienced back-end web developers skilled in creating efficient, secure, and scalable server-side solutions. We specialize in optimizing performance and ensuring seamless integration with front-end systems to meet your business needs.</p>

                    <div className='bg-slate-800 w-[1px] h-[200px] customBorder hidden lg:block'></div>
                </div>
                <div className="border-slate-800 pr-2 max-w-[450px] w-full md:w-[60%] lg:min-w-[300px] xl:w-[100%]">

                    <div className="flex items-start gap-2 lg:gap-6 mb-4">
                        <Image
                            className="-ml-3 -mt-2"
                            alt="About Image"
                            width={75}
                            height={75}
                            src={"/fullstackImage.png"}
                        />
                        <h2 className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]   first-letter:text-[#3D42FB]">Full-Stack</h2>
                    </div>

                    <p className='text-sm'>Expert full stack web developers skilled in front-end and back-end technologies. We build robust, scalable web applications tailored to client needs, delivering high-quality solutions on time.</p>

                </div>

            </div>
        </section>
    )
}

export default AboutOurServices
