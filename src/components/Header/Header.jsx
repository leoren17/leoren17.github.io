import React from "react";
import "./header.css";

const Header = () => {
  const handleClick = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <>
      <nav id="pc-nav">
        <div className="logo">LR</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="ham-nav">
        <div className="logo">LR</div>
        <div className="ham-menu">
          <div className="ham-icon" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="menu-links">
          <li>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Header;
