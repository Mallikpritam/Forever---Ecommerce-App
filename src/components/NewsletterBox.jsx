import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>
          Subscribe now and get 🤩 20% Off Hurry up 🛍️ Grab the deal
        </p>

        <p className='text-gray-400 mt-3'>
          Don't miss out on our latest updates and exclusive offers!
        </p>

        <form onSubmit={onSubmitHandler} className='flex items-center justify-center gap-3 mt-5'>
          <input
            className='border border-gray-300 px-4 py-3 outline-none w-64'
            type="email"
            placeholder="Enter your email"
            required
          />

          <button
            type='submit'
            className='bg-black text-white text-xs px-8 py-3'
          >
            SUBSCRIBE
          </button>
        </form>
    </div>
  )
}

export default NewsletterBox