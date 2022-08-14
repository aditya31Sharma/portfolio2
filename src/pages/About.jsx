import React from "react";
import Dp from "../assets/images/dp.png";
import { Container } from "react-bootstrap";
import Bg from "../assets/images/Aboutmebg.png";
import { InstagramFill } from "akar-icons";
import { sociallinks } from "../data";
import { motion } from "framer-motion";
const About = () => {
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
      exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className="work-container">
        <img src={Bg} alt=" " className="myworkbg" data-aos="fade-down" />
        <Container className="works-container about-container">
          <div className="dp-container" data-aos="fade-left">
            <img src={Dp} alt=" " />
            <p>Yes,this is me as Kujo Jotaro!</p>
          </div>
          <div className="about-info-container" data-aos="fade-right">
            <p>
              I’m a final year student pursuing B.Tech (Computer Science) from
              Amity University Noida with well over an year of work experience.
              I’ve a profile of a full stack designer. I’m currently working at
              Hungama Digital Media Entertainment.
            </p>
            <p>
              I’m usually a fun person to be around. I make sure I’m always
              caught up with current news and trends in fields of my interest. I
              have a great sense of humor, I can make people laugh and know how
              to take a joke on myself.
            </p>
            <p>
              I love to watch web series and movies. I’m a complete nerd for
              fictional cinematic universes. I love to watch Anime, Supernatural
              and Historical shows.
            </p>
            <p>
              You can always give me a follow on Instagram, I’m pretty active
              there!
            </p>
            <a
              href={sociallinks[4].link}
              className="footer-link"
              target="blank"
            >
              <InstagramFill size={24} className="link-icon instagram" />
            </a>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};
export default About;
