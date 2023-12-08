import React from 'react'
import { useDispatch } from 'react-redux'
import { action } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  return (
    <div className='card'>
        <h3 >Checkout 'component-1'</h3>
        <div className='flex card-body'>
        <button className="btn primary-btn border border-dark mx-2" onClick={()=>{dispatch(action.minus(1))}}> - </button>
         Quantity 
        <button className="btn primary-btn border border-dark mx-2"onClick={()=>{dispatch(action.add(1))}}> + </button>
        </div>
    </div>
  )
}

export default Shop