


import { projectList } from '@/app/data/projectData'
import Image from 'next/image'


const ProjectOverview = () => {
    return (
        <div className='h-[120vh] lg:mt-[200px] scrollerTest'>
            <div style={{ "--t": '90s' } as React.CSSProperties} className='scroller_innerTest w-full'>
                {projectList.map((pData) => {
                    return (
                        <div className='overflow-hidden' key={pData.pName}>
                            <Image
                                className='w-full h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
            <div style={{ "--t": '90s' } as React.CSSProperties} className='scroller_innerTest w-full'>

                {projectList.map((pData) => {
                    return (
                        <div className='w-full overflow-hidden' key={pData.pName}>
                            <Image
                                className='w-full h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const ProjectOverviewReverse = () => {
    return (
        <div className='h-[120vh] scrollerTest scale-125'>
            <div style={{ "--t": '60s' } as React.CSSProperties} className='scroller_innerTest reverseScroll w-full'>
                {projectList.map((pData) => {
                    return (
                        <div className='overflow-hidden' key={pData.pName}>
                            <Image
                                className='w-[33vw] h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
            <div style={{ "--t": '60s' } as React.CSSProperties} className='scroller_innerTest reverseScroll w-full'>

                {projectList.map((pData) => {
                    return (
                        <div className='overflow-hidden w-full' key={pData.pName}>
                            <Image
                                className='w-full h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const HomePageBannerAnimation = () => {
    return (
        <div className='w-full min-h-full flex justify-end -z-50'>
            <div className='flex scale-150 lg:scale-90 min-h-full w-[80%] mt-[50px] items-end gap-2 glowEffect'>
                <ProjectOverview />
                <ProjectOverviewReverse />
                <ProjectOverview />
            </div>
        </div>
    )
}

export default HomePageBannerAnimation