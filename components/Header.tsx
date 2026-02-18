import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black border-b border-gray-800 sticky top-[48px] z-40">
      <div className="container mx-auto px-6 md:px-12 py-7 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="#" className="block w-32 md:w-40">
            <img src="https://www.10pilaoficial.site/logo_png.png" alt="DezPila App" className="w-full h-10 object-contain" />
          </a>
        </div>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8 text-sm">
            <button onClick={() => scrollToSection('catalogo')} className="text-white hover:text-red-600 transition-colors text-lg font-semibold">CATÁLOGO</button>
            <button onClick={() => scrollToSection('beneficios')} className="text-white hover:text-red-600 transition-colors text-lg font-semibold">BENEFÍCIOS</button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-white hover:text-red-600 transition-colors text-lg font-semibold">COMO FUNCIONA?</button>
            <button onClick={() => scrollToSection('planos')} className="text-white hover:text-red-600 transition-colors text-lg font-semibold">PLANOS</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-red-600 transition-colors text-lg font-semibold">FAQ</button>
          </nav>

          <button onClick={() => scrollToSection('planos')} className="bg-[#a20101] hover:bg-[#a20101] text-white px-6 py-2 rounded font-semibold transition-all transform hover:scale-105">
            ASSINAR AGORA
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;