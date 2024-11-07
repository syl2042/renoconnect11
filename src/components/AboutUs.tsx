import React from 'react';
import { Building, Users, Award, Target, History, Store, Network } from 'lucide-react';

const StatItem = ({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon size={32} className="text-primary mb-4" />
    <span className="text-3xl font-bold text-gray-900 mb-2">{value}</span>
    <span className="text-gray-600 text-center">{label}</span>
  </div>
);

const AboutUs = () => {
  const stats = [
    { icon: Building, value: '2008', label: 'Année de création' },
    { icon: Users, value: '1600+', label: 'Projets réalisés' },
    { icon: Award, value: '98%', label: 'Clients satisfaits' },
    { icon: Target, value: '100%', label: 'Engagement qualité' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">À propos d'AVEO Styles & Travaux</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre histoire et notre engagement envers l'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <History className="text-primary mr-3" size={24} />
              Notre Histoire
            </h3>
            <div className="prose text-gray-600">
              <p className="mb-6">
                Créé en 2008 à Saint-Etienne, nous avons choisi d'apporter de nouvelles règles au monde de la rénovation intérieure. Nous proposons un service de prise en charge très qualitative, apportant une totale sérénité à nos clients.
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li>Nous couvrons tous les corps de métier : plâtrerie, peinture, sols, électricité, plomberie, cuisines, salles de bains, isolation, aménagements...</li>
                <li>Chaque projet est travaillé selon vos attentes. Il vous sera proposé, avec votre devis, gratuitement, un visuel 3D de votre projet, vous permettant de vous projeter aisément dans votre futur intérieur. </li>
                <li>Vous disposez d'un seul et unique interlocuteur, un conducteur de travaux dédié,  tout au long de votre projet, qui coordonne l'ensemble de nos techniciens.</li>
                <li>Tous nos techniciens sont salariés, formés régulièrement, garantissant qualité et réactivité.</li>
                <li>Certifiés RGE, Handibat, Qualibat, et Pros de l'Accès, nous mettons en œuvre de nombreuses procédures internes pour des chantiers parfaitement fluides et organisés. Nous avons d'ailleurs été nommés "Enseigne de Confiance" par un organisme indépendant, et ce, depuis 5 ans.   </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Store className="text-primary mr-3" size={24} />
              Notre Showroom
            </h3>
            <div className="prose text-gray-600">
              <p className="mb-4">
                Aveo dispose de son propre showroom matériaux. 200 m2 à votre disposition pour choisir vos futurs matériaux : bacs à douche, robinetterie, parois de douche, faïences, carrelages, sols stratifés, aménagements de placard, mobilier de salles de bain, etc... Vous êtes accompagné par la personne qui aura travaillé votre projet. Elle saura vous guider vers les choix qui correspondent à vos goûts, et à vos habitudes de vie.  
              </p>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Network className="text-primary mr-3" size={24} />
                Un réseau national
              </h3>
              <p className="mb-4">
                Face au succès de notre aventure stéphanoise, nous avons développé AVEO Styles & Travaux en réseau depuis 2010. Ainsi, plusieurs dizaines d'agences existent aujourd'hui aux 4 coins de France. Ceci nous a permis de développer un concept innovant ainsi qu'une forte notoriété locale. Grâce au volume d'achat de matériaux généré par le réseau, cela nous a également permis de négocier fermement avec nos partenaires fournisseurs, pour vous obtenir les meilleurs prix de fournitures et matériaux. 
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;