import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] overflow-hidden" dir="rtl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6z9o0m1m8o3s8a8c/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 sm:pt-16">
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">رزرو آنلاین پروازهای داخلی با بهترین قیمت</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">مبدأ و مقصد را وارد کنید، ما بهترین گزینه‌ها را با امکان فیلتر و مرتب‌سازی برای شما می‌آوریم.</p>
      </div>
    </section>
  );
}
