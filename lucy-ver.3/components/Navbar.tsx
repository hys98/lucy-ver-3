import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-full opacity-90" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-neon-purple transition-colors">
            Lucy Knows
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#developers" className="hover:text-white transition-colors">Developers</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Sign In</a>
          <button className="px-5 py-2.5 rounded-full bg-neon-purple text-white text-sm font-semibold hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center gap-2 group">
            Request Demo
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/10 p-6 flex flex-col space-y-4">
          <a href="#" className="text-gray-300 hover:text-white">Product</a>
          <a href="#" className="text-gray-300 hover:text-white">Solutions</a>
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <button className="w-full py-3 rounded-lg bg-neon-purple text-white font-semibold">
            Request Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;