import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { getProduct, fetchProducts, filterProductsByTitle } from "../../redux_store/reducers/cart/actions";

export const AutoComplete = ({ products, getProduct, filterProductsByTitle, fetchProducts }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts();

  }, []);






  const onChange = (e) => {
    const value = e.target.value
    setSearch(value)
    // filterProductsByTitle(products, search)
    filterProductsByTitle(value);
  }
  return (
    <div className='auto-complete'>
      <input onChange={onChange} type='text'
        placeholder='Search...' />
      <i className="fas fa-search"
        onClick={getProduct}
        style={{ position: "absolute", top: "25%", right: "5%" }}>

      </i>

      {/* {search && filterProducts.length !== 0 ? (<ul className="dropdown">
        {filterProducts.map((product, index) => <li key={index} onClick={getProduct}>{product.title}</li>)}
      </ul>)
        : ""} */}
    </div>
  )
}


const mapStateToProps = (state) => ({
  products: state.cart.filterProducts,
})




const mapDispatchToProps = {
  getProduct,
  fetchProducts,
  filterProductsByTitle,


}


export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);