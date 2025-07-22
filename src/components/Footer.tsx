import React from 'react';
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-16 px-4 ${
      darkMode ? 'bg-slate-800/50' : 'bg-sage/5'
    } backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="text-center mb-12">
          {/* Brand */}
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-coral mr-3" />
            <h3 className={`text-2xl md:text-3xl font-bold ${
              darkMode ? 'text-cream' : 'text-sage'
            }`}>
              Historinhas Encantadas
            </h3>
          </div>

          {/* Impact phrase */}
          <div className={`text-xl md:text-2xl font-medium mb-8 p-6 rounded-2xl ${
            darkMode ? 'bg-slate-700/30' : 'bg-white/50'
          } backdrop-blur-sm border ${
            darkMode ? 'border-slate-600' : 'border-white/50'
          }`}>
            <span className="text-coral">"Cada história é um convite ao afeto."</span>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className={`font-semibold mb-4 ${
                darkMode ? 'text-cream' : 'text-sage'
              }`}>
                Contato
              </h4>
              <div className="space-y-2">
                <a href="https://chat.whatsapp.com/B4vtMwH58bTK0qcs8TvQr4" target="_blank"
                   className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition"
                >
                  Entrar no grupo do Storge no WhatsApp
                </a>              
              </div>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${
                darkMode ? 'text-cream' : 'text-sage'
              }`}>
                Redes Sociais
              </h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                    darkMode ? 'bg-slate-700/50 hover:bg-coral/20' : 'bg-white/50 hover:bg-coral/10'
                  } backdrop-blur-sm`}
                >
                  <Instagram className="w-5 h-5 text-coral" />
                </a>
                <a 
                  href="#" 
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                    darkMode ? 'bg-slate-700/50 hover:bg-coral/20' : 'bg-white/50 hover:bg-coral/10'
                  } backdrop-blur-sm`}
                >
                  <Facebook className="w-5 h-5 text-coral" />
                </a>
              </div>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${
                darkMode ? 'text-cream' : 'text-sage'
              }`}>
                Links Úteis
              </h4>
              <div className="space-y-2">
                <a 
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block hover:text-coral transition-colors ${
                    darkMode ? 'text-cream/70' : 'text-sage/70'
                  }`}
                >
                  Nossa página no Substack
                </a>
                <a 
                  href="#"
                  className={`block hover:text-coral transition-colors ${
                    darkMode ? 'text-cream/70' : 'text-sage/70'
                  }`}
                >
                  Termos de Uso
                </a>
                <a 
                  href="#"
                  className={`block hover:text-coral transition-colors ${
                    darkMode ? 'text-cream/70' : 'text-sage/70'
                  }`}
                >
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className={`p-8 rounded-3xl ${
            darkMode ? 'bg-slate-700/30' : 'bg-gradient-to-r from-peach-light/30 to-cream/50'
          } backdrop-blur-sm border ${
            darkMode ? 'border-slate-600' : 'border-white/50'
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-cream' : 'text-sage'
            }`}>
              🌟 Comece sua jornada mágica hoje mesmo! 🌟
            </h4>
            <p className={`mb-6 ${
              darkMode ? 'text-cream/70' : 'text-sage/70'
            }`}>
              Junte-se a milhares de famílias que já descobriram o poder transformador das histórias
            </p>
            <a 
              href="https://substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-coral to-orange text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Assinar no Substack
              <Heart className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center pt-8 border-t ${
          darkMode ? 'border-slate-700 text-cream/50' : 'border-sage/20 text-sage/50'
        }`}>
          <p className="text-sm">
            © 2025 Storage. Feito com ❤️ para conectar famílias através das histórias.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;