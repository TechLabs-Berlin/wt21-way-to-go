import React from "react";
import "./CardsHome.css";
import { Container, CardGroup, Card } from "react-bootstrap";
import card1 from "../images/card1-alexanderplatz.jpeg";

function cardsHome() {
  return (
    <div>
      <Container className="cardsHome">
        <p className="cards_outsideText">
          "A new approach for exploring your own city"
        </p>
        <h2 className="cards_title">DISCOVER BERLIN</h2>
        <CardGroup className="cards_Items">
          <Card className="card_Item">
            <Card.Img
              variant="top"
              src={card1}
              alt="cool line demo"
              fluid
              className="card1"
            ></Card.Img>

            <Card.Body>
              <Card.Title>
                11 reasons why winter Berlin better you think
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pulvinar pellentesque habitant morbi tristique senectus et netus
                et malesuada.
              </Card.Text>
              <a
                href="https://www.visitberlin.de/en/blog/11-reasons-why-winter-berlin-better-you-think"
                rel="noreferrer"
                className="btn card_link1"
                target="_blank"
                alt="vistit Berlin"
                title=""
              >
                more ..
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Tour</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pulvinar pellentesque habitant morbi tristique senectus et netus
                et malesuada.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Measures</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pulvinar pellentesque habitant morbi tristique senectus et netus
                et malesuada.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default cardsHome;
