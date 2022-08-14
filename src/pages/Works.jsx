import React from "react";
import MyWorkBg from "../assets/images/Myworkbg.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "akar-icons";
const Works = () => {
  return (
    <div className="work-container">
      <img src={MyWorkBg} alt=" " className="myworkbg" data-aos="fade-down"/>
      <Container className="works-container">
        <article className="ux-design-portfolio-container" data-aos="fade-up">
          <div className="portfolio-container-info" >
            <h1>UX Design Portfolio</h1>
            <p>
              Includes case studies about User Experience Design projects that
              I've worked on
            </p>
          </div>
          <Link to="/uxdesign" className="hero-cta secondary-cta myworks-cta">
            Let's check this out{" "}
            <ArrowUpRight size={24} className="arrow-link-icon " />
          </Link>
        </article>

        <article className="other-works-container">
          <article className="visual-design-portfolio-container" data-aos="fade-up">
            <div className="portfolio-container-info">
              <h1>Visual/UI Design</h1>
              <p>
                This will take you to my Behance profile where you can see my
                work related to UI and Graphic design
              </p>
            </div>
            <a
              href="https://behance.net/adityasharma144"
              className="hero-cta secondary-cta myworks-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's check this out{" "}
              <ArrowUpRight size={24} className="arrow-link-icon " />
            </a>
          </article>
          <article className="programming-portfolio-container" data-aos="fade-up">
            <div className="portfolio-container-info">
              <h1>Programming Projects</h1>
              <p>
                Includes projects that I made using HTML/CSS, JavaScript and
                ReactJS
              </p>
            </div>
            <Link
              to="/programming"
              className="hero-cta secondary-cta myworks-cta"
            >
              Let's check this out{" "}
              <ArrowUpRight size={24} className="arrow-link-icon " />
            </Link>
          </article>
        </article>
      </Container>
    </div>
  );
};
export default Works;
