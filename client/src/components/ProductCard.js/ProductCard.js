import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './productCard.scss';

function ProductCard({ product, addProductToCart }) {
  const { title, price, imgUrl } = product;
  return (
    <Card>
      <Card.Img height="250px" variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="card_description ">
          <Card.Text>
            Price: ${price}
          </Card.Text>
          <Button
            onClick={() => addProductToCart(product)}
            variant="outline-primary">
            Add to Cart
             </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;