import React from 'react';
import { BookOpen, Volume2, Moon, Gift, Calendar } from 'lucide-react';

interface BenefitsProps {
  darkMode: boolean;
}

const Benefits: React.FC<BenefitsProps> = ({ darkMode }) => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Biblioteca Encantada",
      description: "Histórias curtas e envolventes, criadas especialmente para criar momentos únicos entre pais e filhos."
    },
    {
      icon: Volume2,
      title: "Narração Profissional",
      description: "Áudio com voz humana carinhosa ou IA de alta qualidade, perfeita para a hora de dormir."
    },
    {
      icon: Moon,
      title: "Modo Noturno",
      description: "Interface escura e acolhedora para leitura confortável durante a noite, sem cansar os olhos."
    },
    {
      icon: Gift,
      title: "3 Histórias Grátis",
      description: "Experimente a magia sem compromisso! Três histórias completas para você descobrir nosso mundo."
    },
    {
      icon: Calendar,
      title: "Novidades Diárias",
      description: "Novas aventuras chegam regularmente para manter a curiosidade e imaginação sempre vivas."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-cream' : 'text-sage'
          }`}>
            <span className="text-coral">Por que</span> as famílias <span className="text-orange">nos amam?</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-cream/70' : 'text-sage/70'
          }`}>
            Cada detalhe pensado para fortalecer os laços familiares através da magia das histórias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-700/50 hover:bg-slate-600/50' 
                    : 'bg-white/80 hover:bg-white'
                } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  darkMode ? 'bg-coral/20' : 'bg-coral/10'
                }`}>
                  <Icon className="w-8 h-8 text-coral" />
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-cream' : 'text-sage'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className={`${
                  darkMode ? 'text-cream/70' : 'text-sage/70'
                } leading-relaxed`}>
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                  darkMode ? 'bg-orange/30' : 'bg-orange/20'
                } group-hover:scale-150 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-6 rounded-2xl ${
            darkMode ? 'bg-slate-700/30' : 'bg-peach-light/50'
          } backdrop-blur-sm`}>
            <p className={`text-lg md:text-xl font-medium ${
              darkMode ? 'text-cream' : 'text-sage'
            }`}>
              "Cada história é um convite ao afeto."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;