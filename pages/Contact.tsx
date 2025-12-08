import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Section className="pt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Vamos conversar?</h1>
          <p className="text-gray-600 text-lg">
            Estou pronta para tirar suas dúvidas e ajudar você a alcançar seus objetivos com o inglês.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 space-y-8">
            <h2 className="text-2xl font-bold mb-6">Canais de Atendimento</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-red shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">WhatsApp</h3>
                <p className="text-gray-500 text-sm mb-2">Resposta rápida (Seg-Sex, 9h-18h)</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-brand-red font-semibold hover:underline">
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-red shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">E-mail</h3>
                <p className="text-gray-500 text-sm mb-2">Para parcerias e dúvidas gerais</p>
                <a href="mailto:contato@carolfava.com.br" className="text-brand-red font-semibold hover:underline">
                  contato@carolfava.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-red shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Aulas Online</h3>
                <p className="text-gray-500 text-sm">
                  Atendo alunos de todo o Brasil e do mundo via Google Meet ou Zoom.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-red"></div>
              <MessageSquare size={48} className="text-brand-red mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Agende sua aula experimental</h2>
              <p className="text-gray-600 mb-8">
                É gratuito e sem compromisso. Vamos avaliar seu nível e definir o melhor plano para você.
              </p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="block w-full">
                <Button fullWidth>
                  Agendar no WhatsApp
                </Button>
              </a>
              <p className="text-xs text-gray-400 mt-4">
                Ao clicar, você será redirecionado para o WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;