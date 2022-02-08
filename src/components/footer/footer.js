import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "./../../images/wtg-logo-blue.png";

const footer = () => {
  return (
    <div className="section footer">
      <Container className="container-footer">
        <Row className="justify-content-between">
          <Col md={3} xs={6} className="mr-3">
            <img src={logo} className="img-fluid" alt="Way To Go!" />
            <Row>
              <Col md={5} className="center">
                <strong>
                  <small>FOLLOW US ON:</small>
                </strong>
              </Col>
              <Col md={5} className="float-start">
                <a href="https://instagram.com">
                  <FaInstagram
                    size={15}
                    style={{ fill: "black" }}
                    className="m-1"
                  />
                  {""}
                </a>
                <a href="https://facebook.com">
                  <FaFacebook
                    size={15}
                    style={{ fill: "black" }}
                    className="m-1"
                  />
                  {""}
                </a>
                <a href="https://twitter.com">
                  <FaTwitter
                    size={15}
                    style={{ fill: "black" }}
                    className="m-1"
                  />
                  {""}
                </a>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 2, offset: 1 }} xs={6}>
            <ul className="menu">
              <li>EMAIL US</li>
              <li>
                <a className="email" href="mailto:hallo@waytogo.com">
                  hallo@waytogo.com
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} xs={6}>
            <ul className="menu">
              <li>
                <a href="/about">ABOUT WAYTOGO!</a>
              </li>
              <li>
                <a href="/how">HOW IT WORKS</a>
              </li>
              <li>NEWSLETTER</li>
            </ul>
          </Col>

          <Col md={3} xs={6}>
            <ul className="menu">
              <li>ADVERTISING ON WAY TO GO</li>
              <li>PRESS</li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
