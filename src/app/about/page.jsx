import React from 'react'

const About = () => {
  return (
    <section className="relative min-h-screen px-4 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Optional soft circles for slight depth (can remove if fully simple) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-32 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white/5 backdrop-blur rounded-2xl p-6 md:p-10 shadow-lg">

        <p className="text-lg leading-relaxed mb-6">
          রমাদান কোনো নির্দিষ্ট ক্যালেন্ডারভুক্ত মাস নয়; এটি মানুষের ভেতরের
          মানুষটির সাথে নীরব এক সাক্ষাৎ। ক্ষুধা, তৃষ্ণা আর সংযমের মধ্য দিয়ে এখানে
          মানুষ নিজের ইচ্ছা-আকাঙ্ক্ষাকে প্রশ্ন করে, নফসের দাবিকে অস্বীকার করতে শেখে
          এবং আত্মাকে আলোর দিকে ফিরিয়ে আনে।
        </p>

        <p className="text-lg leading-relaxed mb-6">
          এই উদ্যোগে রমাদানকে দেখা হয়েছে একটি চেতনার অনুশীলন হিসেবে—যেখানে বাহ্যিক
          উপবাসের চেয়েও গুরুত্বপূর্ণ হয়ে ওঠে অন্তরের উপবাস। কথা কমানো, দৃষ্টি সংযত
          রাখা, অহংকার ভাঙা, আত্মসমালোচনা—এসবই রমাদানের নীরব পাঠশালার অংশ।
        </p>

        <div className="text-lg leading-relaxed mb-6 space-y-2">
          <p>এখানে যে কাজগুলো করা হয়েছে, তার কেন্দ্রে রয়েছে—</p>
          <ul className="list-disc list-inside ml-2">
            <li>মানুষ কীভাবে আল্লাহর সামনে নিজেকে নতুন করে আবিষ্কার করে,</li>
            <li>কীভাবে সময়, ইবাদত ও নৈতিকতার মধ্যে ভারসাম্য খুঁজে পায়,</li>
            <li>এবং কীভাবে রমাদানের শিক্ষা মাস পেরিয়েও জীবনে বহমান থাকে।</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          রমাদান শেখায়—সব কিছু হালাল হলেও সব কিছু গ্রহণযোগ্য নয়, সব পারা গেলেও সব
          করা উচিত নয়। এই আত্মসংযমই মানুষকে মানুষ করে, আর ইবাদতকে অর্থবহ করে তোলে।
        </p>

        <p className="text-lg leading-relaxed mb-6">
          এই প্রচেষ্টা কোনো উপদেশের মঞ্চ নয়; বরং একটি চিন্তার আয়না—যেখানে দাঁড়িয়ে
          মানুষ নিজেকে প্রশ্ন করতে পারে:
        </p>

        <p className="text-center italic text-xl font-medium mb-6">
          “আমি কি বদলাচ্ছি, না কি কেবল সময় পার করছি?”
        </p>

        <p className="text-lg leading-relaxed mb-6">
          রমাদান শেষ হয়ে যায়, কিন্তু যদি এর শিক্ষা থেকে যায়—তবেই এই সাধনা সার্থক।
        </p>

        <p className="text-lg leading-relaxed text-right">
          আল্লাহ আমাদের এই আত্মঅন্বেষণ কবুল করুন <br />
          এবং রমাদানের আলোকে সারা জীবনের পথচলা সহজ করে দিন।
        </p>

      </div>
    </section>
  )
}

export default About
