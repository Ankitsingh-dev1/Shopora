import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className='border border-gray-100 rounded-2xl cursor-pointer 
    hover:scale-105 hover:shadow-2xl transition-all 
    p-3 flex flex-col h-[340px]'>

      {/* IMAGE */}
      <div 
        className='bg-gray-100 aspect-square flex items-center justify-center p-3'
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img 
          src={product.image || product.images?.[0]} 
          alt={product.title}
          className='h-full object-contain'
        />
      </div>

      {/* TITLE */}
      <h1 className='line-clamp-2 mt-2 font-semibold text-sm'>
        {product.title}
      </h1>

      {/* PRICE */}
      <p className='mt-1 text-lg text-gray-800 font-bold'>
        ${product.price}
      </p>

      {/* BUTTON (BOTTOM FIX) */}
      <button 
        onClick={() => addToCart(product)} 
        className='mt-auto bg-red-500 px-3 py-2 text-sm rounded-md text-white 
        w-full flex gap-2 items-center justify-center font-semibold'
      >
        <IoCartOutline className='w-5 h-5' /> 
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard