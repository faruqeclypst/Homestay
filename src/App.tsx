// src/App.tsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import LandingLayout from './layouts/LandingLayout';
import Dashboard from './pages/admin/Dashboard';
import Settings from './pages/admin/Settings';
import Messages from './pages/admin/Messages';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <LandingLayout>
      <main className="flex-grow pt-navbar">
        <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/messages" element={<Messages />} />
        </Routes>
       </main>
      </LandingLayout>
    </Router>
  );
};

export default App;