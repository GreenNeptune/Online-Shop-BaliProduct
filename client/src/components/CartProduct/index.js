import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import './cartProduct.scss'
function CartProduct({ product, updateProductQuantity, removeProductFromCart }) {

  const MAX_QUANTITY_SELECT = 10;
  const validateQuantityInputRegex = /[1-9]/g;
  const [showQuantitySelect, setShowQuantitySelect] = useState(true);
  const [quantityInput, setQuantityInput] = useState('1');

  const onChangeQuantityInput = (e) => {
    const { value } = e.target;

    if (value === '') {
      setQuantityInput('');
      return null;
    }
    if (value === '0') {
      setQuantityInput('0');
      return null;
    }
    const foundValue = value.match(validateQuantityInputRegex)
    setQuantityInput(foundValue ? foundValue.join('') : '');
  }

  const onChangeProductQuantity = (e) => {
    const { value } = e.target;
    const quantity = parseInt(value)

    if (quantity === 0) {
      removeProductFromCart(product._id);
    } else if (quantity === MAX_QUANTITY_SELECT) {
      setQuantityInput(`${MAX_QUANTITY_SELECT}`)
      setShowQuantitySelect(false);
      updateProductQuantity(product._id, MAX_QUANTITY_SELECT);
    } else {
      setQuantityInput(value)
      updateProductQuantity(product._id, quantity);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (quantityInput === '' || quantityInput === '0') {
      removeProductFromCart(product._id);
    }

    if (parseInt(quantityInput) < MAX_QUANTITY_SELECT) {
      setShowQuantitySelect(true)
    }

    updateProductQuantity(product._id, parseInt(quantityInput))
  }

  return (
    <div className="cart_product">
      <div className="cart_product_img">
        <img src={product.imgUrl} alt={product.title} />
      </div>
      <div className="cart_product_description">
        <div className="cart_product_price">Price: ${product.price}</div>
        <Form onSubmit={onSubmit} >
          {showQuantitySelect ? (
            <Form.Control
              as="select"
              id="inlineFormCustomSelectPref"
              custom
              value={quantityInput}
              onChange={onChangeProductQuantity}
              className="mt-4 mt-sm-5"
            >
              <option value="0">Delete</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">+10</option>
            </Form.Control>) :
            (<Form.Group controlId="formBasicEmail" className="form_input_cart_product_quantity mt-4 mt-sm-5">
              <Form.Control
                type="text"
                value={quantityInput}
                size="3"
                onSubmit={onSubmit}
                maxLength="3"
                autoComplete="off"

                onChange={onChangeQuantityInput}

              />
              <Button
                type="submit"
              >
                Update
            </Button>
            </Form.Group>)}
        </Form>
        <button className="btn btn_cart_product--remove mt-1 mt-sm-4" onClick={() => removeProductFromCart(product._id)} >remove</button>
      </div>
    </div >
  );

}

export default CartProduct;