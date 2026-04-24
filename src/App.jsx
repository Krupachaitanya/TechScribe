import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseView from './pages/CourseView';
import CompilerPage from './pages/CompilerPage';
import Footer from './components/Footer';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const wrapper = document.querySelector('.main-content-wrapper');
    if (wrapper) {
      wrapper.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* 3D Ambient Background Elements */}
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="app-layout">
        <Navbar />
        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech/:techId" element={<CourseView />} />
            <Route path="/compiler" element={<CompilerPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
