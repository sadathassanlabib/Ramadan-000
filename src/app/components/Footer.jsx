import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-gray-300 py-10 overflow-hidden">
      
      {/* Soft floating glows */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-6">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">জীবনদীপ্ত রমাদান</h2>
          <p className="text-sm text-gray-300 max-w-sm">
            দ্বীনি শিক্ষা, ইবাদত ও আত্মউন্নয়নের সহায়ক রিসোর্স। আমাদের উদ্দেশ্য হল জ্ঞান শেয়ার করা এবং অনুপ্রেরণা দেওয়া।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">লিঙ্কসমূহ</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-yellow-200 transition">হোম</Link></li>
            <li><Link href="/resource" className="hover:text-yellow-200 transition">রিসোর্স</Link></li>
            <li><Link href="/blogs" className="hover:text-yellow-200 transition">ব্লগ</Link></li>
            <li><Link href="/event" className="hover:text-yellow-200 transition">ইভেন্ট</Link></li>
            <li><Link href="/about" className="hover:text-yellow-200 transition">আমাদের সম্পর্কে</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} জীবনদীপ্ত রমাদান. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
