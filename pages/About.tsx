import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Award, BookOpen, Heart } from 'lucide-react';
import { buildWhatsAppLink } from '../services/whatsapp';

const About: React.FC = () => {
  return (
    <>
      <Section className="pt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold mb-6">Olá, eu sou a <span className="text-brand-red">Carol Fava</span>.</h1>
            <h2 className="text-xl text-gray-600 font-medium mb-6">Professora de Inglês, Mentora e Apaixonada por Educação.</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Com mais de 40 anos de experiência em ensino de língua inglesa, minha missão é desmistificar o aprendizado e torná-lo parte natural da sua vida.
              </p>
              <p>
                Acredito que cada aluno é único. Por isso, abandonei os métodos de "receita de bolo" das escolas tradicionais para focar no que realmente importa: <strong>sua comunicação, sua confiança e seus resultados.</strong>
              </p>
              <p>
                Minha metodologia combina técnicas comunicativas modernas com um ambiente acolhedor e livre de julgamentos, permitindo que você erre, aprenda e evolua.
              </p>
            </div>
            <div className="mt-8">
              <a
                href={buildWhatsAppLink('Olá! Vim pela página Sobre e quero saber mais sobre as aulas.')}
                target="_blank"
                rel="noreferrer"
              >
                <Button>Vamos conversar?</Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-red rounded-3xl transform rotate-6 opacity-10"></div>
              <img 
                src="https://static.wixstatic.com/media/8f340e_f4c4c7d96432431384739706a5e41bf3~mv2.png/v1/crop/x_135,y_0,w_718,h_1080/fill/w_514,h_772,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8f340e_f4c4c7d96432431384739706a5e41bf3~mv2.png" 
                alt="Carol Fava Portrait" 
                className="relative rounded-3xl shadow-lg w-full object-cover"
                style={{ maxHeight: '600px', objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section light>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Certificações</h3>
            <p className="text-gray-600 text-sm">Certificada por Cambridge (CELTA) e com especializações em ensino online.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Metodologia</h3>
            <p className="text-gray-600 text-sm">Abordagem comunicativa (CLT) com foco em uso prático e real do idioma.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Paixão</h3>
            <p className="text-gray-600 text-sm">Ensinar não é apenas transmitir conhecimento, é conectar pessoas e culturas.</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
