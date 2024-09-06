import React from 'react';
import wifiImage from '../../assets/img/wifi.jpeg';
import parkirImage from '../../assets/img/parkir.jpg';
import sarapanImage from '../../assets/img/fnb.jpeg';
import tamanImage from '../../assets/img/taman.jpeg';
import laundryImage from '../../assets/img/laundry.jpeg';
import tourGuideImage from '../../assets/img/tourguide.jpeg';

const Fasilitas: React.FC = () => {
  const fasilitasList = [
    {
      nama: 'Wi-Fi Gratis',
      deskripsi: 'Koneksi internet cepat di seluruh area homestay',
      gambar: wifiImage
    },
    {
      nama: 'Parkir',
      deskripsi: 'Area parkir luas dan aman untuk kendaraan Anda',
      gambar: parkirImage
    },
    {
      nama: 'Sarapan',
      deskripsi: 'Sarapan gratis dengan menu lokal dan internasional',
      gambar: sarapanImage
    },
    {
      nama: 'Taman',
      deskripsi: 'Taman yang asri untuk bersantai dan menikmati udara segar',
      gambar: tamanImage
    },
    {
      nama: 'Laundry',
      deskripsi: 'Layanan laundry tersedia dengan biaya tambahan',
      gambar: laundryImage
    },
    {
      nama: 'Tour Guide',
      deskripsi: 'Pemandu wisata lokal tersedia atas permintaan',
      gambar: tourGuideImage
    }
  ];

  return (
    <div id='fasilitas' className="pt-20 container bg-white mx-auto px-6 py-10">
      <h1 className="text-gray-800 text-4xl font-bold mb-8 text-center">Fasilitas Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fasilitasList.map((fasilitas, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={fasilitas.gambar} alt={fasilitas.nama} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="font-playfair text-2xl mb-2">{fasilitas.nama}</h2>
              <p className="font-poppins">{fasilitas.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fasilitas;