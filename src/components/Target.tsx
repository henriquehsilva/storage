import React from 'react';
import { Users, Baby, Crown } from 'lucide-react';

interface TargetProps {
  darkMode: boolean;
}

const Target: React.FC<TargetProps> = ({ darkMode }) => {
  const targets = [
    {
      icon: Users,
      title: "Pais e Mães",
      subtitle: "Com crianças de 2 a 10 anos",
      description: "Para famílias que buscam momentos especiais de conexão através da leitura e imaginação.",
      gradient: "from-coral to-peach-light"
    },
    {
      icon: Crown,
      title: "Avós Carinhosos",
      subtitle: "Tios e Tias Especiais",
      description: "Perfeito para criar memórias afetivas únicas com os pequenos da família.",
      gradient: "from-orange to-coral"
    },
    {
      icon: Baby,
      title: "Cuidadores",
      subtitle: "Educadores e Babás",
      description: "Ferramentas especiais para quem dedica amor e cuidado ao desenvolvimento infantil.",
      gradient: "from-sage to-peach-light"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-cream' : 'text-sage'
          }`}>
            <span className="text-orange">Feito especialmente</span> para quem <span className="text-coral">ama</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-cream/70' : 'text-sage/70'
          }`}>
            Histórias que conectam gerações e fortalecem laços familiares
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, index) => {
            const Icon = target.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-700/50 hover:bg-slate-600/60' 
                    : 'bg-white/90 hover:bg-white'
                } backdrop-blur-sm shadow-lg hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${target.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${target.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-cream' : 'text-sage'
                  }`}>
                    {target.title}
                  </h3>
                  
                  <h4 className={`text-lg font-medium mb-4 ${
                    darkMode ? 'text-coral' : 'text-coral'
                  }`}>
                    {target.subtitle}
                  </h4>
                  
                  <p className={`${
                    darkMode ? 'text-cream/70' : 'text-sage/70'
                  } leading-relaxed`}>
                    {target.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${target.gradient} opacity-30 group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className={`absolute top-8 right-8 w-2 h-2 rounded-full bg-gradient-to-r ${target.gradient} opacity-20 group-hover:scale-125 transition-transform duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className={`inline-block p-6 md:p-8 rounded-3xl ${
            darkMode ? 'bg-slate-700/30' : 'bg-gradient-to-r from-peach-light/50 to-cream/50'
          } backdrop-blur-sm border ${darkMode ? 'border-slate-600' : 'border-white/50'}`}>
            <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${
              darkMode ? 'text-cream' : 'text-sage'
            }`}>
              🌟 Famílias que valorizam conexão e imaginação 🌟
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-cream/70' : 'text-sage/70'
            }`}>
              Junte-se a milhares de famílias que já descobriram a magia de compartilhar histórias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;