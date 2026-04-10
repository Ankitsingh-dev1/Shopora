import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../assets/empty-cart.png"

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart()
  const { user } = useUser()
  const navigate = useNavigate()

  // ✅ FIX: quantity ke saath total calculate
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0'>

      {cartItem.length > 0 ? (
        <div>

          <h1 className='font-bold text-2xl'>
            My Cart ({cartItem.length})
          </h1>

          {/* 🛒 Cart Items */}
          <div className='mt-10'>
            {cartItem.map((item) => (
              <div key={item.id} className='bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 flex-wrap gap-4'>

                <div className='flex items-center gap-4'>
                  
                  {/* ✅ IMAGE FIX */}
                  <img
                    src={item.image || item.images?.[0]}
                    alt={item.title}
                    className='w-20 h-20 object-contain rounded-md bg-white p-2'
                  />

                  <div>
                    <h1 className='md:w-[300px] line-clamp-2'>
                      {item.title}
                    </h1>

                    <p className='text-red-500 font-semibold text-lg'>
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* ➕➖ Quantity */}
                <div className='bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl'>
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className='cursor-pointer'
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className='cursor-pointer'
                  >
                    +
                  </button>
                </div>

                {/* 🗑️ Delete */}
                <span
                  onClick={() => deleteItem(item.id)}
                  className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'
                >
                  <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer' />
                </span>

              </div>
            ))}
          </div>

          {/* 📦 Layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>

            {/* 🚚 Delivery Info */}
            <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
              <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>

              <input
                type="text"
                placeholder='Full Name'
                className='p-2 rounded-md w-full'
                value={user?.fullName || ""}
                readOnly
              />

              <input
                type="text"
                placeholder='Address'
                className='p-2 rounded-md w-full'
                value={location?.county || ""}
                readOnly
              />

              <div className='flex gap-5'>
                <input
                  type="text"
                  placeholder='State'
                  className='p-2 rounded-md w-full'
                  value={location?.state || ""}
                  readOnly
                />

                <input
                  type="text"
                  placeholder='PostCode'
                  className='p-2 rounded-md w-full'
                  value={location?.postcode || ""}
                  readOnly
                />
              </div>

              <div className='flex gap-5'>
                <input
                  type="text"
                  placeholder='Country'
                  className='p-2 rounded-md w-full'
                  value={location?.country || ""}
                  readOnly
                />

                <input
                  type="text"
                  placeholder='Phone No'
                  className='p-2 rounded-md w-full'
                />
              </div>

              <button className='bg-red-500 text-white px-3 py-2 rounded-md mt-3 w-full'>
                Submit
              </button>

              <div className='text-center text-gray-700'>-------- OR --------</div>

              <button
                onClick={getLocation}
                className='bg-red-500 text-white px-3 py-2 rounded-md w-full'
              >
                Detect Location
              </button>
            </div>

            {/* 💰 Bill */}
            <div className='bg-white border shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'>

              <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>

              <div className='flex justify-between'>
                <span className='flex gap-1 items-center'>
                  <LuNotebookText /> Items total
                </span>
                <span>${totalPrice}</span>
              </div>

              <div className='flex justify-between'>
                <span className='flex gap-1 items-center'>
                  <MdDeliveryDining /> Delivery
                </span>
                <span className='text-green-600 font-semibold'>FREE</span>
              </div>

              <div className='flex justify-between'>
                <span className='flex gap-1 items-center'>
                  <GiShoppingBag /> Handling
                </span>
                <span>$5</span>
              </div>

              <hr />

              <div className='flex justify-between font-semibold text-lg'>
                <span>Grand Total</span>
                <span>${totalPrice + 5}</span>
              </div>

              <button className='bg-red-500 text-white px-3 py-2 rounded-md w-full mt-3'>
                Proceed to Checkout
              </button>

            </div>
          </div>
        </div>

      ) : (
        <div className='flex flex-col gap-3 justify-center items-center h-[600px]'>
          <h1 className='text-red-500 font-bold text-4xl'>
            Your cart is empty 😢
          </h1>

          <img src={emptyCart} alt="empty cart" className='w-[300px]' />

          <button
            onClick={() => navigate('/products')}
            className='bg-red-500 text-white px-4 py-2 rounded-md'
          >
            Continue Shopping
          </button>
        </div>
      )}

    </div>
  )
}

export default Cart