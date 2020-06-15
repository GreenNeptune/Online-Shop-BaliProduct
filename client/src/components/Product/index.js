import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

function Product({ title, price, quantity, img }) {
  return (
    <Fragment>
      <img className="product_img" src={img} alt="" />
      <div className="product_description">

        <p className="product_title">{title}</p>
        <p className="product_price">{price}$</p>

      </div>
    </Fragment>

  );
}

Product.prototype = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}


export default Product;
