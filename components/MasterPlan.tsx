
import React from 'react';

const MasterPlan: React.FC = () => {
  return (
    <section id="quy-hoạch" className="bg-primary py-24 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">VISIONARY DESIGN</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Quy Hoạch Tổng Thể <br/>Bền Vững <span className="text-secondary italic">Tầm Nhìn 2050</span></h2>
          </div>
          <p className="text-emerald-100/60 lg:max-w-sm text-sm">Tận dụng tối đa địa thế ven biển và rừng ngập mặn, Green Paradise được chia làm 5 phân khu sinh thái độc bản.</p>
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full scale-75 animate-pulse"></div>
          <div className="bg-white p-3 md:p-5 rounded-3xl shadow-2xl relative group overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLTT5XIVBkvZfZkEiNebUH3JcfbkskOdfSv4eO-_vD0qteoAuYquV1uep0XKM3bqW1ISguGeIOlqIXJSqFb3AI8YZEgQLhpUQMfE06E184GjjtfMBdBjTuOJhTilMlz84O1wn2U4WXQBoifnq-ZoCQoRwCVOxgxTMuc-b7-B1HwJx9rPjJHxxJsuyejNWH59GFf6j3kibijdDW-m8RaCqjXAqScHAuScnUdDHPC-4PEyvV-jgEeVN_-JaStajfKWa_wc_XlhZOg" 
              alt="Master Plan" 
              className="w-full h-auto rounded-2xl group-hover:scale-[1.03] transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { zone: 'PHÂN KHU A', name: 'Canopy Town', desc: 'Trái tim giao thương & căn hộ cao cấp.' },
            { zone: 'PHÂN KHU B', name: 'Forest Resort', desc: 'Khu nghỉ dưỡng sinh thái tiêu chuẩn 6 sao.' },
            { zone: 'PHÂN KHU C', name: 'Safari Park', desc: 'Công viên thám hiểm VinWonders Safari.' },
            { zone: 'PHÂN KHU D', name: 'Floating Villas', desc: 'Dinh thự mặt nước thượng lưu đẳng cấp nhất.' }
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="w-10 h-1 bg-secondary mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h5 className="font-bold text-xs text-secondary tracking-widest mb-2 uppercase">{item.zone}</h5>
              <h4 className="text-xl font-display font-bold mb-3 group-hover:text-secondary transition-colors">{item.name}</h4>
              <p className="text-emerald-100/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
