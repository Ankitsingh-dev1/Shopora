import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState(null)
    const [activeImg, setActiveImg] = useState(0)
    const { addToCart } = useCart()

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setSingleProduct(res.data)
        } catch (error) {
            console.log("API ERROR:", error)
        }
    }

    useEffect(() => {
        if (id) getSingleProduct()
    }, [id])

    if (!singleProduct) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <video muted autoPlay loop>
                    <source src={Loading} type='video/webm' />
                </video>
            </div>
        )
    }

    return (
        <div className='px-4 pb-10 md:px-0 bg-gray-50 min-h-screen'>
            <Breadcrums title={singleProduct.title} />

            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8'>

                {/* 🔥 IMAGE SECTION */}
                <div className='space-y-4'>
                    
                    {/* Main Image */}
                    <div className='bg-white rounded-2xl flex items-center justify-center p-6 shadow-md'>
                        <img 
                            src={singleProduct.images?.[activeImg]} 
                            alt={singleProduct.title} 
                            className='h-[300px] md:h-[400px] object-contain'
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className='flex gap-3 overflow-x-auto'>
                        {singleProduct.images?.map((img, index) => (
                            <img 
                                key={index}
                                src={img}
                                onClick={() => setActiveImg(index)}
                                className={`h-16 w-16 object-cover rounded-lg cursor-pointer border-2 
                                ${activeImg === index ? "border-red-500" : "border-gray-200"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* 🔥 DETAILS SECTION */}
                <div className='flex flex-col gap-5'>

                    {/* Title */}
                    <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                        {singleProduct.title}
                    </h1>

                    {/* Brand + Category */}
                    <p className='text-gray-500 text-sm uppercase'>
                        {singleProduct.brand} • {singleProduct.category}
                    </p>

                    {/* Price + Discount */}
                    <div className='flex items-center gap-4'>
                        <p className='text-3xl font-bold text-red-500'>
                            ${singleProduct.price}
                        </p>
                        <span className='text-green-600 font-semibold'>
                            {singleProduct.discountPercentage}% OFF
                        </span>
                    </div>

                    {/* Rating */}
                    <div className='flex items-center gap-2 text-yellow-500'>
                        ⭐ {singleProduct.rating} / 5
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 leading-relaxed'>
                        {singleProduct.description}
                    </p>

                    {/* Stock */}
                    <p className='text-sm text-green-600 font-medium'>
                        {singleProduct.stock > 0 ? "In Stock ✅" : "Out of Stock ❌"}
                    </p>

                    {/* Buttons */}
                    <div className='flex gap-4 mt-4'>
                        <button 
                            onClick={() => addToCart(singleProduct)} 
                            className='px-6 py-3 flex items-center gap-2 
                            bg-red-500 text-white rounded-xl hover:bg-red-600 
                            hover:scale-105 transition-all shadow-md'
                        >
                            <IoCartOutline className='w-5 h-5' />
                            Add to Cart
                        </button>

                        <button className='px-6 py-3 border border-gray-300 rounded-xl 
                        hover:bg-gray-100 transition'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct