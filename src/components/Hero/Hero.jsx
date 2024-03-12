import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./hero.css";

const Hero = () => {
  return (
    <div>
      <section id="hero">
        {/* profile description  */}
        <div className="hero-text">
          <p className="text-p1">Hello, I'm</p>
          <h1 className="name">Leo Ren</h1>
          <p className="text-p2">Web Developer Building Responsive Websites</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open("/Leo_Ren_Resume.pdf")}>
              Download <br />
              Resume
            </button>
            <button className="btn btn-color-2" onClick={() => (location.href = "./#contact")}>
              Contact <br />
              Me
            </button>
          </div>

          {/* social icons  */}
          <div id="socials-container">
            <a href="https://github.com/leoren17" target="_blank">
              <FaGithub className="github" />
            </a>
            <a href="https://www.linkedin.com/in/leo-ren/" target="_blank">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>

        {/* profile picture */}
        <div className="pic-container">
          <img className="leo" src="/leo-ren.jpg" alt="Leo Ren Profile Picture" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
