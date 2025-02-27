import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Functionalities from "./components/Functionalities/Functionalities";
import Beneffits from "./components/Benefits/Benefits";
import MenuDemo from "./components/MenuDemo/MenuDemo";
import Menu from './components/MenuDemo/Menu/Menu'; // Asegúrate de que esta ruta sea correcta
import Reviews from "./components/Reviews/Reviews";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Functionalities />
              <Beneffits />
              <MenuDemo />
              <Reviews />
            </>
          }
        />
        <Route path="/menuDemo" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
