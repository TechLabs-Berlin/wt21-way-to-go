import React from "react";
import "./stickyfooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

const stickyFooter = () => {
  return (
    <div className="sticky-footer">
      <Container>
        <Row className="justify-items-center">
          <Col sm={4} className="left">
            &copy; 2022 Way to go!
          </Col>
          <Col sm={3} className="right">
            IMPRESSUM
          </Col>
          <Col sm={3} className="right">
            DATA PROTECTION
          </Col>
          <Col sm={2} className="right">
            SETTINGS
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default stickyFooter;
