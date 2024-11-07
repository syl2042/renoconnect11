import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading des composants non critiques
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Booking = lazy(() => import('./components/Booking'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// Composant de fallback pendant le chargement
const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Services />
        <Process />
        <Testimonials />
        <Booking />
        <AboutUs />
        <FAQ />
        <Contact />
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default App;