import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact">
      <div class="container">
        <header class="text-center mb-5">
          <h2 class="text-uppercase lined">Contact</h2>
        </header>
        <div class="row">
          <div class="col-lg-6">
            <form action="" class="contact-form">
              <div class="row">
                <div class="form-group col-lg-6">
                  <label for="firstName">Your firstname *</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="Enter your firstname"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-lg-6">
                  <label for="lastName">Your lastname *</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label for="email">Your email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label for="message">Your message for us *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <button type="submit" class="btn btn-outline-primary w-100">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <p>
              Effects present letters inquiry no an removed or friends. Desire
              behind latter me though in. Supposing shameless am he engrossed up
              additions. My possible peculiar together to. Desire so better am
              cannot he up before points. Remember mistaken opinions it pleasure
              of debating. Court front maids forty if aware their at. Chicken
              use are pressed removed.
            </p>
            <p>
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual. If he cause manor happy. Without farther she exposed
              saw man led. Along on happy could cease green oh.
            </p>
            <ul class="mb-0 list-inline text-center">
              <li class="list-inline-item">
                <a href="#" class="social-link social-link-facebook">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link social-link-twitter">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link social-link-google-plus">
                  <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link social-link-instagram">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link social-link-email">
                  <FontAwesomeIcon icon="envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
