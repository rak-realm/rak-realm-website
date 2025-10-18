'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Music2, Users, Bot, Ticket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Music2 className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold gradient-text">Rak Realm</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
            <a href="#discord" className="text-gray-300 hover:text-white transition-colors font-medium">Discord</a>
            <a href="#social" className="text-gray-300 hover:text-white transition-colors font-medium">Social</a>
            
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Join Discord
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 animate-slideIn">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium py-2">About</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium py-2">Features</a>
              <a href="#discord" className="text-gray-300 hover:text-white transition-colors font-medium py-2">Discord</a>
              <a href="#social" className="text-gray-300 hover:text-white transition-colors font-medium py-2">Social</a>
              
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Join Discord
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}