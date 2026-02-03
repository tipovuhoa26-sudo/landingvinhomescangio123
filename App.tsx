
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RegistrationBar from './components/RegistrationBar';
import About from './components/About';
import MasterPlan from './components/MasterPlan';
import Amenities from './components/Amenities';
import Milestones from './components/Milestones';
import Products from './components/Products';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-primary selection:text-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <RegistrationBar />
        <About />
        <MasterPlan />
        <Amenities />
        <Milestones />
        <Products />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;
