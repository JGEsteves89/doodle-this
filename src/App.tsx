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

  // Generate structured data for current artwork
  const currentArtwork = allDoodles[index];
  const artworkStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': `Doodle by ${currentArtwork.artist}`,
    'creator': {
      '@type': 'Person',
      'name': currentArtwork.artist,
      'url': currentArtwork.link,
    },
    'license': currentArtwork.licenseLink,
    'url': currentArtwork.url,
    'thumbnailUrl': currentArtwork.url,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://JGEsteves89.github.io/doodle-this/',
    },
  };

  return (
    <div className='flex flex-col h-screen'>
      {/* Skip Navigation Link */}
      <a href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50'
      >
        Skip to main content
      </a>

      {/* App Header */}
      <header className='flex items-center justify-between px-6 py-4 text-black custom-header' role='banner'>
        <div className='flex items-center'>
          <img src={logo} alt='Doodle This - Random Art Gallery Logo' className='h-10' />
          <h1 className='sr-only'>Doodle This - Random Art Gallery</h1>
        </div>
        <nav role='navigation' aria-label='Main navigation'>
          <div className='flex space-x-4'>
            <a href='https://github.com/JGEsteves89/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit JGEsteves GitHub profile'
            >
              <FaGithub size={24} color='black'/>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main ref={containerRef}
        id='main-content'
        className='flex-1 h-screen paper-texture'
        role='main'
        aria-label='Art gallery viewer'
      >

        <article className='w-full h-full' itemScope itemType='https://schema.org/CreativeWork'>
          <h2 className='sr-only'>Current Artwork</h2>

          {/* Structured Data Script */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkStructuredData) }}
          />

          <TransformWrapper limitToBounds={false} >
            <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} >
              <img
                src={currentArtwork.url}
                alt={`Creative doodle artwork by ${currentArtwork.artist} - ${currentArtwork.licenseName} licensed`}
                title={`Artwork by ${currentArtwork.artist}`}
                style={{ width: '100vw', marginBlockStart: '4vh' }}
                loading='eager'
                itemProp='image'
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
        </article>
      </main>

      {/* Footer */}
      <footer className='flex flex-col items-center justify-center px-6 py-2 text-black text-sm custom-footer'
        role='contentinfo'
        aria-label='Site information and credits'
      >

        {/* Image Attribution */}
        <div className='attribution-info' itemScope itemType='https://schema.org/Person'>
          <span>Image credit: </span>
          <a href={currentArtwork.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-500'
            itemProp='url'
            aria-label={`Visit ${currentArtwork.artist}'s profile`}
          >
            <span itemProp='name'>{currentArtwork.artist}</span>
          </a>
          <span> | License: </span>
          <a href={currentArtwork.licenseLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-500'
            aria-label={`View ${currentArtwork.licenseName} license details`}
          >
            {currentArtwork.licenseName}
          </a>
        </div>

        {/* Site Credits */}
        <div className='site-credits'>
          <span className='mr-5' aria-label={`Version ${packageJson.version}`}>
            v{packageJson.version}
          </span>
          <span className='mr-5'>
            © {currentYear}{' '}
            <a href='https://github.com/JGEsteves89/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-700 hover:text-blue-600'
              aria-label='Visit JGEsteves GitHub profile'
            >
              JGEsteves
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
