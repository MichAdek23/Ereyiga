
import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: string;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

const BirthdayConfetti: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#3B82F6', '#F59E0B', '#F87171', '#10B981', '#8B5CF6'];
    const pieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 0.5 + 0.5, // 0.5 to 1rem
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3, // 3 to 6 seconds
        rotation: Math.random() * 360
      });
    }
    
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: 'absolute',
            left: piece.left,
            top: '-20px',
            width: `${piece.size}rem`,
            height: `${piece.size}rem`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
          className="animate-confetti-fall"
        />
      ))}
    </div>
  );
};

export default BirthdayConfetti;
