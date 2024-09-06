import React from 'react';
import Hero from '../../components/landing/Hero';
import Features from '../../components/landing/Features';
import Testimonials from '../../components/landing/Testimonials';
import Kamar from '../../pages/landing/Kamar';
import Fasilitas from '../../pages/landing/Fasilitas';
import Kontak from '../../pages/landing/Kontak';



const Home: React.FC = () => {
  return (
    <div className="-mt-16"> {/* Menghapus padding top untuk halaman home */}
      <Hero />
      <Features />
      <Testimonials />
      <Kamar />
      <Fasilitas />
      <Kontak />
    </div>
  );
};

export default Home;