import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  // ✅ universal image fix
  const imageUrl = product.thumbnail || product.images?.[0]

  return (
    <div className='mt-4'>
      <div className='bg-white border border-gray-200 rounded-2xl p-4 
      flex flex-col md:flex-row gap-6 items-center 
      hover:shadow-xl hover:scale-[1.01] transition-all duration-300'>

        {/* IMAGE */}
        <div 
          onClick={() => navigate(`/products/${product.id}`)}
          className='bg-gray-100 rounded-xl p-3 flex items-center justify-center cursor-pointer w-[140px] h-[140px]'
        >
          <img 
            src={imageUrl} 
            alt={product.title} 
            className='h-full object-contain'
          />
        </div>

        {/* CONTENT */}
        <div className='flex flex-col justify-between w-full space-y-3'>

          {/* TITLE */}
          <h1 
            onClick={() => navigate(`/products/${product.id}`)}
            className='font-semibold text-lg md:text-xl line-clamp-2 cursor-pointer hover:text-red-500 transition'
          >
            {product.title}
          </h1>

          {/* PRICE */}
          <div className='flex items-center gap-3'>
            <p className='text-2xl font-bold text-gray-800'>
              ${product.price}
            </p>

            {/* ✅ DummyJSON discount */}
            <span className='text-green-600 text-sm font-semibold'>
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* DELIVERY */}
          <p className='text-sm text-gray-600 leading-relaxed'>
            FREE delivery <span className='font-semibold'>Tomorrow</span> <br />
            <span className='text-green-600 font-medium'>
              Fastest delivery available
            </span>
          </p>

          {/* BUTTON */}
          <div>
            <button 
              onClick={() => addToCart(product)} 
              className='bg-red-500 text-white px-5 py-2 rounded-lg 
              hover:bg-red-600 hover:shadow-md transition-all'
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductListView