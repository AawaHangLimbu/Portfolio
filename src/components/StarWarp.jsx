import React, { useEffect, useRef } from 'react';

const StarWarp = () => {
  const canvasRef = useRef(null);
  
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

    // --- CONFIGURATION ---
    const starCount = 18000; 
    const baseSpeed = 1.5;
    const stars = [];

    // Star Class
    class Star {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = (Math.random() - 0.5) * width * 3;
        this.y = (Math.random() - 0.5) * height * 3;
        
        this.z = initial ? Math.random() * width : width;
        
        this.speedMult = Math.random() * 1.5 + 0.5; 

        // --- UPDATE: REALISTIC SIZE VARIANCE ---
        // We use Math.random() < 0.8 to make 80% of stars small (0.5 - 1.5px)
        // And 20% of stars larger (2.0 - 4.5px) to simulate foreground debris
        if (Math.random() < 0.8) {
             this.size = Math.random() * 8.0 + 8.5; // Small stars
        } else {
             this.size = Math.random() * 12.5 + 12.0; // Big stars
        }

        // Color Logic
        if (Math.random() > 0.9) {
          this.color = '#ffffff';
        } else {
          const r = Math.floor(Math.random() * 205 + 50);
          const g = Math.floor(Math.random() * 205 + 50);
          const b = Math.floor(Math.random() * 205 + 50);
          this.color = `rgb(${r}, ${g}, ${b})`;
        }
      }

      update(warpSpeed) {
        this.currentSpeed = (baseSpeed + warpSpeed) * this.speedMult;
        this.z -= this.currentSpeed;

        if (this.z <= 0) {
          this.reset();
        }
      }

      draw() {
        const scale = width / this.z;
        const sx = this.x * scale + centerX;
        const sy = this.y * scale + centerY;

        const prevZ = this.z + (this.currentSpeed * 2); 
        const scalePrev = width / prevZ;
        const sxPrev = this.x * scalePrev + centerX;
        const syPrev = this.y * scalePrev + centerY;

        // Scale the size based on Z depth too
        const r = this.size * scale * 0.05;

        if (sx > 0 && sx < width && sy > 0 && sy < height) {
          ctx.beginPath();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = r;
          
          ctx.moveTo(sxPrev, syPrev);
          ctx.lineTo(sx, sy);
          ctx.stroke();
        }
      }
    }

    // Initialize Stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Scroll Logic
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - scrollRef.current.lastScrollY);
      
      scrollRef.current.velocity += Math.min(delta * 0.02, 2);
      
      scrollRef.current.lastScrollY = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      scrollRef.current.velocity *= 0.97; 
      if (scrollRef.current.velocity < 0.01) scrollRef.current.velocity = 0;

      const currentWarpSpeed = scrollRef.current.velocity;

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