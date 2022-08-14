import React from "react";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import GlanceAtWork from "./sections/GlanceAtWork";
import Quote from "./sections/Quote";
import Connect from "./sections/Connect";
import { motion } from "framer-motion";
const Home = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => window.scrollTo(0, 0), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className="home-container">
        <div className="unwanted-group">
          <Hero />
          <Skills />
        </div>
        <GlanceAtWork />
        <Quote />
        <Connect />
      </div>
    </motion.div>
  );
};
export default Home;
