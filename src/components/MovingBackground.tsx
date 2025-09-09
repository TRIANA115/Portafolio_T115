import React, { useEffect, useState } from 'react';

interface MovingBackgroundProps {
  children?: React.ReactNode;
}

const MovingBackground: React.FC<MovingBackgroundProps> = ({ children }) => {
  const [matrixColumns, setMatrixColumns] = useState<Array<{id: number, chars: string[], speed: number, startDelay: number, position: number}>>([]);
  const [binaryElements, setBinaryElements] = useState<Array<{id: number, content: string, x: number, y: number, opacity: number, size: number}>>([]);
  const [hexCodes, setHexCodes] = useState<Array<{id: number, content: string, x: number, y: number, color: string, size: number}>>([]);
  
  // Generate random characters for the matrix effect
  const generateRandomChar = () => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  // Generate random hex code
  const generateRandomHex = (length: number) => {
    const chars = '0123456789ABCDEF';
    let result = '0x';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Generate random binary string
  const generateRandomBinary = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.random() > 0.5 ? '1' : '0';
    }
    return result;
  };

  // Initialize matrix columns
  useEffect(() => {
    const columns = [];
    const columnCount = Math.floor(window.innerWidth / 20); // Adjust spacing as needed
    
    for (let i = 0; i < columnCount; i++) {
      const charCount = 15 + Math.floor(Math.random() * 15); // Between 15-30 chars per column
      const chars = Array(charCount).fill('').map(() => generateRandomChar());
      const speed = 1 + Math.random() * 3; // Random speed
      const startDelay = Math.random() * 5000; // Random start delay
      
      columns.push({
        id: i,
        chars,
        speed,
        startDelay,
        position: -charCount // Start above the screen
      });
    }
    
    setMatrixColumns(columns);

    // Create binary elements
    const binaries = [];
    for (let i = 0; i < 20; i++) {
      binaries.push({
        id: i,
        content: generateRandomBinary(8),
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.4,
        size: 12 + Math.floor(Math.random() * 8)
      });
    }
    setBinaryElements(binaries);

    // Create hex code elements
    const hexes = [];
    for (let i = 0; i < 15; i++) {
      hexes.push({
        id: i,
        content: generateRandomHex(4 + Math.floor(Math.random() * 4)),
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: i % 3 === 0 ? '#00ff00' : (i % 3 === 1 ? '#00ffff' : '#ff0000'),
        size: 14 + Math.floor(Math.random() * 10)
      });
    }
    setHexCodes(hexes);
  }, []);

  // Animate the matrix columns
  useEffect(() => {
    const animateMatrix = () => {
      setMatrixColumns(prevColumns => {
        return prevColumns.map(column => {
          // Only start animation after the delay
          if (column.startDelay > 0) {
            return { ...column, startDelay: column.startDelay - 16 }; // Assuming 60fps
          }
          
          // Move the column down
          const newPosition = column.position + (column.speed * 0.05);
          
          // If the column has moved fully into view, reset it to the top with new chars
          if (newPosition > window.innerHeight / 10) {
            const charCount = 15 + Math.floor(Math.random() * 15);
            const chars = Array(charCount).fill('').map(() => generateRandomChar());
            return {
              ...column,
              chars,
              position: -charCount,
              speed: 1 + Math.random() * 3
            };
          }
          
          // Randomly change some characters as they fall
          const newChars = [...column.chars];
          if (Math.random() > 0.9) {
            const indexToChange = Math.floor(Math.random() * column.chars.length);
            newChars[indexToChange] = generateRandomChar();
          }
          
          return {
            ...column,
            position: newPosition,
            chars: newChars
          };
        });
      });

      // Animate binary elements
      setBinaryElements(prev => {
        return prev.map(bin => {
          if (Math.random() > 0.95) {
            return {
              ...bin,
              content: generateRandomBinary(8)
            };
          }
          return bin;
        });
      });

      // Animate hex codes
      setHexCodes(prev => {
        return prev.map(hex => {
          if (Math.random() > 0.98) {
            return {
              ...hex,
              content: generateRandomHex(4 + Math.floor(Math.random() * 4))
            };
          }
          return hex;
        });
      });
      
      requestAnimationFrame(animateMatrix);
    };
    
    const animationId = requestAnimationFrame(animateMatrix);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="hacker-background" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#000000',
      fontFamily: 'monospace',
      zIndex: 0
    }}>
      {/* Matrix falling characters */}
      {matrixColumns.map(column => (
        <div 
          key={column.id}
          style={{
            position: 'absolute',
            left: `${(column.id / matrixColumns.length) * 100}%`,
            top: 0,
            color: '#00ff00',
            fontSize: '16px',
            lineHeight: '1',
            textShadow: '0 0 5px #00ff00',
            opacity: 0.8,
            zIndex: 1,
            transform: `translateY(${column.position}em)`,
            transition: 'transform 0.1s linear',
            display: 'flex',
            flexDirection: 'column',
            width: '1em'
          }}
        >
          {column.chars.map((char, index) => (
            <span 
              key={index}
              style={{
                opacity: 1 - (index / column.chars.length) * 0.8
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}

      {/* Binary elements */}
      {binaryElements.map(bin => (
        <div
          key={bin.id}
          style={{
            position: 'absolute',
            left: `${bin.x}%`,
            top: `${bin.y}%`,
            color: '#00ff00',
            fontSize: `${bin.size}px`,
            opacity: bin.opacity,
            fontFamily: 'monospace',
            zIndex: 1
          }}
        >
          {bin.content}
        </div>
      ))}

      {/* Hex code elements */}
      {hexCodes.map(hex => (
        <div
          key={hex.id}
          style={{
            position: 'absolute',
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            color: hex.color,
            fontSize: `${hex.size}px`,
            opacity: 0.7,
            fontFamily: 'monospace',
            fontWeight: 'bold',
            zIndex: 1
          }}
        >
          {hex.content}
        </div>
      ))}

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(32, 32, 32, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 32, 32, 0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 2
      }} />

      {/* Content */}
      <div className="content" style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: '100%',
      }}>
        {children}
      </div>
    </div>
  );
};

export default MovingBackground;
