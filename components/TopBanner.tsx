import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-[#a20101] to-red-900 text-white text-center py-3 px-4 text-sm md:text-base font-bold sticky top-0 z-50 shadow-lg tracking-wide uppercase animate-pulse">
        🔥 Promoção Fim de Ano: Comece 2026 assistindo TUDO por R$ 10!
    </div>
  );
};

export default TopBanner;