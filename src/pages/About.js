import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import BackgroundAbout from "../images/alexander1.jpeg";
import BackgroundAbout2 from "../images/about2.png";
import Leonor_about from "../images/team/about_leonor1.png";
import Stefanie_about from "../images/team/about_stepanie1.png";
import Emilio_about from "../images/team/about_emilio1.png";
import Sueon_about from "../images/team/about_sueon1.png";
import Merve_about from "../images/team/about_merve1.png";
import Paula_about from "../images/team/about_paula1.png";
import Leonel_about from "../images/team/about_leonel1.png";
import Sara_about from "../images/team/about_sara1.png";
import LinkedinIcon from "../images/LinkedinIcon.png";

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
                <img className="About_photo" src={Emilio_about} alt="Emilio" />
              </li>
              <li>Emilio</li>
              <li>Data Science</li>
              <li>"Language nerd seeking to make a positive impact on the world through data!"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={Merve_about} alt="Merve" />
              </li>
              <div className="nameLinkedinContainer">
                <li>Merve</li>
                <a href="https://www.linkedin.com/in/merve-busra-duman/" target="_blank" rel="noopener noreferrer">
                  <img className="LinkedinIcon" src={LinkedinIcon} alt="LinkedinIcon" />
                </a>
              </div>
              <li>Data Science</li>
              <li>"My favourite <br />drink is turnip juice"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                <img
                  className="About_photo"
                  src={Stefanie_about}
                  alt="Stefanie"
                />
              </li>
              <div className="nameLinkedinContainer">
                <li>Stefanie</li>
                <a href="https://de.linkedin.com/in/stefanie-senger-4b9508211" target="_blank" rel="noopener noreferrer">
                  <img className="LinkedinIcon" src={LinkedinIcon} alt="LinkedinIcon" />
                </a>
              </div>
              <li>Data Science</li>
              <li>"She likes having her <br />head buzzing with numbers"</li>
            </ul>
          </Col>
        </Row>
        <Row className="row">
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={Paula_about} alt="Paula" />
              </li>
              <li>Paula</li>
              <li>User Experience</li>
              <li>"I love to beautify <br />the world throught design"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                <img className="About_photo" src={Sueon_about} alt="Sueon" />
              </li>
              <div className="nameLinkedinContainer">
                <li>Sueon</li>
                <a href="https://www.linkedin.com/in/sueonahn/" target="_blank" rel="noopener noreferrer">
                  <img className="LinkedinIcon" src={LinkedinIcon} alt="LinkedinIcon" />
                </a>
              </div>
              <li>User Experience</li>
              <li>"I love hiking and hope to<br />clime the Everest one day!"</li>
            </ul>
          </Col>
        </Row>
        <Row className="row">
          <Col md className="item-1 item">
            <ul>
              <li>
                {" "}
                <img className="About_photo" src={Leonel_about} alt="Leonel" />
              </li>
              <li>Leonel</li>
              <li>Web Development</li>
              <li>"Social scientist passionate about the visual aspect of things!"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                {" "}
                <img
                  className="About_photo"
                  src={Leonor_about}
                  alt="Leonor"
                />
              </li>
              <div className="nameLinkedinContainer">
                <li>Leonor</li>
                <a href="https://www.linkedin.com/in/leonor-cascais-58532422b/" target="_blank" rel="noopener noreferrer">
                  <img className="LinkedinIcon" src={LinkedinIcon} alt="LinkedinIcon" />
                </a>
              </div>
              <li>Web Development</li>
              <li>"I love Cheese"</li>
            </ul>
          </Col>
          <Col md className="item-1 item">
            <ul>
              <li>
                {" "}
                <img
                  className="About_photo"
                  src={Sara_about}
                  alt="Sara"
                />
              </li>
              <div className="nameLinkedinContainer">
                <li>Sara</li>
                <a href="https://www.linkedin.com/in/sara-pulido-750b181b3/" target="_blank" rel="noopener noreferrer">
                  <img className="LinkedinIcon" src={LinkedinIcon} alt="LinkedinIcon" />
                </a>
              </div>
              <li>Web Development</li>
              <li>"Woman in tech, <br /> Cowboy Bebop Fan!"</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;
