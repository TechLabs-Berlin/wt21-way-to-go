import React from "react";
import "../pages/Contact.css";
import BackgroundContact from "../images/contact_bg1.png";

function Contact() {
  return (
    <div>
      <div className="container">
        <img
          className="BackgroundContact"
          src={BackgroundContact}
          alt="Alexander Platz"
        />
        <figcaption className="contact_page_header">
          {" "}
          <h1 className="title_contact_page">Contact</h1>
          <p className="text_contact_page">
            Drop us a line! We'd love to hear from you
          </p>
        </figcaption>
        <div className="contact_info">
          <ul>
            <li>WayToGo GmbH</li>
            <li>Munstermannstr. 37</li>
            <li>10437 Berlin</li>
            <li className="contact_email">hello@waytogo.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
