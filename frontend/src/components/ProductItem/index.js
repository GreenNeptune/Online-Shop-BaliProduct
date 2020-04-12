import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

function ProductItem({ product }) {
  return (
    <div className="product_wrapper">
      < Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        img={product.img}
      />
      <button className="btn-product_add">Add To Cart</button>
    </div>
  );
}

export default ProductItem;