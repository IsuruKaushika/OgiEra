import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useState, useEffect } from 'react';


import Title from '../components/Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const[bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestproduct =products.filter((item)=>(item.bestSeller));
        setBestSeller(bestproduct.slice(0,5));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1 ={'BEST'} text2={'SELLERS'}/>
            <p className ='w-3/4 m-auto text-xs sm:text.sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ducimus consequuntur inventore sunt nemo provident nisi corrupti illo maiores, quam quos ullam? Ea expedita odit eos modi totam hic?
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                bestSeller.map((item,index)=>(
                    <ProductItem Key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                )
                )}
            </div>

        </div>
        </div>
  )
}

export default BestSeller