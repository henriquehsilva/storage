import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
        darkMode 
          ? 'bg-slate-700/80 text-cream hover:bg-slate-600/90' 
          : 'bg-white/80 text-sage hover:bg-white/90'
      } backdrop-blur-sm shadow-lg border ${
        darkMode ? 'border-slate-600' : 'border-white/50'
      }`}
      title={darkMode ? 'Modo claro' : 'Modo noturno'}
    >
      {darkMode ? (
        <span></span>
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;