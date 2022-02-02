import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import BackgroundAbout from "../images/alexander1.jpeg";
import BackgroundAbout2 from "../images/about2.png";
import About_photo from "../images/about_photo.png";
import Leonor_about from "../images/team/leonor_about.jpg";
import Sara_about from "../images/team/sara_about.jpg";

function About() {
  return (
    <div>
      <div className="container">
        <figure>
          <img
            className="BackgroundAbout"
            src={BackgroundAbout}
            alt="Alexander Platz"
          />
          <figcaption className="about_page_header">
            {" "}
            <h1 className="title_about_page">About</h1>
            <p className="text_about_page">
              WayToGo provides personalized map service, <br></br> that covers
              400+ popular routes in Berlin
            </p>
          </figcaption>
        </figure>
        <p className="about_text2">
          Our unique content covers the wonderful "off the beaten path" places
          to visit and our
          <br></br>
          unique database contains numerous Berlin's most interesting locations.
          WayTo Go helps<br></br>people discover the world around them in an
          entirely new way by streamlining discovery,<br></br>
          planning, and navigation into an engaging and fun process.
        </p>
        <figure className="position-relative">
          <img
            className="BackgroundAbout2"
            src={BackgroundAbout2}
            alt="Street"
          />
        </figure>
        <h2 className="title_2">Team</h2>
      </div>
      --
      <Container className="container_team">
        <Row className="row">
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={About_photo} alt="Emilio" />
              </li>
              <li>Emilio</li>
              <li>Data Science</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={About_photo} alt="Merve" />
              </li>
              <li>Merve</li>
              <li>Data Science</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={About_photo} alt="Stefanie" />
              </li>
              <li>Stefanie</li>
              <li>Data Science</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
        </Row>
        <Row className="row">
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={About_photo} alt="Paula" />
              </li>
              <li>Paula</li>
              <li>User Experience</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={About_photo} alt="Sueon" />
              </li>
              <li>Sueon</li>
              <li>User Experience</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
        </Row>
        <Row className="row">
          <Col md className="item-1 item">
            <ul>
              <li>
                {" "}
                <img className="About_photo" src={About_photo} alt="Leonel" />
              </li>
              <li>Leonel</li>
              <li>Web Development</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                {" "}
                <img
                  className="About_photo_leonor"
                  src={Leonor_about}
                  alt="Leonor"
                />
              </li>
              <li>Leonor</li>
              <li>Web Development</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                {" "}
                <img
                  className="About_photo_sara"
                  src={Sara_about}
                  alt="Leonor"
                />
              </li>
              <li>Sara</li>
              <li>Web Development</li>
              <li>"I love Techno"</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
