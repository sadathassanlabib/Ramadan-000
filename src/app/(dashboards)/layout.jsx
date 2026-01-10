import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
  <div>
    <div className=' grid grid-cols-12'>
        {/* sideber */}
        <div className='col-span-2 bg-gray-200 h-screen p-5'>
        <ul className='text-cyan-700'>
             <Link href="/"> <li>home</li></Link>
           
            <li>what is the fact</li>
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