import React from "react";
import { ArrowUpRight } from "akar-icons";
const Projectcard = ({ title, image, info, type, link }) => {
  return (
    <div className="projectcard" data-aos="fade-up">
      <img src={image} alt=" " />
      <div className="projectcard-info"> 
        <h1>{title}</h1>
        <h3>{type}</h3>
        <p>{info}</p>
        <a href={link} className="hero-cta secondary-cta project-cta">
          Let's check this out{" "}
          <ArrowUpRight
            size={24}
            className="arrow-link-icon "
            target="_blank"
            rel="noopener noreferrer"
          />
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
