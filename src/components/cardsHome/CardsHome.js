import React from "react";
import "./CardsHome.css";
import { Container, CardGroup, Card } from "react-bootstrap";
import card1 from "../images/card1-alexanderplatz.jpeg";
import card2 from "../images/card2-tour.jpeg";
import card3 from "../images/card3-info.jpeg";

function cardsHome() {
  return (
    <div>
      <Container className="cardsHome">
        <b className="design"></b>
        <p className="cards_outsideText">
          "A new approach for exploring your own city"
        </p>
        <h3 className="cards_title">DISCOVER BERLIN</h3>
        <CardGroup className="cards_Items">
          <Card className="card_Item">
            <Card.Img
              variant="top"
              src={card1}
              alt="cool demo"
              fluid
              className="card1"
            ></Card.Img>

            <Card.Body>
              <Card.Title className="cards_title_item">
                11 reasons to visit Berlin in winter
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
                more &gt;&gt;
              </a>
            </Card.Body>
          </Card>
          <Card className="card_Item">
            <Card.Img
              variant="top"
              src={card2}
              alt="cool demo"
              fluid
              className="card2"
            ></Card.Img>

            <Card.Body>
              <Card.Title className="cards_title_item">
                Unusal Restaurants in Berlin
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pulvinar pellentesque habitant morbi tristique senectus et netus
                et malesuada.
              </Card.Text>
              <a
                href="https://www.visitberlin.de/en/unusual-restaurants-berlin"
                rel="noreferrer"
                className="btn card_link1"
                target="_blank"
                alt="visit Berlin "
                title="visit Berlin"
              >
                more &gt;&gt;
              </a>
            </Card.Body>
          </Card>
          <Card className="card_Item">
            <Card.Img
              variant="top"
              src={card3}
              alt="cool demo"
              fluid
              className="card3"
            ></Card.Img>

            <Card.Body>
              <Card.Title className="cards_title_item">
                Measures against the corona virus
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pulvinar pellentesque habitant morbi tristique senectus et netus
                et malesuada.
              </Card.Text>
              <a
                href="https://www.visitberlin.de/en/important-information-your-visit-berlin"
                rel="noreferrer"
                className="btn card_link1"
                target="_blank"
                alt="vistit Berlin"
                title="visit Berlin"
              >
                more &gt;&gt;
              </a>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default cardsHome;
