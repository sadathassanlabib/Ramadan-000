import React from 'react'

const Event = () => {
return (
    <div className="flex flex-col items-center justify-center  py-16 text-center">
      <span className="text-5xl mb-4">📅</span>
      <h2 className="text-xl font-semibold text-gray-700">
        কোনো ইভেন্ট পাওয়া যায়নি
      </h2>
      <p className="text-gray-500 mt-2">
        নতুন ইভেন্ট যোগ হলে এখানে দেখা যাবে
      </p>
    </div>
  );
}

export default Event