import React from 'react';
import { connect } from "react-redux";

export function CartContainer({ products }) {
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
  products: state.cart.products
});



export default connect(mapStateToProps, null)(CartContainer);