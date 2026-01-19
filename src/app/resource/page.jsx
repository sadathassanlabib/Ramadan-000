'use client';

import Link from 'next/link';

const resources = [
  { title: 'বয়ান', desc: 'ইসলাহী ও তাযকিরামূলক আলোচনা', href: '/resource/boyan' },
  { title: 'বই', desc: 'ইসলামি বই ও পাঠ্যসম্ভার', href: '/resource/book' },
  { title: 'PDF', desc: 'সংরক্ষিত নোট ও পাঠযোগ্য ফাইল', href: '/resource/pdf' },
  { title: 'মুহাসাবা', desc: 'নিজেকে যাচাই ও আত্মসমালোচনা', href: '/resource/muhasaba' },
  { title: 'কোর্স', desc: 'ধাপে ধাপে ইসলামি শিক্ষা', href: '/resource/course' }
];

const Resource = () => {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* Soft Background Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -left-32 w-80 h-80 bg-slate-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-600/20 rounded-full blur-2xl"></div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          রিসোর্স
        </h1>
        <p className="text-gray-300">
          দ্বীনি জ্ঞান ও আত্মগঠনের জন্য প্রয়োজনীয় উপকরণসমূহ
        </p>
      </div>

      {/* Resource Cards */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resources.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="group rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-lg hover:shadow-xl transition cursor-pointer">
              <h2 className="text-xl font-medium text-white group-hover:text-yellow-200 transition">
                {item.title}
              </h2>
              <p className="text-sm text-gray-200 mt-2">
                {item.desc}
              </p>
              <p className="text-sm text-yellow-200 mt-4">
                বিস্তারিত দেখুন →
              </p>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
};

export default Resource;
