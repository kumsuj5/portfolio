import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeaderImage = () => {

  return (
    <div className="home">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='text-dark'>
          <h1>Hello Friends</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-dark'>
          <h1>Hello Friends</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='text-light'>
          <h1>Hello Friends</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderImage;