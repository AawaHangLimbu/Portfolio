import React from 'react';
import './Hero.css';
import PixelButton from './PixelButton';
import { Github, Linkedin } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero-section">
      <div className="avatar-container">
        <div className="avatar-decoration"></div>
        <img 
          src="https://api.dicebear.com/9.x/pixel-art/svg?seed=BW&backgroundColor=000000" 
          alt="Avatar"
          className="avatar-image"
        />
      </div>
      
      <h1 className="hero-title">
        BUILDING THE FUTURE<br/>
        <span className="hero-subtitle">ONE PIXEL AT A TIME</span>
      </h1>
      
      <div className="hero-actions">
        <PixelButton onClick={() => scrollToSection('projects')}>
          INITIALIZE
        </PixelButton>
        <div className="hero-divider"></div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
          <Github className="hover-scale" size={32} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
          <Linkedin className="hover-scale" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;