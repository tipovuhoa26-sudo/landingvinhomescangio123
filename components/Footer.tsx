
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green text-white pt-20 pb-10 border-t-8 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1">
            <h1 className="font-display text-3xl font-bold tracking-tight text-secondary mb-6">GREEN PARADISE</h1>
            <p className="text-emerald-100/60 text-sm leading-relaxed mb-6">
              Phát triển đô thị bền vững, bảo tồn giá trị thiên nhiên rừng ngập mặn và kiến tạo cộng đồng sống xanh chuẩn quốc tế tại Cần Giờ.
            </p>
            <div className="flex space-x-4">
               {['facebook', 'instagram', 'youtube'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                    <span className={`material-symbols-outlined text-sm`}>public</span>
                  </a>
               ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-secondary">Liên Hệ</h5>
            <ul className="space-y-4 text-emerald-100/70 text-sm">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-0.5">location_on</span>
                <span>Trụ sở: Sales Gallery, Dự án Green Paradise, Cần Giờ, TP. HCM</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-3">call</span>
                <a href="tel:+84356158866" className="hover:text-secondary transition-colors">+84 356 158 866 (Hotline 24/7)</a>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-3">mail</span>
                <span>info@greenparadise.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-secondary">Thông Tin Dự Án</h5>
            <ul className="space-y-4 text-emerald-100/70 text-sm uppercase tracking-wider font-semibold">
              {['Tiến độ xây dựng', 'Chính sách sinh thái', 'Sơ đồ phân khu', 'Hệ sinh thái tiện ích'].map(item => (
                <li key={item}><a href="#" className="hover:text-secondary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-10 text-center">
          <p className="text-emerald-800 text-[10px] uppercase tracking-[0.2em]">
            © 2024 Green Paradise Project. Bản quyền thuộc về chủ đầu tư. Thiết kế hướng tới tương lai bền vững.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
