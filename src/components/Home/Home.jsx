import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import image from "../../assets/bannerImage.jpg";
import akusume from "../../assets/akusume.jpg";
import addey from "../../assets/addey-kemis.jpg";
import collection from "../../assets/womenTogether.jpg";
function Home() {
  return (
    <div>
      <Carousel slide={true}>
        <Carousel.Item>
          <img src={image} alt="image" />
          {/* <HomeImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <HomeImage text="Second slide" /> */}
          <img src={akusume} alt="image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <HomeImage text="Third slide" /> */}
          <img src={addey} alt="image" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
