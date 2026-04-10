import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    const toggleDropdown = ()=>{
        setOpenDropdown(!openDropdown)
    }

    return (
        <div className='bg-white/80 backdrop-blur-md py-3 px-4 md:px-0 shadow-md sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>

                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}>
                        <h1 className='font-bold text-3xl tracking-wide'>
                            <span className='text-red-500 font-serif'>S</span>hopora
                        </h1>
                    </Link>

                    {/* Location */}
                    <div className='md:flex gap-2 cursor-pointer text-gray-700 items-center hidden hover:text-black transition'>
                        <MapPin className='text-red-500' />
                        <span className='font-medium text-sm'>
                            {location ? (
                                <div className='leading-tight'>
                                    <p>{location.county}</p>
                                    <p className='text-gray-500 text-xs'>{location.state}</p>
                                </div>
                            ) : "Add Address"}
                        </span>
                        <FaCaretDown onClick={toggleDropdown}/>
                    </div>

                    {/* Dropdown */}
                    {
                        openDropdown && (
                            <div className='w-[260px] shadow-xl z-50 bg-white fixed top-16 left-60 p-5 border border-gray-100 rounded-xl animate-fadeIn'>
                                <h1 className='font-semibold mb-4 text-lg flex justify-between items-center'>
                                    Change Location 
                                    <span onClick={toggleDropdown} className='cursor-pointer hover:text-red-500'>
                                        <CgClose/>
                                    </span>
                                </h1>
                                <button 
                                    onClick={getLocation} 
                                    className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition'
                                >
                                    Detect my location
                                </button>
                            </div>
                        )
                    }
                </div>

                {/* menu section */}
                <nav className='flex gap-6 items-center'>

                    <ul className='md:flex gap-6 items-center text-[18px] font-medium hidden'>
                        <NavLink to={'/'} className={({ isActive }) => 
                            `${isActive ? "text-red-500" : "text-gray-700"} hover:text-red-500 transition`
                        }><li>Home</li></NavLink>

                        <NavLink to={"/products"} className={({ isActive }) => 
                            `${isActive ? "text-red-500" : "text-gray-700"} hover:text-red-500 transition`
                        }><li>Products</li></NavLink>

                        <NavLink to={"/about"} className={({ isActive }) => 
                            `${isActive ? "text-red-500" : "text-gray-700"} hover:text-red-500 transition`
                        }><li>About</li></NavLink>

                        <NavLink to={"/contact"} className={({ isActive }) => 
                            `${isActive ? "text-red-500" : "text-gray-700"} hover:text-red-500 transition`
                        }><li>Contact</li></NavLink>
                    </ul>

                    {/* Cart */}
                    <Link to={'/cart'} className='relative group'>
                        <IoCartOutline className='h-7 w-7 text-gray-700 group-hover:text-red-500 transition' />
                        <span className='bg-red-500 text-xs px-2 py-[2px] rounded-full absolute -top-2 -right-2 text-white shadow'>
                            {cartItem.length}
                        </span>
                    </Link>

                    {/* Auth */}
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-400 transition"/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>

                    {/* Mobile menu */}
                    {
                        openNav 
                        ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden cursor-pointer'/> 
                        : <HiMenuAlt1 onClick={()=>setOpenNav(true)} className='h-7 w-7 md:hidden cursor-pointer'/>
                    }
                </nav>
            </div>

            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
    )
}

export default Navbar