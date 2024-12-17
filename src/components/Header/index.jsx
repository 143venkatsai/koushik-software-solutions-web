import React from "react";
import { IoMdMenu } from "react-icons/io";

import "./index.css";

const Header = () => (
  <nav class="navbar navbar-expand-lg  fixed-top glass-navbar">
    <div class="container">
      <a class="navbar-brand" href="#home">
        <img
          src="https://res.cloudinary.com/djk1yczb2/image/upload/v1734442999/WhatsApp_Image_2024-12-17_at_16.17.59_e7ec85be_hlndwp.jpg"
          class="company-logo"
          alt="Company"
        />
        <h1 className="company-name">Koushik Software Solutions</h1>
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <IoMdMenu size={20} />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link" href="#home" id="navitem">
            Home
          </a>
          <a class="nav-link" href="#services" id="navitem">
            Services
          </a>
          <a class="nav-link" href="#ourWork" id="navitem">
            Our Work
          </a>
          <a class="nav-link" href="#contact" id="navitem">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);
export default Header;
