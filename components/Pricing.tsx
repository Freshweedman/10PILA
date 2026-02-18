import React, { useState } from 'react';
import { generateTTSPreview } from '../services/geminiService';

const Pricing: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState("Pronto para reproduzir.");

  const handlePlayTTS = async () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setStatus("Gerando áudio...");
    
    try {
      const audioUrl = await generateTTSPreview();
      setStatus("Reproduzindo...");
      
      const audio = new Audio(audioUrl);
      
      audio.onended = () => {
        setStatus("Reprodução concluída.");
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };
      
      audio.onerror = () => {
        setStatus("Erro ao reproduzir.");
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();
      
    } catch (error) {
      console.error(error);
      setStatus("Erro na conexão com API.");
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full max-w-5xl flex flex-col items-center text-center pb-8 z-20 relative mx-auto">
      
      {/* Glass Pricing Card */}
      <div className="glass-card w-full p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16">
          {/* Old Price */}
          <div className="flex flex-col items-center text-gray-500 transform group-hover:scale-95 transition-transform duration-500">
            <span className="uppercase text-sm tracking-widest font-bold">valor original</span>
            <span className="text-4xl md:text-5xl font-bold mt-2 relative inline-block text-gray-400">
              R$ 444,98
              <div className="absolute top-1/2 left-0 w-full h-1 bg-red-600 -rotate-6 transform -translate-y-1/2 rounded-full"></div>
            </span>
            <span className="text-sm mt-1">por mês</span>
          </div>

          {/* Separator */}
          <div className="hidden md:block h-24 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
          
          {/* New Price/CTA */}
          <div className="relative z-10">
            <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 animate-pulse rounded-full"></div>
            <div className="relative bg-gradient-to-b from-red-600/20 to-black/40 border border-red-500/50 p-6 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <span className="uppercase text-xs font-bold text-red-400 tracking-wider">OFERTA ÚNICA</span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-md">R$ 10</span>
              </div>
              <span className="text-lg font-bold text-gray-300 tracking-widest">POR MÊS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern TTS Box */}
      <div className="glass-card w-full max-w-xl p-8 rounded-2xl space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)]">
        
        <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-3">
            <span className="bg-red-600/20 p-2 rounded-lg text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </span>
            Ouça a verdade
            </h3>
            <p className="text-gray-400 text-sm">
            Clique e descubra por que você está perdendo dinheiro.
            </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={handlePlayTTS}
            disabled={isPlaying}
            className="group relative w-full py-4 px-6 rounded-xl font-bold text-white overflow-hidden transition-all hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transition-all group-hover:brightness-110"></div>
            <div className="relative flex items-center justify-center gap-3">
                {isPlaying ? (
                <>
                    <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <span>Reproduzindo Áudio...</span>
                </>
                ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M8 5.14v14.71a1 1 0 0 0 1.5.87l11-7.35a1 1 0 0 0 0-1.74l-11-7.35A1 1 0 0 0 8 5.14z"/></svg>
                    <span>OUVIR MENSAGEM (IA)</span>
                </>
                )}
            </div>
          </button>
          
          <p className={`text-xs font-mono transition-colors ${status.includes('Erro') ? 'text-red-400' : 'text-emerald-400/80'}`}>
            Status: {status}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Pricing;
