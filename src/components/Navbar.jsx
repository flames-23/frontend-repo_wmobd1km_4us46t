import { Plane, User } from "lucide-react";

export default function Navbar({ onLoginClick }) {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-20 border-b" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 text-white rounded-lg">
            <Plane size={20} />
          </div>
          <span className="font-bold text-lg">پروازینو</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-blue-600 transition-colors">خانه</a>
          <a href="#results" className="hover:text-blue-600 transition-colors">پروازها</a>
          <button onClick={onLoginClick} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border hover:bg-gray-50">
            <User size={18} />
            ورود / ثبت‌نام
          </button>
        </nav>
      </div>
    </header>
  );
}
