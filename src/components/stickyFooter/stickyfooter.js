import React from "react";
import "./stickyfooter.css";
import { Container, Col, Row } from "react-bootstrap";

const stickyFooter = () => {
  return (
    <div className="sticky-footer">
      <Container>
        <Row className="justify-items-center justify-content">
          <Col sm={6} className="left">
            &copy; 2022 Way to go!
          </Col>
          <Col sm={2} className="text-center">
            IMPRESSUM
          </Col>
          <Col sm={2} className="text-center">
            DATA PROTECTION
          </Col>
          <Col sm={2} className="text-center">
            SETTINGS
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default stickyFooter;
