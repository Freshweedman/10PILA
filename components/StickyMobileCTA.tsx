
import React, { useState, useEffect } from 'react';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the Hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden animate-fade-in-up">
      <button 
        onClick={scrollToPlans}
        className="group bg-black/40 backdrop-blur-xl hover:bg-black/60 text-white rounded-full shadow-[0_0_15px_rgba(220,38,38,0.2)] flex items-center justify-center px-4 py-2 border border-red-500/30 transition-all active:scale-95"
      >
        <span className="font-bold text-[10px] uppercase tracking-widest text-red-50 group-hover:text-white transition-colors">
          Quero Acesso Total
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="ml-1.5 text-red-500 group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default StickyMobileCTA;
