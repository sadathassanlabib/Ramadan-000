'use client'

import { postSingleResource } from "@/app/actions/resource/resource.action";
import { useRouter } from "next/navigation";

const PdfAddPage = () => {
const router =useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target.form;
        const pdfTitle = form.pdfTitle.value;
        const pdfLink = form.pdfLink.value;
        const payload = {  pdfTitle,  pdfLink };
       
        const result = await postSingleResource("pdf", payload);
        form.reset();
        alert('PDF added successfully')
        router.push('/resource/pdf')
        router.refresh()
    }
  return (
    <main className="m-10">
        <form action="" className="  gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <input type="text" name="pdfTitle" id="" placeholder="pdf title" className="p-5  bg-amber-700 rounded" />
            <input type="text" name="pdfLink" id="" placeholder="pdf link" className="p-5  bg-amber-700 rounded" />
            <button type="submit" value="" onClick={handleSubmit} className=" bg-blue-600 border-2 rounded-2xl p-4">Submit</button>
        </form>
    </main>
  )
}

export default PdfAddPage