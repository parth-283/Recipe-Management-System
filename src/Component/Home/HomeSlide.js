import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../../pics/Slide1.png";
import Slide2 from "../../pics/Slide2.png";
import Slide3 from "../../pics/Slide3.png";

function HomeSlide() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={Slide1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={Slide2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Slide3}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeSlide;
