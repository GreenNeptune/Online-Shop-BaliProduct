import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from '../../../redux_store/reducers/products/actions';
import { addProductToCart } from "../../../redux_store/reducers/cart/actions";
import ProductList from '../../ProductList'
import Spinner from '../../Spinner';

function ProductsContainer({ products: { visibleProducts, loading }, fetchProducts, addProductToCart }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (loading ? (<Spinner />) : (
    <div className="products container">
      < ProductList products={visibleProducts} addProduct={addProductToCart} />
    </div>
  ));
}

const mapDispatchToProps = {
  fetchProducts,
  addProductToCart
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);