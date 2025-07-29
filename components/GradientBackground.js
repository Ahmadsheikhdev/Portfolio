import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GradientBackground = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Transform values based on scroll position
  const y1 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, 400]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -200]);
  
  const scale1 = useTransform(scrollY, [0, 1500], [1, 1.3]);
  const scale2 = useTransform(scrollY, [0, 1500], [1, 0.7]);
  const scale3 = useTransform(scrollY, [0, 1500], [1, 1.5]);
  
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -45]);
  const rotate3 = useTransform(scrollY, [0, 2000], [0, 90]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen width/height
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient blob */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px]"
        style={{
          top: '-400px',
          left: '-200px',
          y: y1,
          scale: scale1,
          rotate: rotate1,
          x: useTransform(() => mousePosition.x * 100 - 50),
        }}
      />
      
      {/* Secondary gradient blob */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-[80px]"
        style={{
          bottom: '-300px',
          right: '-100px',
          y: y2,
          scale: scale2,
          rotate: rotate2,
          x: useTransform(() => mousePosition.x * -80 + 40),
        }}
      />
      
      {/* Third gradient blob */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/20 to-pink-600/20 blur-[90px]"
        style={{
          top: '30%',
          right: '-250px',
          y: y3,
          scale: scale3,
          rotate: rotate3,
          x: useTransform(() => mousePosition.x * 60 - 30),
        }}
      />
      
      {/* Fourth gradient blob - responds to mouse Y position */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[70px]"
        style={{
          bottom: '10%',
          left: '10%',
          y: useTransform(() => mousePosition.y * 100 - 50),
          scale: useTransform(() => 1 + mousePosition.y * 0.2),
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
    </div>
  );
};

export default GradientBackground; 