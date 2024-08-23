import React from "react";
import { Carousel } from "react-bootstrap";

const Crs = () => {
  return (
    <Carousel interval={2000} wrap={true} variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src="" alt="First slide" />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Crs;
