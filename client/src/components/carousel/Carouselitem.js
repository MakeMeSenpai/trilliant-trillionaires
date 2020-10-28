import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Cardhome() {
    return (

        <Carousel>
            <Carousel.Item>
                <img className="carousel-image" src={require("./carouselimages/fashion1.jpg")}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-image" src={require("./carouselimages/fashion2.jpg")}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-image" src={require("./carouselimages/fashion3.png")}

                />
            </Carousel.Item>
        </Carousel>


    )
}
