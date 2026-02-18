import React from 'react';

const reviews = [
    { 
        name: "Maria Silva", 
        location: "São Paulo, SP",
        text: "Incrível! Economizo mais de R$ 400 por mês. A qualidade é excelente e o suporte sempre me atende rápido.",
        img: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    { 
        name: "João Santos", 
        location: "Rio de Janeiro, RJ",
        text: "Melhor custo-benefício que já vi! Cancelei todas as assinaturas e agora pago apenas R$ 10. Vale a pena!",
        img: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    { 
        name: "Ana Paula", 
        location: "Curitiba, PR",
        text: "As crianças adoram os desenhos e eu consigo assistir minhas séries favoritas. Funciona liso na TV.",
        img: "https://randomuser.me/api/portraits/women/68.jpg" 
    },
    { 
        name: "Carlos Eduardo", 
        location: "Belo Horizonte, MG",
        text: "Estava cético, mas depois de testar fiquei impressionado. Qualidade 4K real e sem travamentos!",
        img: "https://randomuser.me/api/portraits/men/86.jpg" 
    },
    { 
        name: "Fernanda Costa", 
        location: "Salvador, BA",
        text: "O melhor é poder assistir aos jogos do meu time ao vivo! Todos os canais de esporte em um lugar só.",
        img: "https://randomuser.me/api/portraits/women/22.jpg" 
    },
    { 
        name: "Ricardo Oliveira", 
        location: "Porto Alegre, RS",
        text: "Instalei fácil seguindo o tutorial. Em menos de 5 minutos já estava assistindo. Recomendo demais!",
        img: "https://randomuser.me/api/portraits/men/54.jpg" 
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="relative bg-transparent py-24 overflow-hidden z-10">
            {/* Background blur accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-bold tracking-wider text-sm uppercase mb-2 block">Depoimentos Reais</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                        Quem assina, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">recomenda!</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-600/50 p-0.5">
                                        <img 
                                            src={review.img} 
                                            alt={review.name} 
                                            className="w-full h-full object-cover rounded-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-black w-4 h-4 rounded-full"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-white text-lg group-hover:text-red-500 transition-colors">{review.name}</p>
                                    <p className="text-xs text-gray-500">{review.location}</p>
                                </div>
                            </div>
                            
                            <div className="mb-4 flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                      key={i} 
                                      xmlns="http://www.w3.org/2000/svg" 
                                      width="16" 
                                      height="16" 
                                      viewBox="0 0 24 24" 
                                      fill="currentColor" 
                                      className="text-yellow-500"
                                    >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed italic">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;