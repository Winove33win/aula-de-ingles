import React, { useState } from 'react';
import { MessageSquare, Sparkles, Loader2, RefreshCw, CheckCircle } from 'lucide-react';
import Button from './Button';
import { assessEnglishLevel } from '../services/geminiService';
import { AssessmentResult } from '../types';
import { buildWhatsAppLink } from '../services/whatsapp';

const LevelTest: React.FC = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      const assessment = await assessEnglishLevel(text);
      setResult(assessment);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setText('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-2xl mx-auto">
      <div className="bg-gray-900 p-6 text-white text-center">
        <div className="flex justify-center mb-4 text-brand-red">
          <Sparkles size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Teste de Nível com IA</h3>
        <p className="text-gray-300 text-sm">
          Escreva um pequeno parágrafo em inglês sobre você, seu trabalho ou hobbies. 
          Nossa IA analisará seu nível (CEFR) instantaneamente.
        </p>
      </div>

      <div className="p-8">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="sample" className="block text-sm font-medium text-gray-700 mb-2">
                Escreva abaixo (Mín. 20 palavras):
              </label>
              <textarea
                id="sample"
                rows={5}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-red focus:border-brand-red p-3 border resize-none"
                placeholder="Ex: Hi, my name is Carol. I am an English teacher because I love languages. In my free time, I like to read books and travel..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                minLength={20}
              />
            </div>
            <Button 
              type="submit" 
              fullWidth 
              className={isLoading ? 'opacity-70 cursor-not-allowed' : ''}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Analisando...
                </>
              ) : (
                'Verificar meu Nível'
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-6 text-center animate-fade-in-up">
            <div className="bg-green-50 text-green-800 p-4 rounded-lg inline-flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-semibold">Análise Concluída</span>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Seu Nível Estimado</p>
              <h4 className="text-4xl font-bold text-brand-red mb-4">{result.cefrLevel}</h4>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-brand-red pl-4 text-left bg-gray-50 p-4 rounded-r-lg">
                "{result.feedback}"
              </p>
            </div>

            <div className="bg-gray-900 text-white p-4 rounded-lg">
              <p className="text-xs text-gray-400 uppercase mb-1">Recomendação</p>
              <p className="font-bold text-lg">{result.recommendedCourse}</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleReset} variant="outline" fullWidth>
                <RefreshCw size={18} /> Tentar Novamente
              </Button>
              <a 
                href={buildWhatsAppLink(`Olá! Fiz o teste no site e meu nível deu ${result.cefrLevel}. Gostaria de saber mais sobre o curso ${result.recommendedCourse}.`)}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <Button fullWidth>Agendar Aula</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevelTest;
