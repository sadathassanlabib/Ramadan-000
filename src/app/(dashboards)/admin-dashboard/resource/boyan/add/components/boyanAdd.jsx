'use client'


import { postSingleResource } from "@/app/actions/resource/resource.action";
import { useRouter } from "next/navigation";

const BoyanAddPage = () => {
const router =useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target.form;
        const boyanUrl = form.boyanUrl.value;
        const boyantitle = form.boyanTitle.value;
        const payload = { boyantitle, boyanUrl };
        // const res = await fetch('/api/items',{method:'POST',body:JSON.stringify(payload),headers:{'Content-Type':'application/json'}})
        // const result = await res.json();
        const result = await postSingleResource('boyans',payload);
        form.reset();
        alert('PDF added successfully')
        router.push('/resource/boyan')
        router.refresh()
    }
  return (
    <main className="m-10">
        <h2 className="mb-10 text-2xl">Boyan Input</h2>
        <form action="" className="  gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <input type="text" name="boyanTitle" id="" placeholder="boyan title" className="p-5  bg-amber-700 rounded"/>
            <input type="text" name="boyanUrl" id="" placeholder="boyan url" className="p-5  bg-amber-700 rounded"/>
            
            <button type="submit" value="" onClick={handleSubmit} className=" bg-blue-600 border-2 rounded-2xl p-4">Submit</button>
        </form>
    </main>
  )
}

export default BoyanAddPage