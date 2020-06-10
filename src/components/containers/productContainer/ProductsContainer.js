import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from '../../../redux_store/reducers/products/actions';
import ProductList from '../../ProductList'


function ProductsContainer({ products, addProduct }) {
  useEffect(() => {
    fetchProducts();

  }, []);

  return (
    <div className="products container">
      < ProductList products={products} addProduct={addProduct} />
    </div>
  );
}

const mapDispatchToProps = {
  fetchProducts,
}

const mapStateToProps = (state) => ({
  products: state.products.visibleProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);