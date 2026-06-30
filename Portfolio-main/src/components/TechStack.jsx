import React from 'react';
import './TechStack.css';
import PixelCard from './PixelCard';

const TechStack = () => {
  const skills = ['REACT', 'NODE.JS', 'THREE.JS', 'TYPESCRIPT', 'SQL', 'AWS', 'DESIGN'];
  
  return (
    <section className="tech-stack-section">
      <PixelCard title="SYSTEM_CAPABILITIES">
        <div className="skills-container">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </PixelCard>
    </section>
  );
};

export default TechStack;