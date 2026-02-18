import React, { useRef, useState } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="bg-black py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 tracking-wider uppercase">
            TECNOLOGIA DE PONTA
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Veja como a DezPila funciona
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(162,1,1,0.15)] border border-gray-800 group">
            <video
              ref={videoRef}
              src="https://www.10pilaoficial.site/video/dezpila.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Overlay Gradient to protect text visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            {/* Custom Mute Control */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 bg-red-600/90 hover:bg-red-600 text-white p-3 rounded-full backdrop-blur-md transition-all transform hover:scale-110 shadow-lg z-20 flex items-center gap-2 group/btn"
            >
              {isMuted ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                  <span className="text-sm font-bold pr-1 hidden group-hover/btn:inline-block animate-fade-in">Ativar Som</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  <span className="text-sm font-bold pr-1 hidden group-hover/btn:inline-block animate-fade-in">Mudo</span>
                </>
              )}
            </button>
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            * Imagens reais da plataforma rodando em Smart TV 4K.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
