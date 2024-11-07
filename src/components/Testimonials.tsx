import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ 
  content, 
  author, 
  project, 
  rating,
  date 
}: { 
  content: string; 
  author: string; 
  project: string; 
  rating: number;
  date: string;
}) => (
  <div 
    className="bg-white p-8 rounded-xl shadow-md relative h-full"
    itemScope
    itemType="https://schema.org/Review"
  >
    <Quote className="absolute top-4 right-4 text-gray-200" size={40} aria-hidden="true" />
    <div className="flex mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
      <meta itemProp="worstRating" content="1" />
      <meta itemProp="bestRating" content="5" />
      <meta itemProp="ratingValue" content={rating.toString()} />
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" size={20} aria-hidden="true" />
      ))}
    </div>
    <p className="text-gray-600 mb-6" itemProp="reviewBody">{content}</p>
    <div className="mt-auto">
      <p className="font-semibold" itemProp="author">{author}</p>
      <p className="text-sm text-gray-500" itemProp="about">{project}</p>
      <meta itemProp="datePublished" content={date} />
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      content: "Service génial ! Enfin une entreprise du bâtiment moderne ! La consultation en visio depuis mon téléphone m'a permis d'avoir une vision claire de mon budget. Les conseils étaient précieux et vont m'aider à prendre les bonnes décisions.",
      author: "Marie L.",
      project: "Rénovation complète d'un appartement à Saint-Étienne",
      rating: 5,
      date: "2024-02-15"
    },
    {
      content: "C'est comme si on avait été ensemble sur le RDV ! Service super professionnel et une personne à l'écoute de mes besoins. L'estimation était claire et précise. Bravo la technologie et bravo Aveo ! RDV est pris pour concrétiser.",
      author: "Thomas E.",
      project: "Rénovation cuisine et salle de bain à Andrézieux",
      rating: 5,
      date: "2024-02-20"
    },
    {
      content: "Je suis bluffée ! Marie a été à l'écoute. Grâce à la visio depuis mon téléphone, elle a attiré mon attention sur des contraintes techniques que je n'avais pas vues. 1H de visio, et j'avais le budget total de mon projet. Service vraiment au top !",
      author: "Sophie M.",
      project: "Rénovation chambre parentale à Saint-Étienne",
      rating: 5,
      date: "2024-02-25"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="temoignages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Témoignages Clients RénoConnect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos clients sur notre service d'estimation en visio
          </p>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <meta itemProp="name" content="AVEO Styles & Travaux - RénoConnect" />
          <meta itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" content="5" />
          <meta itemProp="reviewCount" content="124" />
          
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;