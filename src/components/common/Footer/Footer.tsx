import './Footer.css';

import { FaGithub } from 'react-icons/fa';

import packageJson from '../../../../package.json';
import type { ProcessedArtwork } from '../../../types/artwork';
import { ArtworkAttribution } from '../../artwork/ArtworkAttribution';

interface FooterProps {
  currentArtwork: ProcessedArtwork;
}

export function Footer({ currentArtwork }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='flex flex-col items-center justify-center px-6 py-2 mt-auto text-black text-sm drawing-frame'
      role='contentinfo'
      aria-label='Site information and credits'
    >
      {/* Image Attribution */}
      <ArtworkAttribution artwork={currentArtwork} />

      {/* Site Credits */}
      <div className='site-credits'>
        <span className='mr-5' aria-label={`Version ${packageJson.version}`}>
          v{packageJson.version}
        </span>
        <span className='mr-5'>
          © {currentYear}{' '}
          <a
            href='https://github.com/JGEsteves89/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 hover:text-blue-600'
            aria-label='Visit JGEsteves GitHub profile'
          >
            JGEsteves
          </a>
        </span>
        <FaGithub color='purple' size={20} />
      </div>
    </footer>
  );
}
