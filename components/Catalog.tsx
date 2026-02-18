import React from 'react';

const catalogLogos = [
    "https://www.10pilaoficial.site/img/logos/IMG1.webp",
    "https://www.10pilaoficial.site/img/logos/IMG2.webp",
    "https://www.10pilaoficial.site/img/logos/IMG3.webp",
    "https://www.10pilaoficial.site/img/logos/IMG4.webp",
    "https://www.10pilaoficial.site/img/logos/IMG5.webp",
    "https://www.10pilaoficial.site/img/logos/IMG6.webp",
    "https://www.10pilaoficial.site/img/logos/IMG7.webp",
    "https://www.10pilaoficial.site/img/logos/IMG8.webp",
    "https://www.10pilaoficial.site/img/logos/IMG9.webp",
];

const Catalog: React.FC = () => {
    return (
        <section id="catalogo" className="bg-black py-20">
            <div className="mx-auto px-4 md:px-[50px] md:max-w-[70%]">
                <div className="grid md:grid-cols-3 gap-12 items-center">

                    {/* COLUNA ESQUERDA */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            A DezPila tem de <span className="text-red-600">tudo!</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Programas, entretenimento, conteúdos informativos, reality shows, desenhos, coleções especiais e muito mais — tudo organizado para que você encontre o que deseja rapidamente.
                        </p>

                        <div className="relative">
                            <img src="https://www.10pilaoficial.site/img/canais.webp"
                                alt="Canais disponíveis na DezPila"
                                className="w-full rounded-2xl shadow-2xl object-cover" />
                            <div className="absolute inset-0 bg-red-600/10 blur-3xl opacity-20 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* COLUNA DIREITA */}
                    <div className="space-y-8">
                        <h3 className="text-gray-400 text-lg">
                            Centralize seus conteúdos em um só lugar, em uma única plataforma!
                        </h3>

                        <div className="grid grid-cols-3 gap-4">
                            {catalogLogos.map((src, idx) => (
                                <div key={idx} className="bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg aspect-square p-0 overflow-hidden">
                                    <img src={src} alt="Logo" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Catalog;
