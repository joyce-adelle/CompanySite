import React from "react";

const HeaderNav = () => {
  return (
    <header class="header sticky-top">
      <nav class="navbar navbar-expand-lg bg-white border-bottom py-0">
        <div class="container">
          <a href="" class="navbar-brand py-1">
            <img src="img/logo.png" alt="" class="img-fluid" />
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right"
          >
            <span class="fas fa-bars"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto px-3">
              <li class="nav-item active">
                <a href="#home" class="nav-link text-uppercase link-scroll">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link text-uppercase link-scroll">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link text-uppercase link-scroll">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#portfolio"
                  class="nav-link text-uppercase link-scroll"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link text-uppercase link-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
