import React from 'react'

const Login = () => {
  return (
    <div className='flex mt-10'>
        <div className='p-8'>
           <p className='text-5xl mb-6'>Unlock Exclusive Benifits</p>
           <div>
            <label className='block flex items-start' htmlFor="Pnumber">Phone number</label>
            <input className=' p-1 rounded-full border-2 w-60 m-2 mt-0' type="number" placeholder='country code' />
            <input className='p-1 rounded-full border-2 w-60 m-2 mt-0' type="number" id='Pnumber' placeholder='phone number'/>
           </div>
           <div>
            <label className='block flex items-start' htmlFor="Name">Name</label>
            <input className='w-full p-1 rounded-full border-2' type="text" id='Name' placeholder='name'/>
           </div>
           <div>
            <label className='block flex items-start' htmlFor="Email">Email(optional)</label>
            <input className='w-full p-1 rounded-full border-2' type="email" id='Email' placeholder='email'/>
           </div>
           <div className='mt-2 mb-2'>
            <button className='w-full p-1 rounded-full border-2 bg-blue-300' type='submit'>continue</button>
           </div>
           <div>
            <p className='text-sm'>get ready to recieve an OTP on your phone</p>
           </div>
    
        </div>
        <div className='p-8'> 
            <img src="##" alt="##" />   
        </div>
    </div>
  )
}

export default Login 