import React from 'react'
import { FaFilter } from 'react-icons/fa6'
import { getData } from '../context/DataContext'

const MobileFilter = ({
  openFilter, setOpenFilter,
  search, setSearch,
  brand, setBrand,
  priceRange, setPriceRange,
  category, setCategory,
  handleBrandChange, handleCategoryChange
}) => {

  const { categoryOnlyData, brandOnlyData } = getData()

  const toggleFilter = () => {
    setOpenFilter(!openFilter)
  }

  return (
    <>
      {/* Header */}
      <div className='bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5'>
        <h1 className='font-semibold text-xl'>Filters</h1>
        <FaFilter onClick={toggleFilter} className='text-gray-800 cursor-pointer' />
      </div>

      {/* Filter Panel */}
      {openFilter && (
        <div className='bg-gray-100 p-4 md:hidden rounded-lg'>

          {/* 🔍 Search */}
          <input
            type="text"
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-white p-2 rounded-md border w-full'
          />

          {/* 📂 Category */}
          <h1 className='mt-5 font-semibold text-xl'>Category</h1>
          <div className='flex flex-col gap-2 mt-3'>

            {/* ✅ All option */}
            <div className='flex gap-2'>
              <input
                type="radio"
                name="category"
                checked={category === "All"}
                onChange={() => setCategory("All")}
              />
              <span>All</span>
            </div>

            {
              categoryOnlyData?.map((item, index) => (
                <div key={index} className='flex gap-2'>
                  <input
                    type="radio"   // ✅ checkbox → radio
                    name="category"
                    checked={category === item}
                    onChange={() => setCategory(item)}
                  />
                  <span className='uppercase'>{item}</span>
                </div>
              ))
            }
          </div>

          {/* 🏷️ Brand */}
          <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
          <select
            className='bg-white w-full p-2 border rounded-md'
            value={brand}
            onChange={handleBrandChange}
          >
            <option value="All">All</option> {/* ✅ FIX */}
            {
              brandOnlyData?.map((item, index) => (
                <option key={index} value={item}>
                  {item.toUpperCase()}
                </option>
              ))
            }
          </select>

          {/* 💰 Price Range */}
          <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
          <div className='flex flex-col gap-2'>
            <label>
              ${priceRange[0]} - ${priceRange[1]}
            </label>

            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className='w-full'
            />
          </div>

          {/* 🔄 Reset */}
          <button
            className='bg-red-500 text-white rounded-md px-3 py-2 mt-5 w-full'
            onClick={() => {
              setSearch('')
              setCategory('All')
              setBrand('All')
              setPriceRange([0, 5000])
              setOpenFilter(false)
            }}
          >
            Reset Filters
          </button>

        </div>
      )}
    </>
  )
}

export default MobileFilter