import React from 'react';

const benefits = [
    {
        title: "Filmes incríveis",
        emoji: "🎥",
        desc: "Aproveite uma biblioteca organizada com títulos selecionados, conteúdo licenciado e curadorias que atendem a todos os perfis. Experiência fluida, alta qualidade e atualizações frequentes.",
        img: "https://www.10pilaoficial.site/img/filmes/missao.jpg"
    },
    {
        title: "Séries imperdíveis",
        emoji: "📺",
        desc: "Explore séries escolhidas especialmente para você, com temporadas completas, organização intuitiva e recursos de fácil navegação.",
        img: "https://www.10pilaoficial.site/img/filmes/dorama.jpg"
    },
    {
        title: "Canais adultos",
        emoji: "😈",
        desc: "Acesso restrito a conteúdos adultos, com proteção por senha e ferramentas para garantir a segurança das crianças.",
        img: "https://www.10pilaoficial.site/img/filmes/adulto.webp"
    },
    {
        title: "Canais infantis",
        emoji: "🎈",
        desc: "Uma seleção especial para a criançada aproveitar com tranquilidade, incluindo animações, programas educativos e muito mais — tudo com controle parental.",
        img: "https://www.10pilaoficial.site/img/filmes/infantil.jpg"
    },
    {
        title: "Esportes ao vivo",
        emoji: "⚽",
        desc: "Acompanhe eventos esportivos, notícias, análises e conteúdos exclusivos reunidos em uma única plataforma para quem ama esportes.",
        img: "https://www.10pilaoficial.site/img/filmes/sports.jpg"
    },
    {
        title: "Animes CrunchRoll",
        emoji: "🎮",
        desc: "Aproveite uma variedade de animes e conteúdos geek organizados em listas temáticas, sempre atualizados para quem não perde um lançamento.",
        img: "https://www.10pilaoficial.site/img/filmes/animes.jpg"
    }
];

const Benefits: React.FC = () => {
    const scrollToPlans = () => {
        const element = document.getElementById('planos');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="beneficios" className="bg-gray-900 py-20">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                    Confira o que você vai encontrar na <span className="text-red-600">DezPila</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="bg-black rounded-lg overflow-hidden shadow-xl hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {item.title} <span className="text-3xl">{item.emoji}</span>
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button onClick={scrollToPlans} className="bg-[#a20101] hover:bg-[#a20101] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                        ADQUIRA O SEU AGORA
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Benefits;