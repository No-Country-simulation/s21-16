import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

import Menu from './components/MenuDemo/Menu/Menu'; 

import CreateMenu from './components/HeroSection/CreateMenu/CreateMenu';
import './App.css';

import LandingPage from './templates/LandingPage';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <LandingPage/> } />
        <Route path="/menuDemo" element={<Menu />} />
        <Route path="/creamenu" element={<CreateMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
