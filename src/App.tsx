// src/App.tsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/landing/Home';
import Kamar from './pages/Kamar';
import Fasilitas from './pages/Fasilitas';
import Kontak from './pages/Kontak';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-navbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kamar" element={<Kamar />} />
            <Route path="/fasilitas" element={<Fasilitas />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;