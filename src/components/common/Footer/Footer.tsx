import './Footer.css';

import { FaGithub } from 'react-icons/fa';
import { FaMastodon } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

import packageJson from '../../../../package.json';
import contrBtnImg from '../../../assets/contribute-button.svg';
import nextBtnImg from '../../../assets/next-button.svg';
import type { ProcessedArtwork } from '../../../types/artwork';
import { getRandomArtworkIndex } from '../../../utils/artworkUtils';
import { ArtworkAttribution } from '../../artwork/ArtworkAttribution';
import { MyButton } from '../Other/MyButton';

interface FooterProps {
  currentArtwork: ProcessedArtwork;
  setIndex: (index: number) => void;
  allDoodles: ProcessedArtwork[];
}

export function Footer({ currentArtwork, setIndex, allDoodles }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='flex flex-col px-0 py-0 mt-auto text-black text-sm w-full drawing-frame'
      role='contentinfo'
      aria-label='Site information and credits'
    >
      <div className='flex flex-row h-8/12 w-full p-1'>
        <div className='w-1/3 h-full'>
          {/* Image Attribution */}
          <ArtworkAttribution artwork={currentArtwork} />
        </div>
        <div className='w-1/3 h-full p-2'>
          <MyButton img={contrBtnImg}
            onClick={() => window.open('https://github.com/JGEsteves89/doodle-this?tab=readme-ov-file#-contributing', '_blank')}
          />
        </div>
        <div className='w-1/3 h-full p-2'>
          <MyButton img={nextBtnImg}
            onClick={() => setIndex(getRandomArtworkIndex(allDoodles.length))}
          />
        </div>
      </div>
      <div className='flex flex-row h-2/12 w-full justify-center gap-1'>
        <div className='h-full'>© {currentYear} v{packageJson.version}</div>
        <div className='h-full'>
          <a
            href='https://github.com/JGEsteves89/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 hover:text-blue-600'
            aria-label='Visit JGEsteves GitHub profile'
          >
            JGEsteves
          </a>
        </div>
        <div className='flex flex-row h-full'>
          <a href='https://github.com/JGEsteves89/'><FaGithub color='purple' size={20} /></a>
          <a href='https://bsky.app/profile/jgesteves.bsky.social'><FaBluesky color='orange' size={20} /></a>
          <a href='https://mastodon.social/@jgesteves'><FaMastodon color='green' size={20} /></a>
          <a href='https://x.com/jgesteves89'><FaXTwitter color='red' size={20} /></a>
        </div>
      </div>
      <div className='h-1/12' />
    </footer>
  );
}
