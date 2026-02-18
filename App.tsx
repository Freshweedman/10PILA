
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PricingPlans from './components/PricingPlans';
import MoviesCarousel from './components/MoviesCarousel';
import StreamingLogos from './components/StreamingLogos';
import Benefits from './components/Benefits';
import Catalog from './components/Catalog';
import PriceComparison from './components/PriceComparison';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SupportCTA from './components/SupportCTA';
import Footer from './components/Footer';
import TopBanner from './components/TopBanner';
import StickyMobileCTA from './components/StickyMobileCTA';
import SalesToast from './components/SalesToast';
import BlogPreview from './components/BlogPreview';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-[#050505] text-white font-inter selection:bg-red-500/30">
      {/* Global Ambient Glows - Deep Blur */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/20 rounded-full blur-[150px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[130px] opacity-50"></div>
          <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-orange-900/10 rounded-full blur-[100px] opacity-30"></div>
      </div>
      
      <div className="relative z-10">
        <TopBanner />
        <Header />
        <Hero />
        <MoviesCarousel />
        <StreamingLogos />
        <VideoSection />
        <Benefits />
        <Catalog />
        <PriceComparison />
        <HowItWorks />
        <Testimonials />
        <PricingPlans />
        <BlogPreview />
        <FAQ />
        <SupportCTA />
        <Footer />
        
        {/* CRO Components */}
        <StickyMobileCTA />
        <SalesToast />
      </div>
    </div>
  );
};

export default App;
