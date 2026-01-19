import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';
import React from 'react';

export const dynamic = 'force-dynamic';

// helper: youtube link → videoId
const getVideoId = (url) => {
  return url?.split("v=")[1]?.split("&")[0];
};

const Boyan = async () => {
  const result = await getResources("boyans");

  if (!result.success) {
    return <p>Error loading Boyans: {result.message}</p>;
  }

  const data = result.data;

  return (
    <main className="relative min-h-screen px-5 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Floating Soft Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 -left-32 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">বয়ানসমূহ</h1>
        <p className="text-gray-300">ইসলাহী ও তাযকিরামূলক ভিডিও বয়ান</p>
      </div>

      {/* Boyan Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((singleBoyan) => {
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

      {/* Add Boyan Button */}
      <div className="relative z-10 mt-10 text-center">
        <Link
          href="/resource/boyan/add"
          className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          বয়ান যুক্ত করুন
        </Link>
      </div>
    </main>
  );
};

export default Boyan;
