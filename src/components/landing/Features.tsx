// src/components/landing/Features.tsx

import React from 'react';
import Button from '../common/Button';
import useWhatsAppLink from '../../hooks/useWhatsAppLink';

const Features: React.FC = () => {
  const openWhatsApp = useWhatsAppLink();

  const features = [
    { title: 'Lokasi Strategis', description: 'Dekat dengan berbagai tempat wisata populer' },
    { title: 'Fasilitas Lengkap', description: 'Wi-Fi gratis, dapur, dan area parkir' },
    { title: 'Pemandangan Indah', description: 'Nikmati pemandangan alam yang memukau' },
    { title: 'Pelayanan Ramah', description: 'Staff kami siap membantu 24/7' },
  ];

  return (
    <section className="py-16 bg-brown text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Kenapa Memilih Aiza Homestay?</h2>
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 flex items-center">
            <img 
              src="https://images.pexels.com/photos/6957067/pexels-photo-6957067.jpeg" 
              alt="Aiza Homestay" 
              className="w-full object-cover rounded-lg shadow-lg"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
        <div className="text-center">
          <Button onClick={() => openWhatsApp()}>
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;