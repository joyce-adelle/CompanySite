import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <section
      id="home"
      style={{background: "url(img/startup-room.jpg)"}}
      class="hero bg-cover"
    >
      <div class="overlay"></div>
      <div class="content h-100 d-flex align-items-center">
        <div class="container text-center text-white">
          <p class="headings-font-family text-uppercase lead">
            Welcome to out digital home
          </p>
          <h1 class="text-uppercase hero-text text-white">
            We are<span class="font-weight-bold d-block">Agency</span>
          </h1>
          <p class="headings-font-family text-uppercase lead">
            And this is a theme for your personal or company website brought to
            you by me <br />
          </p>
        </div>
      </div>
      <a href="#about" class="scroll-btn link-scroll">
      <FontAwesomeIcon icon = "angle-double-down"/>
      </a>
    </section>
  );
};

export default Home;
