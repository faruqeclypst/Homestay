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
    
    const pesanFormat = `
*Pesan Baru dari Website*
------------------------
*Nama:* ${nama}
*Email:* ${email}
*Pesan:*
${pesan}
------------------------
    `.trim();
  
    const pesanEncoded = encodeURIComponent(pesanFormat);
    
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;
  
    window.open(urlWhatsApp, '_blank');
  
    setNama('');
    setEmail('');
    setPesan('');
    setIsSubmitting(false);
  };

  const kontakList = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500 mr-4 text-xl" />,
      info: "Jl. Contoh No. 123, Kota, Negara"
    },
    {
      icon: <FaWhatsapp className="text-blue-500 mr-4 text-xl" />,
      info: "+62 123 4567 890"
    },
    {
      icon: <FaEnvelope className="text-blue-500 mr-4 text-xl" />,
      info: "info@aizahomestay.com"
    },
    {
      icon: <FaClock className="text-blue-500 mr-4 text-xl" />,
      info: "Senin - Minggu, 24 jam"
    }
  ];

  return (
    <div id='kontak' className="pt-20 container bg-white mx-auto px-6 py-10">
      <h1 className="text-gray-800 text-4xl font-bold mb-8 text-center">Hubungi Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2774192349696!2d106.82862931476882!3d-6.227283395493398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4758b7327%3A0x4a473a8f3c1de08f!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1637135032045!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          <div className="p-6">
            <h2 className="font-playfair text-2xl mb-4">Informasi Kontak</h2>
            {kontakList.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                {item.icon}
                <p className="font-poppins">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="font-playfair text-2xl mb-4">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nama" className="block font-poppins mb-2">Nama</label>
                <input
                  type="text"
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md font-poppins"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-poppins mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md font-poppins"
                  required
                />
              </div>
              <div>
                <label htmlFor="pesan" className="block font-poppins mb-2">Pesan</label>
                <textarea
                  id="pesan"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md font-poppins"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full bg-blue-500 text-white font-poppins py-2 px-4 rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
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