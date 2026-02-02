import React, { useEffect, useRef } from 'react';

const StarWarp = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Configuration
    const starCount = 600; // Number of stars
    const speed = 0.1;     // Speed multiplier
    const stars = [];

    // Star Class
    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = (Math.random() * width - width / 2) * width; // Random X spread
        this.y = (Math.random() * height - height / 2) * height; // Random Y spread
        this.z = Math.random() * width; // Start at random depth
        
        // Random Color generator for the stars
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = `rgb(${r},${g},${b})`;
        
        this.size = Math.random() * 2 + 1; // Size 1-3px
      }

      update() {
        // Move star closer (decrease Z)
        this.z -= (width * 0.01) + (width - this.z) * (speed * 0.05);

        // If star hits the screen (z <= 0), reset it to the back
        if (this.z <= 1) {
          this.reset();
          this.z = width; // Push back to far distance
        }
      }

      draw() {
        // 3D to 2D Projection Math
        // x_screen = x / z * scale + center_x
        const scale = width / this.z; 
        const sx = (this.x / this.z) * width + width / 2;
        const sy = (this.y / this.z) * width + height / 2;

        // Calculate size based on proximity (closer = bigger)
        const r = this.size * scale * 0.1; 

        // Only draw if inside screen bounds
        if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
          ctx.fillStyle = this.color;
          // Draw a rectangle for pixel look, not a circle
          ctx.fillRect(sx, sy, Math.max(2, r), Math.max(2, r)); 
        }
      }
    }

    // Initialize Stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      // Draw semi-transparent black rect to create trails (optional, remove for crisp movement)
      // ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; 
      // ctx.fillRect(0, 0, width, height);
      
      // Clear canvas for crisp movement
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
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
        zIndex: -1, // Behind everything
      }}
    />
  );
};

export default StarWarp;