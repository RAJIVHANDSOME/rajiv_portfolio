import './Hero.css';
import { FaReact, FaMailBulk, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
// import {Typed} from "react-typed";
import { SiKubernetes, SiLeetcode } from 'react-icons/si';
import SkillIcon from '../../components/About/SkillIcon.jsx';
import Typed from "typed.js";
import React, { useRef, useEffect } from 'react';
import profileimg from '../../assets/2.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    // Initialize the Typed.js instance
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Software Engineer", "Fresher"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup the Typed.js instance to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);
  const socialLinks = [
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/RAJIVHANDSOME' },
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/kokkiligadda-rajiv-ratna-79b592239/' },
    { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/rajivratna_18/?__pwa=1' },
    { icon: FaMailBulk, name: 'Mail', url: '2100032455cseh@gmail.com' },
  ];
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-grid">
          <div className="featured-name">

            <h1>

              Hello, I'm <span style={{ color: "#00A9FF" }}>Rajiv Ratna</span>
            </h1>

            <span
              ref={typedElement}
              style={{
                fontSize: "1.5rem",
                fontWeight: "lighter",
                color: "#00A9FF",
              }}
            />

            <p className="hero-description">
              A passionate developer with a strong foundation in web technologies.
              I specialize in creating responsive web applications using modern frameworks and implementing
              efficient deployment pipelines. Currently exploring cloud technologies and microservices
              architecture to build scalable solutions.
            </p>
            <div className="socialcont" >
              {socialLinks.map(({ icon: Icon, name, url }, index) => (
                
                  name === "Mail" ? (
                  <a href={`mailto:${url}`}>
                    <Icon className="sicon" key={index} />
                  </a>
                ) : (
                  <Link to={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="sicon" key={index} />
                  </Link>
                )


              ))}
            </div>
          </div>
          <div className="profile-container">
            <img
              src={profileimg}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;