import React from 'react';
import { MOVIE_IMAGES } from '../types';

const Carousel: React.FC = () => {
  return (
    <section className="w-full bg-black py-12 mt-12 z-10">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Os melhores Canais, Filmes e Séries <br />
          <span className="text-red-600">em uma única plataforma!</span>
        </h2>

        <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {MOVIE_IMAGES.map((imgSrc, index) => (
            <div key={index} className="flex-none w-40 md:w-48 snap-center rounded-xl overflow-hidden shadow-lg h-[40vh] max-h-[350px] transition-transform hover:scale-105">
              <img 
                src={imgSrc} 
                alt={`DezPila Content ${index}`} 
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;