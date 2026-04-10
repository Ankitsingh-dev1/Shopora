import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllProducts()
    }, [])

    if (!data || data.length === 0) {
        return <h1 className='text-center text-gray-500 mt-10'>Loading...</h1>
    }

    // 🔥 Glass Arrows Upgrade
    const ArrowStyle = "absolute top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-lg text-white p-2 rounded-full cursor-pointer hover:bg-red-500 transition-all duration-300"

    const SamplePrevArrow = ({ onClick }) => (
        <div onClick={onClick} className={`${ArrowStyle} left-4`}>
            <AiOutlineArrowLeft size={20} />
        </div>
    )

    const SampleNextArrow = ({ onClick }) => (
        <div onClick={onClick} className={`${ArrowStyle} right-4`}>
            <AiOutlineArrowRight size={20} />
        </div>
    )

    const settings = {
        dots: true, // 🔥 added dots
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='overflow-hidden w-full'>

            <Slider {...settings}>
                {
                    data.slice(0, 7).map((item) => (
                        <div 
                            key={item.id} 
                            className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'
                        >

                            {/* ✅ Centered Content */}
                            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between 
                            gap-8 md:gap-16 px-6 md:px-16 h-[500px]'>

                                {/* LEFT CONTENT */}
                                <div className='space-y-5 max-w-lg'>

                                    <h3 className='text-red-400 font-medium text-sm tracking-widest uppercase'>
                                        Best Electronics Collection
                                    </h3>

                                    <h1 className='text-2xl md:text-4xl font-extrabold text-white leading-tight line-clamp-2'>
                                        {item.title}
                                    </h1>

                                    <p className='text-gray-300 text-sm md:text-base line-clamp-3 leading-relaxed'>
                                        {item.description}
                                    </p>

                                    <button
                                        onClick={() => {
                                            navigate(`/products/${item.id}`)
                                            window.scrollTo(0, 0)
                                        }}
                                        className='bg-gradient-to-r from-red-500 to-pink-500 
                                        text-white px-6 py-3 rounded-full 
                                        hover:scale-105 hover:shadow-2xl 
                                        transition-all duration-300 font-semibold'
                                    >
                                        Shop Now 🚀
                                    </button>

                                </div>

                                {/* RIGHT IMAGE */}
                                <div className='flex justify-center relative'>

                                    {/* Glow Effect */}
                                    <div className='absolute w-[260px] md:w-[420px] h-[260px] md:h-[420px] bg-red-500/20 blur-3xl rounded-full'></div>

                                    <img
                                        src={item.thumbnail || item.images?.[0]}
                                        alt={item.title}
                                        className='relative w-[250px] md:w-[400px] h-[250px] md:h-[400px] 
                                        object-contain rounded-full bg-white/90 p-6 
                                        shadow-2xl hover:scale-110 transition-all duration-500'
                                    />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </Slider>

            {/* Category Section */}
            <div className='max-w-6xl mx-auto mt-6'>
                <Category />
            </div>
        </div>
    )
}

export default Carousel