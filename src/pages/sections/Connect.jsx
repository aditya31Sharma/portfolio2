import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "akar-icons";
const Connect = () => {
  return (
    <div className="connect-container">
      <h1 data-aos="fade-up">Let's Connect</h1>
      <Link to="/contactme" className="hero-cta primary-cta connect-cta" data-aos="fade-down">
        Contact me
        <ArrowUpRight size={24} className="arrow-link-icon " />
      </Link>
    </div>
  );
};

export default Connect;
