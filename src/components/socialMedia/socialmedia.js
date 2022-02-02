import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./../../images/wtg-logo-blue.png";
import "./socialmedia.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa";

const socialMedia = () => {
  return (
    <div>
      <Container className="socialmediabanner">
        <Row className="align-objects-center">
          <Col sm={12}>
            <img src={logo} class="img-fluid pr-2 pl-2 ml-4 mr-4" alt="Way To Go!" />
            <div className="text-center">
              <FaTwitter size={40} style={{ fill: 'black' }} className="mr-2 ml-2" ></FaTwitter>
              <FaInstagram size={40} style={{ fill: 'black' }} className="mr-2 ml-2" ></FaInstagram>
              <FaFacebook size={40} style={{ fill: 'black' }} className="mr-2 ml-2" ></FaFacebook>
              <FaPinterest size={40} style={{ fill: 'black' }} className="mr-2 ml-2" ></FaPinterest>
            </div>
            <i className="fab fa-facebook-f"></i>{" "}
            <i class="fab fa-instagram"></i> <i class="fab fa-pinterest"></i>{" "}
            <i class="fab fa-twitter"></i>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default socialMedia;
