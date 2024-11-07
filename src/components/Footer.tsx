import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
          <div>© Aveo Styles et Travaux 2024. Tous droits réservés</div>
          <a 
            href="https://aveo-styles-travaux.fr/politique-de-confidentialite/" 
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confidentialité des données
          </a>
          <a 
            href="https://aveo-styles-travaux.fr/mentions-legales/" 
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;