import { useMemo, useState } from "react";
import { ArrowDownUp, Plane, Clock, Wallet } from "lucide-react";

const airlines = {
  "IR-101": { name: "ایران ایر", code: "IR", logo: "✈️" },
  "QB-220": { name: "قشم ایر", code: "QB", logo: "🕊️" },
  "W5-330": { name: "ماهان ایر", code: "W5", logo: "🌿" },
};

export default function FlightResults({ query }) {
  const [sort, setSort] = useState("price");
  const [filterAirline, setFilterAirline] = useState("all");

  const mockData = useMemo(() => {
    if (!query) return [];
    const base = [
      { id: 1, flightNo: "IR-101", depart: "06:45", arrive: "08:15", price: 1800000, seats: 9 },
      { id: 2, flightNo: "QB-220", depart: "09:30", arrive: "11:00", price: 1650000, seats: 4 },
      { id: 3, flightNo: "W5-330", depart: "14:00", arrive: "15:30", price: 2100000, seats: 7 },
      { id: 4, flightNo: "IR-101", depart: "20:15", arrive: "21:45", price: 1950000, seats: 2 },
    ];
    return base.map((f) => ({ ...f, origin: query.origin, destination: query.destination, date: query.date }));
  }, [query]);

  const filtered = useMemo(() => {
    let list = [...mockData];
    if (filterAirline !== "all") list = list.filter((f) => f.flightNo.startsWith(filterAirline));
    switch (sort) {
      case "time":
        list.sort((a, b) => a.depart.localeCompare(b.depart));
        break;
      case "airline":
        list.sort((a, b) => airlines[a.flightNo].name.localeCompare(airlines[b.flightNo].name));
        break;
      default:
        list.sort((a, b) => a.price - b.price);
    }
    return list;
  }, [mockData, sort, filterAirline]);

  if (!query) return null;

  return (
    <section id="results" className="max-w-6xl mx-auto px-4" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg">نتایج پرواز {query.origin} → {query.destination} در تاریخ {new Date(query.date).toLocaleDateString("fa-IR")}</h2>
        <div className="flex items-center gap-2">
          <select value={filterAirline} onChange={(e) => setFilterAirline(e.target.value)} className="border rounded-md py-1.5 px-2">
            <option value="all">همه ایرلاین‌ها</option>
            <option value="IR">ایران ایر</option>
            <option value="QB">قشم ایر</option>
            <option value="W5">ماهان ایر</option>
          </select>
          <button onClick={() => setSort((s) => (s === "price" ? "time" : s === "time" ? "airline" : "price"))} className="inline-flex items-center gap-1 border px-3 py-1.5 rounded-md hover:bg-gray-50">
            <ArrowDownUp size={16} />
            مرتب‌سازی: {sort === "price" ? "قیمت" : sort === "time" ? "ساعت" : "ایرلاین"}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((f) => (
          <div key={f.id} className="bg-white rounded-xl border shadow-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{airlines[f.flightNo].logo}</div>
              <div>
                <div className="font-semibold">{airlines[f.flightNo].name} - {f.flightNo}</div>
                <div className="text-sm text-gray-500">{f.origin} ← {f.destination}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1"><Clock size={16} /> {f.depart} - {f.arrive}</div>
              <div className="flex items-center gap-1"><Plane size={16} /> ظرفیت باقی‌مانده: {f.seats}</div>
              <div className="flex items-center gap-1 font-bold text-blue-600"><Wallet size={16} /> {f.price.toLocaleString("fa-IR")} تومان</div>
            </div>
            <div>
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">رزرو</button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 py-10">پروازی با شرایط انتخابی یافت نشد.</div>
        )}
      </div>
    </section>
  );
}
