import React from "react";

import Home from "./Home";
import HeaderNav from "./HeaderNav";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Home />
      <HeaderNav />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
