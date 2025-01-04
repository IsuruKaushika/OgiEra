import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


function SearchBar() {
    const{ search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar