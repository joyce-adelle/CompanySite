import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" class="pb-0">
      <header class="text-center mb-4">
        <h2 class="lined text-uppercase mb-5">Portfolio</h2>
        <p>You can make also a portfolio or image gallery.</p>
      </header>
      <div class="row p-0">           
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-1.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-1.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-2.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-2.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-3.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-3.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-4.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-4.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-5.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-5.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-6.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-6.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-7.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-7.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
        <div class="col-lg-3 col-md-4 col-6 p-0"><a href="img/portfolio-8.jpg" data-lightbox="image-1" data-title="My caption" class="d-block"><img src="img/portfolio-8.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
      </div>
    </section>
  );
};

export default Portfolio;
