import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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

  const getNavbarClass = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
    }
    return 'bg-white shadow-lg';
  };

  const getLinkClass = (isActive: boolean) => {
    if (isHomePage) {
      return isScrolled
        ? `text-gray-500 ${isActive ? 'text-green-500' : 'hover:text-green-500'}`
        : `text-white ${isActive ? 'text-green-300' : 'hover:text-green-300'}`;
    }
    return `text-gray-500 ${isActive ? 'text-green-500' : 'hover:text-green-500'}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 h-16 ${getNavbarClass()}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <span className={`font-playfair font-bold text-lg ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-800'}`}>Aiza Homestay</span>
            </a>
          </div>

          <div className="hidden font-poppins md:flex items-center space-x-1">
            <Link to="/" className={`py-4 px-2 font-semibold ${getLinkClass(location.pathname === '/')} transition duration-300`}>Home</Link>
            <Link to="/kamar" className={`py-4 px-2 font-semibold ${getLinkClass(location.pathname === '/kamar')} transition duration-300`}>Kamar</Link>
            <Link to="/fasilitas" className={`py-4 px-2 font-semibold ${getLinkClass(location.pathname === '/fasilitas')} transition duration-300`}>Fasilitas</Link>
            <Link to="/kontak" className={`py-4 px-2 font-semibold ${getLinkClass(location.pathname === '/kontak')} transition duration-300`}>Kontak</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className={`w-6 h-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-500'} hover:text-green-500`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} md:hidden`}>
        <ul className={isHomePage && !isScrolled ? 'bg-gray-800' : 'bg-white'}>
          <li className="active"><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="#services" className={`block text-sm px-2 py-4 ${isHomePage && !isScrolled ? 'text-white hover:bg-gray-700' : 'hover:bg-green-500 hover:text-white'} transition duration-300`}>Services</a></li>
          <li><a href="#about" className={`block text-sm px-2 py-4 ${isHomePage && !isScrolled ? 'text-white hover:bg-gray-700' : 'hover:bg-green-500 hover:text-white'} transition duration-300`}>About</a></li>
          <li><a href="#contact" className={`block text-sm px-2 py-4 ${isHomePage && !isScrolled ? 'text-white hover:bg-gray-700' : 'hover:bg-green-500 hover:text-white'} transition duration-300`}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;