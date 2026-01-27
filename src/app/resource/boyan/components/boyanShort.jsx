'use client'
import { getResources } from '@/app/actions/resource/resource.action';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const ITEMS_PER_PAGE = 5;
const getVideoId = (url) => {
  return url?.split("v=")[1]?.split("&")[0];
};

const fixedPlaylists = [
  {
    id: 1,
    title: "রমাদানের পূর্বপ্রস্তুতিমূলক বয়ান",
    playlistId: "https://www.youtube.com/playlist?list=PLa8ZOmwPFzJxzLEBOPWGDQjPchPORbZWL",
  },
  {
    id: 2,
    title: "রমাদানকেন্দ্রীক নাসীহাহ",
    playlistId: "https://www.youtube.com/playlist?list=PLa8ZOmwPFzJxMV-cveQHIhE9KwOZZeuCl",
  }
];
const BoyanShort= () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
      // Server-side data fetch
      useEffect(() => {
        const fetchData = async () => {
        const result = await getResources("boyans");
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

      
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 -left-32 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>

     
      <div className="relative z-10 max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">বয়ানসমূহ</h1>
        <p className="text-gray-300">ইসলাহী ও তাযকিরামূলক ভিডিও বয়ান</p>
      </div>
     <div className=''>
     <p className="inline-flex  gap-2 px-4 py-1.5
              text-sm font-medium text-red-300
              bg-red-500/10 border border-red-400/30
              rounded-full shadow-sm  relative z-10 max-w-6xl mx-auto mb-5  lg:mx-auto">
  ▶ YouTube Playlist
     </p>
    <div className="relative z-10 max-w-6xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    {/* Fixed Playlist Cards */}
    
    {fixedPlaylists.map((playlist) => (
     <Link
      key={playlist.id}
      href={playlist.playlistId}
      target="_blank"
      className="group rounded-2xl bg-gradient-to-br from-red-600/20 to-red-900/30
               border border-red-400/30 p-5 shadow-md hover:shadow-xl
               transition hover:scale-105 flex flex-col justify-between"
    >
    <div>
      <h2 className="text-base font-semibold mb-2 text-red-200 group-hover:text-red-400">
        {playlist.title}
      </h2>

     
    </div>

    <span className="mt-4 inline-flex items-center gap-2 text-sm text-red-400">
      ▶ Open on YouTube
    </span>
  </Link>
))}


      </div>

      {/*  */}
      <p className="inline-flex items-center gap-2 px-4 py-1.5
              text-sm font-medium text-red-300
              bg-red-300/10 border border-red-400/30
              rounded-full shadow-sm relative z-10 max-w-6xl mx-auto mb-5  lg:mx-auto">
  ▶ YouTube Video
     </p>
     </div>
   {/* boyan video */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pageData?.map((singleBoyan) => {
          const videoId = getVideoId(singleBoyan.boyanUrl);

          return (
            <div
              key={singleBoyan._id.toString()}
              className="group rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col"
            >
              {/* Title */}
              <h2 className="text-sm font-semibold mb-3 text-yellow-200 group-hover:text-yellow-400 transition line-clamp-2">
                {singleBoyan.boyantitle}
              </h2>

              {/* YouTube Video */}
              {videoId && (
                <div className="relative w-full pt-[56.25%] mb-3 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

     
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
            
      
    </main>
  );
};


export default BoyanShort