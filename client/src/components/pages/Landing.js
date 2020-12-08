import React, { Component, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import "./Landing.css";

export class Landing extends Component {
  render() {
    //Renders the landing page, with hero section, info, and footer
    return (
      <div className="landing-main">
        <div className="section-header">
          <Container>
            <Row>
              <Col style={{ margin: "100px 0px 0px 0px" }}>
                <div className="section-statement">
                  <h1>Trilliant</h1>
                  <h2>Know what you're getting when you shop online.</h2>
                  <p>
                    Trilliant lets you view and upload product reviews while you
                    browse online stores. See pictures from other shoppers so
                    that you never have to be disappointed when your order
                    arrives.
                  </p>
                  <Button variant="secondary" size="lg" href="/catalog" block>
                    Catalog
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    href="https://chrome.google.com/webstore/detail/trilliant-product-reviews/kmlccnfningikbpkanojlhoafkogcple"
                    block
                  >
                    Chrome Extension
                  </Button>
                </div>
              </Col>
              <Col style={{ margin: "100px 0px 0px 0px" }}></Col>
            </Row>
          </Container>
        </div>
        <div className="section-about">
          <Container fluid="md">
            <Row className="justify-content-md-center">
              <Col style={{ margin: "200px 0px 0px 0px" }}>
                <iframe
                  width="1280"
                  height="720"
                  src="https://www.youtube.com/embed/QBMuN3VkjbQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <div>
            <ul className="page-footer-container">
              <li>
                <a href="https://www.facebook.com/TrilliantProductReviews">
                  <ImFacebook2 size={38} />
                </a>
              </li>
              <li>
                <a
                  className="ig-icon"
                  href="https://www.instagram.com/trilliantreviewsandthings/"
                >
                  <FaInstagram size={38} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Trilliant2">
                  <FaTwitter size={38} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
