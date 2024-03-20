import React from 'react'
import carticon from '../assets/images/carticon.jpeg'
import rupeesicon from '../assets/images/rupesicon.jpeg'
import percenticon from '../assets/images/percenticon.jpeg'

const Premiumsection = () => {
  return (
    <div className='text-center'>
      <div>
        <p className='text-cyan-400 text-3xl my-2 mb-16'>Unlock Premium Features Now</p>
      </div>
      <div className='flex justify-center space-x-1'>
        <div className='border rounded-md w-44 '>
          <img className='rounded-2xl p-3 mt-3' src={carticon} alt="cart" />
          <p className='my-3'>Low interest Rates</p>
        </div>
        <div className='border rounded-md w-44'>
          <img className='rounded-2xl p-3 mt-3' src={rupeesicon} alt="rupee" />
          <p className='my-3'>interest free payments</p>
        </div>
        <div className='border rounded-md w-44'>
          <img className='rounded-2xl p-3 mt-3' src={percenticon} alt="discount" />
          <p className='my-3'>Discount on Meterials</p>
        </div>
      </div>
      <div className='text-slate-300 mt-2 mb-5 '>
        * * *
      </div>
      <div>
        <button className='rounded-full text-white bg-green-500 w-40 py-2 m-1'>UNLOCK NOW</button>
      </div>
      <div>
        <button className='rounded-full text-white bg-green-500 w-40 py-2 m-1' >DETAILS</button>
      </div>
    </div>
  )
}

export default Premiumsection