import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollObjects = () => {
  const { scrollY } = useScroll();
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Create different motion values for various objects
  const y1 = useTransform(scrollY, [0, 1500], [0, -500]);
  const y2 = useTransform(scrollY, [0, 1500], [0, 500]);
  const y3 = useTransform(scrollY, [0, 1500], [0, -300]);
  const y4 = useTransform(scrollY, [0, 1500], [0, 300]);
  
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 180]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -180]);
  const rotate3 = useTransform(scrollY, [0, 1000], [0, 360]);
  
  const scale1 = useTransform(scrollY, [0, 500], [1, 1.5]);
  const scale2 = useTransform(scrollY, [0, 500], [1, 0.7]);
  
  const opacity = useTransform(scrollY, [0, 100, 1200, 1500], [0, 0.2, 0.2, 0]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate random positions for objects
  const getRandomPosition = () => {
    const positions = [];
    const objectCount = 8;
    
    for (let i = 0; i < objectCount; i++) {
      const position = {
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 400}%`,
      };
      positions.push(position);
    }
    
    return positions;
  };

  const positions = getRandomPosition();

  // Different shapes to be displayed
  const shapes = [
    // Code shape
    <svg key="code" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M9.95263 16.9123L8.59323 17.6279C8.22259 17.8356 7.7555 17.7278 7.5477 17.3572L4.19406 11.4234C4.0778 11.2187 4.0778 10.9716 4.19406 10.7669L7.5477 4.83319C7.7555 4.46255 8.22259 4.35468 8.59323 4.56248L9.95263 5.27807C10.3233 5.48587 10.4311 5.95297 10.2233 6.32361L7.63155 11.095L10.2233 15.8665C10.4311 16.2372 10.3233 16.7043 9.95263 16.9121V16.9123Z" fill="currentColor"/>
      <path d="M14.0477 16.9123L15.4071 17.6279C15.7777 17.8356 16.2448 17.7278 16.4526 17.3572L19.8063 11.4234C19.9225 11.2187 19.9225 10.9716 19.8063 10.7669L16.4526 4.83319C16.2448 4.46255 15.7777 4.35468 15.4071 4.56248L14.0477 5.27807C13.677 5.48587 13.5692 5.95297 13.777 6.32361L16.3688 11.095L13.777 15.8665C13.5692 16.2372 13.677 16.7043 14.0477 16.9121V16.9123Z" fill="currentColor"/>
    </svg>,
    
    // Circle
    <div key="circle" className="rounded-full border-2 border-white/20 w-full h-full"></div>,
    
    // Square
    <div key="square" className="rounded-md border-2 border-white/20 w-full h-full"></div>,
    
    // Triangle (SVG)
    <svg key="triangle" viewBox="0 0 100 100" className="w-full h-full">
      <polygon points="50,15 100,100 0,100" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
    </svg>,
    
    // Star (SVG)
    <svg key="star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    
    // Hexagon (SVG)
    <svg key="hexagon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    
    // Dots pattern
    <div key="dots" className="grid grid-cols-3 gap-1 w-full h-full">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="rounded-full bg-white/10 w-full h-full"></div>
      ))}
    </div>,
    
    // Wave shape (SVG)
    <svg key="wave" viewBox="0 0 100 100" className="w-full h-full">
      <path d="M0,50 C20,30 30,70 50,50 C70,30 80,70 100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
    </svg>,
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => {
        // Alternate between different motion values
        const yMotion = index % 2 === 0 ? (index % 4 === 0 ? y1 : y3) : (index % 4 === 0 ? y2 : y4);
        const rotateMotion = index % 3 === 0 ? rotate1 : (index % 3 === 1 ? rotate2 : rotate3);
        const scaleMotion = index % 2 === 0 ? scale1 : scale2;
        
        // Determine size based on index
        const size = index % 3 === 0 ? 'w-16 h-16' : (index % 3 === 1 ? 'w-24 h-24' : 'w-20 h-20');
        
        return (
          <motion.div
            key={index}
            className={`absolute ${size} text-white/20`}
            style={{
              left: positions[index].left,
              top: positions[index].top,
              y: yMotion,
              rotate: rotateMotion,
              scale: scaleMotion,
              opacity: opacity,
              zIndex: -1,
            }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScrollObjects; 