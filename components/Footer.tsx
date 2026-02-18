
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-[#a20101] w-16 h-16 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">DEZ</span>
              </div>
              <a href="#"><img src="https://www.10pilaoficial.site/logo_png.png" alt="DezPila App" className="h-10 object-contain" /></a>
            </div>
            <p className="text-sm text-gray-500">A revolução do streaming chegou. Liberdade, qualidade e preço justo.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Formas de pagamento</h3>
            <img src="https://www.10pilaoficial.site/img/cartao_pix_dezpila.webp" alt="Formas de pagamento" className="h-[80px] mx-auto md:mx-0 object-contain" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Site seguro</h3>
            <img src="https://www.10pilaoficial.site/img/selo_site_seguro.webp" alt="Site Seguro" className="h-[50px] mx-auto md:mx-0 object-contain" />
            <a href="#"><img src="https://www.10pilaoficial.site/img/selo_reclame_aqui.webp" alt="Reclame Aqui" className="h-[60px] mx-auto md:mx-0 object-contain mt-2" /></a>
          </div>

          {/* SEO Link Silo - Increases internal linking density */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Principais Buscas</h3>
            <ul className="text-xs space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors">Melhor Lista IPTV 2025</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">TV Box 4K Ultra HD</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Assistir Futebol Ao Vivo</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Aplicativo de Streaming Barato</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">IPTV para Smart TV Samsung</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">P2P Estável sem Travas</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">App para ver Filmes e Séries</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Como configurar IPTV no Roku</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Teste IPTV 6 Horas</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm space-y-4 leading-relaxed text-gray-500 border-t border-gray-800 pt-8">
          <p>Esta página não tem qualquer vínculo com o Facebook S/A e suas empresas, apenas usamos a plataforma para promover os nossos produtos. Ao sair da plataforma toda responsabilidade sobre produtos vendidos e ofertados é de inteira responsabilidade da nossa empresa, bem como se houver quaisquer eventualidades legais.</p>
          <p>Declaramos que o Facebook S/A não tem qualquer vínculo de associação em processos civeis ou criminais. Nosso email de suporte é: suporte@DezPila.com.br</p>
          <p>Não compre produtos piratas, não vendemos em marketplaces como: Mercado Livre, Shopee, Aliexpress, Facebook, Olx etc. Não damos suporte a produtos comprados nestes canais.</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">DezPila 2025 © Todos os direitos reservados</p>
          <div className="text-right space-y-2">
            <div className="flex justify-center md:justify-end space-x-4">
              <button className="hover:text-red-600">Política de privacidade</button>
              <span>|</span>
              <button className="hover:text-red-600">Termos de uso</button>
            </div>
            <p className="text-center md:text-right">Desenvolvido por DezPila</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
