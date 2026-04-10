import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const { category } = useParams()
  const navigate = useNavigate()

  const getFilterData = async () => {
    try {
      // ✅ DummyJSON category API
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      )

      // ✅ products array
      setSearchData(res.data.products)

    } catch (error) {
      console.log("ERROR:", error)
    }
  }

  useEffect(() => {
    if (category) {
      getFilterData()
      window.scrollTo(0, 0)
    }
  }, [category])

  return (
    <div>
      {
        searchData.length > 0 ? (
          <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>

            {/* 🔙 BACK */}
            <button 
              onClick={() => navigate('/')} 
              className='bg-gray-800 mb-5 text-white px-4 py-2 rounded-lg 
              flex gap-2 items-center hover:bg-gray-700 transition'
            >
              <ChevronLeft size={18}/> Back
            </button>

            {/* PRODUCTS */}
            {
              searchData.map((product) => (
                <ProductListView key={product.id} product={product} />
              ))
            }

          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-[400px] gap-4'>
            <video muted autoPlay loop className='w-[150px]'>
              <source src={Loading} type='video/webm'/>
            </video>
            <p className='text-gray-500 text-lg'>
              No products found 😕
            </p>
          </div>
        )
      }
    </div>
  )
}

export default CategoryProduct