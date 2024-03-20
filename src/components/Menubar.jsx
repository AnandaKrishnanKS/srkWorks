import React from 'react'
import Usermenu from './Usermenu'

const Menubar = () => {
  return (
    <div className='flex pt-4 '>
        <div className='flex space-x-4 ms-auto me-auto'>
            <div>
                <p>
                    Home
                </p>
            </div>
            <div>
                <p>
                    Dasboard
                </p>
            </div>
            <div>
                <p>
                    Products
                </p>
            </div>
            <div>
                <p>
                    Transactions
                </p>
            </div>
            <div>
                <p>
                    Journal
                </p>
            </div>
        </div>
        <div className='ms-auto me-1'>
            <Usermenu/>
        </div>
    </div>
  )
}

export default Menubar