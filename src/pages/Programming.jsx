import React from "react";
import Projectcard from "../components/Projectcard";
import Bg from "../assets/images/Programmingbg.png";
import { programmingprojects } from "../data";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "akar-icons";
const Programming = () => {
  return (
    <div className="uxdesign-container">
      <img src={Bg} alt=" " className="myworkbg" data-aos="fade-down"/>
      <Container className="uxdesigns-container">
        {programmingprojects.map((iteration) => {
          return (
            <Projectcard
              key={iteration.id}
              {...iteration}
              className="programming-projectcard"
            />
          );
        })}
        <div className="programming-remaining remainingprojects" data-aos="fade-up">
          <h1>More Case Studies</h1>
          <h3>Coming Soon</h3>
          <Link
            to="/uxdesign"
            className="hero-cta secondary-cta remaining-cta"
          >
            UX Design Portfolio{" "}
            <ArrowUpRight size={24} className="arrow-link-icon " />
          </Link>
          <a
            href="https://www.behance.net/adityasharma144"
            className="hero-cta secondary-cta remaining-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual/UI Design Portfolio{" "}
            <ArrowUpRight size={24} className="arrow-link-icon " />
          </a>
        </div>
      </Container>
    </div>
  );
};
export default Programming;
