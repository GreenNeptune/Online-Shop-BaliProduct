import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import ProductItem from '../../ProductItem';
import { fetchProducts } from '../../../redux_store/reducers/cart/actions';
import axios from 'axios';



function ProductsContainer({ products, addProduct, filterProducts }) {

  useEffect(() => {
    fetchProducts();

  }, []);

  return (
    <div className="products container">
      {filterProducts.map(product => (<ProductItem key={product.id} product={product} addProduct={addProduct} />))}
    </div>
  );
}



const mapDispatchToProps = {
  fetchProducts,
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  filterProducts: state.cart.filterProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);