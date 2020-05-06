import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired
};

function CartContainer({ products }) {
  return (
    <div className="cart container">
      {products.reduce((prev, product) => {
        return prev + product.price;
      }, 0)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.user.products
});



export default connect(mapStateToProps)(CartContainer);