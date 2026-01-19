import { getResources } from '@/app/actions/resource/resource.action';
import Image from 'next/image';
import React from 'react'

const BookDetails = async ({ params }) => {
  const { id } = await params;

  const result = await getResources("book");
   
  if (!result.success) {
    return <p className="text-red-400 text-center mt-10">Error loading Books: {result.message}</p>;
  }
 
  const data = result.data;
  const detailsData = data.find(book => book._id.toString() === id);

  if (!detailsData) {
    return <p className="text-red-400 text-center mt-10">Book not found</p>;
  }

  return (
    <main className="relative min-h-screen px-5 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Soft Background Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -left-32 w-80 h-80 bg-slate-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-600/20 rounded-full blur-2xl"></div>

      {/* Card Container */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-6">
        
        {/* Book Cover */}
        <div className="flex-shrink-0 w-full md:w-64 relative">
          <Image 
            src={detailsData.coverImage} 
            alt={detailsData.bookName} 
            width={256}
            height={384}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-200">{detailsData.bookName}</h2>
            <p className="mb-2 text-gray-300"><strong>লেখক:</strong> {detailsData.author}</p>
            <p className="mb-4 text-gray-300"><strong>বর্ণনা:</strong> {detailsData.description}</p>
          </div>

          {/* PDF Button */}
          {detailsData.pdfbook && (
            <a 
              href={detailsData.pdfbook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full md:w-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              PDF দেখুন
            </a>
          )}
        </div>

      </div>
    </main>
  )
}

export default BookDetails;
