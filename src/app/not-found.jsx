import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
  <main className=' flex justify-center items-center space-x-7 w-full h-full'>
    <h2>404 - Page Not Found</h2>
    <Link href="/">Go back to Home</Link>
  </main>
  )
}

export default NotFound