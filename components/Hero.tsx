
import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#050505] py-20 md:py-32 overflow-hidden">
      {/* Deep ambient blur behind hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8 animate-fade-in text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Glass Badge - Transparent */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-xl shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-gray-200 text-xs md:text-sm font-medium tracking-wide uppercase">Oferta Exclusiva 2026</span>
              </div>
              <CountdownTimer />
            </div>

            {/* SEO OPTIMIZATION: Updated semantic H1 for keywords, visually hidden to maintain design */}
            <h1 className="sr-only">Streaming Completo por R$10/mês - DezPila</h1>

            <h2 className="text-4xl md:text-7xl font-black leading-[1.1] text-white tracking-tight">
              COMECE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 neon-text">2026</span> <br />
              COM TUDO LIBERADO
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Chega de pagar caro em várias assinaturas. Garanta seu acesso vitalício aos melhores filmes, séries e canais agora mesmo.
            </p>

            <div className="flex justify-center md:justify-start">
              <button onClick={scrollToPlans} className="bg-gradient-to-r from-[#a20101] to-red-700 hover:from-red-600 hover:to-red-800 text-white px-10 py-5 rounded-xl font-black text-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(220,38,38,0.4)] flex items-center gap-3 group border border-red-500/50">
                <span>GARANTIR PROMOÇÃO</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="text-xs text-gray-500 uppercase tracking-widest mt-4">
              * Promoção por tempo limitado
            </p>
          </div>

          <div className="order-1 md:order-2 relative perspective-1000">
            <div className="relative z-10 transform hover:rotate-y-12 hover:rotate-x-6 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/40 to-transparent rounded-2xl blur-xl -z-10 transform translate-x-4 translate-y-4"></div>
              <img
                src="https://www.10pilaoficial.site/img/dezpila-app.webp"
                alt="DezPila - Compatível com todos os dispositivos"
                className="rounded-2xl shadow-2xl w-full h-auto border border-white/10 glass-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
