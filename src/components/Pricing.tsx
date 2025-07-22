import React from 'react';
import { Check, Heart, Crown, Gift } from 'lucide-react';

interface PricingProps {
  darkMode: boolean;
}

const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  const plans = [
    {
      name: "Plano Mensal",
      price: "R$ 14,90",
      period: "/mês",
      description: "Perfeito para começar a criar memórias especiais",
      features: [
        "Acesso completo à biblioteca",
        "Narrativas em áudio",
        "Modo noturno",
        "Novidades semanais",
        "Suporte prioritário"
      ],
      icon: Heart,
      gradient: "from-coral to-peach-light",
      popular: false
    },
    {
      name: "Plano Anual",
      price: "R$ 99,90",
      period: "/ano",
      description: "Melhor valor! Economia de mais de 40%",
      originalPrice: "R$ 178,80",
      features: [
        "Tudo do plano mensal",
        "2 meses completamente grátis",
        "Histórias exclusivas de temporada",
        "Acesso antecipado a novidades",
        "Kit de atividades para imprimir",
        "Grupo VIP no WhatsApp"
      ],
      icon: Crown,
      gradient: "from-orange to-coral",
      popular: true
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-cream' : 'text-sage'
          }`}>
            <span className="text-coral">Escolha seu</span> plano de <span className="text-orange">histórias</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-cream/70' : 'text-sage/70'
          }`}>
            Investimento acessível para momentos preciosos que duram para sempre
          </p>
          
          {/* Free trial highlight */}
          <div className={`inline-flex items-center px-6 py-3 mt-6 rounded-full ${
            darkMode ? 'bg-orange/20' : 'bg-orange/10'
          } border-2 border-orange/30`}>
            <Gift className="w-5 h-5 text-orange mr-2" />
            <span className={`font-medium ${darkMode ? 'text-cream' : 'text-sage'}`}>
              🎁 3 histórias grátis para experimentar - sem compromisso!
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? darkMode 
                      ? 'bg-slate-600/60 border-2 border-orange' 
                      : 'bg-white border-2 border-orange shadow-2xl'
                    : darkMode 
                      ? 'bg-slate-700/50' 
                      : 'bg-white/90'
                } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r ${plan.gradient} text-white font-semibold text-sm shadow-lg`}>
                    ⭐ Mais Popular ⭐
                  </div>
                )}

                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${plan.gradient} opacity-5 rounded-bl-full`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${plan.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan name */}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-cream' : 'text-sage'
                  }`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className={`text-4xl md:text-5xl font-bold ${
                        darkMode ? 'text-cream' : 'text-sage'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-1 ${
                        darkMode ? 'text-cream/60' : 'text-sage/60'
                      }`}>
                        {plan.period}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="flex items-center mt-2">
                        <span className={`text-lg line-through ${
                          darkMode ? 'text-cream/40' : 'text-sage/40'
                        }`}>
                          {plan.originalPrice}
                        </span>
                        <span className="ml-2 px-2 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm rounded-full font-semibold">
                          40% OFF
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`mb-6 ${
                    darkMode ? 'text-cream/70' : 'text-sage/70'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${
                          darkMode ? 'text-cream/80' : 'text-sage/80'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href="https://henriquesilva.substack.com/subscribe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group block w-full text-center py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg`
                        : darkMode
                          ? 'bg-slate-600 text-cream hover:bg-slate-500'
                          : 'bg-sage text-white hover:bg-sage/90'
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      Começar agora
                      <Heart className="ml-2 w-5 h-5 group-hover:animate-pulse" />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className={`text-sm ${
            darkMode ? 'text-cream/60' : 'text-sage/60'
          }`}>
            ✨ Cancele a qualquer momento • 💳 Pagamento seguro via Substack • 📱 Acesso em todos os dispositivos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;