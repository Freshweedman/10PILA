import React, { useState } from 'react';

const faqs = [
    { q: "PRECISA DE INTERNET PARA FUNCIONAR?", a: "Sim, o App DezPila precisa de internet para o seu funcionamento, mas devido o sinal potencializado de nosso satélite próprio, uma internet básica é mais que o suficiente para rodar vídeos 4k.\n\nTemos clientes que usam conectados na internet 4g do celular e funciona normalmente sem travas." },
    { q: "PRECISA DE ESPECIALISTA PARA CONFIGURAR?", a: "NÃO, nosso sistema é muito simples de instalar, ensinamos passo a passo detalhado pra você conseguir acompanhar e colocar tudo para funcionar." },
    { q: "O PAGAMENTO É MENSAL?", a: "Sim, nós trabalhamos com 4 planos:\n\n- R$ 10,00 – Mensal (1 Tela)\n- R$ 19,00 – Mensal (2 Telas)\n- R$ 50,00 – Trimestral (3 Telas)\n- R$ 90,00 – Trimestral (4 Telas)" },
    { q: "MORO EM ZONA RURAL, FUNCIONA PRA MIM?", a: "Varia de cada região, pelos testes de alguns clientes libera em média de 2.000 a 5.000 canais + de 25.000 filmes e séries e todos os dias são adicionados filmes e séries novas." },
    { q: "QUANTOS CANAIS SÃO LIBERADOS?", a: "Você vai ter acesso a mais de 2 mil canais abertos e fechados e muito mais!" },
    { q: "COMO VOU RECEBER?", a: "Imediatamente! Após o pagamento ser confirmado, nossa plataforma enviará no seu e-mail o acesso para a plataforma, e todos os tutoriais de como usar em qualquer aparelho." },
    { q: "EM QUANTOS APARELHOS POSSO USAR?", a: "Nossos planos tem capacidade para até 4 telas simultâneas, dependendo do plano escolhido." },
    { q: "ESTOU COM DÚVIDAS, TEM SUPORTE?", a: "Sim! Nós contamos com uma equipe grande de especialistas pronto para te atender a qualquer momento, quando sua compra for efetuada receberá o link para falar direto com nosso suporte!" }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                    Ainda com dúvidas? <span className="text-red-600">Temos a resposta.</span>
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg">
                            <button 
                                onClick={() => toggleFAQ(index)} 
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                            >
                                <span className="font-bold text-lg text-white">{item.q}</span>
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
                                  className={`transform transition-transform text-red-600 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed whitespace-pre-line">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;