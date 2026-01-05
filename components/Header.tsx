import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NavRoute } from '../types';
import { buildWhatsAppLink } from '../services/whatsapp';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: NavRoute.HOME },
    { name: 'Sobre', path: NavRoute.ABOUT },
    { name: 'Cursos', path: NavRoute.COURSES },
    { name: 'Contato', path: NavRoute.CONTACT },
  ];

  const logoUrl = "https://static.wixstatic.com/media/8f340e_379088dcfcfe4290966f8cc175aa0f5c~mv2.jpg/v1/fill/w_141,h_141,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8f340e_379088dcfcfe4290966f8cc175aa0f5c~mv2.jpg";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to={NavRoute.HOME} className="flex items-center gap-3 group">
          <img 
            src={logoUrl} 
            alt="Carol Fava Logo" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <span className="font-bold text-xl text-gray-800 tracking-tight hidden sm:block">
            Carol Fava
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand-red font-bold' : 'text-gray-600 hover:text-brand-red'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href={buildWhatsAppLink('Olá! Vim pelo site e quero falar sobre aulas de inglês.')}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-800 transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            Fale Comigo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col p-6 gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-lg font-medium py-2 border-b border-gray-50 ${
                  isActive ? 'text-brand-red' : 'text-gray-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
           <a 
            href={buildWhatsAppLink('Olá! Vim pelo site e quero falar sobre aulas de inglês.')}
            className="mt-2 w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
