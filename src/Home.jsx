import React from 'react';
import { useNavigate } from 'react-router-dom'; // Used for navigation
import PixelCard from '../components/PixelCard';
import PixelButton from '../components/PixelButton';
import PageTransition from '../components/PageTransition';
import { Github, Linkedin, Mail, Monitor, Code2, Terminal } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center' 
      }}>
        <div className="hover-scale" style={{ 
          width: '180px', 
          height: '180px', 
          background: '#000', 
          marginBottom: '40px',
          border: '4px solid #fff',
          boxShadow: '15px 15px 0 rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
           <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', height: '2px', background: 'rgba(255,255,255,0.2)'}}></div>
           <img 
            src="https://api.dicebear.com/9.x/pixel-art/svg?seed=BW&backgroundColor=000000" 
            alt="Avatar"
            style={{ width: '100%', height: '100%', filter: 'grayscale(100%) contrast(1.5)' }}
          />
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(24px, 5vw, 56px)', 
          marginBottom: '30px', 
          lineHeight: '1.2',
          textShadow: '4px 4px 0px #333' 
        }}>
          BUILDING THE FUTURE<br/>
          <span style={{ fontSize: '0.6em', color: '#aaa' }}>ONE PIXEL AT A TIME</span>
        </h1>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <PixelButton onClick={() => scrollToSection('projects')}>INITIALIZE</PixelButton>
          <div style={{ width: '2px', background: '#333', height: '50px' }}></div>
          <a href="#" className="hover-scale" style={{ color: 'white' }}><Github size={32} /></a>
          <a href="#" className="hover-scale" style={{ color: 'white' }}><Linkedin size={32} /></a>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" style={{ paddingTop: '80px', marginBottom: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
          <Monitor size={32} style={{ marginRight: '20px' }} />
          <h2 style={{ fontSize: '24px', margin: 0 }}>ACTIVE_PROJECTS</h2>
          <div style={{ flex: 1, height: '4px', background: '#fff', marginLeft: '20px', opacity: 0.3 }}></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          
          <PixelCard title="PROJECT_ALPHA">
            <div style={{ height: '150px', background: '#111', marginBottom: '20px', border: '2px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={40} color="#333" />
            </div>
            <h3 style={{ marginTop: 0 }}>E-COMMERCE ENGINE</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
              A high-performance headless e-commerce solution.
            </p>
            {/* LINK TO THE NEW DEMO PAGE */}
            <PixelButton onClick={() => navigate('/demo/alpha')}>VIEW DEMO</PixelButton>
          </PixelCard>

          <PixelCard title="PROJECT_BETA">
             <div style={{ height: '150px', background: '#111', marginBottom: '20px', border: '2px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Terminal size={40} color="#333" />
            </div>
            <h3 style={{ marginTop: 0 }}>AI CHAT INTERFACE</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
              Real-time WebSocket chat application.
            </p>
            <PixelButton onClick={() => navigate('/demo/beta')}>VIEW DEMO</PixelButton>
          </PixelCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div style={{ border: '4px solid white', padding: '60px 20px', background: '#000' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>ESTABLISH CONNECTION?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
            <Github size={40} /> <Linkedin size={40} /> <Mail size={40} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;