import React from 'react'

const Event = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white text-center px-4 py-16">

      {/* Icon */}
      <span className="text-6xl mb-6">📅</span>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        কোনো ইভেন্ট পাওয়া যায়নি
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-lg max-w-md">
        নতুন ইভেন্ট যোগ করা হলে এখানে প্রদর্শিত হবে।
      </p>

    </div>
  )
}

export default Event
