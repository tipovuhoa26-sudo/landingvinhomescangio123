
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsN4rsncSTAZ3ylkGff8pUbf-5iJVVlTxduC73OlcmrLVnvquzs5zEOvNV5o_qypu_768ZvD3AlkgdPclywaPeiBohtzc0Ag4nlg1AFHBRy_2-TrCovofN7v5wd-DYADsXNoWxu6hJF9sobhapIfwicsFzgE61VXiEBnMtSxS8ATosAZFfxwqcMlLzqhEqL6fTXMnCcJ5LgWz9ODW13Lr_lJuhQHJE3oQPNIGpFrEJJ8eneT3z1D3CnFfdBsofiodI2NV8Apntzw" 
          alt="Coastal View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <h3 className="text-sm md:text-lg font-bold tracking-[0.4em] mb-4 uppercase text-shadow">
          KHU ĐÔ THỊ SINH THÁI TẦM CỠ
        </h3>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-4 text-shadow leading-tight">
          GREEN PARADISE
        </h1>
        <h2 className="text-2xl md:text-4xl italic font-display font-normal mb-16 text-shadow">
          Hòa Mình Giữa Thiên Nhiên
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '2.870 ha', label: 'TỔNG DIỆN TÍCH' },
            { value: '10 Tỷ USD', label: 'VỐN ĐẦU TƯ' },
            { value: '6 Phân Khu', label: 'HỆ SINH THÁI RỪNG SÁC' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-primary/40 backdrop-blur-md border border-white/20 p-6 rounded-lg group hover:border-secondary transition-all">
              <div className="text-secondary text-2xl font-bold mb-1 group-hover:scale-105 transition-transform">{stat.value}</div>
              <div className="text-xs font-semibold tracking-widest text-emerald-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
