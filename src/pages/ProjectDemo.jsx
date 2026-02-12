import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import StarWarp from './components/StarWarp';
import PixelButton from './components/PixelButton';
import { Terminal } from 'lucide-react';

// Pages
import Home from './pages/Home';
import ProjectDemo from './pages/ProjectDemo';

// This component handles the Animation Logic based on route location
const AnimatedRoutes = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/demo/:id" element={<ProjectDemo />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="scanlines" style={{ position: 'relative', minHeight: '100vh' }}>
        
        {/* BACKGROUND REMAINS FIXED OUTSIDE ROUTES TO PREVENT RESET */}
        <StarWarp />
        
        {/* Navbar */}
        <nav style={{ 
          padding: '20px 40px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(5px)',
          borderBottom: '2px solid #fff',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ background: '#fff', padding: '5px' }}>
              <Terminal size={20} color="black" />
            </div>
            <span>DEV_OP_SYSTEM</span>
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
             {/* Simple link back to home for logo/nav */}
             <a href="/" style={{ textDecoration: 'none' }}>
                <PixelButton className="nav-btn">HOME</PixelButton>
             </a>
          </div>
        </nav>

        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          <AnimatedRoutes />
        </main>
        
        <footer style={{ 
          textAlign: 'center', 
          padding: '40px', 
          background: '#000', 
          borderTop: '2px solid #333',
          position: 'relative',
          zIndex: 10,
          color: '#555',
          fontSize: '10px'
        }}>
          <p>SYSTEM STATUS: NORMAL | © 2024</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;