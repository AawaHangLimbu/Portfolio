import React, { useEffect, useRef } from 'react';

const StarWarp = () => {
  const canvasRef = useRef(null);
  
  // We use refs for values that change constantly to avoid re-renders
  const scrollRef = useRef({
    current: 0,
    target: 0,
    lastScrollY: 0,
    velocity: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;

    // Configuration
    const starCount = 800; 
    const baseSpeed = 2; // Idle speed
    const stars = [];

    // Star Class
    class Star {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        // Spawn stars in a circle tunnel in the distance
        // Instead of random X/Y, we use Polar coordinates (Angle + Radius)
        const angle = Math.random() * Math.PI * 2;
        
        // Random radius but keep it somewhat centered to create the tunnel effect
        const radius = Math.random() * (width * 0.4); 

        // Convert polar to cartesian (x, y) relative to center
        this.x = Math.cos(angle) * radius;
        this.y = Math.sin(angle) * radius;
        
        // Z Depth: 0 is camera, 'width' is far away
        // If initial, spread them out. If resetting, put them far back.
        this.z = initial ? Math.random() * width : width;
        
        // Uneven movement: each star has a slight variance multiplier
        this.speedMult = Math.random() * 0.5 + 0.8; 
        
        this.size = Math.random() * 2 + 0.5;
        // Random greyscale color
        const shade = Math.floor(Math.random() * 100 + 155);
        this.color = `rgb(${shade}, ${shade}, ${shade})`;
      }

      update(warpSpeed) {
        // Move star closer. Speed = Base + Scroll Velocity
        this.z -= (baseSpeed + warpSpeed) * this.speedMult;

        // Reset if it passes the camera or goes off screen bounds significantly
        if (this.z <= 0) {
          this.reset();
        }
      }

      draw() {
        // Perspective projection math
        // We divide by Z to create depth. As Z gets smaller, scale gets bigger.
        const scale = width / this.z;
        
        const sx = this.x * (width / this.z) + centerX;
        const sy = this.y * (width / this.z) + centerY;

        // Size grows as it gets closer
        const r = this.size * scale * 0.05;

        // Simple bound check to save rendering power
        if (sx > 0 && sx < width && sy > 0 && sy < height) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.rect(sx, sy, r, r); // Draw pixel square
          ctx.fill();
        }
      }
    }

    // Initialize
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Scroll Handler
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - scrollRef.current.lastScrollY);
      
      // Add the scroll delta to velocity (Caps at 100 for sanity)
      scrollRef.current.velocity += Math.min(delta * 2, 100);
      
      scrollRef.current.lastScrollY = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      // 1. Clear Canvas with slight fade for trails (optional, using solid black for now)
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // 2. Manage Inertia/Friction for Smooth Speed Up/Down
      // Decay velocity slowly (friction)
      scrollRef.current.velocity *= 0.95; 
      if (scrollRef.current.velocity < 0.1) scrollRef.current.velocity = 0;

      const currentWarpSpeed = scrollRef.current.velocity;

      // 3. Update & Draw Stars
      stars.forEach(star => {
        star.update(currentWarpSpeed);
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default StarWarp;