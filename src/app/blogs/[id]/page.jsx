import { getResources } from '@/app/actions/resource/resource.action';
import React from 'react';

const BlogDetais = async ({ params }) => {
  const { id } =await params;

  const result = await getResources("blogs");
  const data = result.data || [];

  const singleData = data.find((d) => d._id.toString() === id);

  if (!singleData) {
    return (
      <main className="min-h-screen flex items-center justify-center
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
        <p className="text-gray-400 text-lg">এই ব্লগটি পাওয়া যায়নি</p>
      </main>
    );
  }

  return (
    <main className="relative overflow-x-hidden min-h-screen px-4 py-12
bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* soft background glow */}
      {/* Top glow */}
<div className="absolute -top-24 right-1/2 translate-x-1/2
w-72 h-72 md:w-96 md:h-96 bg-slate-500/20 rounded-full blur-3xl pointer-events-none"></div>

{/* Bottom glow */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2
w-72 h-72 md:w-96 md:h-96 bg-slate-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto
        bg-white/5 backdrop-blur-md border border-white/10
        rounded-2xl shadow-lg p-6 md:p-10">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-3 leading-snug">
          {singleData.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
          <span>{singleData.author}</span>
          <span>•</span>
          <span>{singleData.publishedDate}</span>
        </div>

        {/* Optional Heading */}
        {singleData.heading && (
          <h2 className="text-xl font-medium mb-4 text-gray-200">
            {singleData.heading}
          </h2>
        )}

        {/* Content */}
        <div className="text-gray-300 leading-relaxed space-y-5 whitespace-pre-line">
          {singleData.content}
        </div>

      </div>
    </main>
  );
};

export default BlogDetais;
