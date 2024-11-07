import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 text-left flex justify-between items-start"
        onClick={onClick}
      >
        <span className="flex items-start">
          <HelpCircle className="text-primary flex-shrink-0 mr-3 mt-1" size={20} />
          <span className="text-lg font-semibold pr-8">{question}</span>
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] mb-6' : 'max-h-0'
        }`}
      >
        {typeof answer === 'string' ? (
          <p className="text-gray-600 pl-9">{answer}</p>
        ) : (
          answer.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4 last:mb-0 pl-9">
              {paragraph}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

// Rest of the component remains exactly the same
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Pourquoi ce nouveau service RENO CONNECT?",
      answer: [
        "Parce qu'Aveo Styles & Travaux est une entreprise du bâtiment différente et moderne et que nous cherchons toujours les solutions répondant aux besoins de nos clients.",
        "Sachez que si vous souhaitez refaire faire votre salle de bains par exemple, il faudra faire passer un plombier, un électricien, un carreleur, et un plâtrier pour avoir au final plusieurs devis.",
        "Vous imaginez l'organisation des RDV et le temps à y consacrer ?",
        "Et puis, il y a aujourd'hui la course permanente de la vie, qui fait qu'on reporte souvent des projets qui nous tiennent à coeur par manque de temps !",
        "Grâce à la technologie, et au concept AVEO Styles & Travaux, vous disposez d'un seul et unique interlocuteur, à même de répondre à tous vos besoins de rénovation intérieure : rénovation complète de logement, salles de bains, isolation, projets d'aménagement, cuisines, rénovation de chambres, des pièces de vie, aménagement de combles, extensions, transformation d'un garage en pièce de vie, locaux professionnels, etc, etc...",
        "Grâce à notre nouvelle technologie vidéo, une première étude de votre projet peut se faire maintenant à distance, aux horaires que vous souhaitez, avec la même analyse que si nous étions présents chez vous !"
      ]
    },
    {
      question: "Quelle est la durée de la consultation RENO CONNECT?",
      answer: "Le RDV est prévu pour une durée de 45 minutes. Mais il peut être plus court, ou plus long, selon votre projet. Nous ne lançons pas un chronomètre au début du RDV :)"
    },
    {
      question: "Comment l'expert Travaux Aveo va travailler sur ce RDV?",
      answer: "Vous serez en live video, depuis votre smartphone, avec notre expert travaux, afin de lui montrer la disposition des pièces et ce que vous souhaitez réaliser. C'est à dire qu'il verra de son côté, sur son écran, votre intérieur, afin de faire les analyses de vos besoins."
    },
    {
      question: "Qu'apporte la video à cette consultation?",
      answer: "Un gain de temps phénoménal ! Un seul RDV, pas de défilé d'artisans chez vous, et un RDV que vous choisissez vous-même ! Grâce à la vidéo, notre expert pourra tenir compte d'éventuelles contraintes techniques. Pour cela, il pourra vous demander de lui montrer des éléments spécifiques de votre intérieur : tableaux électriques, raccordements de plomberie, etc... Et même, prendre des mesures. Merci de faire le maximum pour répondre à ces demandes spécifiques afin qu'il affine son estimation."
    },
    {
      question: 'Je ne suis pas très à l\'aise avec la technologie, j\'ai peur de "cafouiller"',
      answer: [
        "N'ayez aucune appréhension.",
        "Notre plateforme video ne nécessite aucune installation de quoi que ce soit sur votre smartphone, ni aucune manipulation.",
        "La connexion à notre plateforme se fait en cliquant sur un simple lien que vous recevrez par SMS !",
        "Et nous précisons également que la liaison video est totalement sécurisée !"
      ]
    },
    {
      question: "Qu'est ce qu'une estimation budgétaire?",
      answer: [
        "Au cours de la visio, notre expert fera une première estimation budgétaire de votre projet, grâce aux éléments qu'il aura vu, et vos besoins. Il dispose des outils technologiques pour faire cela, mais cela restera une estimation budgétaire.",
        "Ce ne sera pas un devis tel que nous les faisons d'habitude, avec le détail de chaque ligne de chaque ouvrage.",
        "Même si nos estimations budgétaires sont rapides, elles sont précises et vous pouvez avoir une totale confiance en elles. Cela vous donnera une fourchette assez précise du budget relatif à votre projet."
      ]
    },
    {
      question: "Et si j'ai des demandes ou des questions particulières?",
      answer: [
        "Vous pourrez poser toutes les questions que vous souhaitez à notre expert, exactement comme s'il était à vos côtés.",
        "Il ne manquera pas également de vous donner quelques conseils quant aux aménagements possibles, ou aux contraintes techniques éventuelles",
        "Vous serez dans une discussion tout à fait normale, comme si vous étiez au téléphone, avec l'image en plus !"
      ]
    },
    {
      question: "Et après ce RDV?",
      answer: "Dans les 30 minutes qui suivent, vous recevrez par mail un compte rendu de votre RDV, ainsi que l'estimation budgétaire réalisée par notre expert, et qu'il vous aura déjà communiqué en live !"
    },
    {
      question: "Est-ce que je suis obligé de faire appel ensuite à AVEO Styles & Travaux pour réaliser mon projet ?",
      answer: [
        "Absolument pas !",
        "Mais si votre projet se concrétise, et que vous souhaitez une étude complète et un devis très précis, il vous sera alors proposé un RDV sur place, à une date qui vous conviendra. Nous rappelons que nos RDV et nos devis sont entièrement gratuits.",
        "Nous sommes une société avec une forte notoriété et sérieuse, et même si la consultation RENO CONNECT est un vrai plus dans notre processus d'analyse de votre projet, nous ne démarrerons jamais un chantier sans être allé vous rencontrer sur place."
      ]
    },
    {
      question: "Et si là où je suis, mon téléphone capte mal?",
      answer: [
        "Si pour une raison ou une autre, la qualité de la transmission était trop mauvaise, notre expert écourtera le RDV. Il vous sera alors remboursé intégralement. Et il vous proposera alors un RDV physique sur place.",
        "Mais sachez que notre technologie fonctionne et s'adapte à tous les débits, même les plus bas.",
        "Et si vous êtes à votre domicile, vous serez connecté en WIFI à votre box internet, ce qui empêchera tout problème."
      ]
    },
    {
      question: "J'ai un empêchement le jour et l'heure du RDV. Quelles sont les solutions? Serais je remboursé?",
      answer: [
        "Lorsque vous aurez réservé en ligne votre créneau horaire pour votre consultation RENO CONNECT, vous recevrez un email de confirmation, avec un lien pour annuler le RDV, et un lien pour déplacer le RDV.",
        "Vous aurez donc le choix.",
        "Si en cas de force majeure, vous deviez annuler le RDV sans pouvoir le déplacer, le prix de la consultation RENO CONNECT vous sera remboursé.",
        "Attention toutefois, une annulation à moins de 24H du RDV ne sera pas remboursée car vous aurez mobilisé le créneau horaire à la place d'une autre personne."
      ]
    },
    {
      question: "Puis-je vous appeler pour réserver une consultation RENO CONNECT ?",
      answer: [
        "Malheureusement non.",
        "Pour être certain du bon déroulement de tous le processus, il est impératif de passer par la réservation et le paiement en ligne.",
        "Mais si vous avez des questions, ou si vous souhaitez prendre directement RDV chez vous pour l'analyse gratuite de votre projet sur place, vous pouvez nous contacter au 04 77 06 08 08."
      ]
    },
    {
      question: "Pourquoi une consultation RENO CONNECT est payante, alors que vos RDV sur place sont gratuits?",
      answer: [
        "Grâce à ce nouveau service, vous prenez RDV quand vous le souhaitez, en fonction de votre agenda. Vous éviterez aussi le défilé des artisans à votre domicile. Et vous obtiendrez une estimation budgétaire au cours de ce même RDV, sans vous déplacer. tout cela en moins d'une heure !",
        "Avouez que c'est confortable :)",
        "Et surtout, et pour être totalement transparent, notre service RENO CONNECT, s'appuie sur des technologies de pointe, que nous avons dû déployer sur des serveurs sécurisés.",
        "Et comme vous le savez, rien n'est gratuit dans ce domaine :)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur notre service de consultation TRAVAUX en ligne RENO CONNECT
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;