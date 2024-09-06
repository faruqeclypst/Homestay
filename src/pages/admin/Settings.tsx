// src/pages/admin/Settings.tsx

import React, { useState, useEffect } from 'react';

const Settings: React.FC = () => {
  const [siteName, setSiteName] = useState('');
  const [siteEmail, setSiteEmail] = useState('');

  useEffect(() => {
    // Ambil pengaturan saat ini dari API
    fetch('/api/settings')
      .then((response) => response.json())
      .then((data) => {
        setSiteName(data.siteName);
        setSiteEmail(data.siteEmail);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kirim data baru ke API
    fetch('/api/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ siteName, siteEmail }),
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Pengaturan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2" htmlFor="siteName">Nama Website</label>
          <input
            type="text"
            id="siteName"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="siteEmail">Email Kontak</label>
          <input
            type="email"
            id="siteEmail"
            value={siteEmail}
            onChange={(e) => setSiteEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default Settings;