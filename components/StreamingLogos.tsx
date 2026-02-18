
import React from 'react';

const StreamingLogos: React.FC = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black py-16 relative overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-900/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white leading-tight">
                Mais praticidade e facilidade: <br/>
                <span className="text-gray-400 text-2xl md:text-3xl font-normal">seus conteúdos centralizados na</span> <span className="text-red-600">DezPila!</span>
            </h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '0s' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '0.1s' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt="Disney+" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '0.2s' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '0.3s' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" alt="Prime Video" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '0.4s' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Paramount_Plus.svg" alt="Paramount+" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '0.5s' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg" alt="Apple TV" className="w-full h-12 object-contain" />
                </div>
            </div>
            
            <div className="text-center mt-14">
                <button onClick={scrollToPlans} className="bg-[#a20101] hover:bg-red-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(162,1,1,0.6)] border border-red-500/50 tracking-wide">
                    QUERO ACESSO TOTAL
                </button>
            </div>
        </div>
    </section>
  );
};

export default StreamingLogos;
