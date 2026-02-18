import React from 'react';

const services = [
    { name: "Netflix", price: "R$ 59,90/mês", img: "https://www.10pilaoficial.site/img/netflix.webp" },
    { name: "HBO Max", price: "R$ 39,90/mês", img: "https://www.10pilaoficial.site/img/max.webp" },
    { name: "Disney+", price: "R$ 27,99/mês", img: "https://www.10pilaoficial.site/img/disney.webp" },
    { name: "Amazon Prime", price: "R$ 19,90/mês", img: "https://www.10pilaoficial.site/img/prime.webp" },
    { name: "Telecine", price: "R$ 23,90/mês", img: "https://www.10pilaoficial.site/img/telecine.webp" },
    { name: "Apple TV+", price: "R$ 29,90/mês", img: "https://www.10pilaoficial.site/img/apple.webp" },
    { name: "Star+", price: "R$ 66,90/mês", img: "https://www.10pilaoficial.site/img/combate.webp" },
    { name: "Paramount+", price: "R$ 18,90/mês", img: "https://www.10pilaoficial.site/img/paramount.webp" },
    { name: "Sky", price: "R$ 59,90/mês", img: "https://www.10pilaoficial.site/img/sky.webp" },
    { name: "Crunchyroll", price: "R$ 19,99/mês", img: "https://www.10pilaoficial.site/img/cruchyroll.webp" },
    { name: "Vivo Play", price: "R$ 19,90/mês", img: "https://www.10pilaoficial.site/img/vivo_play.webp" },
    { name: "Claro TV", price: "R$ 57,90/mês", img: "https://www.10pilaoficial.site/img/claro.webp" },
];

const PriceComparison: React.FC = () => {
    const scrollToPlans = () => {
        const element = document.getElementById('planos');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Isso é o que você pagaria se assinasse <br />
                    <span className="text-red-600">todas as plataformas de streaming:</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                    {services.map((svc, idx) => (
                        <div key={idx} className="bg-gray-900 rounded-lg p-6 text-center hover:scale-105 transition-transform shadow-lg">
                            <div className="bg-white rounded-lg mb-4 h-24 overflow-hidden">
                                <img src={svc.img} alt={svc.name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-2xl font-bold text-red-600">{svc.price}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <div className="bg-gray-900 rounded-lg p-8 border-2 border-red-600">
                        <p className="text-2xl mb-2 text-white">Ao todo você pagaria</p>
                        <p className="text-5xl font-bold text-red-600 mb-4">R$ 444,98</p>
                        <p className="text-xl text-gray-400">por mês</p>
                    </div>

                    <div className="bg-[#a20101] rounded-lg p-8 transform hover:scale-105 transition-transform text-white">
                        <p className="text-2xl mb-2">Já com a DezPila você pagará apenas</p>
                        <p className="text-6xl font-bold mb-2">R$ 10,00</p>
                        <p className="text-xl">por mês!!</p>
                    </div>

                    <button onClick={scrollToPlans} className="bg-[#a20101] hover:bg-[#a20101] border-2 border-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 mt-8">
                        ADQUIRA O SEU AGORA
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PriceComparison;
