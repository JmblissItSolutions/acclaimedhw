import { React } from "react";
import Carousel from 'react-bootstrap/Carousel'
import image1 from "./../assets/images/home-page-slider-01.png";
import image2 from "./../assets/images/home-page-slider-02.png";
import image3 from "./../assets/images/home-page-slider-03.png";
import image4 from "./../assets/images/home-page-slider-04.png";

const Homeslider = () =>{
    return(
        <>
        <Carousel fade={true}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="container first-slid">
      <h1>I CHOSE A HOME WARRANTY</h1>
      <h3>to keep unexpected costs at bay</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="container second-slid">
      <h1>I CHOSE A HOME WARRANTY</h1>
      <h3>to give perspective buyers piece of mind.</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="container third-slid">
    <h1>I CHOSE A HOME WARRANTY</h1>
      <h3>to safeguard an older home</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image4}
      alt="forth slide"
    />
    <Carousel.Caption>
    <div className="container four-slid">
    <h1>I CHOSE A HOME WARRANTY</h1>
      <h3>for reputable contractors</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
}
export default Homeslider;