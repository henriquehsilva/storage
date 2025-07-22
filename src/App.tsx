import React, { useEffect, useState } from 'react';
import { Moon, Sun, BookOpen, Volume2, Heart, Gift, Calendar, Users, Baby, Crown, Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Target from './components/Target';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setDarkMode(JSON.parse(saved));
    } else {
      // Auto dark mode based on time
      const hour = new Date().getHours();
      setDarkMode(hour >= 20 || hour <= 6);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800' 
        : 'bg-gradient-to-br from-cream via-peach-light to-cream'
    }`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero darkMode={darkMode} />
      <Benefits darkMode={darkMode} />
      <Target darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      
      {/* Floating elements for magic */}
      <div className="fixed top-20 left-4 animate-bounce" style={{animationDelay: '0s'}}>
        <Sparkles className="w-4 h-4 text-coral/30" />
      </div>
      <div className="fixed top-32 right-8 animate-bounce" style={{animationDelay: '1s'}}>
        <Heart className="w-3 h-3 text-orange/40" />
      </div>
      <div className="fixed top-64 left-12 animate-bounce" style={{animationDelay: '2s'}}>
        <BookOpen className="w-3 h-3 text-sage/40" />
      </div>
    </div>
  );
}

export default App;