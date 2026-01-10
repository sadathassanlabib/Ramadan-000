import Link from 'next/link'
import React from 'react'

const Special = () => {
  return (
    <nav>
          <ul className="flex flex-row space-x-5 justify-end mx-10 mt-5">
            <Link href="/admin-dashboard"><li>Admin Dashboard</li></Link>
            <Link href="/user-dashboard"><li>User Dashboard</li></Link>
                
          </ul>
        </nav>
  )
}

export default Special