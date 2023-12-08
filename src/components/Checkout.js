import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div className='card'>
    <h3>Checkout 'component-2'</h3>
        <button className='card-body'>
            <h5>Cart = {amount}</h5>
        </button>
    </div>
  )
}

export default Checkout