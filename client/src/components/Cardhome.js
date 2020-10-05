import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Cardhome() {
    return (

        <Carousel>
            <Carousel.Item>

                <img src={require("./carouselimages/fashion1.jpg")}

                />
            </Carousel.Item>
            <Carousel.Item>

                <img src={require("./carouselimages/fashion2.jpg")}


                />


            </Carousel.Item>

            <Carousel.Item>

                <img src={require("./carouselimages/fashion3.png")}

                />

                {/* <h3>
                    First Slide Lable
                    </h3>
                <p>Scenery 3s</p> */}
            </Carousel.Item>
        </Carousel>


    )
}
