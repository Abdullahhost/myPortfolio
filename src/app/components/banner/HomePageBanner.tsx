
import HomeBannerTitle from "./HomeBannerTitle";
import HomePageBannerAnimation from "./HomePageBannerAnimation";


const Banner = () => {
    return (
        <div className="w-full h-[75vh] lg:h-[88vh] overflow-hidden z-50  relative flex justify-end items-end gap-12 flex-wrap md:flex-nowrap backdrop-blur-md">
            <HomeBannerTitle />
            <HomePageBannerAnimation />
        </div>
    )
}
export default Banner
