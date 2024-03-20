import React from 'react'
import Menubar from './Menubar'
import Newarival from './Newarival'
import Premiumsection from './Premiumsection'

const Home = () => {
  return (
    <div>
        <Menubar/>
       <div className='flex mt-6'>
           <div className='w-1/2'><Newarival/></div>
            <div className='w-1/2'><Premiumsection/></div>
       </div>
    </div>
  )
}

export default Home