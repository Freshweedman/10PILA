import React, { useRef, useEffect } from 'react';

interface VideoMockupProps {
  mousePos: { x: number; y: number };
}

const VideoMockup: React.FC<VideoMockupProps> = ({ mousePos }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sensitivity = 0.5;

  useEffect(() => {
    if (!containerRef.current) return;

    // We use the passed mousePos from parent to calculate tilt
    // This assumes the parent tracks mouse over the entire main area
    // Just calculating based on window center for simplicity and effect

    const { innerWidth, innerHeight } = window;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    // Normalized offset (-1 to 1)
    const offsetX = (mousePos.x - centerX) / centerX;
    const offsetY = (mousePos.y - centerY) / centerY;

    const tiltX = -offsetY * sensitivity * 10;
    const tiltY = offsetX * sensitivity * 10;
    const transX = offsetX * sensitivity * 5;
    const transY = offsetY * sensitivity * 5;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${transX}px, ${transY}px, 0)`;

  }, [mousePos]);

  return (
    <section className="flex justify-center items-center w-full my-8 z-10 relative">
      <div
        id="mockup-container"
        ref={containerRef}
        className="max-w-md sm:max-w-xl lg:max-w-2xl transform hover:scale-[1.01] transition-transform duration-300"
      >
        <video
          src="https://www.10pilaoficial.site/video/dezpila.mp4"
          poster="https://www.10pilaoficial.site/img/dezpila-app.webp"
          className="w-full h-auto rounded-xl object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </section>
  );
};

export default VideoMockup;
