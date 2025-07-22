import React from 'react';
import { BookOpen, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 ${
          darkMode ? 'bg-coral' : 'bg-coral/20'
        } blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 ${
          darkMode ? 'bg-orange' : 'bg-orange/20'
        } blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main illustration placeholder */}
        <div className={`mx-auto mb-8 relative ${
          darkMode ? 'text-cream' : 'text-sage'
        }`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <BookOpen className="w-16 h-16 md:w-20 md:h-20" />
              <Heart className="absolute -top-2 -right-2 w-6 h-6 text-coral animate-pulse" />
            </div>
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-orange animate-spin" style={{animationDuration: '3s'}} />
          </div>
          
          {/* Illustration description */}
          <div className={`text-sm md:text-base mb-8 ${
            darkMode ? 'text-cream/70' : 'text-sage/70'
          }`}>
            ✨ Pais e filhos descobrindo mundos mágicos juntos ✨
          </div>
        </div>

        {/* Headlines */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
          darkMode ? 'text-cream' : 'text-sage'
        }`}>
          <span className="block text-coral">Histórias curtas</span>
          <span className="block">para momentos</span>
          <span className="block text-orange">inesquecíveis</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-2">
            com seus filhos
          </span>
        </h1>

        <p className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed ${
          darkMode ? 'text-cream/80' : 'text-sage/80'
        }`}>
          Texto e áudio para hora de dormir, imaginar e criar laços com afeto.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-orange to-coral text-white px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center">
              Assinar agora 
              <Heart className="ml-2 w-5 h-5 group-hover:animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-coral to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Trust indicators */}
        <div className={`mt-12 text-center text-sm ${
          darkMode ? 'text-cream/60' : 'text-sage/60'
        }`}>
          <div className="flex items-center justify-center space-x-6">
            <span>✨ Novidades diárias</span>
            <span>🔊 Áudio humano</span>
            <span>🎁 3 histórias grátis para experimentar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;