
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsN4rsncSTAZ3ylkGff8pUbf-5iJVVlTxduC73OlcmrLVnvquzs5zEOvNV5o_qypu_768ZvD3AlkgdPclywaPeiBohtzc0Ag4nlg1AFHBRy_2-TrCovofN7v5wd-DYADsXNoWxu6hJF9sobhapIfwicsFzgE61VXiEBnMtSxS8ATosAZFfxwqcMlLzqhEqL6fTXMnCcJ5LgWz9ODW13Lr_lJuhQHJE3oQPNIGpFrEJJ8eneT3z1D3CnFfdBsofiodI2NV8Apntzw" 
          alt="Coastal View" 
          className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <div className="inline-block px-4 py-1 border-y border-secondary/50 mb-6 animate-fadeInUp">
           <p className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase text-secondary">
             Khu Đô Thị Sinh Thái Ven Biển Cần Giờ
           </p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-6 text-shadow-lg leading-none tracking-tighter animate-fadeInUp delay-200">
          GREEN<br/><span className="text-secondary italic">PARADISE</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50/90 font-light italic mb-12 animate-fadeInUp delay-300">
          "Nơi thiên nhiên giao hòa cùng nhịp sống thượng lưu"
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto animate-fadeInUp delay-500">
          {[
            { value: '2.870 ha', label: 'TỔNG DIỆN TÍCH' },
            { value: '10 Tỷ USD', label: 'VỐN ĐẦU TƯ' },
            { value: '6 Phân Khu', label: 'TIỆN ÍCH ĐẶC QUYỀN' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl group hover:bg-white/20 transition-all duration-500">
              <div className="text-secondary text-2xl md:text-3xl font-bold mb-1 group-hover:scale-105 transition-transform">{stat.value}</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-emerald-100/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
        <span className="text-[10px] font-bold tracking-widest text-white mb-2">CUỘN XUỐNG</span>
        <span className="material-symbols-outlined text-white">expand_more</span>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default Hero;
