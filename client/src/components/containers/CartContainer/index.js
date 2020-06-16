import React from 'react';
import { connect } from "react-redux";
import { addProductToCart } from '../../../redux_store/reducers/cart/actions';


export function CartContainer({ products, addProductToCart, cartTotal }) {
  return (
    <div className="cart container">
      <div className="cart_products">
        {products.map(product => (
          <div key={product.id} className="cart_product">
            <div className="cart_product_img">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="cart_product_description">
              <div className="cart_product_price">price: ${product.price}</div>
              <div className="cart_product_count">count : {product.count}</div>
              <div className="btn_product_count_wrapper">
                <div className="btn_product_count--increase" onClick={() => addProductToCart(product)}>↑</div>
                <div className="btn_product_count--decrease">↓</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='cart_total'>total : ${cartTotal}</p>
      <button className='btn_checkout'> Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  cartTotal: state.cart.total

});

const mapDispatchToProps = {
  addProductToCart,
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);