import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Kontak: React.FC = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Simulasi pengiriman pesan (ganti dengan logika pengiriman sebenarnya)
    await new Promise(resolve => setTimeout(resolve, 2000));
  
    const nomorWhatsApp = '+6282285134141';
    
    // Membuat pesan dengan format yang lebih rapi
    const pesanFormat = `
  *Pesan Baru dari Website*
  ------------------------
  *Nama:* ${nama}
  *Email:* ${email}
  *Pesan:*
  ${pesan}
  ------------------------
    `.trim();
  
    // Menggunakan encodeURIComponent untuk seluruh pesan
    const pesanEncoded = encodeURIComponent(pesanFormat);
    
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;
  
    window.open(urlWhatsApp, '_blank');
  
    setNama('');
    setEmail('');
    setPesan('');
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="font-playfair text-5xl mb-12 text-center text-gray-800">Hubungi Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="font-playfair text-3xl mb-6 text-gray-800">Informasi Kontak</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-4 text-xl" />
                <p className="font-poppins">Jl. Contoh No. 123, Kota, Negara</p>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-blue-500 mr-4 text-xl" />
                <p className="font-poppins">+62 123 4567 890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-4 text-xl" />
                <p className="font-poppins">info@aizahomestay.com</p>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-500 mr-4 text-xl" />
                <p className="font-poppins">Senin - Minggu, 24 jam</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="font-playfair text-3xl mb-6 text-gray-800">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nama" className="block font-poppins mb-2 text-gray-700">Nama</label>
                <input
                  type="text"
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md font-poppins focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-poppins mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md font-poppins focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="pesan" className="block font-poppins mb-2 text-gray-700">Pesan</label>
                <textarea
                  id="pesan"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md font-poppins focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full bg-blue-500 text-white font-poppins py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;