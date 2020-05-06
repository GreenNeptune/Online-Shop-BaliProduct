import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ProductItem from '../../ProductItem';
import { addProduct } from '../../../redux_store/reducers/user/actions';

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
};

function ProductsContainer({ products, addProduct }) {
  return (
    <div className="products container">
      {products.map(product => (<ProductItem key={product.id} product={product} addProduct={addProduct} />))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});


const mapDispatchToProps = {
  addProduct,
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);