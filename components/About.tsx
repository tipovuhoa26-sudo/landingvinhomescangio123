
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tổng-quan" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-60"></div>
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">DI SẢN XANH TƯƠNG LAI</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-green mb-8 leading-tight">
              Kỳ quan nghỉ dưỡng <span className="text-secondary italic font-normal">giữa lòng di sản</span> rừng ngập mặn
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Green Paradise không chỉ là một dự án bất động sản, mà là một lời cam kết về phong cách sống bền vững. Với tâm điểm là sự bảo tồn và tái tạo, chúng tôi kiến tạo không gian nơi con người tìm thấy sự bình yên nguyên bản nhất.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'eco', title: 'Hệ sinh thái chuẩn quốc tế', desc: 'Bảo tồn 100% dải rừng phòng hộ ven biển.' },
                { icon: 'diamond', title: 'Giá trị sống tinh hoa', desc: 'Cộng đồng cư dân đẳng cấp và riêng tư tuyệt đối.' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 text-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-dark-green">{item.title}</h5>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-emerald-100 rounded-full -z-10 scale-110"></div>
            {[
              { icon: 'forest', value: '45%', label: 'MẬT ĐỘ XANH', color: 'bg-emerald-50' },
              { icon: 'payments', value: '217 Tr/m2', label: 'GIÁ KHỞI ĐIỂM', color: 'bg-white border-secondary' },
              { icon: 'verified_user', value: 'Sở Hữu', label: 'PHÁP LÝ LÂU DÀI', color: 'bg-white border-emerald-100' },
              { icon: 'tsunami', value: '100%', label: 'VIEW BIỂN/SÔNG', color: 'bg-emerald-50' }
            ].map((card, i) => (
              <div key={i} className={`${card.color} p-8 rounded-2xl border flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}>
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <div className="text-2xl md:text-3xl font-display font-bold text-dark-green mb-1">{card.value}</div>
                <div className="text-[10px] font-bold text-primary tracking-widest uppercase">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
