import React from 'react';
import './Contact.css';
import PixelButton from './PixelButton';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-decoration-top"></div>
        <div className="contact-decoration-bottom"></div>

        <h2 className="contact-title">ESTABLISH CONNECTION?</h2>
        <p className="contact-description">
          I am currently available for freelance work and full-time opportunities.
          Initialize a communication channel below.
        </p>
        
        <div className="contact-social-links">
          <a href="#" className="contact-social-link hover-scale">
            <Github size={40} />
          </a>
          <a href="#" className="contact-social-link hover-scale">
            <Linkedin size={40} />
          </a>
          <a href="#" className="contact-social-link hover-scale">
            <Mail size={40} />
          </a>
        </div>
        
        <PixelButton onClick={() => window.location.href = "mailto:email@example.com"}>
          SEND_MESSAGE
        </PixelButton>
      </div>
    </section>
  );
};

export default Contact;