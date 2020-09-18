import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <section id="services" class="bg-gray">
      <div class="container">
        <header class="text-center mb-5">
          <h2 class="lined text-uppercase">Services</h2>
        </header>
        <div class="row text-center">
          <div class="col-lg-4">
            <div class="bg-white mb-4 p-4">
              <div class="icon mb-3">
                <FontAwesomeIcon icon="desktop" />
              </div>
              <h4 class="text-uppercase font-weight-bold">Web design</h4>
              <p class="small text-gray">
                Fifth abundantly made Give sixth hath. Cattle creature i be
                don't them.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white mb-4 p-4">
              <div class="icon mb-3">
                <FontAwesomeIcon icon="print" />
              </div>
              <h4 class="text-uppercase font-weight-bold">Print</h4>
              <p class="small text-gray">
                Fifth abundantly made Give sixth hath. Cattle creature i be
                don't them.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white mb-4 p-4">
              <div class="icon mb-3">
                <FontAwesomeIcon icon={["fab", "searchengin"]} />
              </div>
              <h4 class="text-uppercase font-weight-bold">SEO and SEM</h4>
              <p class="small text-gray">
                Fifth abundantly made Give sixth hath. Cattle creature i be
                don't them.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white mb-4 p-4">
              <div class="icon mb-3">
                <FontAwesomeIcon icon="comment-alt" />
              </div>
              <h4 class="text-uppercase font-weight-bold">Consulting</h4>
              <p class="small text-gray">
                Fifth abundantly made Give sixth hath. Cattle creature i be
                don't them.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white mb-4 p-4">
              <div class="icon mb-3">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <h4 class="text-uppercase font-weight-bold">Email marketing</h4>
              <p class="small text-gray">
                Fifth abundantly made Give sixth hath. Cattle creature i be
                don't them.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white mb-4 p-4">
              <div class="icon mb-3">
                <FontAwesomeIcon icon="pencil-ruler" />
              </div>
              <h4 class="text-uppercase font-weight-bold">UX &amp; UI</h4>
              <p class="small text-gray">
                Fifth abundantly made Give sixth hath. Cattle creature i be
                don't them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
