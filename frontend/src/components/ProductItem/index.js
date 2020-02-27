import React from 'react';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired
};

function ProductItem({product,addProduct}) {
  return (
    <div className="product_wrapper">
      < Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        img={product.img}
      />
      <button className="btn-product_add" onClick={addProduct} >Add To Cart</button>
    </div>
  );
}

export default ProductItem;