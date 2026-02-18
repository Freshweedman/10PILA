import React from 'react';

const SupportCTA: React.FC = () => {
    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ainda está com dúvidas sobre a <span className="text-red-600">DezPila?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Clique no botão a seguir e tire suas dúvidas com nossa equipe!
                    </p>

                    <button onClick={() => window.location.href = 'https://www.10pilaoficial.site/suporte'} className="bg-[#a20101] hover:bg-[#a20101] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                        </svg>
                        <span>CONVERSAR COM SUPORTE</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SupportCTA;
