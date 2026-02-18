
import React, { useState, useEffect } from 'react';

const articles = [
  {
    category: "Esportes",
    title: "Onde Assistir Futebol Ao Vivo Online em 2025? [Guia Definitivo]",
    excerpt: "Saiba como acompanhar Brasileirão, Libertadores e Champions League pagando pouco e com qualidade 4K.",
    date: "02 Dez 2025",
    isoDate: "2025-12-02",
    readTime: "6 min de leitura",
    image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&q=80&w=800",
    keywords: "futebol ao vivo, assistir brasileirão 2025 gratis, champions league online, premiere barato, dezpila esportes, streaming futebol, lista iptv futebol, melhor app de futebol",
    fullContent: `
      <h2 class="text-2xl font-bold text-white mt-6 mb-4">A Crise do Futebol na TV</h2>
      <p class="mb-4 text-gray-300">Assistir futebol hoje virou um quebra-cabeça. O Brasileirão está em um canal, a Libertadores em outro, e a Champions League em um terceiro streaming. Para um torcedor fanático, assinar Premiere, ESPN, Paramount+ e Max pode custar mais de **R$ 300,00 por mês**.</p>
      
      <h2 class="text-2xl font-bold text-red-500 mt-8 mb-3">A Solução Definitiva: DezPila</h2>
      <p class="mb-4 text-gray-300">Imagine ter acesso a TODOS esses canais em um só lugar? O DezPila revolucionou o mercado esportivo ao incluir na assinatura de **R$ 10,00** os principais canais de esporte do mundo:</p>
      
      <ul class="list-disc pl-5 mb-6 text-gray-300 space-y-2">
        <li><strong>Nacionais:</strong> Premiere Clubes (todos os jogos), SporTV 1, 2 e 3, BandSports.</li>
        <li><strong>Internacionais:</strong> ESPN (todos), Fox Sports, Star+ (eventos ao vivo).</li>
        <li><strong>Lutas:</strong> Canal Combate 24h e eventos UFC.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-3">Sem Travamentos na Hora do Gol</h2>
      <p class="mb-4 text-gray-300">Nossa infraestrutura utiliza CDN (Content Delivery Network) focada em eventos ao vivo. Isso significa que, mesmo em dia de final de campeonato com milhões de acessos, seu sinal permanece estável e com delay reduzido, para você não ouvir o grito de gol do vizinho antes de ver na tela.</p>
    `
  },
  {
    category: "Tecnologia",
    title: "Qual a Melhor TV Box para Streaming em 2025? Fire Stick, Xiaomi ou Roku?",
    excerpt: "Analisamos os melhores dispositivos para transformar sua TV antiga em uma máquina de cinema.",
    date: "30 Nov 2025",
    isoDate: "2025-11-30",
    readTime: "7 min de leitura",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    keywords: "melhor tv box 2025, fire stick 4k, xiaomi mi box s, roku express, transformar tv em smart, iptv na tv box, tv box barata e boa, configurar tv box",
    fullContent: `
      <h2 class="text-2xl font-bold text-white mt-6 mb-4">Transforme sua TV Antiga</h2>
      <p class="mb-4 text-gray-300">Não precisa comprar uma Smart TV nova de R$ 3.000. Com uma TV Box, você gasta menos de R$ 300 e tem um sistema Android completo. Mas qual escolher para rodar o DezPila com perfeição?</p>

      <h3 class="text-xl font-bold text-red-500 mt-6 mb-2">1. Amazon Fire TV Stick 4K (Vencedor)</h3>
      <p class="mb-4 text-gray-300">O favorito da redação. Processador rápido, não esquenta e tem controle de voz. O app do DezPila roda nativamente através do aplicativo "Downloader". <strong>Nota: 10/10</strong>.</p>

      <h3 class="text-xl font-bold text-red-500 mt-6 mb-2">2. Xiaomi Mi Box S (2ª Geração)</h3>
      <p class="mb-4 text-gray-300">Excelente opção com Android TV puro. Tem porta USB (útil para pendrive) e ótima recepção Wi-Fi. Roda nosso sistema em 4K HDR sem engasgos. <strong>Nota: 9.5/10</strong>.</p>

      <h3 class="text-xl font-bold text-red-500 mt-6 mb-2">3. TV Box Genérica (MXQ Pro 4K)</h3>
      <p class="mb-4 text-gray-300">Cuidado! Muitas prometem 4K mas travam em HD. Se for usar uma TV Box barata, certifique-se de que ela tenha pelo menos 2GB de RAM real. O DezPila é otimizado para rodar nelas, mas a navegação pode ser um pouco mais lenta.</p>

      <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-600 my-6">
        <p class="text-sm text-gray-200"><strong>Dica:</strong> Independente do aparelho, use sempre a conexão Wi-Fi 5GHz para garantir a velocidade necessária para filmes em 4K.</p>
      </div>
    `
  },
  {
    category: "Economia",
    title: "Como Economizar R$ 5.000 por Ano com Streaming Inteligente",
    excerpt: "Descubra como substituir múltiplas assinaturas caras por uma solução única e completa em 2025.",
    date: "25 Nov 2025",
    isoDate: "2025-11-25",
    readTime: "5 min de leitura",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=800",
    keywords: "economizar com streaming, cancelar netflix, iptv barato, dezpila vs streaming, finanças pessoais 2025, streaming mais barato do brasil, lista p2p economica",
    fullContent: `
      <h2 class="text-2xl font-bold text-white mt-6 mb-4">A Matemática do Streaming em 2025</h2>
      <p class="mb-4 text-gray-300">Você já parou para somar quanto gasta mensalmente com entretenimento? Netflix, HBO Max, Disney+, Amazon Prime, Globoplay... a lista é infinita. Em 2025, o custo médio para manter as principais plataformas de streaming no Brasil ultrapassou a marca de R$ 400,00 mensais. Isso representa quase R$ 5.000,00 por ano apenas para assistir TV.</p>
      
      <h2 class="text-2xl font-bold text-red-500 mt-8 mb-3">O Problema da Fragmentação</h2>
      <p class="mb-4 text-gray-300">O mercado de streaming se fragmentou. Antigamente, a Netflix tinha tudo. Hoje, para assistir "Stranger Things" você precisa de uma assinatura, para ver "Game of Thrones" precisa de outra, e para o futebol, uma terceira. O consumidor final é quem paga a conta dessa guerra de exclusividade.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-3">A Solução Inteligente: Centralização</h2>
      <p class="mb-4 text-gray-300">A tendência para o consumidor inteligente é a centralização. Serviços como o <strong>DezPila</strong> surgem como uma alternativa disruptiva, agregando o conteúdo de todas essas plataformas em um único aplicativo, por um valor simbólico de R$ 10,00 mensais.</p>
      
      <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-2">
        <li><strong>Custo Anual Tradicional:</strong> ~R$ 4.800,00</li>
        <li><strong>Custo Anual DezPila:</strong> R$ 120,00</li>
        <li><strong>Economia Real:</strong> R$ 4.680,00</li>
      </ul>

      <p class="mb-4 text-gray-300">Com essa economia, você poderia viajar, investir ou trocar de televisão. O streaming inteligente não é sobre pirataria, é sobre pagar um preço justo por uma tecnologia de distribuição (P2P e IPTV) que elimina intermediários caros.</p>
    `
  },
  {
    category: "Tecnologia",
    title: "Streaming 4K vs Full HD: Você Consegue Ver a Diferença?",
    excerpt: "Análise técnica sobre a qualidade de imagem e por que o bitrate do DezPila supera a concorrência.",
    date: "22 Nov 2025",
    isoDate: "2025-11-22",
    readTime: "4 min de leitura",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800",
    keywords: "streaming 4k, qualidade de imagem, bitrate, hdr10, dolby vision, h.265 hevc, iptv 4k, filmes em 4k, servidor p2p 4k, dezpila qualidade",
    fullContent: `
      <h2 class="text-2xl font-bold text-white mt-6 mb-4">A Verdade Sobre a Resolução 4K</h2>
      <p class="mb-4 text-gray-300">Muitos serviços prometem 4K, mas entregam uma imagem lavada e cheia de blocos (pixels visíveis). Por que isso acontece? A resposta está no <strong>Bitrate</strong> (taxa de bits), não apenas na resolução.</p>

      <h2 class="text-2xl font-bold text-red-500 mt-8 mb-3">Resolução vs. Bitrate</h2>
      <p class="mb-4 text-gray-300">Uma imagem 4K (3840x2160 pixels) com baixo bitrate parece pior do que uma imagem Full HD (1920x1080) com alto bitrate. As grandes operadoras comprimem o sinal para economizar banda, sacrificando a qualidade real da imagem, especialmente em cenas escuras ou de muita ação (como futebol e filmes de super-heróis).</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-3">A Tecnologia do DezPila</h2>
      <p class="mb-4 text-gray-300">O sistema DezPila utiliza servidores dedicados com compressão H.265 (HEVC). Isso permite entregar uma imagem 4K HDR real consumindo menos internet. Enquanto a concorrência exige 50mb de internet para um 4K estável, nossa tecnologia roda liso com 15mb.</p>

      <p class="mb-4 text-gray-300">Além disso, o suporte a <strong>HDR10+ e Dolby Vision</strong> garante que as cores sejam vibrantes e o preto seja realmente preto, ideal para quem possui Smart TVs OLED ou QLED da Samsung e LG.</p>
    `
  },
  {
    category: "Guias",
    title: "Como Instalar DezPila na Smart TV Samsung e LG",
    excerpt: "Tutorial passo a passo para configurar sua TV em menos de 3 minutos sem precisar de técnico.",
    date: "18 Nov 2025",
    isoDate: "2025-11-18",
    readTime: "3 min de leitura",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    keywords: "instalar iptv samsung, instalar iptv lg, app dezpila smart tv, iptv smarters, duplex play, ibo player, ssiptv, tizen, webos, configurar iptv smart tv",
    fullContent: `
      <h2 class="text-2xl font-bold text-white mt-6 mb-4">Instalação Simples e Rápida</h2>
      <p class="mb-4 text-gray-300">Uma das maiores vantagens do DezPila é não precisar de "caixinhas" (TV Box) se você já possui uma Smart TV moderna. Nosso aplicativo é nativo para os principais sistemas operacionais do mercado.</p>

      <h3 class="text-xl font-bold text-red-500 mt-6 mb-2">Passo 1: Identifique seu Sistema</h3>
      <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-2">
        <li><strong>Samsung:</strong> Sistema Tizen</li>
        <li><strong>LG:</strong> Sistema WebOS</li>
        <li><strong>Outras (Sony, TCL, Philco):</strong> Geralmente Android TV</li>
      </ul>

      <h3 class="text-xl font-bold text-red-500 mt-6 mb-2">Passo 2: Baixando o App</h3>
      <p class="mb-4 text-gray-300">Vá até a loja de aplicativos da sua TV (Samsung Apps ou LG Content Store) e busque por aplicativos parceiros como "IPTV Smarters", "Duplex Play" ou "IBO Player". O DezPila é compatível com todos eles através da nossa lista M3U premium.</p>

      <h3 class="text-xl font-bold text-red-500 mt-6 mb-2">Passo 3: Login</h3>
      <p class="mb-4 text-gray-300">Ao assinar o DezPila (por R$ 10,00), você recebe no seu e-mail um usuário e senha. Basta inserir esses dados no aplicativo baixado e pronto! Todos os canais, filmes e séries aparecerão magicamente organizados com capas e sinopses.</p>

      <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-600 my-6">
        <p class="text-sm text-gray-200"><strong>Dica Pro:</strong> Se você usa TV Box ou Android, baixe nosso APK oficial direto pelo navegador para uma experiência ainda mais premium.</p>
      </div>
    `
  }
];

const BlogPreview: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  // Dynamic SEO: Update Title, Meta Description and Keywords when article opens
  useEffect(() => {
    if (selectedArticle) {
      const prevTitle = document.title;

      // Select Meta Tags
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      // Backup previous values
      const prevDesc = metaDescription?.getAttribute('content') || "";
      const prevKeys = metaKeywords?.getAttribute('content') || "";

      // Update Values
      document.title = `${selectedArticle.title} | Blog DezPila`;

      if (metaDescription) {
        metaDescription.setAttribute('content', selectedArticle.excerpt);
      }

      if (metaKeywords && selectedArticle.keywords) {
        metaKeywords.setAttribute('content', selectedArticle.keywords);
      }

      return () => {
        // Restore Values on Unmount/Close
        document.title = prevTitle;

        if (metaDescription) {
          metaDescription.setAttribute('content', prevDesc);
        }

        if (metaKeywords) {
          metaKeywords.setAttribute('content', prevKeys);
        }
      };
    }
  }, [selectedArticle]);

  return (
    <section id="blog" className="bg-[#050505] py-20 relative border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-red-500 font-bold tracking-wider text-sm uppercase mb-2 block">Blog DezPila</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Dicas e Novidades do <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Mundo Streaming</span>
            </h2>
          </div>
          <button className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
            Ver todos os artigos
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              onClick={() => setSelectedArticle(article)}
              className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group cursor-pointer bg-gray-900/40 border border-white/5 hover:border-red-500/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center text-red-400 text-sm font-bold group/link">
                  Ler artigo completo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedArticle(null)}></div>
          <div className="glass-card relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0a0a] border border-gray-800 shadow-2xl animate-fade-in-up">

            {/* Structured Data (Schema Markup) for Blog Post */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": selectedArticle.title,
                "description": selectedArticle.excerpt,
                "image": selectedArticle.image,
                "datePublished": selectedArticle.isoDate,
                "dateModified": selectedArticle.isoDate,
                "author": {
                  "@type": "Organization",
                  "name": "DezPila Streaming"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DezPila",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.10pilaoficial.site/logo_png.png"
                  }
                },
                "keywords": selectedArticle.keywords,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://www.10pilaoficial.site/#blog/${selectedArticle.isoDate}`
                }
              })
            }} />

            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-red-600 transition-colors text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="relative h-64 md:h-80 w-full">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:left-10 right-6">
                <span className="text-red-500 font-bold tracking-wider text-xs uppercase mb-2 block">{selectedArticle.category}</span>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">{selectedArticle.title}</h2>
              </div>
            </div>

            <div className="p-6 md:p-10 text-lg leading-relaxed space-y-4">
              {/* Render Full Content ensuring proper H2/H3/P tags are used */}
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}></div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <button onClick={() => {
                  setSelectedArticle(null);
                  document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                }} className="w-full bg-[#a20101] hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all">
                  Quero Economizar com DezPila Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPreview;
