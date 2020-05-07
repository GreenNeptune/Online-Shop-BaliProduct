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
  const checkout = products.reduce((prev, product) => {
    return prev + product.price;
  }, 0).toFixed(2);

  return (
    <div style={{ textAlign: "center" }} className="cart container">
      <p className='checkout'>{checkout}$</p>
      <button> Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.user.products
});



export default connect(mapStateToProps)(CartContainer);