import React from "react";
import "../howitworks/HowItWorks.css";

import { Container, Row, Col, Image } from "react-bootstrap";
import demo from "../images/demo-hiw.jpg";
//Row = 12 cols or 100%

function HowItWorks() {
  return (
    <div>
      <h2>
        <b>HOW IT WORKS!</b>
      </h2>

      <Container>
        <Row className="text-center">
          <Col md={4} sm={6}>
            <figure>
              <Image src={demo} alt="cool photo demo" fluid />
            </figure>
          </Col>
          <Col md={4} sm={6}>
            Hello second colum LINES
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
            Hello second colum LINES
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
            Hello second colum LINES
          </Col>
          <Col md={4} sm={6}>
            <b>#3 Arrange time duration</b>
            <p>
              How much time do you have? You can set the time up to 120 minutes.
            </p>
          </Col>
        </Row>
      </Container>
      <section className="enjoy_link">
        <p className="bottom_side">
          <b>Enjoy your WAY TO GO</b>
        </p>
      </section>
    </div>
  );
}

export default HowItWorks;
