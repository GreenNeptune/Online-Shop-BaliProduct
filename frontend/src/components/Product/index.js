import React from 'react';
import PropTypes from 'prop-types'

function Product({title,price,quantity}) {
  return (
    <div className="product_description">
      <p className="title">{title}</p>
      <p className="price">{price}</p>
      <p className="quantity">{quantity}</p>$
    </div>
  );
}

Product.prototype = {
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}


export default Product;
