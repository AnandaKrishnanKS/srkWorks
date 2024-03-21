import React from 'react'
import sideimg from '../assets/images/loginlogo.jpeg'
import { Outlet,Link } from "react-router-dom";
import Home from './Home';

const Login = () => {

  return (
    <div className='flex items-center justify-center mt-16'>
        <div className='p-8'>
           <p className='text-5xl mb-6 text-blue-400'>Unlock Exclusive Benifits</p>
           <div>
            <label className='block flex items-start' htmlFor="Pnumber">Phone number</label>
            <input className=' p-1 rounded-full border-2 border-black w-60 m-2 mt-0' type="number" placeholder='country code' />
            <input className='p-1 rounded-full border-2 border-black w-60 m-2 mt-0' type="number" id='Pnumber' placeholder='phone number'/>
           </div>
           <div>
            <label className='block flex items-start' htmlFor="Name">Name</label>
            <input className='w-full p-1 rounded-full border-2 border-black' type="text" id='Name' placeholder='name'/>
           </div>
           <div>
            <label className='block flex items-start mt-2' htmlFor="Email">Email(optional)</label>
            <input className='w-full p-1 rounded-full border-2 border-black' type="email" id='Email' placeholder='email'/>
           </div>
           <div className='mt-2 mb-2'>
            <button to="Home" className='w-full p-1 rounded-full border-2 bg-blue-400 border-black mt-6 text-center' type='submit' >continue</button>
           </div>
           <div>
            <p className='text-sm text-center my-5'>get ready to recieve an OTP on your phone</p>
           </div>
    
        </div>
        <div className='p-8 w-1/3'> 
            <img src={sideimg} alt="img" />   
        </div>
        <Outlet />
    </div>
  )
}

export default Login 