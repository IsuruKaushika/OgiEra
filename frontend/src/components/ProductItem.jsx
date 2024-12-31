import React from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src></>
        </div>
    </Link>

  )
}

export default ProductItem