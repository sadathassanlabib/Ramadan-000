import Link from 'next/link'
import React from 'react'

const PDF = async () => {
  const res =await fetch('http://localhost:3000/api/items');

  const result = await res.json();
  const items = result.data;
  return (
   <main className='m-10'>
    <h1>PDF Page</h1>
    <div>
      {items?.map((singlePDF)=>{return <p key={singlePDF._id}>{singlePDF.title}</p>})}
    </div>
    
    <Link href="/resource/pdf/add">Add PDF</Link>
   </main>

  )
}

export default PDF