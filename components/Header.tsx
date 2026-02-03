
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`font-display text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            GREEN PARADISE
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-10 items-center">
          {['TỔNG QUAN', 'VỊ TRÍ', 'TIỆN ÍCH', 'SẢN PHẨM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-bold tracking-widest transition-colors ${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div>
          <button className="bg-primary hover:bg-dark-green text-white px-6 py-2.5 rounded font-bold text-sm tracking-wider transition-all shadow-lg">
            NHẬN BÁO GIÁ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
