import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
// images
import image from "../../assets/bannerImage.jpg";
import akusume from "../../assets/akusume.jpg";
import addey from "../../assets/addey-kemis.jpg";
import collection from "../../assets/womenTogether.jpg";
import "./Products.css";

//
function Products() {
  return (
    <Container>
      <Row className="image-grid">
        <Col xs={6} md={4}>
          <Image src={akusume} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={collection} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={addey} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
