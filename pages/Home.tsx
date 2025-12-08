import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Users, Map, Calendar, HelpCircle, MessageCircle } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 hidden lg:block skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12 md:py-0">
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-brand-red rounded-full text-sm font-semibold tracking-wide uppercase">
              English Teacher & Mentor
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Desbloqueie sua <span className="text-brand-red relative">
                fluência
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> com confiança.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Aulas personalizadas focadas em comunicação real, negócios e desenvolvimento profissional. Chega de travar na hora de falar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                <Button>Fale comigo no WhatsApp</Button>
              </a>
              <Link to="/courses">
                <Button variant="outline">Conheça os Cursos</Button>
              </Link>
            </div>
            <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-gray-400 to-gray-500">
                    {i}
                  </div>
                ))}
              </div>
              <p>Mais de 500 alunos satisfeitos</p>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center h-full">
             {/* Abstract Background Blur */}
             <div className="absolute w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-60 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

             {/* Main Image Card Container */}
             <div className="relative w-[340px] md:w-[380px] bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 transform rotate-2 transition-transform hover:rotate-0 duration-700 z-10">
                <div className="w-full h-[500px] overflow-hidden rounded-xl bg-gray-50 relative">
                    <img 
                      src="https://static.wixstatic.com/media/8f340e_f4c4c7d96432431384739706a5e41bf3~mv2.png/v1/crop/x_135,y_0,w_718,h_1080/fill/w_514,h_772,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8f340e_f4c4c7d96432431384739706a5e41bf3~mv2.png" 
                      alt="Teacher Carol Fava" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 z-20 max-w-[200px]">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <CheckCircle2 size={20} />
                   </div>
                   <div>
                      <p className="font-bold text-gray-800 text-sm leading-tight">Metodologia Validada</p>
                      <p className="text-xs text-gray-500">Foco em conversação</p>
                   </div>
                </div>

                 {/* Decorative element top right */}
                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                    <span className="text-sm">Hi!</span>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Por que escolher minha metodologia?</h2>
          <p className="text-gray-600">Não é apenas sobre gramática. É sobre se comunicar com propósito e clareza em qualquer situação.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp size={32} />,
              title: "Foco em Resultados",
              desc: "Aulas desenhadas para atingir seus objetivos específicos, seja uma apresentação, entrevista ou viagem."
            },
            {
              icon: <Users size={32} />,
              title: "100% Personalizado",
              desc: "Seu ritmo, seus interesses. O material é adaptado para sua realidade profissional e pessoal."
            },
            {
              icon: <Globe size={32} />,
              title: "Comunicação Real",
              desc: "Aprenda o inglês falado no mundo real, com expressões idiomáticas e pronúncia natural."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NEW SECTION 1: Methodology / How it works */}
      <Section className="bg-gray-900 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">O Caminho para a Fluência</h2>
            <p className="text-gray-400 text-lg mb-8">
              Minhas aulas seguem uma estrutura lógica para garantir que você saia da estagnação e veja progresso real a cada semana.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Diagnóstico Inicial</h3>
                  <p className="text-gray-400">Entendemos seu nível atual, suas dificuldades e, principalmente, onde você quer chegar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Plano Personalizado</h3>
                  <p className="text-gray-400">Criamos um roteiro de estudos que se adapta à sua rotina, focando no vocabulário que você realmente vai usar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Prática Ativa</h3>
                  <p className="text-gray-400">Muito além da teoria. Aulas de conversação dinâmica para destravar sua fala desde o primeiro dia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] bg-gray-800 rounded-2xl p-8 flex flex-col justify-center border border-gray-700">
             <div className="absolute top-4 right-4 text-gray-600">
               <Map size={48} opacity={0.2} />
             </div>
             <blockquote className="text-xl italic text-gray-300 mb-6">
               "A metodologia da Carol é diferente de tudo que já tentei. Não fico decorando regras, eu aprendo a usar o inglês no meu dia a dia de trabalho."
             </blockquote>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
               <div>
                 <p className="font-bold text-white">Roberto M.</p>
                 <p className="text-sm text-gray-500">Engenheiro de Software</p>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Audience Fit - Refactored (Removed LevelTest) */}
      <Section light className="border-y border-gray-100">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Este inglês é para você se...</h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Você se sente inseguro ao falar em reuniões.",
              "Precisa do inglês para alavancar sua carreira.",
              "Já estudou anos mas sente que 'travou'.",
              "Quer flexibilidade de horários e atendimento VIP.",
              "Busca um ambiente sem julgamentos para praticar.",
              "Precisa se preparar para uma viagem internacional."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-gray-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/about">
              <Button variant="outline">Conheça mais sobre minha história</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* NEW SECTION 2: FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold uppercase tracking-wider text-sm">Tira Dúvidas</span>
            <h2 className="text-3xl font-bold mt-2">Perguntas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "As aulas são em grupo ou individuais?", a: "Trabalho principalmente com aulas individuais (VIP) para garantir atenção total aos seus objetivos, mas também ofereço pequenos grupos de conversação." },
              { q: "Preciso comprar material didático caro?", a: "Não. Eu forneço todo o material necessário, curado de fontes internacionais (Cambridge, Oxford, TED Talks) e adaptado para você." },
              { q: "Qual a duração das aulas?", a: "As sessões têm duração de 50 minutos a 1 hora, ideais para manter o foco máximo sem cansar sua rotina." },
              { q: "E se eu precisar desmarcar?", a: "Entendo que imprevistos acontecem. Com aviso prévio de 24 horas, podemos reagendar sua aula sem custo algum." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-gray-100 hover:border-red-200 transition-colors">
                <h3 className="flex items-start gap-3 font-bold text-gray-900 text-lg mb-2">
                  <HelpCircle className="text-brand-red shrink-0 mt-1" size={20} />
                  {item.q}
                </h3>
                <p className="text-gray-600 pl-8 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Courses Preview */}
      <Section light>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-brand-red font-semibold uppercase tracking-wider text-sm">Cursos</span>
            <h2 className="text-3xl font-bold mt-2">Soluções para cada objetivo</h2>
          </div>
          <Link to="/courses" className="text-brand-red font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos os cursos <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Business English", desc: "Para reuniões, emails e liderança internacional." },
            { title: "Conversation", desc: "Ganhe fluência e naturalidade na fala." },
            { title: "Preparatório", desc: "Foco total em exames como TOEFL e IELTS." }
          ].map((course, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm group border border-gray-100 hover:border-brand-red transition-all">
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.desc}</p>
              <Link to="/courses" className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-brand-red">Saiba mais</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-red text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para dar o próximo passo?</h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Agende uma conversa gratuita de 15 minutos para nos conhecermos e traçarmos seu plano de estudos.
        </p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
          <Button variant="white" className="mx-auto">
            Falar no WhatsApp Agora
          </Button>
        </a>
      </section>
    </>
  );
};

export default Home;