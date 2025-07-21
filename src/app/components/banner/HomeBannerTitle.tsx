"use client"

import React from 'react'

const HomeBannerTitle = () => {
    return (
        <div className='absolute top-[25%] bg-[#ffffffcc] md:bg-transparent left-0  h-full px-4 lg:px-12  pb-12 w-full md:max-w-[70%]'>

            <h3 className='tracking-wider drop-shadow-md uppercase text-xl my-1 md:text-xl lg:text-[1.3rem] font-bold text-slate-400'>Transforming Ideas Into Reality</h3>
            <h1 className='text-[#686969] drop-shadow-md my-4 md:my-2 font-bold w-full lg:w-[45vw] text-[3rem] leading-[1]  md:text-5xl md:leading-[1.2] lg:text-[2.8rem]' >
                Innovative software solutions tailored to your needs.
            </h1>

            <p className='mt-6 text-[3.1vw] drop-shadow-sm md:text-[2vw] lg:text-[1.1rem] w-3/4 text-[#212227]'>
                We specialize in crafting exceptional digital experiences, empowering businesses with cutting-edge technology.
            </p>
        </div>
    )
}

export default HomeBannerTitle
