// src/pages/Fasilitas.tsx
import React from 'react';

const Fasilitas: React.FC = () => {
  const fasilitasList = [
    { nama: 'Wi-Fi Gratis', deskripsi: 'Koneksi internet cepat di seluruh area homestay' },
    { nama: 'Parkir', deskripsi: 'Area parkir luas dan aman untuk kendaraan Anda' },
    { nama: 'Sarapan', deskripsi: 'Sarapan gratis dengan menu lokal dan internasional' },
    { nama: 'Taman', deskripsi: 'Taman yang asri untuk bersantai dan menikmati udara segar' },
    { nama: 'Laundry', deskripsi: 'Layanan laundry tersedia dengan biaya tambahan' },
    { nama: 'Tour Guide', deskripsi: 'Pemandu wisata lokal tersedia atas permintaan' }
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="font-playfair text-4xl mb-8 text-center">Fasilitas Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fasilitasList.map((fasilitas, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h2 className="font-playfair text-2xl mb-2">{fasilitas.nama}</h2>
            <p className="font-poppins">{fasilitas.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fasilitas;