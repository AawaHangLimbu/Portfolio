import React from 'react';

const PixelButton = ({ children, onClick, variant = 'primary' }) => {
  const colors = {
    primary: 'var(--accent-cyan)',
    secondary: 'var(--accent-pink)'
  };

  const bg = colors[variant];
  const textColor = '#000';

  const buttonStyle = {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '14px',
    padding: '12px 24px',
    backgroundColor: bg,
    color: textColor,
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: `
      inset -4px -4px 0px 0px rgba(0,0,0,0.5),
      inset 4px 4px 0px 0px rgba(255,255,255,0.5)
    `,
    transition: 'transform 0.1s',
    margin: '10px',
    textTransform: 'uppercase'
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseDown={(e) => {
        e.target.style.transform = 'translate(2px, 2px)';
        e.target.style.boxShadow = `
          inset -2px -2px 0px 0px rgba(0,0,0,0.5),
          inset 2px 2px 0px 0px rgba(255,255,255,0.5)
        `;
      }}
      onMouseUp={(e) => {
        e.target.style.transform = 'translate(0, 0)';
        e.target.style.boxShadow = `
          inset -4px -4px 0px 0px rgba(0,0,0,0.5),
          inset 4px 4px 0px 0px rgba(255,255,255,0.5)
        `;
      }}
    >
      {children}
    </button>
  );
};

export default PixelButton;