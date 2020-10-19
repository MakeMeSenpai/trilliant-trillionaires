import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import Register from '../auth/Register'
import "./Landing.css"


export class Landing extends Component {
    render() {
        return (
            <div className="landing-main">
                <div className="section-header">
                    <Container fluid='xl'>
                        <Row>
                            <Col style={{margin: "100px 0px 0px 0px"}}>
                                <div className="section-statement">
                                    <h1>Trilliant</h1>
                                    <h2>Know what you're getting when you shop online.</h2>
                                    <p>Trilliant lets you view and upload product reviews while you browse online stores. See pictures from other shoppers so that you never have to be disappointed when your order arrives.</p>
                                    <Col className="button-statement">
                                    <Button variant="outline-secondary" className='button-statement' href="/catelog">Catelog</Button>
                                        <Col className="button-statement">
                                        <Button variant="outline-primary" href="https://chrome.google.com/webstore/detail/trilliant-product-reviews/kmlccnfningikbpkanojlhoafkogcple">Chrome Extension</Button>
                                        
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                            <Col style={{margin: "100px 0px 0px 0px"}}><Register/></Col>
                        </Row>
                    </Container>
                    
                </div>
                <div className="section-about">
                    <Container fluid='md'>
                        <Row className="justify-content-md-center">
                            <Col style={{margin: "100px 0px 0px 0px"}}>
                                <iframe width="1280" height="720" src="https://www.youtube.com/embed/QBMuN3VkjbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
                <div>
                    <div className="page-footer">
                        <ul>
                            <li><a href="https://www.facebook.com/TrilliantProductReviews"><ImFacebook2 size={52} /></a></li>
                            <li><a className="ig-icon" href="https://www.instagram.com/trilliantreviewsandthings/"><FaInstagram size={52} /></a></li>
                            <li><a href="https://twitter.com/Trilliant2"><FaTwitter size={52} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
