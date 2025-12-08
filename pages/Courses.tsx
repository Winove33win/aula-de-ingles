import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Briefcase, MessageCircle, GraduationCap, Check, Wifi } from 'lucide-react';

const courses = [
  {
    id: 'business',
    icon: <Briefcase size={40} />,
    title: "Business English",
    subtitle: "Para sua carreira decolar",
    description: "Focado em vocabulário corporativo, apresentações, negociações e e-mails profissionais.",
    features: [
      "Simulação de reuniões e calls",
      "Vocabulário específico da sua área",
      "Correção de e-mails e apresentações reais",
      "Cultural awareness para negócios internacionais"
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 'conversation',
    icon: <MessageCircle size={40} />,
    title: "Conversation Focus",
    subtitle: "Perca o medo de falar",
    description: "Aulas dinâmicas baseadas em tópicos atuais, debates e situações do cotidiano para destravar a fala.",
    features: [
      "Foco 100% em Speaking e Listening",
      "Debates sobre atualidades (News)",
      "Correção de pronúncia e entonação",
      "Expansão de vocabulário ativo"
    ],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 'general',
    icon: <GraduationCap size={40} />,
    title: "Inglês Geral",
    subtitle: "Do Básico ao Avançado",
    description: "Desenvolva as 4 habilidades (Speaking, Listening, Reading, Writing) de forma estruturada e consistente.",
    features: [
      "Base gramatical sólida aplicada ao contexto",
      "Material didático internacional",
      "Acompanhamento de progresso (CEFR)",
      "Homework personalizado"
    ],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const Courses: React.FC = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-40"></div>
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-3 pr-5 py-2 mb-8 backdrop-blur-sm shadow-xl">
             <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-gray-200 text-sm font-medium tracking-wide flex items-center gap-2">
              <Wifi size={14} /> 100% Online e Ao Vivo
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Nossos <span className="text-brand-red">Cursos</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Escolha a modalidade que melhor se adapta aos seus objetivos. 
            Todas as aulas são personalizadas para garantir sua evolução.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-24">
          {courses.map((course, index) => (
            <div key={course.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-brand-red mb-2 shadow-sm">
                  {course.icon}
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h2>
                    <h3 className="text-xl text-brand-red font-medium">{course.subtitle}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-gray-100 pl-4">
                  {course.description}
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-4 text-gray-900">O que você vai aprender:</h4>
                    <ul className="space-y-3">
                    {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="pt-2">
                   <a href={`https://wa.me/5511999999999?text=Olá, tenho interesse no curso de ${course.title}`} target="_blank" rel="noreferrer">
                    <Button>Quero saber mais sobre este curso</Button>
                  </a>
                </div>
              </div>
              
              <div className="flex-1 w-full relative group">
                {/* Decorative border offset */}
                <div className="absolute top-5 right-5 w-full h-full border-2 border-brand-red/10 rounded-[2rem] -z-10 group-hover:border-brand-red/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"></div>
                
                {/* Main Card Container */}
                <div className="h-full bg-white p-3 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden">
                   
                   {/* Image Mask - This creates the window for the zoom */}
                   <div className="relative w-full h-full min-h-[450px] rounded-[1.5rem] overflow-hidden">
                       {/* Overlay for depth */}
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

                       <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                       />
                       
                       {/* Floating Badge */}
                       <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-white/50 translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                           <p className="text-[10px] text-gray-500 uppercase tracking-wider font-extrabold mb-1">Nível recomendado</p>
                           <p className="text-brand-red font-bold text-lg">
                               {course.id === 'general' ? 'A1 ao C2' : course.id === 'business' ? 'B1 ao C2' : 'A2 ao C2'}
                           </p>
                       </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section light className="text-center bg-gradient-to-b from-slate-50 to-white">
        <h2 className="text-3xl font-bold mb-6">Não sabe qual escolher?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
          Faça uma aula experimental gratuita para descobrir o melhor caminho para você.
        </p>
        <div className="flex justify-center gap-4">
           <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
             <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                 Agendar Avaliação Gratuita
             </Button>
           </a>
        </div>
      </Section>
    </>
  );
};

export default Courses;