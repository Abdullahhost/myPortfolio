

const AboutBanner = () => {
    return (
        <section
            className="bg-white pb-10 pt-16 px-8 md:pt-28 md:pb-16 md:px-20 w-full h-fit min-h-[calc(100vh_-_96px)]
                  lg:min-h-[calc(100vh_-_96px)] overflow-hidden flex justify-between
                 flex-wrap lg:flex-nowrap lg:gap-0 gap-20">
            <div className="relative w-full">

                <div className="absolute top-[20%] left-[70px] w-28 h-[30vh]
                bg-slate-800 backdrop-sepia rotateFor3d mix-blend-difference z-20"></div>

                <div className="absolute top-[-20%] left-[220px] w-32 h-[60%] animate-pulse
                 bg-red-950 backdrop-sepia mix-blend-difference  rotateFor3dReverse z-20"></div>

                <div className="absolute bottom-[50%] right-[50%] w-12 h-12 animate-bounce
              mix-blend-difference  bg-yellow-800"></div>

                <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] underline 
              underline-offset-4  
              text-black font-bold h-full w-full lg:max-w-[75%] drop-shadow-lg ">

                    👋! I help companies worldwide with bespoke solutions,<br /><br /> continually pushing the boundaries of quality with each project

                </h2>
            </div>
            <div className="flex flex-col justify-end items-start gap-4 lg:gap-2 max-w-full 
                md:max-w-[50%] lg:max-w-[20vw]">
                <h2 className="font-bold"> <small className="text-lg"> 2024</small ></h2>
                <p className="text-sm">Hey, great to see you!. I'm a Full Stack Web Developer. Skilled in both front-end and back-end technologies, I deliver scalable, efficient, and high-quality web solutions. </p>
            </div>



        </section>
    )
}

export default AboutBanner
