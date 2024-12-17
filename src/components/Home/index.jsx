import { IoArrowForwardSharp } from "react-icons/io5";

import "./index.css";

const Home = () => (
  <div className="home-container" id="home">
    <h1 className="home-heading">
      Transform Your Ideas Into <br /> <span>Digital Reality</span>
    </h1>
    <p className="home-description">
      We craft beautiful websites and powerful mobile applications that drive
      business growth and user engagement.
    </p>
    <a href="#contact" className="home-link">
      <button type="button" className="home-btn">
        Get Started
        <IoArrowForwardSharp className="home-icon" />
      </button>
    </a>
  </div>
);

export default Home;
