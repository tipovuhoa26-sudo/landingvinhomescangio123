
import React from 'react';

const Amenities: React.FC = () => {
  return (
    <section id="tiện-ích" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">TRẢI NGHIỆM THUẦN KHIẾT</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-green">Hệ Sinh Thái Tiện Ích Đẳng Cấp</h2>
          </div>
          <div className="hidden md:flex space-x-4 mt-8 md:mt-0">
             <button className="w-12 h-12 rounded-full border border-emerald-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
             </button>
             <button className="w-12 h-12 rounded-full border border-emerald-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Hồ bơi nước mặn lọc cát',
              desc: 'Công nghệ lọc sinh học tiên tiến, thân thiện với làn da và môi trường.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWaTNr6DURFG60ge5Am4gqxB9As6hSyK_jGnPNvyHD7P0tNw8U1vt0lKs5n3CK3XMkF8KqR8BFeHwQrw0cHF-wrHLcfqCawj1EQtvS8Mv1iPUn3ieB0UtL0zmylHSIh9KEe5zxooNLx-Jzy-U9dLcqHuOO4u4k7T3lnAB5EqkeDFAJ3RSs9JQIYSu_ZuQu_kQCk6WCIImLWVPn-UTDZPbdXbrvjcHiRNBDyddiEavUON9smqvNh2uZxXCyDdYkmfbVAL1SiTZ9HA'
            },
            {
              title: 'Rừng Trị Liệu & Thiền Định',
              desc: 'Cân bằng thân-tâm-trí dưới tán rừng phòng hộ xanh mát.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCERq7hi8fAfefyGzAggspAEF1h7-tBhtSyuvruN6J7-wU5wdEKun5u2u3SDfxs4y_XsEx3kNOdvn_2NGjcMxT0u_XFwBzWRhYOduST5nIAHLVOvZBAjrL-mJ376Z2XkwLD9WCi1OVWi3VkESUnIa56_ZZu_Rw0vChUSP1qREm6yhoSiT8EFW1WilS0UHAwAcEzgLR8ws3LOLwZZWG5rYlSKTildW2zibE6LfCdvkqc9O5QEcZTEje0Dt3uqVGfur4Es6b_Sy0Mmw'
            },
            {
              title: 'Bến du thuyền sinh thái',
              desc: 'Cửa ngõ dẫn lối đến những hành trình khám phá vịnh biển tuyệt mỹ.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjhEd34cBJgFDAdkCGe65pQ_undRkKUVpBBsnd63wLL0uE8e9iWy8wFryhj4fPa6S327tDuRZO42Y2vwUGgxPcT4DWpPudq_2gn1tEuqfcHkreLqACBCqsHgBam0Q7VRxuyhQfCSkm2KLOjnkybouOAy-iqmMzq_Byb7A8ysZMotX6nCd2z20eskF1vBUR0WebfmQOxfDcWdix0Lcsv-90R2okvhSWyMy_rNH0x4igJgPsT8oZlm70J-4vvuaPVmoLLC6pZNARcA'
            }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 shadow-lg h-64">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-xl font-bold text-dark-green mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
