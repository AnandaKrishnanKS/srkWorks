import React from 'react'
import logoicon from '../assets/images/logoicon.jpeg'

const Header = () => {
  return (
    <div  className='flex bg-slate-100 text-center'>
        <div className='w-28 ps-6'>
            <div className='w-16 p-0'>
                <img src={logoicon} alt="logo" />
            </div>
        </div>
        <div className='me-auto ms-auto mt-3'>
            <h1>xyz SYSTEM LLP</h1>
        </div>
    </div>
  )
}

export default Header