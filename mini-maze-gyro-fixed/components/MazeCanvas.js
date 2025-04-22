import { useEffect, useRef, useState } from 'react';

export default function MazeCanvas() {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const ballRadius = 10;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(position.x, position.y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#0095DD';
      ctx.fill();
      ctx.closePath();
    };

    draw();
  }, [position]);

  useEffect(() => {
    const handleOrientation = (event) => {
      const { beta, gamma } = event;
      setPosition(prev => ({
        x: Math.min(290, Math.max(10, prev.x + gamma / 2)),
        y: Math.min(290, Math.max(10, prev.y + beta / 2))
      }));
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} style={{ border: '1px solid black' }} />;
}