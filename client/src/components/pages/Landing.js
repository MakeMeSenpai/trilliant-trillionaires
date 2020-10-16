import React, { Component } from 'react'
import { Button, Grid, Box } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';

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
                                    <p>Trilliant is a product review company that.</p>
                                </div>
                            </Col>
                            <Col>
                                <Register />
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
                <div className="section-about">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QBMuN3VkjbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <div className="page-footer">
                        <ul>
                        <li><h3>Column 1</h3></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        </ul>

                        <ul>
                        <li><h3>Column 2</h3></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        </ul>

                        <ul>
                        <li><h3>Column 3</h3></li>
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
