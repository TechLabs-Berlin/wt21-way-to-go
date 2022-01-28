import React from "react";
import "./About.css";
import BackgroundAbout from "../images/alexander1.jpeg";
import BackgroundAbout2 from "../images/about2.png";

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
      </div>
    </div>
  );
}

export default About;
