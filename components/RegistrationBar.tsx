
import React from 'react';

const RegistrationBar: React.FC = () => {
  return (
    <section className="bg-primary py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-white flex items-center space-x-4">
          <span className="material-symbols-outlined text-4xl text-secondary">mail</span>
          <div>
            <h4 className="font-bold text-lg">Đăng ký nhận thông tin mới nhất</h4>
            <p className="text-emerald-100/70 text-sm">Cập nhật tiến độ dự án & chính sách bán hàng đợt 1</p>
          </div>
        </div>
        
        <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-grow max-w-3xl">
          <input 
            type="text" 
            placeholder="Họ và tên" 
            className="bg-emerald-900/40 border border-white/20 rounded px-4 py-3 text-white placeholder:text-emerald-200/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none flex-grow"
          />
          <input 
            type="tel" 
            placeholder="Số điện thoại" 
            className="bg-emerald-900/40 border border-white/20 rounded px-4 py-3 text-white placeholder:text-emerald-200/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none flex-grow"
          />
          <button className="bg-secondary hover:bg-yellow-600 text-primary font-extrabold px-10 py-3 rounded transition-all whitespace-nowrap">
            NHẬN NGAY
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationBar;
