'use client'
import { getResources } from '@/app/actions/resource/resource.action';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ITEMS_PER_PAGE = 8;

const BookShort = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      const result = await getResources("book");
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
      <div className="relative z-10 max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          বই 
        </h1>
        <p className="text-gray-300">
          রমাদান সম্পর্কিত বইসমূহ
        </p>
      </div>

      {/* Soft floating glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -left-32 w-80 h-80 bg-slate-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-600/20 rounded-full blur-2xl"></div>

      {/* Book Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pageData?.map((book) => (
          <div
            key={book._id.toString()}
            className="rounded-2xl shadow-md border border-white/20 bg-white/10 backdrop-blur-sm hover:shadow-xl transition overflow-hidden"
          >
            <Image
              src={book.coverImage}
              alt={book.bookName}
              width={400}
              height={256}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-base font-semibold line-clamp-2 text-yellow-200">
                {book.bookName}
              </h3>

              <p className="text-sm text-gray-200 mt-1">
                {book.author}
              </p>

              <Link
                href={`/resource/book/${book._id}`}
                className="inline-block mt-3 w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
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

      {/* Add Book Button */}
      <div className="relative z-10 mt-10 text-center">
        <Link
          href="/resource/book/add"
          className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          বই যুক্ত করুন
        </Link>
      </div>
    </main>
  );
};

export default BookShort;
