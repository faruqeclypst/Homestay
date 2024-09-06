// src/components/landing/Testimonials.tsx

import React from 'react';

// Testimonial component untuk menampilkan testimoni dari tamu
const Testimonials: React.FC = () => {
  // Array of testimonials
  const testimonials = [
    { name: 'John Doe', comment: 'Pengalaman menginap yang luar biasa! Pemandangan dan pelayanannya top.' },
    { name: 'Jane Smith', comment: 'Aiza Homestay adalah tempat yang sempurna untuk liburan keluarga.' },
    { name: 'Mike Johnson', comment: 'Saya pasti akan kembali lagi. Terima kasih atas keramahan yang luar biasa!' },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-800 text-3xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 mb-4">"{testimonial.comment}"</p>
              <p className="text-gray-800 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;