// src/pages/Kamar.tsx
import React from 'react';

const Kamar: React.FC = () => {
  const kamarList = [
    { nama: 'Kamar Standar', harga: 'Rp 500.000', kapasitas: '2 orang', fasilitas: 'AC, TV, Wi-Fi' },
    { nama: 'Kamar Deluxe', harga: 'Rp 750.000', kapasitas: '2 orang', fasilitas: 'AC, TV, Wi-Fi, Minibar' },
    { nama: 'Suite', harga: 'Rp 1.200.000', kapasitas: '4 orang', fasilitas: 'AC, TV, Wi-Fi, Dapur, Ruang Tamu' },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="font-playfair text-4xl mb-8 text-center">Kamar Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kamarList.map((kamar, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={`/path/to/${kamar.nama.toLowerCase().replace(' ', '-')}.jpg`} alt={kamar.nama} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="font-playfair text-2xl mb-2">{kamar.nama}</h2>
              <p className="font-poppins mb-2">Harga: {kamar.harga} / malam</p>
              <p className="font-poppins mb-2">Kapasitas: {kamar.kapasitas}</p>
              <p className="font-poppins">Fasilitas: {kamar.fasilitas}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kamar;