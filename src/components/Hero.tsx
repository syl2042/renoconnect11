import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center" id="accueil">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/fond_renoconnect.webp)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Fond RenoConnect - Rénovation intérieure"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Estimation de Budget Rénovation en Visio depuis votre Smartphone
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Nos experts Travaux AVEO vous conseillent et estiment votre projet en direct grâce à notre technologie vidéo innovante
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-colors group focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              role="button"
              aria-label="Réserver une consultation"
            >
              Réserver une consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              role="button"
              aria-label="Découvrir nos services"
            >
              Découvrir nos services
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center">
              <span className="text-4xl font-bold">16+</span>
              <span className="ml-2 text-sm">années d'expérience</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold">1600+</span>
              <span className="ml-2 text-sm">projets réalisés</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold">98%</span>
              <span className="ml-2 text-sm">clients satisfaits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;