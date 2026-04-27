import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { ContentProvider } from './context/ContentContext';
import './i18n';

export default function App() {
  return (
    <ContentProvider>
      <Router>
        <div className="min-h-screen bg-black flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  );
}
