import React from "react";
import "./about.css";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        {/* <div className="section-img">
          <img className="flowers" src="/piano.jpg" alt="flowers" />
        </div> */}
        <div className="section-text">
          {/* <div className="icon-container">
            <FaCode className="about-icon" />
          </div> */}

          <div className="text-container">
            <p className="about-text">
              Hi there! I'm Leo, a passionate web developer. My background is in computer science at the University of
              Toronto where I've improved my skills in software development and problem solving. I love creating
              websites that are functional and minimalistic.
            </p>
            <p className="about-text">
              I'm always eager to collaborate and learn from others. Let's connect and I would love to hear about what
              you are working on!
            </p>
            <p className="about-text">
              Finally, when I have free time, I love to cook, play chess, and play the piano! What about you?
            </p>
          </div>

          {/* <div className="details-container">
            <div className="education-container">
              <h3>Education</h3>
              <p>
                University of Toronto <br /> B.S. Specialist in Computer Science
              </p>
            </div>
            <div className="skills-container">
              <h3>Skills</h3>
              <p>JavaScript, HTML, CSS, React</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
