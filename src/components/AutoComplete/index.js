import React, { useState } from 'react'
import { connect } from 'react-redux';


export const AutoComplete = ({ products }) => {
  const [filterProducts, setFilterProducts] = useState(products);
  const [text, setText] = useState('')
  const onChange = (e) => {
    const value = e.target.value;
    const filterByName = products.filter(product => product.title.includes(value));
    setText(value)
    setFilterProducts(filterByName);
  }
  console.log(filterProducts);
  return (
    <div className='auto-complete'>
      <input value={text} onChange={onChange} type='text' placeholder='Search...' />
      {text && filterProducts.length !== 0 ? (<ul className="dropdown">
        {filterProducts.map((product, index) => <li key={index}>{product.title}</li>)}
      </ul>)
        : ""}
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});


export default connect(mapStateToProps, null)(AutoComplete);