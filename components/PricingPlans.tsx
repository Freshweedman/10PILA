import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';

const plans = [
    {
        title: "Mensal",
        price: "R$ 10,00",
        period: "por mês",
        features: [
            "Mais de 60.000 conteúdos",
            "Qualidade SD/HD/FHD/4k",
            "Guia de Programação [EPG]",
            "Assista no Smartphone/Tablet"
        ],
        highlight: false,
        bestValue: false
    },
    {
        title: "Mensal (2 Telas)",
        price: "R$ 19,00",
        period: "por mês",
        oldPrice: "De R$ 59,70",
        discount: "30% OFF",
        features: [
            "Use 2 telas simultaneamente",
            "Mais de 60.000 conteúdos",
            "Qualidade SD/HD/FHD/4k",
            "Programação Adultos [Opcional]"
        ],
        highlight: false,
        bestValue: false
    },
    {
        title: "Trimestral",
        price: "R$ 50,00",
        period: "a cada 3 meses",
        oldPrice: "De R$ 119,40",
        discount: "MELHOR CUSTO-BENEFÍCIO",
        features: [
            "Use 3 telas simultaneamente",
            "Mais de 60.000 conteúdos",
            "Prioridade no Suporte",
            "4K HDR Garantido",
            "Programação Adultos [Opcional]"
        ],
        highlight: true,
        bestValue: true
    },
    {
        title: "Trimestral (4 Telas)",
        price: "R$ 90,00",
        period: "a cada 3 meses",
        oldPrice: "De R$ 238,80",
        discount: "RECOMENDADO PARA 2026",
        features: [
            "Use 4 telas simultaneamente",
            "Conta Família Premium",
            "Suporte VIP 24h",
            "Qualidade Máxima de Servidor",
            "Programação Adultos [Opcional]",
            "Pacote Filmes e Série"
        ],
        highlight: true,
        bestValue: true,
        megaDeal: true
    }
];

const PricingPlans: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);

    const handleBuy = (plan: typeof plans[0]) => {
        setSelectedPlan({ title: plan.title, price: plan.price });
        setIsModalOpen(true);
    };

    return (
        <section id="planos" className="bg-[#050505] py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="bg-red-900/30 text-red-400 border border-red-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase inline-block animate-pulse">
                        Última chance do ano
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white">
                        Escolha seu plano <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">para 2026</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Não pague mensalidade todo mês. Os planos trimestrais garantem sua tranquilidade por mais tempo.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                    {plans.map((plan, idx) => (
                        <div 
                            key={idx} 
                            className={`rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group ${
                                plan.megaDeal 
                                ? 'glass-card-strong transform lg:-translate-y-8 z-10 border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.2)]' 
                                : plan.highlight 
                                    ? 'glass-card border-red-500/50 bg-gradient-to-b from-gray-900 to-black' 
                                    : 'glass-card bg-black/40'
                            } hover:scale-[1.03]`}
                        >
                            {plan.discount && (
                                <div className={`absolute top-0 inset-x-0 py-1.5 text-center text-xs font-bold uppercase tracking-widest ${
                                    plan.megaDeal ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' : 'bg-red-900/50 text-red-300'
                                }`}>
                                    {plan.discount}
                                </div>
                            )}
                            
                            <div className={`text-center mb-8 ${plan.discount ? 'mt-6' : ''}`}>
                                <h3 className={`text-2xl font-bold mb-2 text-white ${plan.megaDeal ? 'text-3xl neon-text' : ''}`}>{plan.title}</h3>
                                {plan.oldPrice && <p className="text-gray-500 line-through text-sm">{plan.oldPrice}</p>}
                                <div className="flex items-baseline justify-center mt-2">
                                    <span className={`font-black text-white ${plan.megaDeal ? 'text-6xl text-red-500' : 'text-4xl'}`}>{plan.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm mt-2">{plan.period}</p>
                            </div>
                            
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feat, i) => (
                                    <div key={i} className="flex items-start space-x-3">
                                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-green-500/20' : 'bg-gray-800'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={plan.highlight ? "text-green-500" : "text-gray-400"}>
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className={`text-sm ${plan.megaDeal ? 'text-gray-200 font-medium' : 'text-gray-400'}`}>{feat}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                onClick={() => handleBuy(plan)}
                                className={`w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all shadow-lg hover:shadow-xl transform active:scale-95 ${
                                    plan.megaDeal 
                                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-red-900/20' 
                                    : plan.highlight 
                                        ? 'bg-white text-black hover:bg-gray-100' 
                                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                                }`}
                            >
                                COMPRAR AGORA
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <CheckoutModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                planTitle={selectedPlan?.title || ''}
                planPrice={selectedPlan?.price || ''}
            />
        </section>
    );
};

export default PricingPlans;
