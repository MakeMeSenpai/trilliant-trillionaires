import React, { Component } from 'react'
import { Button, Container, Box } from '@material-ui/core';
import Register from '../auth/Register'
import "./Landing.css"


export class Landing extends Component {
    render() {
        return (
            <div className="section-header">
                <Container fixed>
                    <Box component="span" m={1}>
                        <Register />
                    </Box>

                </Container>
            </div>
        )
    }
}

export default Landing
