import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from '../../../images/banner/v1 .jpg'
import banner2 from '../../../images/banner/v2 .jpg'
import banner3 from '../../../images/banner/v3 .jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Travel blog world themes</h3>
          <p>To make a WordPress blog, you will need a domain name and web hosting.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jenny's travels</h3>
          <p>The theme offers multiple ready-made layouts for travel websites and blogs. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Explore the world</h3>
          <p>
          You can use any WordPress blog or business theme for travel websites and blogs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
