// App.tsx
import './index.css';

import { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import packageJson from '../package.json';
import logo from './assets/logo.svg';
import doodles from './doodles.json';

const allDoodles = doodles.flatMap(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (artist: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return artist.doodles.flatMap((repo: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return repo.names.map((name: any) => ({
        url: repo.location + name,
        link: artist.link,
        artist: artist.name,
        licenseLink: artist.licenseLink,
        licenseName: artist.licenseName,
      }));
    });
  });


export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(Math.floor(Math.random()*allDoodles.length));
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col h-screen'>
      {/* App bar */}
      <header className='flex items-center justify-between px-6 py-4 text-black custom-header'>
        <img src={logo} alt='Logo' className='h-10' />
        <div className='flex space-x-4'>
          <a href='https://github.com/JGEsteves89/' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={24} color='black'/>
          </a>
        </div>
      </header>

      <main ref={containerRef} className='flex-1 h-screen paper-texture' >
        <TransformWrapper limitToBounds={false} >
          <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} >
            <img src={allDoodles[index].url} alt='doogle' style={{ width: '100vw', marginBlockStart: '4vh' }}
              onError={() => {
                let newIndex = index;
                let attempts = 0;
                while ((!allDoodles[newIndex]?.url || allDoodles[newIndex].url.trim() === '') ||attempts < 10) {
                  newIndex = Math.floor(Math.random() * allDoodles.length);
                  attempts++;
                }
                if (newIndex !== index) {
                  setIndex(newIndex);
                }
              }}
            />
          </TransformComponent>
        </TransformWrapper>
      </main>


      {/* Footer */}
      <footer className='flex flex-col items-center justify-center px-6 py-2 text-black text-sm custom-footer'>
        {/* Image author credit */}
        <div>
          Image credit: {' '}
          <a href={allDoodles[index].link} target='_blank' rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-500'
          >
            {allDoodles[index].artist}
          </a>{' '}
          | License: {' '}
          <a href={allDoodles[index].licenseLink} target='_blank' rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-500'
          >
            {allDoodles[index].licenseName}
          </a>
        </div>

        {/* My credits*/}
        <div>
          <span className='mr-5'>v{packageJson.version}</span>
          <span className='mr-5'>© {currentYear}{' '}
            <a href='https://github.com/JGEsteves88/' target='_blank' rel='noopener noreferrer'
              className='text-blue-700 hover:text-blue-600'
            >
              JGEsteves
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
