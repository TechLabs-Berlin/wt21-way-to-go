import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./../../images/wtg-logo-blue.png";
import "./footer.css";
import { Container, Row, Col, li } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="section footer">
      <Container className="container">
        <Row className="d-flex justify-content-center align-content-center">
          <Col md={3} xs={6} className="mr-3">
            <img src={logo} class="img-fluid" alt="Way To Go!" />
            <Row>
              <Col md={7} className="center">
                <strong>
                  <small>FOLLOW US ON:</small>
                </strong>
              </Col>
              <Col md={5} className="float-start">
                <FaInstagram size={15} style={{ fill: "gray" }} className="m-1" />
                  {" "}
                <FaFacebook size={15} style={{ fill: "gray" }} className="m-1" />
                  {" "}
                <FaTwitter size={15} style={{ fill: "gray" }} className="m-1" />
                  {" "}
              </Col>
            </Row>
          </Col>

          <Col md={2} md-offset={2} xs={6}>
            <ul className="menu">
              <li>EMAIL US</li>
              <li>
                <a class="link" href="mailto:hallo@waytogo.com">
                  hallo@waytogo.com
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} xs={6}>
            <ul className="menu">
              <li>ABOUT WAYTOGO!</li>
              <li>HOW IT WORKS </li>
              <li>NEWSLETTER</li>
            </ul>
          </Col>

          <Col md={3} xs={6}>
            <ul className="menu">
              <li>ADVERTISING ON WAY TO GO</li>
              <li>PRESS</li>
              <li>CONTACT</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
