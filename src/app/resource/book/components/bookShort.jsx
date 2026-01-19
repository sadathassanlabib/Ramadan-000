'use client'
import { getResources } from '@/app/actions/resource/resource.action';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const ITEMS_PER_PAGE = 8;
const BookShort = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    
      // totalPages state
      const [totalPages, setTotalPages] = useState(1);
    
      // Server-side data fetch
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
    <main className="m-10">
      <h1 className="text-2xl font-bold mb-6">Book Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pageData?.map((book) => (
          <div
            key={book._id.toString()}
            className="w-72 rounded-xl shadow-md border bg-white hover:shadow-lg transition"
          >
            <Image
              src={book.coverImage}
              alt={book.bookName}
              width={400}
              height={256}
              className="w-full h-48 object-cover rounded-t-xl"
            
            />

            <div className="p-3">
              <h3 className="text-base font-semibold line-clamp-2">
                {book.bookName}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {book.author}
              </p>

              <Link
                href={`/resource/book/${book._id}`}
                className="inline-block mt-3 w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

       {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          ← Previous
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Next →
        </button>
      </div>
            
      <Link
        href="/resource/book/add"
        className="inline-block mt-8 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
      Add Book
      </Link>
    </main>
  );
};


export default BookShort