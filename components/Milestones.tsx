
import React from 'react';

const Milestones: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center text-dark-green mb-20">Cột Mốc Phát Triển Dự Án</h2>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 -translate-y-1/2 hidden md:block"></div>
          
          {[
            { num: 1, date: 'Quý 3/2023', text: 'Khởi công hạ tầng', active: true },
            { num: 2, date: 'Quý 1/2024', text: 'Khai trương Sales Gallery', active: true },
            { num: 3, date: 'Hiện tại', text: 'Mở bán phân khu VIP', active: true, highlight: true },
            { num: 4, date: '2025', text: 'Hoàn thiện thô', active: false },
            { num: 5, date: '2027', text: 'Vận hành tổng thể', active: false }
          ].map((m, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 border-4 border-white shadow-lg transition-all ${m.highlight ? 'bg-secondary text-primary scale-125' : (m.active ? 'bg-primary text-white' : 'bg-emerald-100 text-emerald-400')}`}>
                {m.num}
              </div>
              <div className={`font-bold text-sm ${m.highlight ? 'text-secondary text-lg' : 'text-dark-green'}`}>{m.date}</div>
              <div className="text-xs text-slate-500 mt-1">{m.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
