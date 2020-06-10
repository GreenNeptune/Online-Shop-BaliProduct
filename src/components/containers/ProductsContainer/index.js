import React, { useEffect } from 'react';

import { connect } from "react-redux";
import { fetchProducts } from '../../../redux_store/reducers/products/actions';
import { addProductToCart } from "../../../redux_store/reducers/cart/actions";

import ProductList from '../../ProductList'

function ProductsContainer({ products, fetchProducts, addProductToCart }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products container">
      < ProductList products={products} addProduct={addProductToCart} />
    </div>
  );
}

const mapDispatchToProps = {
  fetchProducts,
  addProductToCart
}

const mapStateToProps = (state) => ({
  products: state.products.visibleProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);