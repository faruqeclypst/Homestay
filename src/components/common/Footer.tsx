// src/components/common/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-playfair text-xl mb-3">Aiza Homestay</h3>
            <p className="font-poppins">Nikmati kenyamanan seperti di rumah sendiri dengan pemandangan alam yang memukau.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-playfair text-lg mb-3">Link Cepat</h4>
            <ul className="font-poppins">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/kamar">Kamar</Link></li>
              <li><Link to="/fasilitas">Fasilitas</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-playfair text-lg mb-3">Kontak</h4>
            <p className="font-poppins">Jl. Contoh No. 123, Kota, Negara</p>
            <p className="font-poppins">Telp: +62 123 4567 890</p>
            <p className="font-poppins">Email: info@aizahomestay.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;