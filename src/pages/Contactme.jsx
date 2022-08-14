import React from "react";
import { Container } from "react-bootstrap";
import Bg from "../assets/images/Contactmebg.png";
import {
  LinkedinBoxFill,
  BehanceFill,
  DribbbleFill,
  InstagramFill,
  FacebookFill,
  WhatsappFill,
} from "akar-icons";
import { motion } from "framer-motion";
import { sociallinks } from "../data";
const Contactme = () => {
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
      <div className="work-container">
        <img src={Bg} alt=" " className="myworkbg" data-aos="fade-down" />
        <Container className="works-container contact-container">
          <div className="grid-container">
            <a
              href="tel:+919810405410"
              target="_blank"
              rel="noopener noreferrer"
              className="full-card callmecard"
              data-aos="fade-up"
            >
              <h1>Call me</h1>
              <p>have an one to one telephonic conversation</p>
            </a>
            <a
              href={sociallinks[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="full-card mailmecard"
              data-aos="fade-up"
            >
              <h1>Mail me</h1>
              <p>have an email conversation with me</p>
            </a>

            <div className="half-card-container">
              <a
                href="https://drive.google.com/file/d/1U0rcLcPMESQHgc1N1KQEHevm-eOHZcbt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="viewresumecard"
                data-aos="fade-up"
              >
                <h1>View Resume</h1>
                <p>view the resume or download it as a pdf</p>
              </a>

              <div className="sociallinkscard" data-aos="fade-up">
                <a
                  href={sociallinks[0].link}
                  className="contact-link"
                  target="blank"
                >
                  <LinkedinBoxFill size={24} className="link-icon linkedin" />
                  <div className="contact-link-content">Linkedin</div>
                </a>
                <a
                  href={sociallinks[2].link}
                  className="contact-link"
                  target="blank"
                >
                  <BehanceFill size={24} className="link-icon behance" />{" "}
                  <div className="contact-link-content">Behance</div>
                </a>
                <a
                  href={sociallinks[3].link}
                  className="contact-link"
                  target="blank"
                >
                  <DribbbleFill size={24} className="link-icon dribbble" />
                  <div className="contact-link-content">Dribbble</div>
                </a>
                <a
                  href={sociallinks[4].link}
                  className="contact-link"
                  target="blank"
                >
                  <InstagramFill size={24} className="link-icon instagram" />
                  <div className="contact-link-content">Instagram</div>
                </a>
                <a
                  href={sociallinks[5].link}
                  className="contact-link"
                  target="blank"
                >
                  <FacebookFill size={24} className="link-icon facebook" />
                  <div className="contact-link-content">Facebook</div>
                </a>
                <a
                  href={sociallinks[6].link}
                  className="contact-link"
                  target="blank"
                >
                  <WhatsappFill size={24} className="link-icon whatsapp" />
                  <div className="contact-link-content">Whatsapp</div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};
export default Contactme;
