import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/Benefits/Benefits";
import Functionalities from "../components/Functionalities/Functionalities";
import MenuDemo from "../components/MenuDemo/MenuDemo";
import Reviews from "../components/Reviews/Reviews";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Functionalities />
      <Benefits />
      <MenuDemo />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
