import React from 'react';
import PropTypes from 'prop-types'

function Product({ title, price, quantity, img }) {
  return (
    <div className="product_description">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <p className="product_title">{title}</p>
      <p className="product_price">{price}</p>
      <p className="product_quantity">{quantity}</p>
    </div>
  );
}

Product.prototype = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}


export default Product;
