import React from 'react';
import StarWarp from './components/StarWarp';
import PixelCard from './components/PixelCard';
import PixelButton from './components/PixelButton';
import { Github, Linkedin, Mail, Terminal, Code2, Monitor } from 'lucide-react';

function App() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // The smooth behavior is handled by CSS (html { scroll-behavior: smooth })
      // But we can add a small offset calculation if we had a fixed header that overlaps
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="scanlines" style={{ position: 'relative', minHeight: '100vh' }}>
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
           <PixelButton className="nav-btn" onClick={() => scrollToSection('projects')}>
             PROJECTS
           </PixelButton>
           <PixelButton className="nav-btn" onClick={() => scrollToSection('contact')}>
             CONTACT
           </PixelButton>
        </div>
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        
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
             {/* Decorative lines on avatar */}
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
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', padding: '0 10px' }}>
              <Github className="hover-scale" size={32} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', padding: '0 10px' }}>
              <Linkedin className="hover-scale" size={32} />
            </a>
          </div>
        </section>

        {/* Tech Stack Marquee (Static for simplicity, but styled) */}
        <section style={{ margin: '0 0 100px 0' }}>
          <PixelCard title="SYSTEM_CAPABILITIES">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {['REACT', 'NODE.JS', 'THREE.JS', 'TYPESCRIPT', 'SQL', 'AWS', 'DESIGN'].map((skill, i) => (
                <div key={i} style={{ 
                  background: '#fff', 
                  color: '#000',
                  padding: '10px 20px', 
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '4px 4px 0 #555'
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </PixelCard>
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
                A high-performance headless e-commerce solution built with Next.js and Stripe integration.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <PixelButton onClick={() => window.open('#', '_blank')}>DEMO</PixelButton>
                <PixelButton onClick={() => window.open('#', '_blank')}>CODE</PixelButton>
              </div>
            </PixelCard>

            <PixelCard title="PROJECT_BETA">
               <div style={{ height: '150px', background: '#111', marginBottom: '20px', border: '2px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Terminal size={40} color="#333" />
              </div>
              <h3 style={{ marginTop: 0 }}>AI CHAT INTERFACE</h3>
              <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
                Real-time WebSocket chat application integrating OpenAI API with a retro UI.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <PixelButton onClick={() => window.open('#', '_blank')}>DEMO</PixelButton>
                <PixelButton onClick={() => window.open('#', '_blank')}>CODE</PixelButton>
              </div>
            </PixelCard>

            <PixelCard title="PROJECT_GAMMA">
               <div style={{ height: '150px', background: '#111', marginBottom: '20px', border: '2px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Monitor size={40} color="#333" />
              </div>
              <h3 style={{ marginTop: 0 }}>3D PORTFOLIO</h3>
              <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
                An interactive 3D scene built with Three.js demonstrating WebGL capabilities.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <PixelButton onClick={() => window.open('#', '_blank')}>DEMO</PixelButton>
                <PixelButton onClick={() => window.open('#', '_blank')}>CODE</PixelButton>
              </div>
            </PixelCard>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: '80px 0', textAlign: 'center' }}>
          <div style={{ 
            border: '4px solid white', 
            padding: '60px 20px', 
            background: '#000',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decoration */}
            <div style={{ position: 'absolute', top: -50, right: -50, width: 100, height: 100, background: '#fff', transform: 'rotate(45deg)' }}></div>
            <div style={{ position: 'absolute', bottom: -50, left: -50, width: 100, height: 100, background: '#fff', transform: 'rotate(45deg)' }}></div>

            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>ESTABLISH CONNECTION?</h2>
            <p style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
              I am currently available for freelance work and full-time opportunities.
              Initialize a communication channel below.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '40px' }}>
              <a href="#" className="hover-scale" style={{ color: 'white' }}><Github size={40} /></a>
              <a href="#" className="hover-scale" style={{ color: 'white' }}><Linkedin size={40} /></a>
              <a href="#" className="hover-scale" style={{ color: 'white' }}><Mail size={40} /></a>
            </div>
            
            <PixelButton onClick={() => window.location.href = "mailto:email@example.com"}>
              SEND_MESSAGE
            </PixelButton>
          </div>
        </section>

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
  );
}

export default App;