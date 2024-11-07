import React, { useState } from 'react';
import { Menu, X, Home, Phone, Calendar, Info, Users } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', icon: <Home size={18} />, href: '#accueil' },
    { name: 'Services', icon: <Info size={18} />, href: '#services' },
    { name: 'Réserver', icon: <Calendar size={18} />, href: '#reservation' },
    { name: 'Processus', icon: <Users size={18} />, href: '#processus' },
    { name: 'Témoignages', icon: <Users size={18} />, href: '#temoignages' },
    { name: 'Contact', icon: <Phone size={18} />, href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center mt-10">
            <a 
              href="/" 
              className="h-40"
              aria-label="Accueil RenoConnect"
            >
              <img 
                src="/logowebp.webp" 
                alt="Logo RenoConnect" 
                className="h-full object-contain"
                loading="eager"
                width="160"
                height="160"
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                aria-label={`Aller à la section ${item.name}`}
              >
                {React.cloneElement(item.icon, { 'aria-hidden': 'true' })}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg"
            role="navigation"
            aria-label="Navigation mobile"
          >
            <div className="px-4 py-2 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label={`Aller à la section ${item.name}`}
                >
                  {React.cloneElement(item.icon, { 'aria-hidden': 'true' })}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;