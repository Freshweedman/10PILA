
import React, { useState, useEffect } from 'react';

const names = ["Ricardo de SP", "Ana de MG", "João do RJ", "Lucas de RS", "Mariana de BA", "Pedro de SC", "Fernanda de PR", "Gustavo de DF", "Camila de PE"];
const plans = ["Plano Mensal", "Plano Trimestral", "Plano Família", "Plano Anual"];

const SalesToast: React.FC = () => {
  const [notification, setNotification] = useState<{name: string, plan: string, time: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 3000);

    // Then every 15-30 seconds
    const interval = setInterval(() => {
      triggerNotification();
    }, Math.random() * 15000 + 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    
    setNotification({
      name: randomName,
      plan: randomPlan,
      time: "agora"
    });
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  return (
    <div 
      className={`fixed top-24 right-4 z-40 transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'
      }`}
    >
      {/* Tiny top-right notification */}
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/5 px-3 py-2 rounded-lg shadow-lg">
        <div className="relative flex-shrink-0">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
        </div>
        
        <div className="flex flex-col leading-none">
          <p className="text-[10px] text-white/90">
            <span className="font-bold">{notification?.name}</span> comprou
          </p>
          <p className="text-[9px] text-green-400/80 mt-0.5">
             {notification?.plan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesToast;
