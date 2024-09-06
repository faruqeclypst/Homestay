// src/components/landing/Features.tsx

import React from 'react';

// Feature component untuk menampilkan fitur-fitur unggulan Aiza Homestay
const Features: React.FC = () => {
  // Array of features
  const features = [
    { title: 'Lokasi Strategis', description: 'Dekat dengan berbagai tempat wisata populer' },
    { title: 'Fasilitas Lengkap', description: 'Wi-Fi gratis, dapur, dan area parkir' },
    { title: 'Pemandangan Indah', description: 'Nikmati pemandangan alam yang memukau' },
    { title: 'Pelayanan Ramah', description: 'Staff kami siap membantu 24/7' },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kenapa Memilih Aiza Homestay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;