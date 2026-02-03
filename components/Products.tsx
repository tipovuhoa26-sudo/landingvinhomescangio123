
import React from 'react';

const Products: React.FC = () => {
  return (
    <section id="sản-phẩm" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">SIGNATURE COLLECTION</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-green">Kiệt Tác Nghỉ Dưỡng</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-3xl border border-emerald-100 shadow-sm flex flex-col hover:shadow-2xl transition-all duration-500 group">
            <h5 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-4">CANOPY DISTRICT</h5>
            <h4 className="text-2xl font-display font-bold text-dark-green mb-4">Green Apartment</h4>
            <p className="text-slate-500 text-sm mb-10">Căn hộ thiết kế mở, đón trọn vẹn gió biển và nắng mai.</p>
            
            <div className="space-y-4 mb-12 flex-grow">
              <div className="flex justify-between items-center border-b border-emerald-50 pb-3">
                <span className="text-slate-400 text-xs uppercase tracking-tighter">Diện tích</span>
                <span className="font-bold text-dark-green">45m² - 120m²</span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-50 pb-3">
                <span className="text-slate-400 text-xs uppercase tracking-tighter">Tầm nhìn</span>
                <span className="font-bold text-dark-green">Vịnh Biển</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs uppercase tracking-tighter">Giá dự kiến</span>
                <span className="font-display font-bold text-primary text-xl">Từ 6.5 Tỷ</span>
              </div>
            </div>
            
            <button className="w-full border-2 border-primary text-primary font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-all uppercase text-[10px] tracking-widest shadow-lg group-hover:shadow-primary/20">
              NHẬN BẢNG GIÁ
            </button>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-primary text-white p-10 rounded-[2.5rem] border-4 border-secondary/30 shadow-2xl flex flex-col md:scale-105 z-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-10 py-2 rotate-45 translate-x-10 translate-y-4 text-[10px] tracking-widest shadow-md">EXCLUSIVE</div>
            
            <h5 className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-4">HERITAGE ZONE</h5>
            <h4 className="text-3xl font-display font-bold mb-4">Forest Villa</h4>
            <p className="text-emerald-100/60 text-sm mb-10 leading-relaxed">Biệt thự đơn lập ẩn mình giữa tán rừng cổ thụ, đặc quyền sống riêng tư tuyệt đối.</p>
            
            <div className="space-y-4 mb-12 flex-grow">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-emerald-100/40 text-xs uppercase">Diện tích</span>
                <span className="font-bold">350m² - 800m²</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-emerald-100/40 text-xs uppercase">Tiện ích</span>
                <span className="font-bold">Hồ bơi riêng & Deck gỗ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-100/40 text-xs uppercase">Giá từ</span>
                <span className="font-display font-bold text-secondary text-3xl">45 Tỷ</span>
              </div>
            </div>
            
            <button className="w-full bg-secondary text-primary font-extrabold py-5 rounded-2xl hover:bg-white transition-all uppercase text-[10px] tracking-[0.2em] shadow-xl hover:shadow-secondary/30 hover:-translate-y-1">
              LIÊN HỆ ĐẶT CHỖ
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-3xl border border-emerald-100 shadow-sm flex flex-col hover:shadow-2xl transition-all duration-500 group">
            <h5 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-4">BOULEVARD WALK</h5>
            <h4 className="text-2xl font-display font-bold text-dark-green mb-4">Eco-Shophouse</h4>
            <p className="text-slate-500 text-sm mb-10">Tâm điểm giao thương tại trục đường sầm uất nhất dự án.</p>
            
            <div className="space-y-4 mb-12 flex-grow">
              <div className="flex justify-between items-center border-b border-emerald-50 pb-3">
                <span className="text-slate-400 text-xs uppercase tracking-tighter">Diện tích</span>
                <span className="font-bold text-dark-green">120m² - 250m²</span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-50 pb-3">
                <span className="text-slate-400 text-xs uppercase tracking-tighter">Kết cấu</span>
                <span className="font-bold text-dark-green">1 Trệt, 3 Lầu</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs uppercase tracking-tighter">Giá từ</span>
                <span className="font-display font-bold text-primary text-xl">18 Tỷ</span>
              </div>
            </div>
            
            <button className="w-full border-2 border-primary text-primary font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-all uppercase text-[10px] tracking-widest shadow-lg group-hover:shadow-primary/20">
              NHẬN BẢNG GIÁ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
