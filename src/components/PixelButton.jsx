import React from 'react';
import './PixelButton.css';

const PixelButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      className={`pixel-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PixelButton;