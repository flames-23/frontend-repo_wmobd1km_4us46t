import { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";

export default function FlightSearch({ onSearch }) {
  const [form, setForm] = useState({
    origin: "تهران",
    destination: "مشهد",
    date: new Date().toISOString().slice(0, 10),
    pax: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(form);
  };

  return (
    <section className="w-full" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-lg border p-4 sm:p-6">
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          <div className="col-span-1 lg:col-span-1">
            <label className="block text-sm mb-1">مبدأ</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="origin"
                value={form.origin}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="تهران (THR)"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <label className="block text-sm mb-1">مقصد</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مشهد (MHD)"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">تاریخ</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">تعداد مسافر</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="number"
                min={1}
                name="pax"
                value={form.pax}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition-colors">
              <Search size={18} />
              جستجوی پرواز
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
