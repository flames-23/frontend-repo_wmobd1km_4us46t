import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FlightSearch from "./components/FlightSearch";
import FlightResults from "./components/FlightResults";

function App() {
  const [query, setQuery] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <Navbar onLoginClick={() => setShowAuth(true)} />
      <Hero />

      <main className="-mt-20 sm:-mt-24 relative z-10 space-y-8">
        <div className="px-4">
          <FlightSearch onSearch={setQuery} />
        </div>
        <FlightResults query={query} />
      </main>

      {showAuth && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4" onClick={() => setShowAuth(false)}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold text-lg mb-3">ورود / ثبت‌نام</h3>
            <p className="text-sm text-gray-600 mb-4">این بخش به‌صورت نمایشی است. برای تکمیل محصول، احراز هویت و پنل کاربری اضافه می‌شود.</p>
            <form className="space-y-3">
              <input type="email" placeholder="ایمیل" className="w-full border rounded-md px-3 py-2" />
              <input type="password" placeholder="رمز عبور" className="w-full border rounded-md px-3 py-2" />
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2">ادامه</button>
            </form>
          </div>
        </div>
      )}

      <footer className="mt-12 py-8 text-center text-sm text-gray-500">
        ساخته‌شده برای نمونه‌سازی یک سامانه رزرو پرواز داخلی — راست‌به‌چپ و واکنش‌گرا
      </footer>
    </div>
  );
}

export default App;
