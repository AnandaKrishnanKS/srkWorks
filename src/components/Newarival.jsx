import React from 'react'
import cmmunitylogo from '../assets/images/comunitiicon.jpeg'
const Newarival = () => {
  return (
    <div className='text-center'>
        <div>
            <h1 className='text-3xl'>NEW ARRIVAL</h1>
            <p className='text-sm font-bold underline mt-3 me-28'>JOIN TODAY</p>
        </div>
        <div className='w-80 me-auto ms-auto '>
            <img src={cmmunitylogo} alt="community membrship logo" />
        </div>
        <div>
            <button className='rounded-full bg-slate-200 w-44 me-auto ms-auto text-blue-600 font-semibold text-sm p-2' >JOIN NOW</button>
        </div>
    </div>
  )
}

export default Newarival