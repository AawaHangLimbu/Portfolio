import React from 'react';

const PixelCard = ({ children, title }) => {
  return (
    <div className="pixel-card hover-scale" style={{ 
      marginBottom: '40px', 
      position: 'relative',
      height: '100%' 
    }}>
      <div style={{
        backgroundColor: '#000',
        border: '4px solid #fff',
        boxShadow: '10px 10px 0px 0px rgba(255,255,255,0.2)',
        position: 'relative',
        zIndex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Card Header Strip */}
        <div style={{
          borderBottom: '4px solid #fff',
          padding: '10px 15px',
          background: '#fff',
          color: '#000',
          fontSize: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{title || 'UNTITLED_FILE'}</span>
          <div style={{ display: 'flex', gap: '4px' }}>
             <div style={{ width: 8, height: 8, background: '#000' }}></div>
             <div style={{ width: 8, height: 8, background: '#000' }}></div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px', flex: 1 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PixelCard;