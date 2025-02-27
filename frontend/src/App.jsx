import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./templates/LandingPage.jsx";
import Menu from "./components/MenuDemo/Menu/Menu";
import CreateMenu from "./components/HeroSection/CreateMenu/CreateMenu";
import Signin from "./templates/Signin.jsx";
import Signup from "./templates/Signup.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menuDemo" element={<Menu />} />
        <Route path="/creamenu" element={<CreateMenu />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
