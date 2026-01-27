import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Soft light */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-slate-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="mb-3 text-slate-300 tracking-wide">
          🌙 রমাদান মুবারক
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          রমাদান — <br />
          <span className="text-slate-300">
            ক্ষমা, রহমত ও নাজাতের মাস
          </span>
        </h1>

        <p className="text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          এই মাসে কুরআন নাজিল করা হয়েছে হিদায়াত হিসেবে।
          এখানে কুরআন তিলাওয়াত, দোয়া ও ইবাদতের প্রয়োজনীয়
          স্মরণিকা ও সহায়ক রিসোর্স একত্রে পাওয়া যাবে—
          যেন রমাদানের দিনগুলো অবহেলায় না কেটে যায়।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/resource' className="px-6 py-3 rounded-xl bg-slate-200 text-slate-900 hover:bg-white transition font-medium">
            ইবাদতে অগ্রসর হোন
          </Link>

          {/* <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
            কুরআন ও দোয়া দেখুন
          </button> */}
        </div>
      </div>
    </section>
  );
}
