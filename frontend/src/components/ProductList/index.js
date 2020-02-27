import React from 'react';
import PropTypes from 'prop-types'

ProductList.propTypes = {
  children: propTypes.node  
};

function ProductList({children}) {
  return (
    <div className="products">
      {children}
    </div>
  );
}

export default ProductList;