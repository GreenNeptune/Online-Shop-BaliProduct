import React from 'react';
import { connect } from "react-redux";
import { addProductToCart } from '../../../redux_store/reducers/cart/actions';
import './cartContainer.scss';

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
              <div className="btn-common btn_product_count_wrapper">
                <button className="btn btn-success btn_product_count--increase" onClick={() => addProductToCart(product)}>+</button>
                <button className="btn btn-danger btn_product_count--decrease">-</button>
                <button className="btn btn_product_count--remove">remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='cart_total'>total : ${cartTotal}</p>
      <button type="button" className='btn btn-primary btn_checkout'> Checkout</button>
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