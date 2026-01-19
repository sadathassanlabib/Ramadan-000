import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';
import React from 'react';

const Muhasaba = async () => {
  const result = await getResources("muhasaba");

  if (!result.success) {
    return <p className="text-red-400 text-center mt-10">Error loading Muhasaba: {result.message}</p>;
  }

  const data = result.data;

  return (
    <main className="relative min-h-screen px-5 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Soft floating glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 -left-32 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">মুহাসাবা</h1>
        <p className="text-gray-300">
          নিজের যাচাই ও আত্মসমালোচনার জন্য দরকারী রিসোর্সসমূহ
        </p>
      </div>

      {/* Muhasaba Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <div
            key={item._id.toString()}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2 text-yellow-200 line-clamp-2">
              {item.muhasabaTitle}
            </h2>
            <p className="text-gray-200 text-sm mb-4 line-clamp-3">
              {item.muhasabaDetails}
            </p>
            <a
              href={item.muhasabaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-200 font-medium hover:underline"
            >
              বিস্তারিত দেখুন →
            </a>
          </div>
        ))}
      </div>

      {/* Add Muhasaba Button */}
      <div className="relative z-10 mt-10 text-center">
        <Link
          href="/resource/muhasaba/add"
          className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          মুহাসাবা যোগ করুন
        </Link>
      </div>
    </main>
  );
};

export default Muhasaba;
