import React from 'react';

// Hero component
const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 flex items-center justify-center min-h-screen">
    {/* Gambar latar belakang */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=1")' }}
    ></div>
  
    {/* Overlay untuk efek gelap */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
    
    {/* Konten utama */}
    <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-4">Aiza Homestay</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Your Cozy Retreat in Takengon
      </p>
      <button className="bg-green-500 hover:bg-green-600 font-poppins px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
        Book Now
      </button>
    </div>
  </div>
  
  );
};

export default Hero;