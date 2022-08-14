import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import UXdesign from "./pages/UXdesign";
import Programming from "./pages/Programming";
import Contactme from "./pages/Contactme";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Loader />
      <BrowserRouter>
        <Navigationbar />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="myworks" element={<Works />} />
            <Route path="about" element={<About />} />
            <Route path="uxdesign" element={<UXdesign />} />
            <Route path="programming" element={<Programming />} />
            <Route path="contactme" element={<Contactme />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
