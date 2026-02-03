
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green text-white pt-24 pb-12 border-t-[10px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl font-bold tracking-tighter text-secondary mb-8">GREEN PARADISE</h1>
            <p className="text-emerald-100/50 text-base leading-relaxed mb-10 max-w-md">
              Dự án khu đô thị du lịch lấn biển tầm cỡ quốc tế, kiến tạo chuẩn sống mới tại Cần Giờ, hài hòa giữa sự xa hoa và giá trị bảo tồn thiên nhiên.
            </p>
            <div className="flex space-x-4">
               {['facebook', 'instagram', 'youtube', 'linkedin'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-xl">public</span>
                  </a>
               ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-sm tracking-widest mb-8 text-secondary uppercase">Liên Hệ</h5>
            <ul className="space-y-6 text-emerald-100/60 text-sm">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-4 text-xl">location_on</span>
                <span className="leading-relaxed">Sales Gallery, Dự án Green Paradise, Cần Giờ, TP. HCM</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-4 text-xl">call</span>
                <a href="tel:+84356158866" className="hover:text-secondary transition-colors font-bold">+84 356 158 866</a>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-4 text-xl">mail</span>
                <a href="mailto:info@greenparadise.vn" className="hover:text-secondary transition-colors">info@greenparadise.vn</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm tracking-widest mb-8 text-secondary uppercase">Khám Phá</h5>
            <ul className="space-y-4 text-emerald-100/60 text-sm font-medium">
              {['Tiến độ dự án', 'Chính sách bán hàng', 'Tài liệu pháp lý', 'Hệ sinh thái Vingroup', 'Cơ hội đầu tư'].map(item => (
                <li key={item}><a href="#" className="hover:text-secondary hover:pl-2 transition-all duration-300">/ {item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2024 Green Paradise Group. All rights reserved.
          </p>
          <div className="flex space-x-8 text-emerald-800 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
