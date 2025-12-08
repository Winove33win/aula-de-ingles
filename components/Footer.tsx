import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-brand-red">Carol</span> Fava
          </h3>
          <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
            Transformando objetivos profissionais e pessoais em realidade através de um ensino de inglês personalizado, humano e eficiente.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-gray-400">
            <li><NavLink to="/" className="hover:text-brand-red transition-colors">Início</NavLink></li>
            <li><NavLink to="/about" className="hover:text-brand-red transition-colors">Sobre Mim</NavLink></li>
            <li><NavLink to="/courses" className="hover:text-brand-red transition-colors">Cursos</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-brand-red transition-colors">Contato</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <Mail className="text-brand-red shrink-0" size={20} />
              <span>contato@carolfava.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-red shrink-0" size={20} />
              <span>Aulas Online para todo o mundo</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Carol Fava. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;