// src/pages/admin/Dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tambahkan card statistik di sini */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Total Pengunjung</h2>
          <p className="text-xl">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Pesan Masuk</h2>
          <p className="text-xl">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Kamar Tersedia</h2>
          <p className="text-xl">10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;