import Banner from "./components/banner/HomePageBanner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FirstAnimation from "./components/loadingUi/FirstAnimation";
import Startup from "./components/loadingUi/Startup";
import AboutSection from "./components/section/AboutSection";
import WhatWeDo from "./components/section/WhatWeDo";
import WhyChoseUs from "./components/section/WhyChoseUs";
import WorkSection from "./components/section/WorkSection";


function HomePage() {

  return (
    <>
      <Startup />
      <FirstAnimation />
      <header className="w-full bgGradient controlLargeScreen shadow-lg">
        <Header />
        <Banner />
      </header>
      <main className="controlLargeScreen" >
        <WhatWeDo />
        <AboutSection />
        <WhyChoseUs />
        <WorkSection />
      </main>
      <footer className="bg-black controlLargeScreen">
        <Footer />
      </footer>

    </>
  );

}

export default HomePage;