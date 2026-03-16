import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div>
    <img src={assets.logo} className='mb-5 w-32' alt="" />
    <p className='w-full md:w-2/3 text-gray-600'>
        Welcome to our online store, where fashion meets convenience. We are dedicated to providing you with a seamless shopping experience, offering a wide range of trendy and high-quality products. Our mission is to empower you to express your unique style with confidence. With a commitment to exceptional customer service and a curated selection of the latest fashion trends, we strive to be your go-to destination for all your fashion needs. Thank you for choosing us as your trusted online shopping partner.
    </p>
</div>
<div>
    <p className=' text-xl font-medium mb-5'>COMPANY</p>

    <ul className='flex flex-col gap-2 text-gray-600'>
        <li className='text-gray-600 hover:text-black cursor-pointer'>Home</li>
        <li className='text-gray-600 hover:text-black cursor-pointer'>About Us</li>
        <li className='text-gray-600 hover:text-black cursor-pointer'>Delivery</li>
        <li className='text-gray-600 hover:text-black cursor-pointer'>Privacy Policy</li>
     </ul>
</div>

<div>
    <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-2 text-gray-600'>
        <li className='text-gray-600 hover:text-black cursor-pointer'>Email:contact@foreveryou.com</li>
        <li className='text-gray-600 hover:text-black cursor-pointer'>Phone: +1-212-555-0199</li>
        <li className='text-gray-600 hover:text-black cursor-pointer'>Address: 123 Fashion Street, New York, NY 10001</li>
    </ul>
</div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                  Copyright 2024 © forever.com All rights reserved | This template is made with ❤️ by Pritam Mallik
            </p>
        </div>
    </div>
  )
}

export default Footer