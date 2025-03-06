import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/MenuDemo/Menu/Menu";
import MenuView from "./pages/DashboardMenu/MenuView";
import CreateMenu from "./components/HeroSection/CreateMenu/CreateMenu";
import "./App.css";
import LandingPage from "./templates/LandingPage";
import Signin from "./templates/Signin";
import Signup from "./templates/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menuDemo" element={<Menu />} />
        <Route path="/dashboard/menu" element={<MenuView />} />
        <Route path="/dashboard/menu/create" element={<CreateMenu />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
