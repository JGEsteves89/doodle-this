// App.tsx
import { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

import packageJson from '../package.json';
import logo from './assets/cupcake.svg';

import './index.css';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 128; // subtract header + footer
    };
    resize();
    window.addEventListener('resize', resize);

    // Example: draw a moving background
    let frame = 0;
    const draw = () => {
      ctx.fillStyle = `hsl(${frame % 360}, 50%, 50%)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      frame += 1;
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col h-screen'>
      {/* App bar */}
      <header className='flex items-center justify-between px-6 py-4 text-black custom-header'>
        <img src={logo} alt='Logo' className='h-10' />
        <div className='flex space-x-4'>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={24} color='black'/>
          </a>
        </div>
      </header>

      {/* Canvas */}
      <main className='flex-1'>
        <canvas ref={canvasRef} className='w-full h-full block' />
      </main>

      {/* Footer */}
      <footer className='flex items-center justify-center px-6 py-2 text-black text-sm custom-footer'>
        <span className='mr-4'>v{packageJson.version}</span>
        <span className='mr-4'>© {currentYear} JGEsteves</span>
      </footer>
    </div>
  );
}
