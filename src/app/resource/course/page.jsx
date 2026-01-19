import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';
import React from 'react';

export const dynamic = 'force-dynamic';

const Course = async () => {
  const result = await getResources("course");

  if (!result.success) {
    return <p>Error loading Courses: {result.message}</p>;
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
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">কোর্সসমূহ</h1>
        <p className="text-gray-300">ধাপে ধাপে ইসলামি শিক্ষা ও নির্দেশনা</p>
      </div>

      {/* Course Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((singleCourse) => (
          <div
            key={singleCourse._id.toString()}
            className="group rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-md hover:shadow-xl flex flex-col transition hover:scale-105"
          >
            <h2 className="text-lg font-semibold mb-4 text-yellow-200 group-hover:text-yellow-400 transition line-clamp-2">
              {singleCourse.title}
            </h2>
            <a
              href={singleCourse.link}
              target="_blank"
              className="mt-auto inline-block text-sm text-blue-300 font-medium hover:underline"
            >
              View Course →
            </a>
          </div>
        ))}
      </div>

      {/* Add Course Button */}
      <div className="relative z-10 mt-10 text-center">
        <Link
          href="/resource/course/add"
          className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          কোর্স যোগ করুন
        </Link>
      </div>

    </main>
  );
};

export default Course;
