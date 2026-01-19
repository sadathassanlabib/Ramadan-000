'use client'


import { postSingleResource } from "@/app/actions/resource/resource.action";
import { useRouter } from "next/navigation";

const BookAdd = () => {
const router =useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target.form;
        const bookName = form.bookName.value;
        const author = form.author.value;
        const coverImage = form.coverImage.value;
        const description = form.description.value;
        const pdfbook = form.pdfbook.value;
        
        const payload = { bookName, author, coverImage, description, pdfbook };

        const result = await postSingleResource('book',payload);
        form.reset();
        // alert('PDF added successfully')
        router.push('/resource/boyan')
        router.refresh()
        alert('Book added successfully')
    }
  return (
    <main className="m-10">
        <h3 className="mb-8 text-2xl">Books Data Inpute</h3>
        <form action="" className="  gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
            <input type="text" name="bookName" id="" placeholder="book title" className="p-5  bg-amber-700 rounded" />
            <input type="text" name="author" id="" placeholder="book author" className="p-5  bg-amber-700 rounded" />
            <input type="text" name="coverImage" id="" placeholder="cover image URL" className="p-5  bg-amber-700 rounded" />
            <input type="text" name="description" id="" placeholder="description" className="p-5  bg-amber-700 rounded" />
            <input type="text" name="pdfbook" id="" placeholder="pdf book URL" className="p-5  bg-amber-700 rounded" />
            


            <button type="submit" value="" onClick={handleSubmit} className=" bg-blue-600 border-2 rounded-2xl p-4">Submit </button>
        </form>
    </main>
  )
}

export default BookAdd