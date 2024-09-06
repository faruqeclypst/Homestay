// src/App.tsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import LandingLayout from './layouts/LandingLayout';
import Home from './pages/landing/Home';
import Kamar from './pages/landing/Kamar';
import Fasilitas from './pages/landing/Fasilitas';
import Kontak from './pages/landing/Kontak';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <LandingLayout>
      <main className="flex-grow pt-navbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kamar" element={<Kamar />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
       </main>
      </LandingLayout>
    </Router>
  );
};

export default App;