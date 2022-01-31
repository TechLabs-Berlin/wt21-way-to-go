import React from "react";
import "../howitworks/HowItWorks.css";

import { Container, Row, Col, Image } from "react-bootstrap";
import demo from "../images/demo-hiw.jpg";
import line from "../images/line-wtg-1-1.png";
import line2 from "../images/line-wtg-2-2.png";
import line3 from "../images/line-wtg-3-3.png";
import line4 from "../images/line-wtg-4-4.png";
//Row = 12 cols or 100%

function HowItWorks() {
  return (
    <div className="hiw_section_landing">
      <h2>
        <b>HOW IT WORKS!</b>
      </h2>
      <Container fluid>
        <Row className="text-center">
          <Col md={4} sm={6}>
            <figure>
              <Image src={demo} alt="cool photo demo" fluid />
            </figure>
          </Col>
          <Col md={4} sm={6}>
            <figure>
              <Image src={line} alt="cool line demo" fluid className="line1" />
            </figure>
          </Col>
          <Col md={4} sm={6}>
            <b>#1 Set starting point and a destination</b>
            <p>What are the two places you want to spend time in-between?</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4} sm={6}>
            <b className="title-steps">#2 Choose your mood</b>
            <p>
              What do you feel like doing? You might want to simply walk around,
              grab a coffee, visit touristic attractions, or enjoy green area.
              If don't know what to do, select random and let us surprise you!
            </p>
          </Col>
          <Col md={4} sm={6}>
            <figure>
              <Image src={line2} alt="cool line demo" fluid className="line2" />
            </figure>
          </Col>
          <Col md={4} sm={6}>
            <figure>
              <Image src={demo} alt="cool photo demo" fluid />
            </figure>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4} sm={6}>
            <figure>
              <Image src={demo} alt="cool photo demo" fluid />
            </figure>
          </Col>
          <Col md={4} sm={6}>
            <figure>
              <Image src={line3} alt="cool line demo" fluid className="line3" />
            </figure>
          </Col>
          <Col md={4} sm={6}>
            <b>#3 Arrange time duration</b>
            <p>
              How much time do you have? You can set the time up to 120 minutes.
            </p>
          </Col>
        </Row>
        <section className="enjoy_link">
          <p className="bottom_side">
            <a href="#top" className="link_go_top">Enjoy your WAY TO GO</a>
          </p>
        </section>
        <figure>
          <Image src={line4} alt="cool line demo" fluid className="line4" />
        </figure>
      </Container>
    </div>
  );
}

export default HowItWorks;
