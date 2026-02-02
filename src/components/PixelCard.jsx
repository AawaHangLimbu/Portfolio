import React from 'react';

const PixelCard = ({ children, title, className = "" }) => {
  return (
    <div className={`relative p-1 ${className}`} style={{ margin: '20px 0' }}>
      {/* The Pixel Border effect using box-shadows is complex, 
          so we stick to a solid border with box-shadow depth here */}
      <div style={{
        backgroundColor: 'var(--card-bg)',
        border: '4px solid var(--text-color)',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.5)',
        padding: '20px',
        position: 'relative'
      }}>
        {/* Decorative corner squares */}
        <div style={{ position: 'absolute', top: -4, left: -4, width: 8, height: 8, background: 'var(--accent-cyan)' }} />
        <div style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, background: 'var(--accent-cyan)' }} />
        <div style={{ position: 'absolute', bottom: -4, left: -4, width: 8, height: 8, background: 'var(--accent-cyan)' }} />
        <div style={{ position: 'absolute', bottom: -4, right: -4, width: 8, height: 8, background: 'var(--accent-cyan)' }} />
        
        {title && (
          <h3 style={{ 
            marginTop: '-35px', 
            background: 'var(--bg-color)', 
            display: 'inline-block', 
            padding: '0 10px',
            color: 'var(--accent-yellow)',
            marginBottom: '20px'
          }}>
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default PixelCard;