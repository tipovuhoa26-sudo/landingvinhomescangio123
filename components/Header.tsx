
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`font-display text-2xl md:text-3xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            GREEN <span className="text-secondary">PARADISE</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {['TỔNG QUAN', 'QUY HOẠCH', 'TIỆN ÍCH', 'SẢN PHẨM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-[11px] font-bold tracking-[0.2em] transition-all duration-300 border-b-2 border-transparent hover:border-secondary pb-1 ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div>
          <button className={`px-7 py-2.5 rounded-full font-bold text-[11px] tracking-widest transition-all duration-300 shadow-xl active:scale-95 ${isScrolled ? 'bg-primary text-white hover:bg-dark-green' : 'bg-white text-primary hover:bg-secondary hover:text-white'}`}>
            NHẬN BÁO GIÁ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
