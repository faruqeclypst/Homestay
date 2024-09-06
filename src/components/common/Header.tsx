// src/components/common/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <span className={`font-playfair font-bold text-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Aiza Homestay</span>
            </a>
          </div>

          <div className="hidden font-poppins md:flex items-center space-x-1">
            <button onClick={() => scrollToSection('home')} className={`py-4 px-2 font-semibold ${isScrolled ? 'text-gray-500 hover:text-green-500' : 'text-white hover:text-green-300'} transition duration-300`}>Home</button>
            <button onClick={() => scrollToSection('kamar')} className={`py-4 px-2 font-semibold ${isScrolled ? 'text-gray-500 hover:text-green-500' : 'text-white hover:text-green-300'} transition duration-300`}>Kamar</button>
            <button onClick={() => scrollToSection('fasilitas')} className={`py-4 px-2 font-semibold ${isScrolled ? 'text-gray-500 hover:text-green-500' : 'text-white hover:text-green-300'} transition duration-300`}>Fasilitas</button>
            <button onClick={() => scrollToSection('kontak')} className={`py-4 px-2 font-semibold ${isScrolled ? 'text-gray-500 hover:text-green-500' : 'text-white hover:text-green-300'} transition duration-300`}>Kontak</button>
          </div>

          {/* Mobile menu button */}
          {/* ... (kode untuk mobile menu) ... */}
        </div>
      </div>
      {/* mobile menu */}
      {/* ... (kode untuk mobile menu) ... */}
    </nav>
  );
}

export default Header;