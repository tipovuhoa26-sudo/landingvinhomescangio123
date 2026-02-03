
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tổng-quan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block border-l-2 border-secondary pl-4">
              TINH HOA KẾT NỐI THIÊN NHIÊN
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-green mb-8 leading-tight">
              Biểu tượng sống xanh tại tâm điểm thành phố biển
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Green Paradise kiến tạo nên một không gian sống thượng lưu giữa lòng thiên nhiên hoang sơ. Dự án được quy hoạch bài bản với mật độ xây dựng thấp, ưu tiên bảo tồn hệ sinh thái rừng ngập mặn và dải ven biển, mang đến một cuộc sống trong lành và an nhiên tuyệt đối cho cộng đồng cư dân tinh hoa.
            </p>
            <ul className="space-y-4">
              {[
                { icon: 'spa', text: 'Môi trường sống sinh thái chuẩn quốc tế' },
                { icon: 'location_on', text: 'Vị trí mặt tiền biển Cần Giờ đắc địa' },
                { icon: 'verified', text: 'Chủ đầu tư uy tín hàng đầu Việt Nam' }
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-dark-green font-medium">
                  <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: 'forest', value: '45%', label: 'MẬT ĐỘ XANH', color: 'border-emerald-100' },
              { icon: 'local_atm', value: '217 Tr/m2', label: 'GIÁ KHỞI ĐIỂM', color: 'border-secondary' },
              { icon: 'history_edu', value: 'Sổ Hồng', label: 'PHÁP LÝ SỞ HỮU LÂU DÀI', color: 'border-secondary' },
              { icon: 'waves', value: '100%', label: 'VIEW BIỂN & SÔNG', color: 'border-emerald-100' }
            ].map((card, i) => (
              <div key={i} className={`bg-emerald-50/50 p-8 rounded-xl border-b-4 ${card.color} text-center group hover:-translate-y-2 transition-all shadow-sm hover:shadow-md`}>
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <div className="text-2xl font-bold text-dark-green mb-1">{card.value}</div>
                <div className="text-[10px] font-bold text-emerald-800 tracking-widest">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
