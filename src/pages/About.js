import React from "react";
import "./About.css";
import BackgroundAbout from "../images/alexander1.jpeg";

function About() {
  return (
    <div>
      <div className="container">
        <figure className="position-relative">
          <img
            className="BackgroundAbout"
            src={BackgroundAbout}
            alt="Alexander Platz"
          />
          <figcaption>
            {" "}
            <h1 className="about">About</h1>
            <p>
              WayToGo provides personalized map service, <br></br> that covers
              400+ popular routes in Berlin
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default About;
