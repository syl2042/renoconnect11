import React from 'react';
import { Calculator, Clock, CheckCircle, PaintBucket, Ruler, Home } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    itemScope 
    itemType="https://schema.org/Service"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-primary" size={24} aria-hidden="true" />
    </div>
    <h3 className="text-xl font-semibold mb-2" itemProp="name">{title}</h3>
    <p className="text-gray-600" itemProp="description">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Estimation budgétaire précise',
      description: 'Obtenez une estimation détaillée de votre projet de rénovation basée sur des données réelles et actualisées.'
    },
    {
      icon: Clock,
      title: 'Consultation Rapide en Visio',
      description: 'Réservez une consultation vidéo de 45 minutes avec nos experts Travaux, depuis votre smartphone.'
    },
    {
      icon: CheckCircle,
      title: 'Conseils Professionnels Personnalisés',
      description: 'Bénéficiez de conseils sur-mesure pour optimiser votre budget et vos choix de rénovation.'
    },
    {
      icon: PaintBucket,
      title: 'Design Intérieur Sur-Mesure',
      description: 'Recevez des suggestions de design adaptées à votre style, votre espace et votre budget.'
    },
    {
      icon: Ruler,
      title: 'Analyse Technique Complète',
      description: "Évaluation précise des contraintes techniques grâce à notre technologie vidéo innovante."
    },
    {
      icon: Home,
      title: 'Expertise Globale Reconnue',
      description: 'Plus de 16 ans d\'expérience dans tous types de rénovations intérieures à Saint-Étienne.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">RénoConnect : Service d'Estimation en Visio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre service innovant de consultation en visio depuis votre smartphone avec un expert Travaux AVEO à Saint-Etienne
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;