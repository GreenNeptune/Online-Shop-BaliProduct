import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts, filterProductsByTitle } from '../../../redux_store/reducers/products/actions';
import { addProductToCart } from "../../../redux_store/reducers/cart/actions";
import Spinner from '../../Spinner';
import AutoComplete from '../../AutoComplete';
import ProductCardsGallery from '../../ProductCardsGallery/ProductsGallery';

function ProductsContainer({ products: { visibleProducts, loading }, fetchProducts, addProductToCart, filterProductsByTitle }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (loading ? (<Spinner />) : (
    <div className="products">
      < AutoComplete filterProductsByTitle={filterProductsByTitle} />
      <ProductCardsGallery products={visibleProducts} addProduct={addProductToCart} />
    </div >
  ));
}

const mapDispatchToProps = {
  fetchProducts,
  addProductToCart,
  filterProductsByTitle,
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);