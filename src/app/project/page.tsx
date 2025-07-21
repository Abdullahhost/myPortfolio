import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import FirstAnimation from "../components/loadingUi/FirstAnimation"
import Startup from "../components/loadingUi/Startup"
import ProjectBanner from "./components/ProjectBanner"
import ProjectShowSection from "./components/ProjectShowSection"

const page = () => {
    return (
        <>
            <Startup />
            <FirstAnimation />
            <header className="w-full bgGradient controlLargeScreen ">
                <Header />
            </header>
            <main className="controlLargeScreen">
                <ProjectBanner />
                <ProjectShowSection />
            </main>
            <footer className="bg-black controlLargeScreen">
                <Footer />
            </footer>
        </>
    )
}

export default page
