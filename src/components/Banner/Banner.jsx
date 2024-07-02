import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Banner.css";
import imag from "../../assets/bannerImage.jpg";
function Banner() {
  let [products, setProducts] = useState([]);
  let [displayedProduct, setDisplayedProduct] = useState([]);

  useEffect(() => {
    fetch("/sampleDB.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  //to clear and render the new one
  useEffect(() => {
    let interval = setInterval(() => {
      setDisplayedProduct(getRandomProducts(products, 4));
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);
  //function to limit products to displayed per render
  const getRandomProducts = (products, count) => {
    let shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  return (
    <div className="product-container">
      {displayedProduct.map((product) => (
        <Card
          className="product-card"
          key={product.id}
          style={{ width: "10rem" }}
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="product-title">{product.title}</Card.Title>
          </Card.Body>
          <Card.Body className="card-links">
            <Card.Link href="/order">Add-to-Cart</Card.Link>
            <Card.Link href="/home">See more</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Banner;
