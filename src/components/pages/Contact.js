import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.css";
import BackgroundContact from "../images/contact-background.jpeg";

function Contact() {
  return (
    <div className="container">
      <figure className="position-relative">
        <img
          className="BackgroundContact"
          src={BackgroundContact}
          alt="Contact Us"
        />
        <figcaption>
          {" "}
          <h1>Contact Us</h1>
          <p>Drop us a line! We would love to hear from you</p>
        </figcaption>
      </figure>

      <div className="contact-info">
        <p className="contact-text">
          <span>WayToGo GMBH</span>
          <span>MustermannStr .37</span>
          <span>10437 Berlin</span>
          <br />
          <br />
          <span>
            <a class="link" href="mailto:hallo@waytogo.com">
              Hello@waytogo.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
