
import React from 'react';

const Products: React.FC = () => {
  return (
    <section id="sản-phẩm" className="py-24 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center text-dark-green mb-20">Kiệt Tác Nghỉ Dưỡng</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Product Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm flex flex-col h-full hover:shadow-xl transition-shadow">
            <span className="bg-emerald-100 text-primary text-[10px] font-bold px-3 py-1 rounded-full w-max uppercase mb-4">Phân khu Canopy</span>
            <h4 className="text-2xl font-display font-bold text-dark-green mb-2">Green Apartment</h4>
            <p className="text-slate-500 text-sm mb-8">Căn hộ thiết kế mở, đón nắng gió tự nhiên tối đa.</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex justify-between border-b border-emerald-50 pb-2">
                <span className="text-slate-400 text-sm">Diện tích:</span>
                <span className="font-bold text-dark-green">45m2 - 120m2</span>
              </div>
              <div className="flex justify-between border-b border-emerald-50 pb-2">
                <span className="text-slate-400 text-sm">Đặc điểm:</span>
                <span className="font-bold text-dark-green">Ban công Panorama</span>
              </div>
              <div className="flex justify-between border-b border-emerald-50 pb-2">
                <span className="text-slate-400 text-sm">Giá từ:</span>
                <span className="font-bold text-primary">6.5 Tỷ VNĐ</span>
              </div>
            </div>
            
            <button className="w-full border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-all uppercase text-sm tracking-widest">
              NHẬN BẢNG GIÁ
            </button>
          </div>

          {/* Featured Product Card 2 */}
          <div className="bg-primary text-white p-8 rounded-2xl border-4 border-secondary shadow-2xl flex flex-col h-full md:scale-105 z-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-8 py-2 rotate-45 translate-x-8 translate-y-2 text-[10px] tracking-widest">BEST SELLER</div>
            <span className="bg-secondary text-primary text-[10px] font-bold px-3 py-1 rounded-full w-max uppercase mb-4">Đặc quyền tinh hoa</span>
            <h4 className="text-2xl font-display font-bold mb-2">Heritage Forest Villa</h4>
            <p className="text-emerald-100/70 text-sm mb-8">Biệt thự ẩn mình giữa rừng cây cổ thụ ven biển.</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-emerald-100/50 text-sm">Diện tích:</span>
                <span className="font-bold">350m2 - 800m2</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-emerald-100/50 text-sm">Tiện ích:</span>
                <span className="font-bold">Hồ bơi riêng, Deck gỗ</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-emerald-100/50 text-sm">Giá từ:</span>
                <span className="font-bold text-secondary text-xl">45 Tỷ VNĐ</span>
              </div>
            </div>
            
            <button className="w-full bg-secondary text-primary font-extrabold py-4 rounded-lg hover:bg-yellow-500 transition-all uppercase text-sm tracking-widest shadow-lg">
              LIÊN HỆ ĐẶT CHỖ
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm flex flex-col h-full hover:shadow-xl transition-shadow">
            <span className="bg-emerald-100 text-primary text-[10px] font-bold px-3 py-1 rounded-full w-max uppercase mb-4">Thương mại xanh</span>
            <h4 className="text-2xl font-display font-bold text-dark-green mb-2">Eco-Shophouse</h4>
            <p className="text-slate-500 text-sm mb-8">Vị trí sầm uất ven quảng trường công viên.</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex justify-between border-b border-emerald-50 pb-2">
                <span className="text-slate-400 text-sm">Diện tích:</span>
                <span className="font-bold text-dark-green">120m2 - 250m2</span>
              </div>
              <div className="flex justify-between border-b border-emerald-50 pb-2">
                <span className="text-slate-400 text-sm">Kết cấu:</span>
                <span className="font-bold text-dark-green">1 Trệt, 3 Lầu</span>
              </div>
              <div className="flex justify-between border-b border-emerald-50 pb-2">
                <span className="text-slate-400 text-sm">Giá từ:</span>
                <span className="font-bold text-primary">18 Tỷ VNĐ</span>
              </div>
            </div>
            
            <button className="w-full border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-all uppercase text-sm tracking-widest">
              NHẬN BẢNG GIÁ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
