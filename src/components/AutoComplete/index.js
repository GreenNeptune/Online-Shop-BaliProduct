import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { getProduct, fetchProducts, searchProducts } from "../../redux_store/reducers/cart/actions";

export const AutoComplete = ({ products, filterProducts, getProduct, searchProducts, fetchProducts }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('first');
    fetchProducts();

  }, []);






  const onChange = (e) => {
    const value = e.target.value
    setSearch(value)
    searchProducts(products, search)
  }
  return (
    <div className='auto-complete'>
      <input onChange={onChange} type='text' placeholder='Search...' /><i className="fas fa-search" style={{ position: "absolute", top: "25%", right: "5%" }}></i>

      {search && filterProducts.length !== 0 ? (<ul className="dropdown">
        {filterProducts.map((product, index) => <li key={index}>{product.title}</li>)}
      </ul>)
        : ""}
    </div>
  )
}


const mapStateToProps = (state) => ({
  products: state.cart.products,
  filterProducts: state.cart.filterProducts
})




const mapDispatchToProps = {
  getProduct,
  fetchProducts,
  searchProducts,


}


export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);