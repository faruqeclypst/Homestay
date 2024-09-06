// src/components/landing/Testimonials.tsx

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // Pastikan Anda telah menginstal react-icons

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { 
      name: 'John Doe', 
      comment: 'Pengalaman menginap yang luar biasa! Pemandangan dan pelayanannya top.', 
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5
    },
    { 
      name: 'Jane Smith', 
      comment: 'Aiza Homestay adalah tempat yang sempurna untuk liburan keluarga.', 
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 4
    },
    { 
      name: 'Mike Johnson', 
      comment: 'Saya pasti akan kembali lagi. Terima kasih atas keramahan yang luar biasa!', 
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 5
    },
    { 
      name: 'Alfaruq Asri', 
      comment: 'Wah mantap keren, pengen balik lagi!', 
      avatar: 'https://i.pravatar.cc/150?img=4',
      rating: 5
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-800 text-4xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
        <div className="relative">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <p className="text-gray-800 mb-4 text-center">"{testimonial.comment}"</p>
                  <p className="text-gray-800 font-semibold mb-2">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;