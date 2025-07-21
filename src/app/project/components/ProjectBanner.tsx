import Image from 'next/image'
import React from 'react'

const ProjectBanner = () => {
    return (
        <div className='w-full relative h-[70vh] lg:min-h-[90vh] flex flex-col items-center glowEffectcenter justify-center text-white overflow-hidden'>
            <Image
                className='w-full transition-all object-cover'
                width={5000}
                height={5000}
                alt='Project Image'
                src={"/projectBannerImage.png"}
            />

            <div className='absolute bottom-0 left-0 w-full h-full flex items-end justify-end '>
                <div className='w-full py-16 flex flex-col items-center glowGradient justify-center backdrop-blur-none lg:backdrop-blur-sm'>

                    <h2 className="text-white my-4 lg:my-8 text-[35px] lg:text-[3rem] lg:leading-normal leading-[40px] font-bold w-[80%] lg:w-[40%] text-center">Our Work Speaks for Itself</h2>
                    <h3 className=' w-[80%] lg:w-[65%] text-sm lg:text-lg text-center'>Explore the diverse range of projects we've delivered, showcasing our expertise across multiple industries.</h3>

                </div>
            </div>
        </div>
    )
}

export default ProjectBanner



