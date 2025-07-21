
import Startup from '../components/loadingUi/Startup'
import FirstAnimation from '../components/loadingUi/FirstAnimation'
import Header from '../components/header/Header'
import AboutBanner from './components/AboutBanner'
import AboutWe from './components/AboutWe'
import AboutOurServices from './components/AboutOurServices'
import Footer from '../components/footer/Footer'
import AboutSlider from './components/AboutSlider'
import FAQSection from './components/FAQSection'
import SkillSection from './components/SkillSection'

const page = () => {
    return (
        <>
            <Startup />
            <FirstAnimation />
            <header className="w-full bgGradient controlLargeScreen ">
                <Header />
            </header>
            <main className='controlLargeScreen'>
                <AboutBanner />
                <AboutSlider />
                <AboutWe />
                <SkillSection />
                <FAQSection />
                <AboutOurServices />
            </main>
            <footer className='bg-black controlLargeScreen'>
                <Footer />
            </footer>
        </>
    )
}

export default page
