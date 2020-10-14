import React, { Component } from 'react'
import { Button, Grid, Container, Box } from '@material-ui/core';
import Register from '../auth/Register'
import "./Landing.css"


export class Landing extends Component {
    render() {
        return (
            <div className="landing-main">
                <div className="section-header">
                    <Grid>
                        <Register />
                    </Grid>
                </div>
                <div className="section-about">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QBMuN3VkjbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Landing
