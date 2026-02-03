
import React from 'react';

const RegistrationBar: React.FC = () => {
  return (
    <section className="bg-dark-green py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-white flex items-center space-x-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border border-secondary/30">
            <span className="material-symbols-outlined text-3xl text-secondary">mail_outline</span>
          </div>
          <div>
            <h4 className="font-display text-xl md:text-2xl font-bold text-secondary">Đặc Quyền Ưu Tiên</h4>
            <p className="text-emerald-100/60 text-sm">Đăng ký nhận bảng giá đợt 1 & Ưu đãi chiết khấu 2%</p>
          </div>
        </div>
        
        <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-grow max-w-3xl">
          <input 
            type="text" 
            placeholder="Họ và tên" 
            className="bg-primary/30 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-emerald-200/30 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none flex-grow transition-all"
          />
          <input 
            type="tel" 
            placeholder="Số điện thoại" 
            className="bg-primary/30 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-emerald-200/30 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none flex-grow transition-all"
          />
          <button className="bg-secondary hover:bg-yellow-600 text-primary font-bold px-10 py-4 rounded-full transition-all whitespace-nowrap shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 active:translate-y-0 uppercase text-xs tracking-widest">
            GỬI YÊU CẦU
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationBar;
