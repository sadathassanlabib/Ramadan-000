'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Resource = () => {
  const router =useRouter()
  const isLoggedIn= true;
  const handelNavigate=()=>{
    if(isLoggedIn){
    router.push('/special')
  }else{
    router.push('/')
  }
}
  return (
    <main>
      <div className="text-xl underline mt-10 mx-3">Resource in this time</div>
         <ul className="flex flex-col space-y-5 justify-end mx-10 mt-5">
            <Link href="/resource/boyan"><li>বয়ান</li></Link>
            <Link href="/resource/book"><li>বই</li></Link>
            <Link href="/resource/pdf"><li>PDF</li></Link>
            <Link href="/resource/muhasaba"><li>মুহাসাবা</li></Link>
            <Link href="/resource/course"><li>কোর্স</li></Link>     
          </ul>
          <button type='button' onClick={handelNavigate} className='mx-10 mt-10 text-xl'>Special for you!</button>
    </main>
  )
}

export default Resource