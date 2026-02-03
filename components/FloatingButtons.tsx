
import React from 'react';

const FloatingButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      <a 
        href="tel:+84356158866" 
        className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <span className="material-symbols-outlined font-bold">call</span>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Hotline: +84 356 158 866
        </span>
      </a>
      <button 
        onClick={scrollToTop}
        className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center shadow-xl hover:bg-emerald-50 transition-colors group relative"
      >
        <span className="material-symbols-outlined">expand_less</span>
        <span className="absolute right-full mr-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Lên đầu trang
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
