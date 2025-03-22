import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { PowerUp32 } from "./pages/powerup-one";
import { PowerUpMobile } from "./pages/powerup-three";
import { PowerUp60 } from "./pages/powerup-two";
import { EnergyMaestro } from "./pages/energy-maestro";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { GetAQuote } from "./pages/get-quote";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/powerup-32" element={<PowerUp32 />} />
          <Route path="/powerup-60" element={<PowerUp60 />} />
          <Route path="/powerup-mobile" element={<PowerUpMobile />} />
          <Route path="/energymaestro" element={<EnergyMaestro />} />
          <Route path="/get-quote" element={<GetAQuote />} />
        </Routes>
      </div>
      <br />
      <Footer />
    </Router>
  );
};

export default App;
