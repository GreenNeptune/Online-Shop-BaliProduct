import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getCartTotal } from '../../../redux_store/reducers/cart/cart.utils';
import './cartContainer.scss';

export function CartContainer({ products, removeProductFromCart, updateProductQuantity }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(getCartTotal(products))
    return () => {
    }
  }, [setTotal, products]);

  return (
    <div className="cart container">
      <div className="cart_products">
        {products.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            updateProductQuantity={updateProductQuantity}
            removeProductFromCart={removeProductFromCart}
          />))}
      </div>
      <p className='cart_total'>total : ${total.toFixed(2)}</p>
      <button type="button" className='btn btn-primary btn_checkout'> Checkout</button>
    </div >
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  cartTotal: state.cart.total

});

const mapDispatchToProps = {
  removeProductFromCart,
  updateProductQuantity,
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);