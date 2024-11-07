import React from 'react';
import { Calendar, Video, FileText, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ProcessStep = ({ 
  icon: Icon, 
  title, 
  description, 
  step 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  step: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex items-start space-x-4 opacity-0 translate-y-4 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : ''
      }`}
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div>
        <div className="flex items-center mb-2">
          <span className="text-sm font-semibold text-primary" itemProp="position">ÉTAPE {step}</span>
          <div className="h-px bg-primary flex-grow ml-4" />
        </div>
        <h3 className="text-xl font-semibold mb-2" itemProp="name">{title}</h3>
        <p className="text-gray-600" itemProp="text">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Réservation en ligne simple',
      description: 'Réservez votre consultation avec un expert AVEO en quelques clics. Profitez de notre offre de lancement à 49€ au lieu de 99€ pour une estimation personnalisée de votre projet de rénovation.',
    },
    {
      icon: Video,
      title: 'Consultation vidéo interactive',
      description: 'Connectez-vous facilement via le lien SMS reçu 10 minutes avant le RDV. Échangez pendant 45 minutes avec notre expert AVEO qui analysera en direct votre projet de rénovation grâce à notre technologie vidéo sécurisée.',
    },
    {
      icon: FileText,
      title: 'Estimation budgétaire détaillée',
      description: 'Recevez une estimation précise et des recommandations personnalisées en direct. Un compte-rendu complet et votre estimation budgétaire vous seront envoyés par email dans les minutes qui suivent.',
    },
    {
      icon: Sparkles,
      title: 'Concrétisation de votre projet',
      description: 'Suite à la consultation RénoConnect, et seulement si vous le souhaitez, bénéficiez d\'un RDV gratuit sur place pour affiner votre projet. AVEO Styles & Travaux vous accompagne de A à Z dans la réalisation de vos travaux de rénovation.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="processus">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comment fonctionne RénoConnect ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et efficace pour estimer votre projet de rénovation à Saint-Étienne
          </p>
        </div>
        <div 
          className="max-w-3xl mx-auto space-y-12"
          itemScope
          itemType="https://schema.org/HowTo"
        >
          <meta itemProp="name" content="Comment utiliser RénoConnect pour votre projet de rénovation" />
          <meta itemProp="description" content="Guide étape par étape pour obtenir une estimation de rénovation avec RénoConnect" />
          {steps.map((step, index) => (
            <ProcessStep key={step.title} {...step} step={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;