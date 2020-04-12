import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ProductItem from '../../ProductItem';

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
};

function ProductsContainer({ products }) {
  return (
    <div className="products container">
      {products.map(product => (<ProductItem key={product.id} product={product} />))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products
});



export default connect(mapStateToProps)(ProductsContainer);