'use client'

import { postSingleResource } from "@/app/actions/resource/resource.action";
import { useRouter } from "next/navigation";

const BlogsAdd = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target.form;

    const payload = {
      title: form.blogTitle.value,
      author: form.author.value,
      content: form.content.value, // textarea value
      publishedDate: form.publishedDate.value,
      category: form.category.value,
      photoUrl: form.photoUrl.value,
    };

    await postSingleResource('blogs', payload);

    form.reset();
    alert('Blogs added successfully');
    router.push('/resource/blogs');
    router.refresh();
  };

  return (
    <main className="m-10">
      <h1 className="text-xl pb-3">Add Blogs</h1>

      <form className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        <input
          type="text"
          name="blogTitle"
          placeholder="blog title"
          className="p-5 bg-amber-700 rounded"
        />

        <input
          type="text"
          name="author"
          placeholder="author"
          className="p-5 bg-amber-700 rounded"
        />

        {/* ✅ IMPORTANT CHANGE */}
        <textarea
          name="content"
          placeholder="content"
          rows={10}
          className="p-5 bg-amber-700 rounded col-span-full resize-y"
        />

        <input
          type="text"
          name="category"
          placeholder="category"
          className="p-5 bg-amber-700 rounded"
        />

        <input
          type="text"
          name="photoUrl"
          placeholder="photoUrl"
          className="p-5 bg-amber-700 rounded"
        />

        <input
          type="date"
          name="publishedDate"
          className="p-5 bg-amber-700 rounded"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 border-2 rounded-2xl p-4 col-span-full"
        >
          Submit
        </button>

      </form>
    </main>
  );
};

export default BlogsAdd;
