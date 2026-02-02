import React from 'react';

const PixelButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        position: 'relative',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '12px',
        padding: '18px 36px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase',
        overflow: 'hidden',
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
        // Creating the pixel border using box-shadow for sharpness
        boxShadow: `
          inset 0 0 0 4px #fff, 
          4px 4px 0px 0px rgba(255,255,255,0.5)
        `,
        margin: '10px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.classList.add('shining');
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `
          inset 0 0 0 4px #fff, 
          6px 6px 0px 0px rgba(255,255,255,0.8)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove('shining');
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `
          inset 0 0 0 4px #fff, 
          4px 4px 0px 0px rgba(255,255,255,0.5)
        `;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(2px, 2px)';
        e.currentTarget.style.boxShadow = 'inset 0 0 0 4px #fff';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `inset 0 0 0 4px #fff, 6px 6px 0px 0px rgba(255,255,255,0.8)`;
      }}
    >
      <div className="shine-effect" style={{
        position: 'absolute',
        top: 0,
        left: '-150%',
        width: '50%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
        transform: 'skewX(-20deg)',
      }} />
      
      <span style={{ position: 'relative', zIndex: 2, letterSpacing: '1px' }}>{children}</span>

      <style jsx>{`
        /* Slower shine animation (1.5s) */
        button:hover .shine-effect {
          animation: shine-slide 1.5s ease-in-out infinite; 
        }
        @keyframes shine-slide {
          0% { left: -150%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }
      `}</style>
    </button>
  );
};

export default PixelButton;