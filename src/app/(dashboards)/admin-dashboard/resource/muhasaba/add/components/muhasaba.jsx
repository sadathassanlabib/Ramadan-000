'use client'
import { postSingleResource } from '@/app/actions/resource/resource.action';
import { useRouter } from 'next/navigation';
import React from 'react'

const MuhasabaAdd = () => {
 const router =useRouter()
 
     const handleSubmit = async(e) => {
         e.preventDefault();
         const form = e.target.form;
         const muhasabaTitle = form.muhasabaTitle.value;
         const muhasabaLink = form.muhasabaLink.value;
         const muhasabaDetails = form.muhasabaDetails.value;
         const payload = { muhasabaTitle, muhasabaLink, muhasabaDetails };
         // const res = await fetch('/api/items',{method:'POST',body:JSON.stringify(payload),headers:{'Content-Type':'application/json'}})
         // const result = await res.json();
         const result = await postSingleResource("muhasaba", payload);
         form.reset();
         alert('Muhasaba added successfully')
         router.push('/resource/muhasaba')
         router.refresh()
     }
   return (
     <main className="m-10">
         <h2 className="mb-10 text-2xl">Muhasaba Input</h2>
         <form action="" className="  gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             <input type="text" name="muhasabaTitle" id="" placeholder="muhasaba title" className="p-5  bg-amber-700 rounded"/>
               <input type="text" name="muhasabaDetails" id="" placeholder="muhasaba details" className="p-5  bg-amber-700 rounded"/>
             <input type="text" name="muhasabaLink" id="" placeholder="muhasaba link" className="p-5  bg-amber-700 rounded"/>
           
             <button type="submit" value="" onClick={handleSubmit} className=" bg-blue-600 border-2 rounded-2xl p-4">Submit</button>
         </form>
     </main>
   )
}

export default MuhasabaAdd