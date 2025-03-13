import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Menu from "./components/MenuDemo/Menu/Menu";
import MenuView from "./pages/DashboardMenu/MenuView";
import CreateMenu from "./components/HeroSection/CreateMenu/CreateMenu";
import LandingPage from "./templates/LandingPage";
import Signin from "./templates/Signin";
import Signup from "./templates/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import QRCodeView from "./components/Qr/Qr";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menuDemo" element={<Menu />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Rutas con Sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="menu" replace />} />
          <Route path="menu" element={<MenuView />} />
          <Route path="menu/create" element={<CreateMenu />} />
          <Route path="qr" element={<QRCodeView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
