import React, { Fragment } from 'react';
import ProductItem from '../ProductItem';

function index({ products, addProduct }) {
  return (
    <Fragment>
      {products.map(product => (<ProductItem key={product.id} product={product} addProduct={addProduct} />))}
    </Fragment>
  );
}

export default index;