import React from 'react';
import './Projects.css';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';
import { Monitor, Code2, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PROJECT-001",
      name: "AstroPay (Prototype)",
      description: "I made this prototype at my 2nd semester. I would like to work on it in the future.",
      demoLink: "https://www.figma.com/design/zhwauL81rlsNrWxr0eiEZO/Final-app?node-id=0-1&t=BCDAvtG8W1ppUBVA-1",
      codeLink: "https://www.figma.com/design/zhwauL81rlsNrWxr0eiEZO/Final-app?node-id=0-1&t=BCDAvtG8W1ppUBVA-1",
      icon: <Code2 size={40} color="#333" />
    },
    {
      title: "PROJECT-002",
      name: "Practicing layer",
      description: "Testing layer functionality and adding proper animation .",
      demoLink: "https://www.figma.com/design/ZQ6aDl3ThlTN84VKXZY3C3/Nepal-asgh?node-id=0-1&t=ek7RyqI72moE9YoR-1",
      codeLink: "https://www.figma.com/design/ZQ6aDl3ThlTN84VKXZY3C3/Nepal-asgh?node-id=0-1&t=ek7RyqI72moE9YoR-1",
      icon: <Terminal size={40} color="#333" />
    },
    // {
    //   title: "PROJECT-003",
    //   name: "3D PORTFOLIO",
    //   description: "An interactive 3D scene built with Three.js demonstrating WebGL capabilities.",
    //   icon: <Monitor size={40} color="#333" />
    // }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <Monitor size={32} className="projects-header-icon" />
        <h2>ACTIVE_PROJECTS</h2>
        <div className="projects-header-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <PixelCard key={index} title={project.title}>
            <div className="project-image-placeholder">
              {project.icon}
            </div>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">
              {project.description}
            </p>
            <div className="project-actions">
              <PixelButton onClick={() => window.open(project.demoLink, '_blank')}>DEMO</PixelButton>
              <PixelButton onClick={() => window.open(project.codeLink, '_blank')}>CODE</PixelButton>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;