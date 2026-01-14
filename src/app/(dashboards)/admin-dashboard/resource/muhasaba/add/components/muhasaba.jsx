'use client'
import { postSingleResource } from '@/app/actions/resource/resource.action';
import { useRouter } from 'next/navigation';
import React from 'react'

const MuhasabaAdd = () => {
 const router =useRouter()
 
     const handleSubmit = async(e) => {
         e.preventDefault();
         const form = e.target.form;
         const pdfTitle = form.pdfTitle.value;
         const payload = { title: pdfTitle };
         // const res = await fetch('/api/items',{method:'POST',body:JSON.stringify(payload),headers:{'Content-Type':'application/json'}})
         // const result = await res.json();
         const result = await postSingleResource("muhasaba", payload);
         form.reset();
         // alert('PDF added successfully')
         router.push('/resource/muhasaba')
         router.refresh()
     }
   return (
     <main className="m-10">
         <form action="">
             <input type="text" name="pdfTitle" id="" placeholder="muhasaba title" />
             <button type="submit" value="" onClick={handleSubmit} >Submit</button>
         </form>
     </main>
   )
}

export default MuhasabaAdd