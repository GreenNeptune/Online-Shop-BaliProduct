import React, { useEffect } from 'react';
import { connect } from "react-redux";
import ProductItem from '../../ProductItem';
import { fetchProducts } from '../../../redux_store/reducers/cart/actions';


function ProductsContainer({ products, addProduct }) {
  useEffect(() => {
    fetchProducts();

  }, []);

  return (
    <div className="products container">
      {products.map(product => (<ProductItem key={product.id} product={product} addProduct={addProduct} />))}
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