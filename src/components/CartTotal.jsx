import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee

  return (
    <div className='w-full'>

      {/* Title */}
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      {/* Price Details */}
      <div className='flex flex-col gap-3 mt-4 text-sm'>

        {/* Subtotal */}
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>

        <hr />

        {/* Shipping Fee */}
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>

        <hr />

        {/* Total */}
        <div className='flex justify-between font-bold text-base'>
          <p>Total</p>
          <p>{currency}{total}.00</p>
        </div>

      </div>

    </div>
  )
}

export default CartTotal