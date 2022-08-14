import React from "react";
import { Container } from "react-bootstrap";
import Flower from "../../assets/images/Flower.svg";
const Quote = () => {
  return (
    <div className="quote-section">
      <Container className="quote-container">
        <div className="quote-content-container">
          <h5 data-aos="fade-down">I believe</h5>
          <h1 data-aos="fade-down">
            There exists a <span>design</span> for everything.
          </h1>
          <h3 data-aos="fade-down">
            So, never say you <span className="cannot">cannot</span> design it
          </h3>
          <h5 data-aos="fade-up">keep looking</h5>
          <h1 data-aos="fade-up">
            you just haven't <span>found</span> it yet
          </h1>
        </div>
      </Container>
      <img src={Flower} alt=" " className="right-flower" data-aos="fade-left"/>
      <img src={Flower} alt=" " className="left-flower" data-aos="fade-right"/>
    </div>
  );
};

export default Quote;
