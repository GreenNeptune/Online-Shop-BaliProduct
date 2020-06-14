import React from 'react';
import { connect } from "react-redux";
import getProductsTotalPrice from "../../../utils/getProductsTotalPrice";

export function CartContainer({ products }) {
  const cart_total = getProductsTotalPrice(products).toFixed(2);

  return (
    <div style={{ textAlign: "center" }} className="cart container">
      <p className='cart_total'>{cart_total}$</p>
      <button className='btn_checkout'> Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products
});



export default connect(mapStateToProps, null)(CartContainer);