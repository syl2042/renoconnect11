import React, { useState, useEffect, lazy, Suspense } from 'react';

const CalendlyEmbed = lazy(() => import('./CalendlyEmbed'));

const LoadingPlaceholder: React.FC = () => (
  <div className="h-[700px] flex items-center justify-center bg-gray-50 rounded-lg">
    <div className="animate-pulse">
      <p className="text-gray-500">Chargement du calendrier...</p>
    </div>
  </div>
);

const Booking: React.FC = () => {
  const [shouldLoadCalendly, setShouldLoadCalendly] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCalendly(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const element = document.getElementById('reservation');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Réservez votre consultation Travaux</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez un créneau de 45 minutes avec nos experts pour une première étude de votre projet et une estimation personnalisée
          </p>
          <div className="mt-4 text-lg">
            <span className="font-semibold text-primary">Tarif de lancement :</span>
            <span className="ml-2 text-2xl font-bold text-primary">49€</span>
            <span className="ml-2 text-gray-500">au lieu de <span className="line-through">99€</span></span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<LoadingPlaceholder />}>
            {shouldLoadCalendly && <CalendlyEmbed />}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Booking;