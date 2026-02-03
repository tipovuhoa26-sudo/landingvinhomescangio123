
import React from 'react';

const MasterPlan: React.FC = () => {
  return (
    <section id="vị-trí" className="bg-primary py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Quy Hoạch Tổng Thể Bền Vững</h2>
          <p className="text-emerald-100/70 max-w-2xl mx-auto">Tận dụng tối đa địa thế ven biển và rừng ngập mặn, Green Paradise được chia làm 5 phân khu sinh thái độc bản.</p>
        </div>

        <div className="relative bg-white p-4 rounded-xl shadow-2xl group cursor-pointer overflow-hidden mb-16">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLTT5XIVBkvZfZkEiNebUH3JcfbkskOdfSv4eO-_vD0qteoAuYquV1uep0XKM3bqW1ISguGeIOlqIXJSqFb3AI8YZEgQLhpUQMfE06E184GjjtfMBdBjTuOJhTilMlz84O1wn2U4WXQBoifnq-ZoCQoRwCVOxgxTMuc-b7-B1HwJx9rPjJHxxJsuyejNWH59GFf6j3kibijdDW-m8RaCqjXAqScHAuScnUdDHPC-4PEyvV-jgEeVN_-JaStajfKWa_wc_XlhZOg" 
            alt="Master Plan" 
            className="w-full h-auto rounded-lg group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { zone: 'Phân khu A', desc: 'Trái tim giao thương & văn hóa biển' },
            { zone: 'Phân khu B', desc: 'Khu nghỉ dưỡng Boutique Forest' },
            { zone: 'Phân khu C', desc: 'Công viên thám hiểm VinWonders Safari' },
            { zone: 'Phân khu D', desc: 'Dinh thự sinh thái Floating Villas' }
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-secondary pl-6">
              <h5 className="font-bold text-lg mb-2">{item.zone}</h5>
              <p className="text-emerald-100/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
