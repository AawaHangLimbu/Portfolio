import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import PixelCard from '../components/PixelCard';
import PageTransition from '../components/PageTransition';
import { ArrowLeft } from 'lucide-react';

const ProjectDemo = () => {
  const { id } = useParams(); // Gets 'alpha' or 'beta' from URL
  const navigate = useNavigate();

  // Fake project data
  const projectData = {
    alpha: { title: 'E-COMMERCE ENGINE', desc: 'Full Stack shopping experience.' },
    beta: { title: 'AI CHAT INTERFACE', desc: 'Neural network powered chat bot.' },
  };

  const project = projectData[id] || { title: 'UNKNOWN_PROJECT', desc: 'Data corrupted.' };

  return (
    <PageTransition>
      <div style={{ padding: '40px 0', minHeight: '80vh' }}>
        
        {/* Back Button */}
        <div style={{ marginBottom: '40px' }}>
          <PixelButton onClick={() => navigate('/')}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <ArrowLeft size={16} /> RETURN_TO_BASE
             </span>
          </PixelButton>
        </div>

        <PixelCard title={`DEMO_MODE: ${project.title}`}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p style={{ marginBottom: '40px', color: '#aaa' }}>{project.desc}</p>
            
            {/* The "Screen" */}
            <div style={{ 
              background: '#000', 
              border: '20px solid #333', 
              borderRadius: '10px',
              height: '400px', 
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)'
            }}>
              {/* Scanlines for the screen specifically */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                backgroundSize: '100% 4px',
                zIndex: 10,
                pointerEvents: 'none'
              }} />

              {/* Fake Content Inside Screen */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%', 
                color: '#0f0', 
                fontFamily: 'monospace',
                flexDirection: 'column'
              }}>
                 <div style={{ fontSize: '64px', marginBottom: '20px' }}>▶</div>
                 <div>LOADING {project.title}...</div>
                 <div style={{ marginTop: '20px', width: '200px', height: '10px', border: '2px solid #0f0' }}>
                    <div style={{ width: '60%', height: '100%', background: '#0f0' }}></div>
                 </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <PixelButton>GITHUB REPO</PixelButton>
              <PixelButton>LIVE SITE</PixelButton>
            </div>
          </div>
        </PixelCard>

      </div>
    </PageTransition>
  );
};

export default ProjectDemo;