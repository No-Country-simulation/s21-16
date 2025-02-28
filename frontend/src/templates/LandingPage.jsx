import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/Benefits/Benefits";
import Functionalities from "../components/Functionalities/Functionalities";
import MenuDemo from "../components/MenuDemo/MenuDemo";
import Reviews from "../components/Reviews/Reviews";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Functionalities />
      <Benefits />
      <MenuDemo />
      <Reviews />
    </div>
  );
};

export default LandingPage;
