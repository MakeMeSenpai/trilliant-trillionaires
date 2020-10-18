import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';

import Register from '../auth/Register'
import "./Landing.css"


export class Landing extends Component {
    render() {
        return (
            <div className="landing-main">
                <div className="section-header">
                    <Container>
                        <Row>
                            <Col>
                                <div className="section-statement">
                                    <h1>Trilliant</h1>
                                    <h2>Know what you're getting when you shop online.</h2>
                                    <p>Trilliant lets you view and upload product reviews while you browse online stores. See pictures from other shoppers so that you never have to be disappointed when your order arrives.</p>
                                    <Col>
                                        <Button variant="outline-primary" href="https://chrome.google.com/webstore/detail/trilliant-product-reviews/kmlccnfningikbpkanojlhoafkogcple">Chrome Extension</Button>
                                        <Col>
                                            <Button variant="outline-secondary" href="/catelog">Catelog</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                            <Col>
                                <Register />
                            </Col>
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
                        <li><h3>Column 1</h3></li>
                        <i class="fas fa-band-aid"></i>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
