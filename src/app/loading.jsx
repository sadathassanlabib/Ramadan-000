// app/loading.js
export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center
      bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* soft glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-slate-600 border-t-slate-200 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-slate-300 text-sm tracking-wide">
          লোড হচ্ছে…
        </p>
      </div>
    </div>
  );
}
