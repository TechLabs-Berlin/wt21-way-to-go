import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Figure} from "react-bootstrap";


function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
      <Container>
        <Row>
      <h2><strong>Contact Us</strong></h2>
      <h3>Drop us a line! We would love to hear from you</h3>
      </Row>
      </ Container>
      </div>

      <div className="contact-info">
<Container>
      <Row>
<span>WayToGo GMBH</span>
<span>MustermannStr .37</span>
<span>10437 Berlin</span>
<br/>
<br/>
      <span><a class="link" href="mailto:hallo@waytogo.com">Hello@waytogo.com</a></span>
      </Row>
      </ Container>
      </div>
    </div>
  );
}

export default Contact;
