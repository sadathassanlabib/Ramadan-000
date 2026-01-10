'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navber = () => {

  const pathname = usePathname()
  if (!pathname.includes('dashboard')){
    return (
     <nav>
          <ul className="flex flex-row space-x-5 justify-end mx-10 mt-5">
            <Link href="/"><li>Home</li></Link>
            <Link href="/resource"><li>Resource</li></Link>
            <Link href="/blogs"><li>Blogs</li></Link>
            <Link href="/event"><li>Event</li></Link>
            <Link href="/about"><li>About</li></Link> 
            <Link href="/login"><li>Login</li></Link>     
            <Link href="/register"><li>Register</li></Link>         
          </ul>
        </nav>
  )
  }
  else{
    return<></>
  }
  
}

export default Navber