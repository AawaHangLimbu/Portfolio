import React from 'react';
import './Navbar.css';
import PixelButton from './PixelButton';
import { Terminal } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">
          <Terminal size={20} color="black" />
        </div>
        <span>AAWAHANG_LIMBU</span>
      </div>
      
      <div className="navbar-links">
        <PixelButton onClick={() => scrollToSection('projects')}>
          PROJECTS
        </PixelButton>
        <PixelButton onClick={() => scrollToSection('contact')}>
          CONTACT
        </PixelButton>
      </div>
    </nav>
  );
};

export default Navbar;1