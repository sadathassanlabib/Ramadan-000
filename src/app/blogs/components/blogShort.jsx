'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getResources } from '@/app/actions/resource/resource.action';

const ITEMS_PER_PAGE = 8;

const BlogShortClient = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getResources("blogs");
      if (result.success) {
        setData(result.data);
        setTotalPages(Math.ceil(result.data.length / ITEMS_PER_PAGE));
      }
    };
    fetchData();
  }, []);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageData = data.slice(start, start + ITEMS_PER_PAGE);

  return (
    <main className="relative min-h-screen px-5 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Page Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ব্লগ
        </h1>
        <p className="text-gray-300">
          রমাদান ও দ্বীনি বিষয় সম্পর্কিত লেখা পড়ুন এবং অনুপ্রেরণা নিন
        </p>
      </div>

      {/* Blog Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageData.map((singleBlog) => (
          <div
            key={singleBlog._id.toString()}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-yellow-200">
              {singleBlog.title}
            </h2>

            <p className="text-gray-200 text-sm mb-4 line-clamp-3">
              {singleBlog.content.slice(0, 120)}...
            </p>

            <Link
              href={`/blogs/${singleBlog._id}`}
              className="mt-auto text-blue-200 font-medium hover:underline"
            >
              বিস্তারিত পড়ুন →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="relative z-10 flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded-lg disabled:opacity-40 bg-white/10 hover:bg-white/20 transition"
        >
          ← পূর্ববর্তী
        </button>

        <span className="text-sm text-gray-300">
          পৃষ্ঠা {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded-lg disabled:opacity-40 bg-white/10 hover:bg-white/20 transition"
        >
          পরবর্তী →
        </button>
      </div>

      {/* Add Blog Button */}
      {/* <div className="relative z-10 mt-10 text-center">
        <Link
          href="/resource/blogs/add"
          className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          ব্লগ যুক্ত করুন
        </Link>
      </div> */}
    </main>
  );
};

export default BlogShortClient;
