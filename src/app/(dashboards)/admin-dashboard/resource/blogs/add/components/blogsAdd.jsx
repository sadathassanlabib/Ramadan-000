'use client'


import { postSingleResource } from "@/app/actions/resource/resource.action";
import { useRouter } from "next/navigation";

const BlogsAdd = () => {
const router =useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target.form;
        const title = form.blogTitle.value;
        const author = form.author.value;
        const content = form.content.value;
        const publishedDate =form.publishedDate.value;
        const category = form.category.value;
        const payload = {  title,author,content,publishedDate,category };
        // const res = await fetch('/api/items',{method:'POST',body:JSON.stringify(payload),headers:{'Content-Type':'application/json'}})
        // const result = await res.json();
        const result = await postSingleResource('blogs',payload);
        form.reset();
        alert('Blogs added successfully')
        router.push('/resource/blogs')
        router.refresh()
    }
  return (
    <main className="m-10">
        <h1 className="text-xl pb-3"> Add Blogs </h1>
        <form action="" className="  gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <input type="text" name="blogTitle" id="" placeholder="blog title"className="p-5  bg-amber-700 rounded" />
            <input type="text" name="author" id="" placeholder="author" className="p-5  bg-amber-700 rounded"/>
            <input type="text" name="content" id="" placeholder="content" className="p-5  bg-amber-700 rounded"/>
            <input type="text" name="category" id="" placeholder="category" className="p-5  bg-amber-700 rounded" />
            <input type="text" name="photoUrl" id="" placeholder="photoUrl" className="p-5  bg-amber-700 rounded" />
            <input type="date" name="publishedDate" id="" placeholder="publishedDate" className="p-5  bg-amber-700 rounded" />
         
          

            <button type="submit" value="" onClick={handleSubmit} className=" bg-blue-600 border-2 rounded-2xl p-4">Submit</button>
        </form>
    </main>
  )
}

export default BlogsAdd