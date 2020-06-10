import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { fetchProducts, filterProductsByTitle } from "../../redux_store/reducers/products/actions";

export const AutoComplete = ({ filterProductsByTitle, fetchProducts }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts();

  }, []);


  const onChange = (e) => {
    const value = e.target.value
    setSearch(value)
    filterProductsByTitle(value);
  }
  return (
    <div className='auto-complete'>
      <input onChange={onChange} type='text'
        placeholder='Search...' />
      <i className="fas fa-search"
        style={{ position: "absolute", top: "25%", right: "5%" }}>

      </i>
    </div>
  )
}


const mapDispatchToProps = {
  fetchProducts,
  filterProductsByTitle,
}


export default connect(null, mapDispatchToProps)(AutoComplete);