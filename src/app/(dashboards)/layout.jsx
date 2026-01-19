import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
  <div>
    <div className=' grid grid-cols-12'>
        {/* sideber */}
        <div className='col-span-2 bg-gray-200 h-screen p-5'>
        <ul className='text-cyan-700 font-bold'>
             <Link href="/"> <li className='bg-neutral-900'>Home</li></Link>
           
    
        </ul>
        </div>
        {/* dashboard content */}
        <div className='col-span-9'>
              {children}
        </div>
    </div>
     </div>
  )
}

export default DashboardLayout