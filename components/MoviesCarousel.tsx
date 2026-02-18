import React from 'react';

const images = [
  "https://www.10pilaoficial.site/img/filmes/IMG-27.jpg",
  "https://www.10pilaoficial.site/img/filmes/IMG-35.jpg",
  "https://www.10pilaoficial.site/img/filmes/IMG-36.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-37.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-40.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-42.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-44.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-38.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-48.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-49.jpg",
  "https://www.10pilaoficial.site/img/filmes/IMG-50.jpg",
  "https://www.10pilaoficial.site/img/filmes/IMG-51.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-53.jpg",
  "https://www.10pilaoficial.site/img/filmes/IMG-39.webp",
];

const MoviesCarousel: React.FC = () => {
  // Duplicate array to ensure seamless loop
  const carouselImages = [...images, ...images];

  return (
    <section className="bg-transparent py-16 overflow-hidden relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 mb-10 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white drop-shadow-xl">
          Os melhores conteúdos e canais<br />
          <span className="text-red-600">em uma única plataforma!</span>
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-scroll gap-4 md:gap-6">
          {carouselImages.map((src, idx) => (
            <div
              key={idx}
              className="flex-none w-[160px] md:w-[220px] aspect-[2/3] transition-transform duration-300 hover:scale-105 hover:z-30"
            >
              <img
                src={src}
                alt="DezPila Filmes"
                className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesCarousel;
