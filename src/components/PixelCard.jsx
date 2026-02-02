import React from 'react';

const PixelCard = ({ children, title }) => {
  return (
    <div style={{ marginBottom: '40px', position: 'relative' }}>
      {/* Background Blocker to hide stars behind text */}
      <div style={{
        backgroundColor: '#000',
        border: '4px solid #fff',
        boxShadow: '8px 8px 0px 0px #333',
        padding: '24px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Corner Decor */}
        <div style={{ position: 'absolute', top: -4, left: -4, width: 8, height: 8, background: '#000', border: '2px solid white' }} />
        <div style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, background: '#000', border: '2px solid white' }} />
        <div style={{ position: 'absolute', bottom: -4, left: -4, width: 8, height: 8, background: '#000', border: '2px solid white' }} />
        <div style={{ position: 'absolute', bottom: -4, right: -4, width: 8, height: 8, background: '#000', border: '2px solid white' }} />

        {title && (
          <h3 style={{ 
            marginTop: '-40px', 
            background: '#000', 
            display: 'inline-block', 
            padding: '0 15px',
            borderLeft: '4px solid white',
            borderRight: '4px solid white',
            marginBottom: '20px'
          }}>
            {title}
          </h3>
        )}
        <div style={{ lineHeight: '1.8' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PixelCard;