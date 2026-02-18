import React from 'react';

const steps = [
    { id: 1, title: "Escolha seu plano", desc: "Selecione o plano ideal para sua família. Pagamento via PIX ou Cartão." },
    { id: 2, title: "Receba por email", desc: "Login, senha e links de instalação chegam em até 5 minutos no email." },
    { id: 3, title: "Comece a assistir", desc: "Instale o app e aproveite mais de 25.000 conteúdos disponíveis." }
];

const HowItWorks: React.FC = () => {
    const scrollToPlans = () => {
        const element = document.getElementById('planos');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="como-funciona" className="bg-gray-900 py-20">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
                    Como funciona o <span className="text-red-600">DezPila</span>?
                </h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
                    Em 3 passos simples você já está assistindo — receba tudo no seu email em até 5 minutos.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map(step => (
                        <article key={step.id} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-red-600/50 transition">
                            <div className="text-red-600 text-5xl font-black mb-4">{step.id}</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                            <p className="text-gray-300 text-sm">{step.desc}</p>
                        </article>
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

export default HowItWorks;
