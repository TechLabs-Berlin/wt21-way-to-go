import React from "react";
import "../howitworks/HowItWorks.css";

import { Container, Row, Col, Image } from "react-bootstrap";
import demo from "../images/imagen-demo-hiw.png";
//Row = 12 cols or 100%

function HowItWorks() {
  return (
    <div>
      <h2>HOW IT WORKS!</h2>

      <Container>
        <Row className="text-center">
          <Col md={4} sm={6}>
            <p>
              <Image src={demo} alt="cool photo demo" fluid />
            </p>
          </Col>
          <Col md={4} sm={6}>
            Hello second colum LINES
          </Col>
          <Col md={4} sm={6}>
            <p>#1 Set starting point and a destination</p>
            <p>What are the two places you want to spend time in-between?</p>
          </Col>
        </Row>
        -
        <Row className="text-center">
          <Col md={4} sm={6}>
            <p className="title-steps">#2 Choose your mood</p>
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
            <Image src={demo} alt="cool photo demo" fluid />
          </Col>
        </Row>
        --
        <Row className="text-center">
          <Col md={4} sm={6}>
            <p>
              <Image src={demo} alt="cool photo demo" fluid />
            </p>
          </Col>
          <Col md={4} sm={6}>
            Hello second colum LINES
          </Col>
          <Col md={4} sm={6}>
            <p>#3 Arrange time duration</p>
            <p>
              How much time do you have? You can set the time up to 120 minutes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
