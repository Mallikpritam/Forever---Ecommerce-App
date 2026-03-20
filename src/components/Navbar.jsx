import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  // FIXED: correct way to get setShowSearch
  const { setShowSearch,getCartCount } = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
        </NavLink>

      </ul>

      {/* Icons Section */}
      <div className='flex items-center gap-6'>

        {/* Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt="Search"
        />

        {/* Profile */}
        <div className='group relative'>
        <Link to='/login'> <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile" /></Link>

          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt="Menu"
        />

      </div>

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>

        <div className='flex flex-col text-gray-600'>

          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-4 cursor-pointer border-b'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back"/>
            <p>BACK</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-3 px-6 border-b' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 px-6 border-b' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 px-6 border-b' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 px-6 border-b' to='/contact'>CONTACT</NavLink>

        </div>

      </div>

    </div>
  )
}

export default Navbar