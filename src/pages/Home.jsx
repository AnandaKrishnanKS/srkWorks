import React from 'react'
import Menubar from '../components/Menubar'
import Newarival from '../components/Newarival'
import Premiumsection from '../components/Premiumsection'

const Home = () => {
  return (
    <div>
        <Menubar/>
       <div className='flex mt-6'>
           <Newarival/>
            <Premiumsection/>
       </div>
    </div>
  )
}

export default Home