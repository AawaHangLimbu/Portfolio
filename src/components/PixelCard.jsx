import React from 'react';
import './PixelCard.css';

const PixelCard = ({ title, children }) => {
  return (
    <div className="pixel-card">
      <div className="pixel-card-title">
        &gt; {title}
      </div>
      <div className="pixel-card-content">
        {children}
      </div>
    </div>
  );
};

export default PixelCard;