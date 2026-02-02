import React from 'react';

const PixelButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        position: 'relative',
        fontFamily: '"Press Start 2P", cursive',
        fontSize: '14px',
        padding: '16px 32px',
        backgroundColor: '#000',
        color: '#fff',
        border: '4px solid #fff',
        cursor: 'pointer',
        textTransform: 'uppercase',
        overflow: 'hidden', // clips the shine
        transition: 'all 0.1s',
        boxShadow: '4px 4px 0px 0px #fff' // Hard shadow
      }}
      onMouseEnter={(e) => {
        // Add shine class on hover via JS or simple CSS below
        e.currentTarget.classList.add('shining');
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove('shining');
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(4px, 4px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '4px 4px 0px 0px #fff';
      }}
    >
      {/* The Shine Element */}
      <div className="shine-effect" style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '50%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
        transform: 'skewX(-20deg)',
      }} />
      
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>

      <style jsx>{`
        button:hover .shine-effect {
          animation: shine-slide 0.6s linear infinite; 
          /* Use 'steps(5)' in animation-timing-function if you want choppy shine */
        }
      `}</style>
    </button>
  );
};

export default PixelButton;