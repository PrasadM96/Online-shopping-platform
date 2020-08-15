import React from "react";
import { Carousel } from "react-bootstrap";
import background8 from "../../assets/background8.jpg";
import background6 from "../../assets/background6.jpg";
import background7 from "../../assets/background7.jpg";


const carousel = props => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ marginTop: "2%", height: "30rem" }}
          src={background6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: '#40afbf' },{ fontWeight: 'bold' }}>E-A-S-Y</h3>
          <p style={{ color: '#40afbf' },{ fontWeight: 'bold' }}>You can always find something you want.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={background8}
          style={{ marginTop: "2%", height: "30rem" }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: '#40afbf' },{ fontWeight: 'bold' }}>S-M-A-R-T</h3>
          <p style={{ color: '#40afbf' },{ fontWeight: 'bold' }}>Keep Calm and Love Shopping</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ marginTop: "2%", height: "30rem" }}
          src={background7}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color: '#007b5e' },{ fontWeight: 'bold' }}>H-A-P-P-I-N-E-S-S</h3>
          <p style={{ color: '#40afbf' },{ fontWeight: 'bold' }}>
          Happiness is not in money, but in shopping.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
