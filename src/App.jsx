import React from 'react';
import StarBackground from './components/StarBackground';
import PixelCard from './components/PixelCard';
import PixelButton from './components/PixelButton';
import { Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <StarBackground />
      
      {/* Navbar */}
      <nav style={{ 
        padding: '20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '4px solid var(--text-color)',
        background: 'rgba(13, 14, 21, 0.9)'
      }}>
        <div style={{ color: 'var(--accent-yellow)', fontSize: '20px' }}>
          <Gamepad2 style={{ display: 'inline', marginRight: '10px' }} />
          DEV_PLAYER_1
        </div>
        <div className="nav-links">
           {/* Hidden on mobile for simplicity, usually needs a hamburger menu */}
           <a href="#projects" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Projects</a>
           <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '100px 0' }}>
          <div style={{ 
            width: '150px', 
            height: '150px', 
            background: '#fff', 
            margin: '0 auto 30px',
            imageRendering: 'pixelated',
            border: '4px solid #fff',
            boxShadow: '10px 10px 0 #000'
          }}>
            {/* Placeholder for a pixel avatar */}
            <img 
              src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Felix" 
              alt="Pixel Avatar"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          
          <h1 style={{ fontSize: '40px', color: 'var(--accent-cyan)', textShadow: '4px 4px #000' }}>
            HELLO WORLD
          </h1>
          <p style={{ lineHeight: '2' }}>
            I build interactive web experiences.<br/>
            Level 10 Full Stack Developer.
          </p>
          
          <div style={{ marginTop: '40px' }}>
            <PixelButton onClick={() => scrollToSection('projects')}>View Work</PixelButton>
            <PixelButton variant="secondary" onClick={() => scrollToSection('contact')}>Contact</PixelButton>
          </div>
        </section>

        {/* Skills Section */}
        <PixelCard title="STATS / SKILLS">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {['React', 'Vite', 'NodeJS', 'CSS3', 'Pixel Art'].map(skill => (
              <span key={skill} style={{ 
                background: '#333', 
                padding: '10px', 
                border: '2px solid var(--accent-cyan)',
                fontSize: '12px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </PixelCard>

        {/* Projects Section */}
        <section id="projects" style={{ paddingTop: '50px' }}>
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '30px' }}>
            
          </h2>
          
          <div style={{ display: 'grid', gap: '30px' }}>
            <PixelCard title="PROJECT_01">
              <p>A retro-themed e-commerce store built with React and Stripe.</p>
              <br/>
              <div style={{ fontSize: '12px', color: '#aaa' }}>Tech: React, Redux, Node</div>
              <div style={{ marginTop: '20px' }}>
                <PixelButton>DEMO</PixelButton>
              </div>
            </PixelCard>

            <PixelCard title="PROJECT_02">
              <p>Real-time chat application using WebSockets and Pixel UI.</p>
              <br/>
              <div style={{ fontSize: '12px', color: '#aaa' }}>Tech: Socket.io, Express</div>
              <div style={{ marginTop: '20px' }}>
                <PixelButton>DEMO</PixelButton>
              </div>
            </PixelCard>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '100px 0', textAlign: 'center' }}>
          <PixelCard title="GAME OVER?">
            <p>Ready to start a new game? Send me a message.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
              <a href="#" style={{ color: '#fff' }}><Github size={40} /></a>
              <a href="#" style={{ color: '#fff' }}><Linkedin size={40} /></a>
              <a href="#" style={{ color: '#fff' }}><Mail size={40} /></a>
            </div>
          </PixelCard>
        </section>

      </main>
      
      <footer style={{ textAlign: 'center', padding: '40px', fontSize: '10px', color: '#666' }}>
        PRESS START TO CONTINUE © 2024
      </footer>
    </div>
  );
}

export default App;