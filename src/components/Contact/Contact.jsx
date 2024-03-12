import React from "react";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact">
      <h1 class="title">Contact Me</h1>

      <div className="contact-container">
        <div>
          <a href="mailto: leojy.ren@gmail.com">
            <MdEmail className="email" />
            <p className="con">leojy.ren@gmail.com</p>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/leo-ren/" target="_blank">
            <FaLinkedin className="linkedin" />
            <p className="con">LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
