import React, { useState } from 'react';
import { generateBingeSuggestion } from '../services/geminiService';
import { SuggestionResult } from '../types';

const ContentSuggestion: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGenerate = async () => {
    if (!inputValue.trim()) {
      setErrorMsg("Por favor, digite um tema para a sua maratona!");
      return;
    }

    setIsLoading(true);
    setResult(null);
    setErrorMsg('');

    try {
      const data = await generateBingeSuggestion(inputValue);
      setResult(data);
    } catch (err) {
      setErrorMsg("Erro ao gerar sugestão. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleGenerate();
  };

  return (
    <div className="glass-panel w-full max-w-lg p-6 rounded-xl space-y-4 z-10 mb-8 mx-auto">
      <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
        ✨ Curadoria Inteligente DezPila
      </h3>
      <p className="text-gray-300 text-sm text-center">
        Simule o que você pode assistir! Digite um tema, gênero ou humor (ex: "comédia de erros" ou "filmes sci-fi subestimados").
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ex: Aventura épica dos anos 80" 
          className="flex-grow p-3 rounded-lg bg-gray-900 text-white border border-red-500/50 focus:ring-2 focus:ring-red-500 focus:border-red-500/80 outline-none placeholder-gray-500"
        />
        <button 
          onClick={handleGenerate}
          disabled={isLoading}
          className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isLoading ? (
             <>
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
             Gerando...
           </>
          ) : '✨ Gerar Maratona'}
        </button>
      </div>

      <div className="pt-4 text-left min-h-[50px]">
        {errorMsg && <p className="text-red-400 text-sm italic">{errorMsg}</p>}
        {!result && !isLoading && !errorMsg && <p className="text-gray-500 text-sm italic">Aguardando sua sugestão...</p>}
        
        {result && (
          <div className="space-y-3">
            <div className="p-4 bg-gray-900 rounded-lg border border-red-500/30">
              <p className="text-gray-300 whitespace-pre-wrap">{result.text}</p>
            </div>
            {result.sources && result.sources.length > 0 && (
               <div>
                  <p className="text-xs text-gray-500 font-bold mb-1">Fontes:</p>
                  <div className="space-y-1">
                    {result.sources.map((source, idx) => (
                      <a key={idx} href={source.uri} target="_blank" rel="noopener noreferrer" className="block text-xs text-red-400 hover:text-red-300 underline">
                        {source.title || source.uri}
                      </a>
                    ))}
                  </div>
               </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentSuggestion;