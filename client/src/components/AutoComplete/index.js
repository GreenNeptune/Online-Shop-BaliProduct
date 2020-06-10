import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterProductsByTitle } from "../../redux_store/reducers/products/actions";

export const AutoComplete = ({ filterProductsByTitle }) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    const value = e.target.value
    setSearch(value)
    filterProductsByTitle(value);
  }

  return (
    <div className='auto-complete'>
      <input onChange={onChange} type='text' value={search}
        placeholder='Search...' />
      <i className="fas fa-search"
        style={{ position: "absolute", top: "25%", right: "5%" }}>

      </i>
    </div>
  )
}


const mapDispatchToProps = {
  filterProductsByTitle,
}


export default connect(null, mapDispatchToProps)(AutoComplete);